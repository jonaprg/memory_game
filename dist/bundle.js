/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Taulell = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
    function Game(level) {
        _classCallCheck(this, Game);

        this.taulell = new _Taulell.Taulell(4, 4, level);
        this.startGame();
    }

    _createClass(Game, [{
        key: 'startGame',
        value: function startGame() {
            this.taulell.clickCards();
        }
    }, {
        key: 'check',
        value: function check(fitxa1, fitxa2) {
            return fitxa1.id === fitxa2.id;
        }
    }], [{
        key: 'getApp',
        value: function getApp() {
            return document.getElementById('app');
        }
    }]);

    return Game;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Main = __webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Game = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
    function Main(url) {
        _classCallCheck(this, Main);

        this.getConfig(url);
    }

    _createClass(Main, [{
        key: "getConfig",
        value: function getConfig(url) {
            var _this = this;

            fetch(url).then(function (res) {
                return res.json();
            }).then(function (config) {
                _this.config = config;
                _this.getLevel(_this.config["levels"]["level_instruments"]);
            }).catch(function (err) {
                throw err;
            });
        }
    }, {
        key: "getLevel",
        value: function getLevel(url) {
            var _this2 = this;

            fetch(url).then(function (res) {
                return res.json();
            }).then(function (level) {
                _this2.level = level;
                _this2.startGame();
            }).catch(function (err) {
                throw err;
            });
        }
    }, {
        key: "startGame",
        value: function startGame() {
            new _Game.Game(this.level);
        }
    }]);

    return Main;
}();

var main = new Main("resources/config.json");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Taulell = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Fitxa = __webpack_require__(4);

var _Game = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Taulell = exports.Taulell = function () {
    function Taulell(columns, rows, level) {
        _classCallCheck(this, Taulell);

        this.columns = columns;
        this.rows = rows;

        this.cards = this.generateCards(level);
        this.shuffleCards(this.cards);

        this.table = this.generateTaulell();
        this.printTaulell();
        this.openedCards = new Array();
    }

    _createClass(Taulell, [{
        key: "generateCards",
        value: function generateCards(level) {
            var cards = [];
            var i = void 0,
                id = void 0;
            for (i = 0, id = 0; i < level.images_amount; i++, id++) {
                cards[id] = new _Fitxa.Fitxa(level.images[i], id, level.images_path);
                cards[++id] = new _Fitxa.Fitxa(level.images[i], id, level.images_path);
            }
            return cards;
        }
    }, {
        key: "shuffleCards",
        value: function shuffleCards(cards) {
            var currentIndex = cards.length,
                temporaryValue,
                randomIndex;

            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = cards[currentIndex];
                cards[currentIndex] = cards[randomIndex];
                cards[randomIndex] = temporaryValue;
            }
            return cards;
        }
    }, {
        key: "generateTaulell",
        value: function generateTaulell() {
            return "\n            <div id=\"info\">\n                " + this.createTableInfo() + "\n            </div>\n            <div id=\"game\">\n                " + this.printCards() + "\n                \n            </div>\n        ";
        }
    }, {
        key: "printCards",
        value: function printCards() {
            var cells = "";
            var count = 0;
            for (var i = 0; i < this.columns; i++) {
                for (var j = 0; j < this.rows; j++) {
                    cells += "\n                    " + this.cards[count].getHTML() + "\n                ";
                    count++;
                }
            }
            return cells;
        }
    }, {
        key: "printTaulell",
        value: function printTaulell() {
            _Game.Game.getApp().innerHTML = this.table;
        }
    }, {
        key: "createTableInfo",
        value: function createTableInfo() {
            var table = "";

            table += "<div class=\"item-info\">Nivell: </div>\n        <div class=\"item-info\">Time</div>\n        <div class=\"item-info\">Punts</div>\n        <div class=\"item-info\">Back</div>\n        ";

            return table;
        }
    }, {
        key: "displayCard",
        value: function displayCard() {
            this.classList.toggle("open");
            this.classList.toggle("disabled");
        }
    }, {
        key: "hasClass",
        value: function hasClass(elem, className) {
            return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
        }
    }, {
        key: "clickCards",
        value: function clickCards() {
            var _this = this;

            var clickCard = 0;

            var _loop = function _loop(i) {
                var card = document.getElementById(_this.cards[i].getFitxa());
                card.addEventListener("click", _this.displayCard);
                card.addEventListener("click", function () {
                    if (card.classList.contains("open")) {
                        var keyCard = card.getAttribute("key");
                        this.openedCards.push(keyCard);

                        var len = this.openedCards.length;
                        if (len === 2) {
                            //moveCounter();
                            if (this.openedCards[0] === this.openedCards[1]) {
                                this.matched();
                            } else {
                                this.unmatched();
                            }
                        }
                    } else {
                        console.log("doesnt has");
                    }
                }, false);
                //this.cards[i].addEventListener("click", this.congratulations);
            };

            for (var i = 0; i < this.cards.length; i++) {
                _loop(i);
            }
        }
    }, {
        key: "matched",
        value: function matched() {
            console.log("marched");
            /*fixa1.classList.add("match", "disabled");
            fixa2.classList.add("match", "disabled");
            fixa1.classList.remove("open");
            fixa2.classList.remove("open");*/
        }
    }, {
        key: "unmatched",
        value: function unmatched() {
            console.log("unmatched");
            /* fixa1.classList.add("unmatched");
             fixa2.classList.add("unmatched");
             setTimeout(function(){
                 fixa1.classList.remove("open","unmatched");
                 fixa2.classList.remove("open","unmatched");
                 enable();
             },1100);*/
        }
    }]);

    return Taulell;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Fitxa = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Game = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fitxa = exports.Fitxa = function () {
    function Fitxa(imagen, id, imagesPath) {
        _classCallCheck(this, Fitxa);

        this.id = id;
        this.img_id = imagen.id;
        this.name = imagen.name;
        this.img_path = imagen.path;
        this.imagesPath = imagesPath;
    }

    _createClass(Fitxa, [{
        key: "getFitxa",
        value: function getFitxa() {
            return this.id;
        }
    }, {
        key: "getImg_id",
        value: function getImg_id() {
            return this.img_id;
        }
    }, {
        key: "getHTML",
        value: function getHTML() {
            return "\n            <div class=\"item-card\" id=\"" + this.id + "\" key=\"" + this.img_id + "\" >\n                <img src=\"" + (this.imagesPath + this.img_path) + "\" alt=\"" + this.name + "\" />  \n            </div>\n            \n            ";
        }
    }]);

    return Fitxa;
}();

/***/ })
/******/ ]);