//tecnica 5

let lamp1 = { isOn: false, isHot: false };
let lamp2 = { isOn: false, isHot: false };
let lamp3 = { isOn: false, isHot: false };


function turnOnLamp(lamp) {
    lamp.isOn = true;
    lamp.isHot = true; 
}

function turnOffLamp(lamp) {
    lamp.isOn = false;
}

function waitForAWhile(lamp) {
    lamp.isHot = true; 
}


function identifyLamps() {
    
    turnOnLamp(lamp1);
    waitForAWhile(lamp1);
    
    
    turnOffLamp(lamp1);
    turnOnLamp(lamp2);

    
    console.log("Verificando as lâmpadas...");

    
    if (lamp2.isOn) {
        console.log("Lampada 2 está acesa: Controlada pelo segundo interruptor");
    }

    if (!lamp1.isOn && lamp1.isHot) {
        console.log("Lampada 1 está apagada, mas quente: Controlada pelo primeiro interruptor");
    }

    if (!lamp3.isOn && !lamp3.isHot) {
        console.log("Lampada 3 está apagada e fria: Controlada pelo terceiro interruptor");
    }
}


identifyLamps();
