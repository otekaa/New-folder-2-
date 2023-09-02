class Polygon {
    constructor(numOfSides) {
        this.numOfSides = numOfSides;
    }
}

class Square extends Polygon {
    constructor(numOfSides, sideLength) {
        super(numOfSides);
        this.sideLength = sideLength;
    }

    toString() {
        console.log(`Square Area = ${this.sideLength**2}`);
    }
}

class Rectangle extends Polygon {
    constructor (numOfSides, width, length){
        super(numOfSides);
        this.width = width;
        this.length = length;
    }

    toString() {
        console.log(`Rectangle Area = ${this.width*this.length}`);
    }
}

let sq = new Square(4, 2);
sq.toString();

let rec = new Rectangle(4, 2, 3);
rec.toString();

