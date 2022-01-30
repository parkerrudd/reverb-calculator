const button = document.getElementById('btn'); 
const bpm = document.getElementById('input'); 

//HALL VARIABLES
const hallPreDelay = document.getElementById('hall-pd'); 
const hallDecay = document.getElementById('hall-dt'); 
const hallTotal = document.getElementById('hall-total'); 

//BIG ROOM VARIABLES
const bigRoomTotal = document.getElementById('big-total'); 
const bigRoomDecay = document.getElementById('big-dt'); 
const bigRoomPreDelay = document.getElementById('big-pd'); 

//SMALL ROOM VARIABLES
const smallRoomTotal = document.getElementById('small-total'); 
const smallRoomDecay = document.getElementById('small-dt'); 
const smallRoomPreDelay = document.getElementById('small-pd'); 

//TIGHT AMBIENCE VARIABLES
const tightRoomTotal = document.getElementById('tight-total'); 
const tightRoomDecay = document.getElementById('tight-dt'); 
const tightRoomPreDelay = document.getElementById('tight-pd'); 

//BUTTON CLICK TRIGGERS CALCULATION FUNCTIONS 
button.addEventListener('click', () => {
    hallCalc(); 
    bigRoomCalc(); 
    smallRoomCalc(); 
    tightAmbienceCalc(); 
})

function hallCalc() {
    const hallTotalCalc = 60000 / bpm.value * 8; 
    hallTotal.innerText = `${hallTotalCalc.toFixed(2)} ms`; 
    const hallDelayCalc = hallTotalCalc / 64; 
    hallPreDelay.innerText = `${hallDelayCalc.toFixed(2)} ms`; 
    const hallDecayCalc = hallTotalCalc - hallDelayCalc; 
    hallDecay.innerText = `${hallDecayCalc.toFixed(2)} ms`; 
    
}

function bigRoomCalc() {
    const bigRoomTotalCalc = 60000 / bpm.value * 4;
    bigRoomTotal.innerText = `${bigRoomTotalCalc.toFixed(2)} ms`; 
    const bigRoomPreDelayCalc = bigRoomTotalCalc / 64; 
    bigRoomPreDelay.innerText = `${bigRoomPreDelayCalc.toFixed(2)} ms`; 
    const bigRoomDecayCalc = bigRoomTotalCalc - bigRoomPreDelayCalc; 
    bigRoomDecay.innerText = `${bigRoomDecayCalc.toFixed(2)} ms`; 
}

function smallRoomCalc() {
    const smallRoomTotalCalc = 60000 / bpm.value * 2; 
    smallRoomTotal.innerText = `${smallRoomTotalCalc.toFixed(2)} ms`; 
    const smallRoomPreDelayCalc = smallRoomTotalCalc / 64; 
    smallRoomPreDelay.innerText = `${smallRoomPreDelayCalc.toFixed(2)} ms`; 
    const smallRoomDecayCalc = smallRoomTotalCalc - smallRoomPreDelayCalc; 
    smallRoomDecay.innerText = `${smallRoomDecayCalc.toFixed(2)} ms`; 
}

function tightAmbienceCalc() {
    const tightRoomTotalCalc = 60000 / bpm.value; 
    tightRoomTotal.innerText = `${tightRoomTotalCalc.toFixed(2)} ms`; 
    const tightRoomPreDelayCalc = tightRoomTotalCalc / 128; 
    tightRoomPreDelay.innerText = `${tightRoomPreDelayCalc.toFixed(2)} ms`; 
    const tightRoomDecayCalc = tightRoomTotalCalc - tightRoomPreDelayCalc; 
    tightRoomDecay.innerText = `${tightRoomDecayCalc.toFixed(2)} ms`; 

}