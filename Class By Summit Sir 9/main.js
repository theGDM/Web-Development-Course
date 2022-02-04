(function () {
    let cfid = -1 //initially we are at root(which has an id of -1)(folder at which we are right now)
    let rid = -1;
    let btnAddFolder = document.querySelector(".addFolder");
    let btnAddTextFile = document.querySelector(".addTextFile");
    let divBreadCrumb = document.querySelector("#breadcrumb");
    let rooPath = divBreadCrumb.querySelector("#breadcrumb [purpose='path']")
    let divContainer = document.querySelector("#container");
    let templates = document.querySelector("#templates");
    let resources = [];

    btnAddFolder.addEventListener("click", addFolder);
    btnAddTextFile.addEventListener("click", addTextFile);
    rooPath.addEventListener("click", vieFolderFromPath);

    function addFolder() {
        let rname = prompt("Enter folder's name..");
        if (rname != null) {
            rname = rname.trim();
        }

        if (!rname) { //empty name validation
            alert("Please enter folder's name..");
            return;
        }

        //uniqueness validation
        let alreadyExists = resources.some(r => r.rname == rname && r.pid == cfid);
        if (alreadyExists) {//same name folder validation
            alert(rname + " is already in use. Try some other name..");
            return;
        }

        ++rid;
        //html
        addFolderHtml(rname, rid, cfid);

        //ram
        resources.push({
            pid: cfid,
            rid: rid,
            rname: rname,
            rtype: "folder"
        })

        //storage
        saveToStorage();
    }

    function addFolderHtml(rname, rid, pid) {
        let divFolderOfTemplate = templates.content.querySelector(".folder");
        //cloning the div element of template, and making its deep copy. i.e even copying its innerHTML content
        let divFolder = document.importNode(divFolderOfTemplate, true);
        let divName = divFolder.querySelector("[purpose = 'name']");
        //setting name of folder
        divName.innerHTML = rname;
        //setting attributes
        divFolder.setAttribute("rid", rid);
        divFolder.setAttribute("pid", pid);

        let spanView = divFolder.querySelector("span[action = 'view']");
        let spanRename = divFolder.querySelector("span[action ='rename']");
        let spanDelete = divFolder.querySelector("span[action ='delete']");

        //attaching addlistener to view, rename, and delete buttons
        spanView.addEventListener("click", viewFolder);
        spanRename.addEventListener("click", renameFolder);
        spanDelete.addEventListener("click", deleteFolder);

        //adding folders to folders array
        container.appendChild(divFolder);

    }

    function addTextFile() {
        let rname = prompt("Enter text-file's name..");
        if (rname != null) {
            rname = rname.trim();
        }

        if (!rname) { //empty name validation
            alert("Please enter text-file's name..");
            return;
        }

        //uniqueness validation
        let alreadyExists = resources.some(r => r.rname == rname && r.pid == cfid);
        if (alreadyExists) {//same name folder validation
            alert(rname + " is already in use. Try some other name..");
            return;
        }

        ++rid;
        //html
        addTextFileHtml(rname, rid, cfid);

        //ram
        resources.push({
            pid: cfid,
            rid: rid,
            rname: rname,
            rtype: "text-file"
        })

        //storage
        saveToStorage();
    }

    function addTextFileHtml(rname, rid, pid) {
        let divTextFileOfTemplate = templates.content.querySelector(".text-file");
        //cloning the div element of template, and making its deep copy. i.e even copying its innerHTML content
        let divTextFile = document.importNode(divTextFileOfTemplate, true);
        let divName = divTextFile.querySelector("[purpose = 'name']");
        //setting name of folder
        divName.innerHTML = rname;
        //setting attributes
        divTextFile.setAttribute("rid", rid);
        divTextFile.setAttribute("pid", pid);

        let spanView = divTextFile.querySelector("span[action = 'view']");
        let spanRename = divTextFile.querySelector("span[action ='rename']");
        let spanDelete = divTextFile.querySelector("span[action ='delete']");

        //attaching addlistener to view, rename, and delete buttons
        spanView.addEventListener("click", viewTextFile);
        spanRename.addEventListener("click", renameTextFile);
        spanDelete.addEventListener("click", deleteTextFile);

        //adding folders to folders array
        container.appendChild(divTextFile);
    }

    function vieFolderFromPath() {
        let aPath = this;
        let fid = parseInt(aPath.getAttribute("rid"));

        //set the bredcrumb
        while (aPath.nextSibling) {
            divBreadCrumb.removeChild(aPath.nextSibling);
        }

        //set the container
        cfid = fid;//now the viewed/clicked folder will become the current folder, cfid will become its rid;
        divContainer.innerHTML = "";//emptying the divcontainer, and refilling it with inner folders
        for (let i = 0; i < resources.length; ++i) {
            if (resources[i].pid == cfid) {
                if (resources[i].rtype == "folder") {
                    addFolderHtml(resources[i].rname, resources[i].rid, resources[i].pid);
                } else if (resources[i].rtype == "text-file") {
                    addTextFileHtml(resources[i].rname, resources[i].rid, resources[i].pid);
                }
            }
        }
    }

    function viewFolder() {
        let spanView = this;
        let divFolder = spanView.parentNode;
        let divName = divFolder.querySelector("[purpose = 'name']");
        let fname = divName.innerHTML;
        let fid = parseInt(divFolder.getAttribute("rid"));

        let aPathTemplate = templates.content.querySelector("a[purpose = 'path']");
        let aPath = document.importNode(aPathTemplate, true);

        aPath.innerHTML = fname;
        aPath.setAttribute("rid", fid);
        aPath.addEventListener("click", vieFolderFromPath);

        divBreadCrumb.appendChild(aPath);
        cfid = fid;//now the viewed/clicked folder will become the current folder, cfid will become its rid;

        divContainer.innerHTML = "";//emptying the divcontainer, and refilling it with inner folders
        for (let i = 0; i < resources.length; ++i) {
            if (resources[i].pid == cfid) {
                if (resources[i].rtype == "folder") {
                    addFolderHtml(resources[i].rname, resources[i].rid, resources[i].pid);
                } else if (resources[i].rtype == "text-file") {
                    addTextFileHtml(resources[i].rname, resources[i].rid, resources[i].pid);
                }
            }
        }
    }

    function viewTextFile() {

    }

    function renameFolder() {
        //empty, old, unique
        let nrname = prompt("Enter folder's name..");
        if (nrname != null) {
            nrname = nrname.trim();
        }

        if (!nrname) { //empty name validation
            alert("Please enter folder name..");
            return;
        }

        let spanRename = this;
        let divFolder = spanRename.parentNode;
        let divName = divFolder.querySelector("[purpose = 'name']");
        let orname = divName.innerHTML;
        let ridToBeUpdated = parseInt(divFolder.getAttribute("rid"));
        //same as old folder name validation
        if (nrname == orname) {
            alert("Please enter new name..");
            return;
        }

        //uniqueness validation
        let alreadyExists = resources.some(r => r.rname == nrname && r.pid == cfid);
        if (alreadyExists) {
            alert("Folder with name " + nrname + " already exists!");
            return;
        }

        //change html
        divName.innerHTML = nrname;
        //change ram
        let resource = resources.find(r => r.rid == ridToBeUpdated);
        resource.rname = nrname;
        //change storage
        saveToStorage();

    }

    function renameTextFile() {

    }

    function deleteFolder() {
        //delete folder recursively
        let spanDelete = this;
        let divFolder = spanDelete.parentNode;
        let divName = divFolder.querySelector("[purpose = 'name']");
        let fidTBD = parseInt(divFolder.getAttribute("rid"));
        let fname = divName.innerHTML;

        let childrenExists = resources.some(f => f.pid == fidTBD);
        let sure = confirm(`Are you sure you want to delete ${fname} ?` + (childrenExists ? `. It also has children.` : ""));
        if (!sure) {
            return;
        }

        //html
        divContainer.removeChild(divFolder);

        //ram
        deleteHelper(fidTBD);

        //storage
        saveToStorage();
    }

    function deleteHelper(fidTBD) {
        let children = resources.filter(r => r.pid == fidTBD);
        for (let i = 0; i < children.length; ++i) {
            deleteHelper(children[i].rid); //this is capable of deleting children and their children recursively
        }

        let ridx = resources.findIndex(r => r.rid == fidTBD);
        console.log(resources[ridx].rname);
        resources.splice(ridx, 1);
    }

    function deleteTextFile() {

    }

    function saveToStorage() {
        //array cannot be stored in local tsorage, so we need to convert it in json
        let rjson = JSON.stringify(resources);//used to convert Js object into string which can be saved
        localStorage.setItem("data", rjson);
    }

    function loadFromStorage() {
        let rjson = localStorage.getItem("data");
        if (!!rjson) {
            //it should be inside this only, otherwise null will get stored in resources 
            resources = JSON.parse(rjson);//back to object from JSON
            for (let i = 0; i < resources.length; ++i) {
                if (resources[i].pid == cfid) {
                    if (resources[i].rtype == "folder") {
                        addFolderHtml(resources[i].rname, resources[i].rid, resources[i].pid);
                    } else if (resources[i].rtype == "text-file") {
                        addTextFileHtml(resources[i].rname, resources[i].rid, resources[i].pid);
                    }
                }

                if (resources[i].rid > rid) {
                    rid = resources[i].rid;
                }
            }
        }
    }
    loadFromStorage();

})();
//to prevent namespace pollution