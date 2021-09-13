// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((n, s) => n + s, 0);
  }

}

class Triangle extends Polygon {

  get isValid() {
    return this.sides.every((e, i) => {
      let y = [...this.sides];
      y[i] = 0;
      let z = y.reduce((a,b) => a + b, 0)
      return e < z
    });
  }

}

class Square extends Polygon {

  get area() {
    return this.sides[0] ** 2;
  }

  get isValid() {
    const a = this.sides[0]
    return this.sides.every(e => {
      console.log(e, a)
      return e == a;
    })
  }

}

let x = new Square([5, 1, 5, 5])

 console.log(x.isValid)