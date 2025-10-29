const navIconesImages = document.getElementsByClassName("icone-img");
const navBar = document.getElementsByClassName("bar-navigation");
const sections = document.getElementsByClassName("sections");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");


let currentStep = 1;

// 2 functions for updating the step and it will do an update
nextBtn.addEventListener('click', function(){
    if(currentStep < 4){
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

    // hide the back/next btn ing the step 1 and 4
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