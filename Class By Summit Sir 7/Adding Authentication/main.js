(function () {
    // console.log("Hi"); 
    let fid = 0;
    let btn = document.querySelector("#myBtn");
    //to retrive div with id container
    let folderContainer = document.querySelector("#folderContainer");
    let pageTemplates = document.querySelector("#pageTemplate");
    //Now we want to save folders, so that they don't get vanishied when we delete them.
    //so for that we make an empty array.
    let folders = [];

    btn.addEventListener("click", addFolder);

    function addFolder() {
        // divContainer.style.border = "2px solid red"; to check
        let fName = prompt("Enter a folder's name...");
        if (!!fName) {
            let fidx = folders.some(f => f.name == fName);
            if (fidx == false) { //that means folder of that name is not exist
                ++fid;
                //HTML
                addFolderInPage(fName, fid);

                //RAM
                folders.push({
                    id: fid,
                    name: fName
                });
                console.log(folders);

                //LocalStorage
                persistFoldersToStorage();
            } else {
                alert(fName + " already exists!");
            }
        } else {
            alert("Please enter something..")
        }
    }

    function addFolderInPage(fName, fid) { //add html of one folder only
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

        let spanDelete = divFolder.querySelector("span[action ='delete']");
        spanDelete.addEventListener("click", deleteFolder);

        let spanEdit = divFolder.querySelector("span[action ='edit']");
        spanEdit.addEventListener("click", editFolder);

        //adding folders to folders array
        folderContainer.appendChild(divFolder);
    }

    function editFolder() {
        let divFolder = this.parentElement; //jiske uper click hua hai wo this se milta hai
        let divName = divFolder.querySelector("[purpose = 'name']");

        let nfName = prompt("Enter a new name for " + divName.innerHTML);
        let ofName = divName.innerHTML; //old foldername
        if (!!nfName) { //step1 -> new folder name is not empty or null.
            if (nfName != ofName) { //step2 -> new folder name is not equal to old folder name.
                let exists = folders.some(f => f.name == nfName);
                if (exists == false) { //step3 -> new folder name is should not equal to exists folder name.
                    //change in RAM
                    let folder = folders.find(f => f.name == ofName);
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

    function deleteFolder() {
        let divFolder = this.parentElement; //jiske uper click hua hai wo this se milta hai
        let divName = divFolder.querySelector("[purpose = 'name']");
        let flag = confirm(" Do you want to delete the folder " + divName.innerHTML + "?");

        if (flag) {
            //Remove from HTML
            folderContainer.removeChild(divFolder);
            //this is for folders array(updation) //RAM
            let idx = folders.findIndex(f => f.id == parseInt(divFolder.getAttribute("folderId")));
            folders.splice(idx, 1);
            console.log(folders);
        }
        //Update LocalStorage
        persistFoldersToStorage();
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
                addFolderInPage(f.name, f.id);
                if (f.id > maxId) {
                    maxId = f.id;
                }
            });
            fid = maxId;
        }
    }

    loadFoldersFromStorage(); //so that folders can auto populate in page, just after loading
})();
