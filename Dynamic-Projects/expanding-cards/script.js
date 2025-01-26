const panels = document.querySelectorAll(".panel");

for(let i=0;i<panels.length;i++){

    //Adding event listener to each panel
    panels[i].addEventListener("click", function(){

        removeActiveClasses();              //First remove active class from each panel
        panels[i].classList.add("active");  //Now add the active class to the target panel
    });
}

function removeActiveClasses(){
    for(let i=0;i<panels.length;i++){
        panels[i].classList.remove("active");
    }
}