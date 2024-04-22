let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");

let selectPlanButton = document.querySelectorAll(".plan button");
let noButton = document.querySelector(".modal .modal__action--negative")

let toggleButton = document.querySelector(".toggle-button");
let hamBurger = document.querySelector(".mobile-nav");




// console.dir(backdrop);
// backdrop.style.display = "block";

for(let i=0; i < selectPlanButton.length; i++){

    selectPlanButton[i].addEventListener("click",function(){
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        // modal.className = "open"; this is will overwrite the complete class

        modal.classList.add("open");
        backdrop.classList.add("open");

    })
}

backdrop.addEventListener("click",()=>{
    hamBurger.classList.remove("open");
    closeModal();
});

if(noButton){
    noButton.addEventListener("click",closeModal);
}



function closeModal(){
    // modal.style.display = "none";
    // backdrop.style.display = "none";
   if(modal){
    modal.classList.remove('open');
   }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener("click",function(){
    hamBurger.classList.add("open");
    backdrop.classList.add('open');
})