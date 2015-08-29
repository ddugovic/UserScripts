// ==UserScript==
// @name        Lichess Compact Lobby
// @version     0.1
// @description Display enterable tournaments and simuls within seek box.
// @author      Toadofsky
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
