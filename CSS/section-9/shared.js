let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");

let selectPlanButton = document.querySelectorAll(".plan button");
let noButton = document.querySelector(".modal .modal__action--negative")

console.dir(noButton);
// backdrop.style.display = "block";

for(let i=0; i < selectPlanButton.length; i++){

    selectPlanButton[i].addEventListener("click",function(){
        modal.style.display = "block";
        backdrop.style.display = "block";
    })
}



noButton.addEventListener("click", function(){
    modal.style.display = "none";
    backdrop.style.display = "none";
})

backdrop.addEventListener("click", function(){
    modal.style.display = "none";
    backdrop.style.display = "none";
})