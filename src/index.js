const fartSound = new Audio('../sounds/fartSound.mp3');

const createFartFunction = (fartSound) => (hasGas) => {
    if(hasGas === true) fartSound.play();        
};

const fartFunction = createFartFunction(fartSound);

const createTriggerFart = (fartFunction) => (input) => {
    if(input === 'push' || input === 'pull') fartFunction(true);
};

const triggerFart = createTriggerFart(fartFunction); 

triggerFart('pull');