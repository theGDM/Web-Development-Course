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
        if (!fName.trim().length) {
            return;
        }
        // alert(fName);

        ++fid;
        addFolderInPage(fName, fid);

        folders.push({
            id: fid,
            name: fName
        });

        console.log(folders);
        persistFoldersToStorage();
    }

    function addFolderInPage(fName, fid) {
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

        //now we don't have divName and divFolder
        let fName = prompt("Enter new name of the folder..");
        if (fName == null || !fName.length) {
            return;
        }

        divName.innerHTML = fName;

        //this is for folders array(updation)
        let folder = folders.find(f => f.id == parseInt(divFolder.getAttribute("folderId"))); //it will give entire folder object which is added to folders array
        folder.name = fName;
        console.log(folders);
        persistFoldersToStorage();
    }

    function deleteFolder() {
        let divFolder = this.parentElement; //jiske uper click hua hai wo this se milta hai
        let divName = divFolder.querySelector("[purpose = 'name']");
        let flag = confirm(" Do you want to delete the folder " + divName.innerHTML + "?");

        if (flag) {
            folderContainer.removeChild(divFolder);
            //this is for folders array(updation)
            let idx = folders.findIndex(f => f.id == parseInt(divFolder.getAttribute("folderId")));
            folders.splice(idx, 1);
            console.log(folders);
        }
        persistFoldersToStorage();
    }

    function persistFoldersToStorage() {
        let fjson = JSON.stringify(folders);//folders array ko JSON me convert kar raha
        localStorage.setItem("foldersData", fjson);
    }

    function loadFoldersFromStorage() {
        //load in the begining
        let fjson = localStorage.getItem("foldersData");
        if (fjson != null && fjson.length > 0) {
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

    loadFoldersFromStorage();
})();
