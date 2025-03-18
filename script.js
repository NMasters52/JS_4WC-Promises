const display = document.getElementById('displayElement');

// 1. Throw the Disc 
// 2. Walk to the Disc
// 3. Put the disc in the basket 

function displayText(value) {
    display.innerText = value;
}

function throwDisc() {
   return new Promise((resolve, reject) => {

        throwDisc = true;

        if (throwDisc) {
            setTimeout(() => {
               resolve("You threw the disc");
            }, 1000)
        } else {
            reject("You didn't throw the disc");
        };
        
    });
};

function walkToDisc(value) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            discThrown = true;

            if (discThrown) {
                resolve("You've arrived at your disc");
            } else {
                reject('You have not thrown yet');
            }
        }, 5000);

    });
};

function putDiscInBasket() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            discIsIn = true;

            if (discIsIn) {
                resolve('disc is in the basket, onto the next hole')
            } else {
                reject('you missed try again')
            }
        }, 1000);
    });
}

    throwDisc().then(value => {displayText(value); return walkToDisc()})
            .then(value => {displayText(value); return putDiscInBasket()})
            .then(value => displayText(value))
            .catch(error => displayText(error));