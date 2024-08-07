// Your code here
class Polygon {
    constructor(arr) {
        this.arr = arr;
    }
    get countSides() {
        return this.arr.length;
    }
    get perimeter() {
        return this.arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const [l, w, h] = this.arr;
        return l + w > h && w + h > l && l + h > w;
    }
}

class Square extends Polygon {
    get isValid() {
        return this.arr.every(side => side === this.arr[0])
    }
    get area() {
        return this.arr[0] * this.arr[0]

    }

}
