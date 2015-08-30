// ==UserScript==
// @id          Lichess_Compact_Lobby@https://github.com/ddugovic/UserScripts
// @name        Lichess Compact Lobby
// @namespace   https://github.com/ddugovic/UserScripts
// @description Display enterable tournaments and simuls within seek box. Hide leaderboards.
// @author      ddugovic
// @copyright   2015+, ddugovic
// @license     CC0 1.0 Universal
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Compact_Lobby.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Compact_Lobby.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     0.1
// @match       http://*.lichess.org/
// @grant       none
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-white.png
// ==/UserScript==

var container = document.getElementById('hooks_wrap');
var theOriginal = document.getElementById('enterable_tournaments').parentNode;
var theClone = theOriginal.cloneNode(true);
container.insertBefore(theClone, container.lastChild);
theClone.style.marginTop = '0px';
theClone.style.marginBottom = '15px';
theOriginal.parentNode.removeChild(theOriginal);

theOriginal = document.getElementById('enterable_simuls').parentNode;
theClone = theOriginal.cloneNode(true);
container.insertBefore(theClone, container.lastChild);
theClone.style.marginTop = '0px';
theClone.style.marginBottom = '15px';
theOriginal.parentNode.removeChild(theOriginal);

leaderboards = document.getElementsByClassName('leaderboard');
var i;
for (i = leaderboards.length-1; i >= 0; i--) {
    leaderboards[i].parentNode.removeChild(leaderboards[i]);
}
