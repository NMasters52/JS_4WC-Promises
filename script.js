const display = document.getElementById('displayElement');

// 1. Throw the Disc 
// 2. Walk to the Disc
// 3. Put the disc in the basket 

function displayText(value) {
    display.innerText = value;
}

function throwDisc() {
   return new Promise((resolve, reject) => {

    setTimeout(() => {

        let throwSuccess = true 

        if (throwSuccess) {
                resolve({message: "You threw the disc", success: true});
        } else {
            reject("You didn't throw the disc");
        };
    }, 2000)
        
    });
};

function walkToDisc(data) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (data.success) {
                resolve({message: "You walked to the disc", success: true});
            } else {
                reject('You have not thrown yet');
            }
        }, 5000);

    });
};

function putDiscInBasket(data) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (data.success) {
                resolve({message: "Onto the next hole", success: true});
            } else {
                reject('you missed try again')
            }
        }, 1000);

    });
}

    throwDisc().then(data => {displayText(data.message); return walkToDisc(data)})
            .then(data => {displayText(data.message); return putDiscInBasket(data)})
            .then(data => displayText(data.message))
            .catch(error => displayText(error));