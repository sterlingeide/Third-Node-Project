function helloWorld() {
    return 'Hello Wide World';
}

function subtraction(x,y) {
    return (x - y);
}

class house {
    constructor(bedrooms, bathrooms) {
        this.bedrooms = bedrooms,
        this.bathrooms = bathrooms,
        this.tour = function() {
            return "Let's go through this great house."
        }
    }
}

module.exports = {
    helloWorld,
    subtraction,
    house
}