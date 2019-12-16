/**
 * Functions for BPI Assignment
 * @module model/BPI
 */


/**
 * User-defined error message
 * @param {string} message
 */
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
 }

 /**
 * Determine final state using finite state automata
 * @param {string} str
 * @returns {string} {string}
 */
exports.findState = function(str) {
    let currState = 'S0';
    const validInput = [0, 1];
    const stateOutput = { "S0": '0', "S1": '1', "S2": '2' };
    try {
        const input = str.split('');
        input.forEach((chr) => {
            let digit = parseInt(chr);
            if (validInput.includes(digit)) {
                switch (currState) {
                    case ('S0'):
                        currState = (digit) ? 'S1' : 'S0';
                        break;
                    case ('S1'):
                        currState = (digit) ? 'S0' : 'S2';
                        break;
                    case ('S2'):
                        currState = (digit) ? 'S2' : 'S1';
                        break;
                    default:
                        currState = 'S0';
                }
            }
            else {
                throw new UserException('Input must be 0 or 1');
            }
        });
    }
    catch (e){
        console.error('Error with input: ', e.message);
    }
    finally {
        console.log('final state', currState, '=', stateOutput[currState]);
        return stateOutput[currState];
    }
};


