// ==UserScript==
// @id          Lichess_Tuner@https://github.com/ddugovic/UserScripts
// @name        Lichess Tuner
// @namespace   https://github.com/ddugovic/UserScripts
// @description Queue that music!
// @author      ddugovic
// @copyright   2016+, ddugovic
// @license     CC0 1.0 Universal
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Tuner.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Tuner.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     0.1
// @match       http://*.lichess.org/*
// @grant       none
// @run-at      document-end
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/easter.png
// ==/UserScript==

var tune = function () {
    $('a.mini_board:not([href$="#music"])').attr('href',function(i,href) {
        return href + '#music';
    });
    $('a[href^="/study"]:not([href$="#music"])').attr('href',function(i,href) {
        return href + '#music';
    });
    $('a[href^="/tv"]:not([href$="#music"])').attr('href',function(i,href) {
        return href + '#music';
    });
};
tune();
setInterval(function() {
  tune();
}, 100);
