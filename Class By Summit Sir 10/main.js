(function () {
    let cfid = -1 //initially we are at root(which has an id of -1)(folder at which we are right now)
    let rid = -1;
    let btnAddFolder = document.querySelector(".addFolder");
    let btnAddTextFile = document.querySelector(".addTextFile");
    let divBreadCrumb = document.querySelector("#breadcrumb");
    let rooPath = divBreadCrumb.querySelector("#breadcrumb [purpose='path']")
    let divContainer = document.querySelector("#container");
    let templates = document.querySelector("#templates");
    let divApp = document.querySelector("#app");
    let divAppTitleBar = document.querySelector(".app-title-bar");
    let divAppTitle = document.querySelector(".app-title");
    let divAppMenuBar = document.querySelector(".app-menu-bar");
    let divAppBody = document.querySelector(".app-body");
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
        let alreadyExists = resources.some(r => r.rname == rname && r.pid == cfid && r.rtype == "folder");
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
        let alreadyExists = resources.some(r => r.rname == rname && r.pid == cfid && r.rtype == "text-file");
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
            rtype: "text-file",
            isBold: false,
            isItalic: false,
            isUnderline: false,
            textColor: "#000000",
            bgColor: "#ffffff",
            fontFamily: "monospace",
            fontSize: "16px",
            content: "Write something!"
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
        let spanView = this;
        let divTextFile = spanView.parentNode;
        let divName = divTextFile.querySelector("[purpose='name']");
        let tfname = divName.innerHTML;
        let tfid = parseInt(divTextFile.getAttribute("rid"));

        let divNotepadMenuTemplate = templates.content.querySelector("[purpose='notepad-menu']");
        let divNotepadMenu = document.importNode(divNotepadMenuTemplate, true);
        divAppMenuBar.innerHTML = "";
        divAppMenuBar.appendChild(divNotepadMenu);

        let divNotepadBodyTemplate = templates.content.querySelector("[purpose='notepad-body']");
        let divNotepadBody = document.importNode(divNotepadBodyTemplate, true);
        divAppBody.innerHTML = "";
        divAppBody.appendChild(divNotepadBody);
        divAppTitle.innerHTML = tfname;
        divAppTitle.setAttribute("rid", tfid);

        let spanSave = divAppMenuBar.querySelector("[action='save']");
        let spanBold = divAppMenuBar.querySelector("[action='bold']");
        let spanItalic = divAppMenuBar.querySelector("[action='italic']");
        let spanUnderline = divAppMenuBar.querySelector("[action='underline']");
        let inputBGColor = divAppMenuBar.querySelector("[action='bg-color']");
        let inputTextColor = divAppMenuBar.querySelector("[action='fg-color']");
        let selectFontFamily = divAppMenuBar.querySelector("[action='font-family']");
        let selectFontSize = divAppMenuBar.querySelector("[action='font-size']");

        spanSave.addEventListener("click", saveNotepad);
        spanBold.addEventListener("click", makeNotepadBold);
        spanItalic.addEventListener("click", makeNotepadItalic);
        spanUnderline.addEventListener("click", makeNotepadUnderline);
        inputBGColor.addEventListener("change", changeNotepadBGColor);
        inputTextColor.addEventListener("change", changeNotepadTextColor);
        selectFontFamily.addEventListener("change", changeNotepadFontFamily);
        selectFontSize.addEventListener("change", changeNotePadFontSize);
        let textArea = divAppBody.querySelector("textarea");

        let resource = resources.find(r => r.rid == tfid);
        spanBold.setAttribute("pressed", !resource.isBold);
        spanItalic.setAttribute("pressed", !resource.isItalic);
        spanUnderline.setAttribute("pressed", !resource.isUnderline);
        inputBGColor.value = resource.bgColor;
        inputTextColor.value = resource.textColor;
        selectFontFamily.value = resource.fontFamily;
        selectFontSize.value = resource.fontSize;
        textArea.value = resource.content;

        spanBold.dispatchEvent(new Event("click"));
        spanItalic.dispatchEvent(new Event("click"));
        spanUnderline.dispatchEvent(new Event("click"));
        inputBGColor.dispatchEvent(new Event("change"));
        inputTextColor.dispatchEvent(new Event("change"));
        selectFontFamily.dispatchEvent(new Event("change"));
        selectFontSize.dispatchEvent(new Event("change"));
        textArea.dispatchEvent(new Event("change"));
    }

    function saveNotepad() {
        let tfid = parseInt(divAppTitle.getAttribute("rid"));
        let resource = resources.find(r => r.rid == tfid);

        let spanBold = divAppMenuBar.querySelector("[action='bold']");
        let spanItalic = divAppMenuBar.querySelector("[action='italic']");
        let spanUnderline = divAppMenuBar.querySelector("[action='underline']");
        let inputBGColor = divAppMenuBar.querySelector("[action='bg-color']");
        let inputTextColor = divAppMenuBar.querySelector("[action='fg-color']");
        let selectFontFamily = divAppMenuBar.querySelector("[action='font-family']");
        let selectFontSize = divAppMenuBar.querySelector("[action='font-size']");
        let textArea = divAppBody.querySelector("textarea");

        resource.isBold = spanBold.getAttribute("pressed") == "true";
        resource.isItalic = spanItalic.getAttribute("pressed") == "true";
        resource.isUnderline = spanUnderline.getAttribute("pressed") == "true";
        resource.bgColor = inputBGColor.value;
        resource.textColor = inputTextColor.value;
        resource.fontFamily = selectFontFamily.value;
        resource.fontSize = selectFontSize.value;
        resource.content = textArea.value;
        saveToStorage();
    }

    function makeNotepadBold() {
        let textArea = divAppBody.querySelector("textarea");
        let isPressed = this.getAttribute("pressed") == "true";
        if (!isPressed) {
            this.setAttribute("pressed", true);
            textArea.style.fontWeight = "bold";
        } else {
            this.setAttribute("pressed", false);
            textArea.style.fontWeight = "normal";
        }
    }

    function makeNotepadItalic() {
        let textArea = divAppBody.querySelector("textarea");
        let isPressed = this.getAttribute("pressed") == "true";
        if (!isPressed) {
            this.setAttribute("pressed", true);
            textArea.style.fontStyle = "italic";
        } else {
            this.setAttribute("pressed", false);
            textArea.style.fontStyle = "normal";
        }
    }

    function makeNotepadUnderline() {
        let textArea = divAppBody.querySelector("textarea");
        let isPressed = this.getAttribute("pressed") == "true";
        if (!isPressed) {
            this.setAttribute("pressed", true);
            textArea.style.textDecoration = "underline";
        } else {
            this.setAttribute("pressed", false);
            textArea.style.textDecoration = "none";
        }
    }

    function changeNotepadBGColor() {
        let color = this.value;
        let textArea = divAppBody.querySelector("textarea");
        textArea.style.backgroundColor = color;
    }

    function changeNotepadTextColor() {
        let color = this.value;
        let textArea = divAppBody.querySelector("textarea");
        textArea.style.color = color;
    }

    function changeNotepadFontFamily() {
        let fontFamily = this.value;
        let textArea = divAppBody.querySelector("textarea");
        textArea.style.fontFamily = fontFamily;
    }

    function changeNotePadFontSize() {
        let fontSize = this.value;
        let textArea = divAppBody.querySelector("textarea");
        textArea.style.fontSize = fontSize;
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
        //empty, old, unique
        let nrname = prompt("Enter text-file's name..");
        if (nrname != null) {
            nrname = nrname.trim();
        }

        if (!nrname) { //empty name validation
            alert("Empty name is not allowed!");
            return;
        }

        let spanRename = this;
        let divTextFile = spanRename.parentNode;
        let divName = divTextFile.querySelector("[purpose = 'name']");
        let orname = divName.innerHTML;
        let ridToBeUpdated = parseInt(divTextFile.getAttribute("rid"));
        //same as old folder name validation
        if (nrname == orname) {
            alert("Please enter new name..");
            return;
        }

        //uniqueness validation
        let alreadyExists = resources.some(r => r.rname == nrname && r.pid == cfid);
        if (alreadyExists) {
            alert("Text-file with name " + nrname + " already exists!");
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
        let spanDelete = this;
        let divTextFile = spanDelete.parentNode;
        let divName = divTextFile.querySelector("[purpose = 'name']");
        let tfIdTBD = parseInt(divTextFile.getAttribute("rid"));
        let tfname = divName.innerHTML;

        let sure = confirm(`Are you sure you want to delete ${tfname}?`);
        if (!sure) {
            return;
        }

        //html
        divContainer.removeChild(divTextFile);

        //ram
        let ridx = resources.findIndex(r => r.rid == tfIdTBD);
        resources.splice(ridx, 1);

        //storage
        saveToStorage();
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