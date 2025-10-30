const navIconesImages = document.getElementsByClassName("icone-img");
const navBar = document.getElementsByClassName("bar-navigation");
const sections = document.getElementsByClassName("sections");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const allEvent = document.querySelectorAll(".event");
const ticketElements = document.querySelector(".ticketContainer");


let currentStep = 1;


// condition select event first to click next btn
function selectEventCheck(){
    for(const element of allEvent){
        if(element.classList.contains("eventActive")){
            return true;
        }
    }
    return false;
}

// 2 functions for updating the step and it will do an update
nextBtn.addEventListener('click', function(){
    if(currentStep < 4 && selectEventCheck()){
        currentStep ++;
        updateSteps(currentStep);
    }
});

backBtn.addEventListener('click',function(){
    if(currentStep > 1){
        currentStep --;
        updateSteps(currentStep);
    }
});

//function to updateSteps for the icones and bar and the display of the sections
function updateSteps(step){
    for(const navIcone of navIconesImages){
        navIcone.src = navIcone.src.replace(/step\d+/, `step${step}`);
    }
    for(let i=0; i<3; i++){
        navBar[i].style.backgroundColor = "#b4b4b4";
    }
    for(let i=0; i<step-1; i++){
        navBar[i].style.backgroundColor = "#000000";
    }
    for(const section of sections){
        section.classList.remove("sActive");
        section.classList.add("sInactive");
    }
    sections[step-1].classList.remove("sInactive");
    sections[step-1].classList.add("sActive");

    // hide the back/next btn in the step 1 and 4
    if(currentStep === 4){
        nextBtn.classList.add("inactiveBtn");
        nextBtn.classList.remove("activeBtn");
    }else{
        nextBtn.classList.add("activeBtn");
        nextBtn.classList.remove("inactiveBtn");
    }

    if(currentStep === 1){
        backBtn.classList.add("inactiveBtn");
        backBtn.classList.remove("activeBtn");
    }else{
        backBtn.classList.add("activeBtn");
        backBtn.classList.remove("inactiveBtn");
    }
}

for(const events of allEvent){
    events.addEventListener("click", change);
}

// varibales of the data

let title;
let date;
let local;
let price;
let seats;

function change(event){

    for(const element of allEvent){
        element.classList.add("evantInactive");
        element.classList.remove("eventActive");

        // turn all btn to normal stat
        element.querySelector(".bookBtn").style.backgroundColor = "white";
        element.querySelector(".bookBtn").style.color = "black";
        element.querySelector(".bookBtn").textContent = "Book Now";

    }

    
    event.currentTarget.classList.add("eventActive");
    event.currentTarget.classList.remove("evantInactive");

    // create the query after it give the select one the class
    const dataOfElement = document.querySelector(".eventActive");
    
    // turn the book btn to black and change the textContent
    dataOfElement.querySelector(".bookBtn").style.backgroundColor = "black";
    dataOfElement.querySelector(".bookBtn").style.color = "white";
    dataOfElement.querySelector(".bookBtn").textContent = "Selected";

    // store the data of an event selected
    title = dataOfElement.querySelector(".titleOfEvent");
    date = dataOfElement.querySelector(".dateOfEvent");
    local = dataOfElement.querySelector(".locationOfEvent");
    price = dataOfElement.querySelector(".price");
    seats = dataOfElement.querySelector(".seats");

    ticketElements.querySelector(".ticket-titleOfEvent").innerHTML = title.innerHTML;
    ticketElements.querySelector(".ticket-dateOfEvent").innerHTML = date.innerHTML;
    ticketElements.querySelector(".ticket-locationOfEvent").innerHTML = local.innerHTML;
    ticketElements.querySelector(".ticket-price").innerHTML = price.innerHTML;
    ticketElements.querySelector(".ticket-seats").innerHTML = seats.innerHTML;


}



  
