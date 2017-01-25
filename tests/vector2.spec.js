import install from 'jasmine-es6';
import Vector2 from 'es6/vector2.es6.js';
install();

describe("Vector2 Model", function () {
    var defaultVector2 = {
        x: 1, y: 1
    };

    it('should compare the x and y of two vectors and return whether or not both match', function () {
        var vectorA = new Vector2(1, 1),
            vectorB = new Vector2(1, 1),
            vectorC = new Vector2();

        var resultA = vectorA.compare(vectorA),
            resultB = vectorA.compare(vectorB),
            resultC = vectorA.compare(vectorC);

        expect(resultA).toBeTruthy();
        expect(resultB).toBeTruthy();
        expect(resultC).toBeFalsy();
    });

    it("should instantiate properly", function () {
        var vecOne = new Vector2(),
            vecTwo = new Vector2(1),
            vecThree = new Vector2(0, 1),
            vecFour = new Vector2(1, 1);

        expect(vecOne.x).toBe(0);
        expect(vecOne.y).toBe(0);

        expect(vecTwo.x).toBe(1);
        expect(vecTwo.y).toBe(0);

        expect(vecThree.x).toBe(0);
        expect(vecThree.y).toBe(1);

        expect(vecFour.x).toBe(1);
        expect(vecFour.y).toBe(1);
    });

    it("should throw a TypeError if the given x or y values are null or cannot be converted to a number", function () {
        expect(function () {
            return Vector2({});
        }).toThrowError('Both X and Y values for a Vector2 need to be numbers.');
        expect(function () {
            return Vector2(1, {});
        }).toThrowError('Both X and Y values for a Vector2 need to be numbers.');
        expect(function () {
            return Vector2(function () {
            });
        }).toThrowError('Both X and Y values for a Vector2 need to be numbers.');
    });

    it("should calculate it's length", function () {
        var vec = new Vector2(defaultVector2.x, defaultVector2.y), res,
            expected = Math.sqrt(Math.pow(defaultVector2.x, 2) + Math.pow(defaultVector2.y, 2));

        res = vec.length();

        expect(res).toBe(expected);
    });

    it("should throw an error when trying to calculate it's length and X or Y are not numbers", function () {
        var vec = new Vector2(defaultVector2.x, defaultVector2.y);

        vec.x = 'not a number';

        expect(function () {
            return vec.length();
        }).toThrowError('Vector2 X and Y must be Numbers.');
    });

    it("should calculate it's normal", function () {
        var vec = new Vector2(defaultVector2.x, defaultVector2.y),
            res,
            length = vec.length(),
            expected = new Vector2(defaultVector2.x / length, defaultVector2.y / length);

        res = vec.normalize();

        expect(res.x).toEqual(expected.x);
        expect(res.y).toEqual(expected.y);
    });

    it("should add two vectors and return a new instance", function () {
        var vecOne = new Vector2(defaultVector2.x, defaultVector2.y),
            vecTwo = new Vector2(-1, 2), res,
            expected = {x: vecOne.x + vecTwo.x, y: vecOne.y + vecTwo.y};

        res = vecOne.addNew(vecTwo);

        expect(res.x).toEqual(expected.x);
        expect(res.y).toEqual(expected.y);
    });

    it("should add two vectors and mutate the original", function () {
        var vecOne = new Vector2(defaultVector2.x, defaultVector2.y),
            vecTwo = new Vector2(-1, 2),
            expected = {x: vecOne.x + vecTwo.x, y: vecOne.y + vecTwo.y};

        vecOne.add(vecTwo);

        expect(vecOne.x).toEqual(expected.x);
        expect(vecOne.y).toEqual(expected.y);
    });

    it("should subtract two vectors and return a new instance", function () {
        var vecOne = new Vector2(defaultVector2.x, defaultVector2.y),
            vecTwo = new Vector2(-1, 2), res,
            expected = {x: vecOne.x - vecTwo.x, y: vecOne.y - vecTwo.y};

        res = vecOne.subNew(vecTwo);

        expect(res.x).toEqual(expected.x);
        expect(res.y).toEqual(expected.y);
    });

    it("should subtract two vectors and mutate the original", function () {
        var vecOne = new Vector2(defaultVector2.x, defaultVector2.y),
            vecTwo = new Vector2(-1, 2),
            expected = {x: vecOne.x - vecTwo.x, y: vecOne.y - vecTwo.y};

        vecOne.sub(vecTwo);

        expect(vecOne.x).toEqual(expected.x);
        expect(vecOne.y).toEqual(expected.y);
    });

    it("should multiply a vector by a scalar and return a new instance", function () {
        var vec = new Vector2(2, -2), res, scalar = 4,
            expected = {x: vec.x * scalar, y: vec.y * scalar};

        res = vec.mulNew(scalar);

        expect(res.x).toEqual(expected.x);
        expect(res.y).toEqual(expected.y);
    });

    it("should multiply a vector by a scalar and mutate the original", function () {
        var vec = new Vector2(2, -2), scalar = 4,
            expected = {x: vec.x * scalar, y: vec.y * scalar};

        vec.mul(scalar);

        expect(vec.x).toEqual(expected.x);
        expect(vec.y).toEqual(expected.y);
    });

    it("should divide a vector by a scalar and return a new instance", function () {
        var vec = new Vector2(2, -2), res, scalar = 4,
            expected = {x: vec.x / scalar, y: vec.y / scalar};

        res = vec.divNew(scalar);

        expect(res.x).toEqual(expected.x);
        expect(res.y).toEqual(expected.y);
    });

    it("should divide a vector by a scalar and mutate the original", function () {
        var vec = new Vector2(2, -2), scalar = 4,
            expected = {x: vec.x / scalar, y: vec.y / scalar};

        vec.div(scalar);

        expect(vec.x).toEqual(expected.x);
        expect(vec.y).toEqual(expected.y);
    });

    it('should convert an angle to a Vector2 object', function () {
        var vector = Vector2.angleToVector2(180);

        expect(vector.x).toBe(-1);
        expect(vector.y).toBe(0);
    });

    it('should convert a vector to an angle in radians', function () {
        var vector = new Vector2(defaultVector2.x, defaultVector2.y),
            angle = vector.vectorToAngleRadians();

        expect(angle).toBe(45 * Math.PI / 180);
    });

    it('should convert a vector to an angle in degrees', function () {
        var vector = new Vector2(defaultVector2.x, defaultVector2.y),
            angle = vector.vectorToAngleDegrees();

        expect(angle).toBe(45);
    });

    it("should calculate the distance between two vectors", function () {
        var vecOne = new Vector2(10, 5),
            vecTwo = new Vector2(5, 10),
            expected = Math.sqrt(Math.pow(vecOne.x - vecTwo.x, 2) + Math.pow(vecOne.y - vecTwo.y, 2)),
            res;

        res = vecOne.distance(vecTwo);

        expect(res).toEqual(expected);
    });
});
