const display = document.getElementById('displayElement');

//simulate a data fetch from an Api or other source
function fetchData() {
    return new Promise ((resolve, reject) => {
        //simulate network latency
        setTimeout(() => {
            //80% success rate simulated
            const randomSuccessRate = Math.random() < 0.8;

            if (randomSuccessRate) {
                //simulate data
                const data = {
                    userId: 1, 
                    id: 1, 
                    title: 'Simulated Data', 
                    completed: false,   
                };
                //resolve handle
                resolve(data);
            } else {
                //reject handle
                reject(new Error('Data fetch was unsuccessful'));
            }
        }, 4000)
    })
};

fetchData()
    .then((data) => {
        const values = Object.values(data);
        let displayText = '';  

        values.forEach((value) => {
            displayText += `${value} `;
        })
        display.innerText = displayText.trim();
    })
    .catch((error) => {
        display.innerText = `fetch was unsuccessful ${error.message}`
    });