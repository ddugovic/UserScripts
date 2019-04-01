// ==UserScript==
// @id          Lichess_Compact_Lobby@https://github.com/ddugovic/UserScripts
// @name        Lichess Compact Lobby
// @namespace   https://github.com/ddugovic/UserScripts
// @description Display blog, tournaments and simuls within seek box. Display tournament winners in margin. Hide leaderboard.
// @author      ddugovic
// @copyright   2015+, ddugovic
// @license     AGPL-3.0-or-later
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Compact_Lobby.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Compact_Lobby.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     0.7
// @match       https://lichess.org/
// @grant       none
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-white.png
// ==/UserScript==

document.getElementById('daily_puzzle').style.display = 'none';

var container = document.getElementById('start_buttons');
var theOriginal = document.getElementsByClassName('blog')[0];
var theClone = theOriginal.cloneNode(true);
while (container.firstChild) {
    container.firstChild.remove();
}
container.appendChild(theClone);
theClone.style.margin = '0px';
theClone.style.padding = '0px';
theOriginal.parentNode.removeChild(theOriginal);

theOriginal = document.getElementById('enterable_tournaments').parentNode;
theOriginal.parentNode.removeChild(theOriginal);

theOriginal = document.getElementById('enterable_simuls').parentNode;
theOriginal.parentNode.removeChild(theOriginal);

var leaderboards = document.getElementsByClassName('leaderboards')[0];
leaderboards.parentNode.removeChild(leaderboards);

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
