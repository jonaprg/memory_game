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
        key: "startGame",
        value: function startGame() {
            var gameStarted = true;
            var openedCards = new Array();
            this.fitxaSelected1;
            this.fitxaSelected2;
            var that = this;
            this.taulell.cards.forEach(function (val, idex) {
                document.getElementById(val.id).addEventListener("click", val.displayCard);
                document.getElementById(val.id).addEventListener("click", function () {
                    if (!that.fitxaSelected1) that.fitxaSelected1 = val;else that.fitxaSelected2 = val;
                    openedCards.push(val.img_id);
                    if (openedCards.length === 2) {
                        var fitxa1 = document.getElementById(that.fitxaSelected1.id);
                        var fitxa2 = document.getElementById(that.fitxaSelected2.id);

                        if (that.correctCard(that.fitxaSelected1, that.fitxaSelected2)) {
                            that.matched(fitxa1, fitxa2);
                            that.fitxaSelected1 = null;
                            that.fitxaSelected2 = null;
                            openedCards = new Array();
                        } else {
                            that.unmatched(fitxa1, fitxa2);
                            that.fitxaSelected1 = null;
                            that.fitxaSelected2 = null;
                            openedCards = new Array();
                        }
                    }
                });
            });
        }
    }, {
        key: "matched",
        value: function matched(fitxa1, fitxa2) {
            fitxa1.classList.add("match", "disabled");
            fitxa2.classList.add("match", "disabled");
            fitxa1.classList.remove("open");
            fitxa2.classList.remove("open");
        }
    }, {
        key: "unmatched",
        value: function unmatched(fitxa1, fitxa2) {
            fitxa1.classList.add("unmatched");
            fitxa2.classList.add("unmatched");
            setTimeout(function () {
                fitxa1.classList.remove("open", "unmatched", "disabled");
                fitxa2.classList.remove("open", "unmatched", "disabled");
            }, 1500);
        }
        /*
        finalitzarTorn(){
            if(!this.check(this.fitxaSelected1, this.fitxaSelected2)){
                this.fitxaSelected1.toggle();
                this.fitxaSelected2.toggle();
            }
            this.fitxaSelected1 = null;
            this.fitxaSelected2 = null;
            this.fitxasDescobertes = 0;
            if(this.hasGuanyat()){
                alert('GUANYAT');
            }
        }
          hasGuanyat(){
            let guanyat = true;
            this.taulell.cards.forEach((card)=>{
                if(!card.discovered){
                    guanyat = false;
                }
            });
            return guanyat;
        }*/

    }, {
        key: "correctCard",
        value: function correctCard(fitxa1, fitxa2) {
            return fitxa1.name === fitxa2.name;
        }
    }], [{
        key: "getApp",
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

        this.menu = this.createMenuPrincipal();
        this.printMenu();
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

            table += "\n            <div class=\"item-info\"> \n                <h2>Nivell</h2>\n                <h2>Facil</h2>\n            </div>\n            <div class=\"item-info\">\n                <h2>Temps</h2>\n                <h2>00:00</h2> \n            </div>\n            <div class=\"item-info\">\n                <h2>Punts</h2>\n                <h2>0</h2>\n            </div>\n            <div class=\"item-info\">\n                <h2>Back</h2>\n            </div>\n            \n        ";

            return table;
        }
    }, {
        key: "printMenu",
        value: function printMenu() {
            _Game.Game.getApp().innerHTML = this.menu;
        }
    }, {
        key: "createMenuPrincipal",
        value: function createMenuPrincipal() {
            var menu = "";

            menu += "\n            <div class=\"menu-principal\"> \n               <button type=\"button\" id=\"boto\">Juga!</button> \n            </div>\n        ";
            return menu;
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
        key: "displayCard",
        value: function displayCard() {
            document.getElementById(this.id).classList.toggle("open");
            document.getElementById(this.id).classList.toggle("disabled");
        }
    }, {
        key: "getHTML",
        value: function getHTML() {
            return "\n            <div class=\"item-card\" id=\"" + this.id + "\" name=\"" + this.img_id + "\" >\n                <img src=\"" + (this.imagesPath + this.img_path) + "\" alt=\"" + this.name + "\" />  \n            </div>\n            \n            ";
        }
    }]);

    return Fitxa;
}();

/***/ })
/******/ ]);