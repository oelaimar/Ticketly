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

    // initials the quantity and the totla price
    document.querySelector(".numOfTikets").textContent = quantity;
    document.querySelector(".Quantity").textContent = quantity;
    document.querySelector(".totalPrice").textContent = quantity * Number(price.textContent);

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
    quantity = 1;
    minQantity = 1;
    maxQantity = Number(seats.textContent);

    ticketElements.querySelector(".ticket-titleOfEvent").innerHTML = title.innerHTML;
    ticketElements.querySelector(".ticket-dateOfEvent").innerHTML = date.innerHTML;
    ticketElements.querySelector(".ticket-locationOfEvent").innerHTML = local.innerHTML;
    ticketElements.querySelector(".ticket-seats").innerHTML = seats.innerHTML;
    document.querySelector(".numOfTikets").textContent = quantity;
    
    for(const element of ticketElements.querySelectorAll(".ticket-price")){
        element.innerHTML = price.innerHTML;
    }

}

const btnMinus = document.getElementById("btnMinus");
const btnPlus = document.getElementById("btnPlus");

const souldBeAdded = document.getElementById("ShouldBeAdded");
const participantLeft = document.getElementById("participantLeft");

let quantity = 1;

let minQantity;
let maxQantity;


btnPlus.addEventListener("click", function(){
    if(quantity < maxQantity){
        quantity++;
        updateQuantity();
    }
});

btnMinus.addEventListener("click", function(){
    if(quantity > minQantity){
        quantity--;
        updateQuantity();
    }
});

function updateQuantity(){
    document.querySelector(".numOfTikets").textContent = quantity;
    document.querySelector(".Quantity").textContent = quantity;
    document.querySelector(".totalPrice").textContent = quantity * Number(price.textContent);

    //add the value on the the participant
    ShouldBeAdded.textContent = quantity;
    participantLeft.textContent = quantity;
}

const form = document.getElementById("ParticipantForm");
const list = document.getElementById("participantAddedContainer");


const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

const nameRegex = /^[a-zA-Z]{2,}$/;
const emailRegax =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/;

const participantAdded = document.getElementById("participantAdded");
const pAdded = document.getElementById("pAdded");
const submitBtn = document.getElementById("submitBtn");

let participantId = 0;

form.addEventListener("submit", function (e){
    e.preventDefault();

    let valid = true;

    if(!nameRegex.test(fname.value)){
        fnameError.textContent = "Invalid First Name";
        valid = false;
    }else{
        fnameError.textContent = "";
    }

    if(!nameRegex.test(lname.value)){
        lnameError.textContent = "Invalid Last Name";
        valid = false;
    }else{
        lnameError.textContent = "";
    }

    if(!emailRegax.test(email.value)){
        emailError.textContent = "Invalid Email";
        valid = false;
    }else{
        emailError.textContent = "";
    }

    if(!phoneRegex.test(phone.value)){
        phoneError.textContent = "Invalid Phone Number";
        valid = false;
    }else{
        phoneError.textContent = "";
    }

    if(!valid) return;


    list.innerHTML += `<div class="participantAdded" id="participant${participantId}">
                                    <div class="participantNum">${participantId+1}</div>
                                    <div class="participantInfoContainer">
                                        <span class="participantInfo fullName">${fname.value} ${lname.value}</span>
                                        <span class="participantInfo">${email.value}</span>
                                        <span class="participantInfo">${phone.value}</span>
                                    </div>
                                    <div id="deleteParticipant${participantId}" class="deleteParticipant"><img src="./sources/images/icones/icones/trash.svg" alt=""></div>
                            </div>`;
    participantId++;
    participantAdded.textContent = participantId;
    pAdded.textContent = participantId;
    participantLeft.textContent -= 1;
   
    if(participantId === quantity){
        document.querySelector(".participantNeeded").style.display = "none";
        submitBtn.setAttribute("disabled","");
        submitBtn.style.backgroundColor = "#D1D5DB"
    }

    form.reset()
});


