//let theStates = function () {};

/**
 * Functions for BPI
 * @module model/BPI
 */


 /**
 * Determine final state using finite state automata
 * @param {string} str
 * @returns {string} {string}
 */
exports.findState = function(str) {
    try {
        const input = str.split('');
        const validInput = [0, 1];
        const stateOutput = { "S0": '0', "S1": '1', "S2": '2' };
        let currState = 'S0';

        input.forEach((chr) => {
            let digit = parseInt(chr);
            if (validInput.includes(digit)) {
                switch (currState) {
                    case ('S0'):
                        currState = (digit) ? 'S1' : 'S0';
                        //console.log('S0', digit, currState);
                        break;
                    case ('S1'):
                        currState = (digit) ? 'S0' : 'S2';
                        //console.log('S1', digit, currState);
                        break;
                    case ('S2'):
                        currState = (digit) ? 'S2' : 'S1';
                        //console.log('S2', digit, currState);
                        break;
                    default:
                        currState = 'S0';
                }
            }
        });
        return stateOutput[currState];
    }
    catch (e){
        console.error('Error with input: ', e.message);
    }
};


