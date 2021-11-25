// ==UserScript==
// @id          Lichess_Fridays_For_Future@https://github.com/ddugovic/UserScripts
// @name        Lichess Fridays For Future
// @namespace   https://github.com/ddugovic/UserScripts
// @description Fridays For Future - The World Needs You
// @author      Thibault Duplessis
// @copyright   2019+, ddugovic
// @license     AGPL-3.0-or-later
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Fridays_For_Future.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Fridays_For_Future.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     0.1
// @match       https://lichess.org/
// @grant       none
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-white.png
// ==/UserScript==

/* globals $ */
$('body').append(
  '<div id="announce" class="fff">' +
  '<a class="link" href="https://fridaysforfuture.org">' +
  '<img src="//lichess1.org/assets/images/fff.png" /> ' +
  'Fridays For Future - The World Needs You</a>' +
  '<a class="close" title="Close">X</a>'
).find('#announce a').click(function() { $('#announce').remove(); });

