(function () {
    // console.log("Hi"); 
    let fid = -1;
    let cfid = -1;//id of the folder in which we are
    let btnAddFolder = document.querySelector(".myBtn.myFolder");
    let btnAddFile = document.querySelector(".myBtn.myFile");
    //to retrive div with id container
    let folderContainer = document.querySelector("#folderContainer");
    //retireving bredcrumb
    let divBreadCrumb = document.querySelector("#divBreadCrumb");
    let pageTemplates = document.querySelector("#pageTemplate");
    let aRootPath = document.querySelector(".path");
    //Now we want to save folders, so that they don't get vanishied when we delete them.
    //so for that we make an empty array.
    let folders = [];

    btnAddFolder.addEventListener("click", addFolder);
    btnAddFile.addEventListener("click", addTextFile);
    aRootPath.addEventListener("click", navigateBreadCrumb);//root folder per addeventlistere attach karna,
    //kyuki bakiyo me apne aap ho jayenge, view karte waqt.

    function navigateBreadCrumb() {
        let fName = this.innerHTML;
        cfid = parseInt(this.getAttribute("folderId"));
        // alert(fName + "->" + cfid);
        folderContainer.innerHTML = "";
        folders.filter(f => f.pid == cfid).forEach(f => {
            addFolderInPage(f.name, f.id, f.pid);
        });

        //deleting the ahead breadcrumbs
        //matlab jis bredcrumb ko click kiya hai jab tak uske next sibling hai tab tak delete
        //karte raho.
        while (this.nextSibling) {
            this.parentNode.removeChild(this.nextSibling);
        }
    }

    function addFolder() {
        // divContainer.style.border = "2px solid red"; to check
        let fName = prompt("Enter a folder's name...");
        if (!!fName) {
            let fidx = folders.filter(f => f.pid == cfid).some(f => f.name == fName);
            if (fidx == false) { //that means folder of that name is not exist
                ++fid;
                //RAM
                folders.push({
                    id: fid,
                    pid: cfid,
                    name: fName
                });
                console.log(folders);

                //HTML
                addFolderInPage(fName, fid, cfid);

                //LocalStorage
                persistFoldersToStorage();
            } else {
                alert(fName + " already exists!");
            }
        } else {
            alert("Please enter something..")
        }
    }

    function addTextFile() {
        let tfName = prompt("Enter text file's name..");
        alert("Text file is " + tfName);
    }

    function addFolderInPage(fName, fid, pid) { //add html of one folder only
        let divFolderOfTemplate = pageTemplates.content.querySelector(".folder");
        // console.log(divFolderOfTemplate);
        //cloning the div element of template, and making its deep copy. i.e even copying its innerHTML content
        let divFolder = document.importNode(divFolderOfTemplate, true);
        //divFolder is exact copy of divFolderOfTemplate
        //also to get element nested element
        //deep copy

        let divName = divFolder.querySelector("[purpose = 'name']");
        divName.innerHTML = fName;
        //innerHTML = under ka item between opening and closing tag
        // console.log(divFolder);
        divFolder.setAttribute("folderId", fid);
        divFolder.setAttribute("parentId", pid);

        let spanDelete = divFolder.querySelector("span[action ='delete']");
        spanDelete.addEventListener("click", deleteFolder);

        let spanRename = divFolder.querySelector("span[action ='rename']");
        spanRename.addEventListener("click", renameFolder);

        let spanView = divFolder.querySelector("span[action = 'view']");
        spanView.addEventListener("click", viewFolder);

        //adding folders to folders array
        folderContainer.appendChild(divFolder);
    }

    function viewFolder() {
        let divFolder = this.parentNode;
        console.log(divFolder);
        let divName = divFolder.querySelector("[purpose = 'name']");
        cfid = parseInt(divFolder.getAttribute("folderId"));

        //addingBreadCrumb
        let aPathTemplate = pageTemplates.content.querySelector(".path");
        let aPath = document.importNode(aPathTemplate, true);
        aPath.innerHTML = divName.innerHTML; //setting name of bredcrumb as the viewed folder
        aPath.setAttribute("folderId", cfid);
        aPath.addEventListener("click", navigateBreadCrumb);
        divBreadCrumb.appendChild(aPath);

        //now emptying the content of folder container, and adding folders whose parent is 
        //the viewed folder.
        folderContainer.innerHTML = "";
        folders.filter(f => f.pid == cfid).forEach(f => {
            addFolderInPage(f.name, f.id, f.pid);
        });
    }

    function viewTextFile() {

    }

    function renameFolder() {
        let divFolder = this.parentElement; //jiske uper click hua hai wo this se milta hai
        let divName = divFolder.querySelector("[purpose = 'name']");

        let nfName = prompt("Enter a new name for " + divName.innerHTML);
        let ofName = divName.innerHTML; //old foldername
        if (!!nfName) { //step1 -> new folder name is not empty or null.
            if (nfName != ofName) { //step2 -> new folder name is not equal to old folder name.
                let exists = folders.filter(f => f.pid == cfid).some(f => f.name == nfName);
                if (exists == false) { //step3 -> new folder name is should not equal to exists folder name.
                    //change in RAM
                    let folder = folders.filter(f => f.pid == cfid).find(f => f.name == ofName);
                    folder.name = nfName
                    console.log(folders);

                    //update in HTML
                    divName.innerHTML = nfName;

                    //save to LocalStorage
                    persistFoldersToStorage();
                } else {
                    alert(nfName + " already exists!");
                }
            } else {
                alert("This is old name only. Please enter something new!");
            }
        } else {
            alert("Please enter something..")
        }
    }

    function renameTextFile() {

    }

    function deleteFolder() {
        let divFolder = this.parentElement; //jiske uper click hua hai wo this se milta hai
        let divName = divFolder.querySelector("[purpose = 'name']");
        let flag = confirm(" Do you want to delete the folder " + divName.innerHTML + "?");
        let fidTBD = parseInt(divFolder.getAttribute("folderId"));
        if (flag) {
            let exists = folders.some(f => f.pid == fidTBD);
            if (!exists) {
                //Remove from HTML
                folderContainer.removeChild(divFolder);

                //this is for folders array(updation) //RAM
                let idx = folders.findIndex(f => f.id == fidTBD);
                folders.splice(idx, 1);
                console.log(folders);

                //Update LocalStorage
                persistFoldersToStorage();
            } else {
                alert("Can't delete, have childrens!");
            }
        }
    }

    function deleteTextFile() {

    }

    function persistFoldersToStorage() {
        let fjson = JSON.stringify(folders);//folders array ko JSON me convert kar raha
        localStorage.setItem("foldersData", fjson);
    }

    function loadFoldersFromStorage() {
        //load in the begining
        let fjson = localStorage.getItem("foldersData"); //come as string
        if (!!fjson) { //if there is content in localStorage then perform following task
            folders = JSON.parse(fjson);//convert json to array
            let maxId = -1;
            folders.forEach(function (f) {
                if (f.id > maxId) {
                    maxId = f.id;
                }
                if (f.pid == cfid) { //jin folder ki id cfid ke equal hai kebal bahi dikhayi de
                    addFolderInPage(f.name, f.id);
                }
            });
            fid = maxId;
        }
    }

    loadFoldersFromStorage(); //so that folders can auto populate in page, just after loading
})();
//to prevent namespace pollution