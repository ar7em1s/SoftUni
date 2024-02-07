class Circle {
    _radius;

    constructor (r) {
        this.radius = r;
    }

    get radius() {
        return this._radius;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }

    set radius(value) {
        if (typeof value != 'number') {
            throw TypeError('Radius must be number');
        }
        this._radius = value;
    }

    
    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (typeof value != 'number') {
            throw TypeError('Diameter must be number');
        }
        this.radius = value / 2;
    }
}
