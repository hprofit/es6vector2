/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.angleToVector2 = angleToVector2;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Vector2 = function () {
	    /**
	     * Vector2 object
	     * Will attempt to parse both x and y into floats, if unable, throws a TypeError
	     * @param x - Number
	     * @param y - Number
	     * @constructor
	     */
	    function Vector2(x, y) {
	        _classCallCheck(this, Vector2);

	        if (isNaN(x) || isNaN(y)) {
	            throw new TypeError('Both X and Y values for Vector2 must be numbers.');
	        }
	        this.x = parseFloat(x, 10);
	        this.y = parseFloat(y, 10);
	    }

	    /**
	     * Given another Vector2, compares the x and y values of each for equality
	     * @param otherVector - Vector2 or {x: Number, y: Number}
	     * @returns {boolean} - True if both x's and y's are the same
	     */


	    _createClass(Vector2, [{
	        key: 'compare',
	        value: function compare(otherVector) {
	            if (!isNaN(otherVector.x) && !isNaN(otherVector.y) && !isNaN(this.x) && !isNaN(this.y)) {
	                return this.x === otherVector.x && this.y === otherVector.y;
	            } else {
	                throw new TypeError('otherVector must be a Vector2 or have numerical X and Y properties.');
	            }
	        }

	        /**
	         * Returns the total length of this Vector2
	         * @returns {number}
	         */

	    }, {
	        key: 'length',
	        value: function length() {
	            if (!isNaN(this.x) && !isNaN(this.y)) {
	                return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	            } else {
	                throw new TypeError('Vector2 X and Y must be Numbers.');
	            }
	        }
	    }, {
	        key: 'magnitude',
	        value: function magnitude() {
	            return this.length();
	        }

	        /**
	         * Given a scalar (defaults to 1), returns a new Vector2 with a length equal to scalar
	         * @param scalar - Number, optional, defaults to 1
	         * @returns {*}
	         */

	    }, {
	        key: 'normalize',
	        value: function normalize(scalar) {
	            // If scalar is undefined, null, or an empty string, default it to 0
	            scalar = scalar || 1;

	            // If isNaN(scalar) still evaluates true, scalar was an invalid argument
	            if (isNaN(scalar)) {
	                throw new TypeError('scalar must be a Number');
	            } else if (isNaN(this.x) || isNaN(this.y)) {
	                throw new TypeError('Vector2 X and Y must be Numbers.');
	            } else {
	                var length = this.length();
	                if (length === 0) {
	                    return this;
	                } else {
	                    return new Vector2(this.x / length * scalar, this.y / length * scalar);
	                }
	            }
	        }

	        /**
	         * Given another Vector2, returns a new Vector2 with x and y equal to the total of this Vector2 and otherVector
	         * @param otherVector - Vector2 or {x:Number, y:Number}
	         * @returns {Vector2}
	         */

	    }, {
	        key: 'addNew',
	        value: function addNew(otherVector) {
	            if (!isNaN(otherVector.x) && !isNaN(otherVector.y)) {
	                return new Vector2(this.x + otherVector.x, this.y + otherVector.y);
	            } else {
	                throw new TypeError('otherVector must be a Vector2 or have numerical X and Y properties.');
	            }
	        }

	        /**
	         * Given another Vector2, adds otherVector's x and y from this Vector2's x and y respectively
	         * @param otherVector - Vector2 or {x:Number, y:Number}
	         */

	    }, {
	        key: 'add',
	        value: function add(otherVector) {
	            if (!isNaN(otherVector.x) && !isNaN(otherVector.y)) {
	                this.x += otherVector.x;
	                this.y += otherVector.y;
	            } else {
	                throw new TypeError('otherVector must be a Vector2 or have numerical X and Y properties.');
	            }
	        }

	        /**
	         * Given another Vector2, returns a new Vector2 with x and y equal to the difference between this Vector2 and otherVector
	         * @param otherVector - Vector2 or {x:Number, y:Number}
	         * @returns {Vector2}
	         */

	    }, {
	        key: 'subNew',
	        value: function subNew(otherVector) {
	            if (!isNaN(otherVector.x) && !isNaN(otherVector.y)) {
	                return new Vector2(this.x - otherVector.x, this.y - otherVector.y);
	            } else {
	                throw new TypeError('otherVector must be a Vector2 or have numerical X and Y properties.');
	            }
	        }

	        /**
	         * Given another Vector2, subtracts otherVector's x and y from this Vector2's x and y respectively
	         * @param otherVector - Vector2 or {x:Number, y:Number}
	         */

	    }, {
	        key: 'sub',
	        value: function sub(otherVector) {
	            if (!isNaN(otherVector.x) && !isNaN(otherVector.y)) {
	                this.x -= otherVector.x;
	                this.y -= otherVector.y;
	            } else {
	                throw new TypeError('otherVector must be a Vector2 or have numerical X and Y properties.');
	            }
	        }

	        /**
	         * Given a scalar Number, returns a new Vector2 with x and y equal to this Vector2's x and y multiplied by the scalar
	         * @param scalar - Number
	         * @returns {Vector2}
	         */

	    }, {
	        key: 'mulNew',
	        value: function mulNew(scalar) {
	            if (!isNaN(scalar)) {
	                return new Vector2(this.x * scalar, this.y * scalar);
	            } else {
	                throw new TypeError('scalar must be numerical.');
	            }
	        }

	        /**
	         * Given a scalar Number, multiplies this Vector2's x and y by scalar
	         * @param scalar - Number
	         */

	    }, {
	        key: 'mul',
	        value: function mul(scalar) {
	            if (!isNaN(scalar)) {
	                this.x *= scalar;
	                this.y *= scalar;
	            } else {
	                throw new TypeError('scalar must be numerical.');
	            }
	        }

	        /**
	         * Given a divisor Number, returns a new Vector2 with x and y equal to this Vector2's x and y divided by the divisor
	         * @param divisor - Number, non-zero
	         * @returns {Vector2}
	         */

	    }, {
	        key: 'divNew',
	        value: function divNew(divisor) {
	            if (!isNaN(divisor) && divisor !== 0) {
	                return new Vector2(this.x / divisor, this.y / divisor);
	            } else {
	                throw new TypeError('divisor must be numerical and non-zero.');
	            }
	        }

	        /**
	         * Given a divisor Number, divides this Vector2's x and y by divisor
	         * @param divisor - Number, non-zero
	         */

	    }, {
	        key: 'div',
	        value: function div(divisor) {
	            if (!isNaN(divisor) && divisor !== 0) {
	                this.x /= divisor;
	                this.y /= divisor;
	            } else {
	                throw new TypeError('divisor must be numerical and non-zero.');
	            }
	        }

	        /**
	         * Returns this Vector2's angle in Radians
	         * @returns {Number}
	         */

	    }, {
	        key: 'vectorToAngleRadians',
	        value: function vectorToAngleRadians() {
	            if (!isNaN(this.x) && !isNaN(this.y)) {
	                return parseFloat(Math.atan2(this.y, this.x));
	            } else {
	                throw new TypeError('Vector2 X and Y must be Numbers.');
	            }
	        }

	        /**
	         * Returns this Vector2's angle in Degrees
	         * @returns {number}
	         */

	    }, {
	        key: 'vectorToAngleDegrees',
	        value: function vectorToAngleDegrees() {
	            return this.vectorToAngleRadians() * 180 / Math.PI;
	        }

	        /**
	         * Given an otherVector, returns the length of the distance Vector2 between them
	         * @param otherVector - Vector2 or {x: Number, y: Number}
	         * @returns {Vector2}
	         */

	    }, {
	        key: 'distance',
	        value: function distance(otherVector) {
	            return this.subNew(otherVector).length();
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return 'Vector2(' + this.x + ', ' + this.y + ')';
	        }
	    }]);

	    return Vector2;
	}();

	/**
	 * Given an angle in Degrees, returns a Vector2 rotated by that angle
	 * @param angle - Number, angle in Degrees
	 * @returns {Vector2}
	 */


	function angleToVector2(angle) {
	    if (!isNaN(angle)) {
	        angle = angle * Math.PI / 180.0;
	        return new Vector2(Math.round(parseFloat(Math.cos(angle)) * 100) / 100, Math.round(parseFloat(Math.sin(angle)) * 100) / 100);
	    } else {
	        throw new TypeError('angle must be numerical.');
	    }
	}
	exports.default = Vector2;

/***/ }
/******/ ]);