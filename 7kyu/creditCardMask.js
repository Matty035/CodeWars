/* Description
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"
*/

// My Solution

function maskify(cc) {
    let notLast4 = cc.length - 4;
    let copy = '';
    for (let i = 0; i < cc.length; i++) {
        if (i < notLast4) {
            copy += '#';
        } else {
            copy += cc[i];
        }
    }
    return copy;
}