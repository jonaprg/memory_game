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

var _Timer = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
    function Game(level) {
        _classCallCheck(this, Game);

        this.taulell = new _Taulell.Taulell(4, 4, level);
        this.timer = new _Timer.Timer(level);
        this.openedCards = new Array();
        this.startGame();
    }

    _createClass(Game, [{
        key: 'startGame',
        value: function startGame() {
            var _this = this;

            var that = this;

            document.getElementById("lvl_facil").addEventListener('click', function (evt) {
                return _this.startGameByLevel(_this.timer.levelFacil, _this.timer.timerFacil);
            });
            document.getElementById("lvl_medio").addEventListener('click', function (evt) {
                return _this.startGameByLevel(_this.timer.levelMedio, _this.timer.timerMitja);
            });
            document.getElementById("lvl_dificil").addEventListener('click', function (evt) {
                return _this.startGameByLevel(_this.timer.levelDificil, _this.timer.timerDificil);
            });
            this.backToMenu("back");
        }
    }, {
        key: 'startGameByLevel',
        value: function startGameByLevel(nivell, duration) {
            this.taulell.displayTaulell();
            document.getElementById("nivell").innerHTML = nivell;
            this.timer.startTimer(duration);
            this.taulell.flipCards(2000);
            var punts = 0;
            this.fitxaSelected1;
            this.fitxaSelected2;
            var that = this;

            this.taulell.cards.forEach(function (val, index) {
                document.getElementById(val.id).addEventListener("click", val.displayCard);
                document.getElementById(val.id).addEventListener("click", function () {
                    if (!that.fitxaSelected1) that.fitxaSelected1 = val;else that.fitxaSelected2 = val;
                    that.openedCards.push(val.img_id);
                    if (that.openedCards.length === 2) {
                        var fitxa1 = document.getElementById(that.fitxaSelected1.id);
                        var fitxa2 = document.getElementById(that.fitxaSelected2.id);
                        if (that.correctCard(that.fitxaSelected1, that.fitxaSelected2)) {
                            punts += that.points(20);
                            that.matched(fitxa1, fitxa2);
                            that.fitxaSelected1 = null;
                            that.fitxaSelected2 = null;
                            that.openedCards = new Array();
                        } else {
                            that.unmatched(fitxa1, fitxa2);
                            that.fitxaSelected1 = null;
                            that.fitxaSelected2 = null;
                            that.openedCards = new Array();
                        }
                    }
                    that.winGame();
                    document.getElementById("punts").innerHTML = punts;
                });
            });
        }
    }, {
        key: 'points',
        value: function points(max) {
            var punts = 0;
            if (max !== null || max !== 0) punts += max;
            return punts;
        }
    }, {
        key: 'backToMenu',
        value: function backToMenu(element) {
            var that = this;
            document.getElementById(element).addEventListener("click", function () {
                document.getElementById("menu-principal").classList.remove("display-none");
                document.getElementById("game").classList.remove("display-flex");
                document.getElementById("info").classList.remove("display-flex");
                that.timer.clearSetInterval();
                that.restartGame();
            });
        }
    }, {
        key: 'restartGame',
        value: function restartGame() {
            this.taulell.cards.forEach(function (val, index) {
                document.getElementById(val.id).classList.remove("open", "match", "disabled");
            });
            window.location.reload(true);
        }
        /*endGameByTime(duration) {
            if(!this.timer.interval) {
                console.log("Hefds")
                this.timer.clearSetInterval();
                document.getElementById("popup2").classList.add("show");
                this.backToMenu("play-againLose"); 
            }
        }*/

    }, {
        key: 'winGame',
        value: function winGame() {
            if (document.getElementsByClassName("match").length === 16) {
                this.timer.clearSetInterval();
                document.getElementById("popup1").classList.add("show");
                this.backToMenu("play-again");
            }
        }
    }, {
        key: 'matched',
        value: function matched(fitxa1, fitxa2) {
            fitxa1.classList.add("match", "disabled");
            fitxa2.classList.add("match", "disabled");
            fitxa1.classList.remove("open");
            fitxa2.classList.remove("open");
        }
    }, {
        key: 'unmatched',
        value: function unmatched(fitxa1, fitxa2) {
            fitxa1.classList.add("unmatched");
            fitxa2.classList.add("unmatched");
            setTimeout(function () {
                fitxa1.classList.remove("open", "unmatched", "disabled");
                fitxa2.classList.remove("open", "unmatched", "disabled");
            }, 1500);
        }
    }, {
        key: 'correctCard',
        value: function correctCard(fitxa1, fitxa2) {
            return fitxa1.name === fitxa2.name;
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
        this.menu = this.createMenuPrincipal();
        this.printMenu();
        this.modal = this.createModalWin();
        this.printModalWin();

        this.loseModal = this.createModalLose();
        this.printModalLose();
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

            table += "\n            <div class=\"item-info\"> \n                <h3>Nivell</h3>\n                <h3 id=\"nivell\"></h3>\n            </div>\n            <div class=\"item-info\">\n                <h3>Temps</h3>\n                <h3 id=\"timed\">Comming Soon</h3> \n            </div>\n            <div class=\"item-info\">\n                <h3>Punts</h3>\n                <h3 id=\"punts\">0</h3>\n            </div>\n            <div class=\"item-info\">\n                <h3>Tornar</h3>\n                <button id=\"back\"><</button>\n            </div>\n        ";
            return table;
        }
    }, {
        key: "printMenu",
        value: function printMenu() {
            _Game.Game.getApp().innerHTML += this.menu;
        }
    }, {
        key: "createMenuPrincipal",
        value: function createMenuPrincipal() {
            var menu = "";
            menu += "\n            <div id=\"menu-principal\">\n                <h2>Escull el nivell</h2> \n                <button class=\"play\" id=\"lvl_facil\">F\xE0cil</button> \n                <button class=\"play\" id=\"lvl_medio\">Mitj\xE0</button> \n                <button class=\"play\" id=\"lvl_dificil\">Dif\xEDcil</button> \n            </div>\n        ";
            return menu;
        }
    }, {
        key: "printModalWin",
        value: function printModalWin() {
            _Game.Game.getApp().innerHTML += this.modal;
        }
    }, {
        key: "createModalWin",
        value: function createModalWin() {
            var modal = "";
            modal += "\n        <div id=\"popup1\" class=\"overlay\">\n            <div class=\"popup\">\n                <h2>Felicitats has guanyat! :)</h2>\n                <button id=\"play-again\">\n                    Tornar a jugar!</a>\n                </button>\n            </div>\n        </div>\n        ";
            return modal;
        }
    }, {
        key: "printModalLose",
        value: function printModalLose() {
            _Game.Game.getApp().innerHTML += this.loseModal;
        }
    }, {
        key: "createModalLose",
        value: function createModalLose() {
            var modal = "";
            modal += "\n        <div id=\"popup2\" class=\"overlay\">\n            <div class=\"popup\">\n                <h2>Has perdut! :(</h2>\n                <button id=\"play-againLose\">\n                    Tornar a jugar!</a>\n                </button>\n            </div>\n        </div>\n        ";
            return modal;
        }
    }, {
        key: "displayTaulell",
        value: function displayTaulell() {
            document.getElementById("game").classList.add("display-flex");
            document.getElementById("info").classList.add("display-flex");
            document.getElementById("menu-principal").classList.add("display-none");
        }
    }, {
        key: "flipCards",
        value: function flipCards(time) {
            var _this = this;

            this.cards.forEach(function (card, index) {
                document.getElementById(card.id).classList.toggle("open");
                document.getElementById(card.id).classList.toggle("disabled");
            });
            setTimeout(function () {
                _this.cards.forEach(function (card, index) {
                    document.getElementById(card.id).classList.toggle("open");
                    document.getElementById(card.id).classList.toggle("disabled");
                });
            }, time);
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
            return "\n\n            <div class=\"item-card\" id=\"" + this.id + "\" name=\"" + this.img_id + "\">\n                <div class=\"side\">\n                 </div>   \n                <div class=\"side back\">\n                    <img src=\"" + (this.imagesPath + this.img_path) + "\" alt=\"" + this.name + "\" style=\"width: 100%; height: 100%;\">\n                </div>\n            </div>\n            ";
        }
    }]);

    return Fitxa;
}();
/* 
            <div class="item-card" id="${this.id}" name="${ this.img_id}" >
                <img src="${this.imagesPath + this.img_path}" alt="${this.name}" />  
            </div>
*/

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = exports.Timer = function () {
    function Timer(level) {
        _classCallCheck(this, Timer);

        this.timerFacil = level.timerFacil;
        this.timerMitja = level.timerMedio;
        this.timerDificil = level.timerDificil;
        this.levelFacil = level.levelFacil;
        this.levelMedio = level.levelMedio;
        this.levelDificil = level.levelDificil;

        this.interval = null;
    }

    _createClass(Timer, [{
        key: "startTimer",
        value: function startTimer(duration) {
            var temps = duration,
                minuts = void 0,
                segons = void 0;
            var that = this;
            var finish = false;
            this.interval = setInterval(function () {
                minuts = parseInt(temps / 60, 10);
                segons = parseInt(temps % 60, 10);

                minuts = minuts < 10 ? "0" + minuts : minuts;
                segons = segons < 10 ? "0" + segons : segons;

                document.getElementById("time").textContent = minuts + ":" + segons;

                if (--temps < 0) {
                    temps = 0;
                    clearInterval(this.interval);
                    return true;
                }
                return false;
            }, 1000);
        }
    }, {
        key: "clearSetInterval",
        value: function clearSetInterval() {
            clearInterval(this.interval);
        }
    }]);

    return Timer;
}();

/***/ })
/******/ ]);