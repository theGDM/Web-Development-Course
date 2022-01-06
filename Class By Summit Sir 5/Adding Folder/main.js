(function () {
    // console.log("Hi"); 
    let btn = document.querySelector("#myBtn");
    //to retrive div with id container
    let divContainer = document.querySelector("#folderContainer");
    let pageTemplates = document.querySelector("#pageTemplate");

    btn.addEventListener("click", function () {
        // divContainer.style.border = "2px solid red"; to check
        let fName = prompt("Enter a folder's name...");
        if (!fName.trim().length) {
            return;
        }
        // alert(fName);
        let divFolderOfTemplate = pageTemplates.content.querySelector(".folder");
        // console.log(divFolderOfTemplate);
        //cloning the div element of template, and making its deep copy. i.e even copying its innerHTML content
        let divFolder = document.importNode(divFolderOfTemplate, true);
        //divFolder is exact copy of divFolderOfTemplate
        //also to get element nested element

        let divName = divFolder.querySelector("[purpose = 'name']");
        divName.innerHTML = fName;
        //innerHTML = under ka item between opening and closing tag
        // console.log(divFolder);

        divContainer.appendChild(divFolder);
    })
})();