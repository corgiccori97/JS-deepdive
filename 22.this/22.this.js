function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getDiameter = function() {
    return 2 * this.radius;
};

const circle = new Circle(5);