// ==UserScript==
// @id          Lichess_Compact_Lobby@https://github.com/ddugovic/UserScripts
// @name        Lichess Compact Lobby
// @namespace   https://github.com/ddugovic/UserScripts
// @description Display blog, tournaments and simuls within seek box. Display tournament winners in margin. Hide leaderboard.
// @author      ddugovic
// @copyright   2015+, ddugovic
// @license     CC0 1.0 Universal
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Compact_Lobby.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Compact_Lobby.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     0.4
// @match       https://*.lichess.org/
// @grant       none
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-white.png
// ==/UserScript==

var container = document.getElementById('hooks_wrap');
var theOriginal = document.getElementsByClassName('blog')[0];
var theClone = theOriginal.cloneNode(true);
container.insertBefore(theClone, container.lastChild);
theClone.style.marginTop = '0px';
theClone.style.marginBottom = '15px';
theOriginal.parentNode.removeChild(theOriginal);

theOriginal = document.getElementById('enterable_tournaments').parentNode;
theClone = theOriginal.cloneNode(true);
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

var leaderboard = document.getElementsByClassName('leaderboard')[0];
leaderboard.parentNode.removeChild(leaderboard);

container = document.getElementById('site_header');
theOriginal = document.getElementsByClassName('leaderboard')[0].parentNode;
theClone = theOriginal.children[0].cloneNode(true);
theClone.className = 'under_chat';
container.insertBefore(theClone, container.lastChild);
theOriginal.parentNode.removeChild(theOriginal);

var forumposts = document.getElementsByClassName('new_posts');
var i;
for (i = forumposts.length-1; i >= 0; i--) {
    forumposts[i].parentNode.removeChild(forumposts[i]);
}
