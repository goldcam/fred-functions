
const createFartFunction = () => (hasGas) => {
    if(hasGas === true) console.log('Fart!');        
};

const fartFunction = createFartFunction();

const createTriggerFart = (fartFunction) => (input) => {
    if(input === 'push' || input === 'pull') fartFunction(true);
};

const triggerFart = createTriggerFart(fartFunction); 

triggerFart('pull');
triggerFart('push');