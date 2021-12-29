'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btn = document.querySelectorAll(".show-modal");

//function to openModal
const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

//function to close modal
const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

//adding eventListener to modal buttons
for(let i = 0;i < btn.length; i++){
    btn[i].addEventListener("click",openModal);
}

//adding  eventListener for close button
btnCloseModal.addEventListener("click", closeModal);

//adding eventListener for overlay area
overlay.addEventListener("click",closeModal);

//adding eventListener for escape key to close the modal
document.addEventListener("keydown",function(e){
    console.log(e);
    if(e.key === "Escape" )
    {
        if(!modal.classList.contains("hidden"))
            closeModal();
    }
});