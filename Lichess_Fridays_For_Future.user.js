// ==UserScript==
// @name        Lichess Fridays For Future
// @description Fridays For Future - The World Needs You
// @match       https://lichess.org/
// @version     0.1
// @grant       none
// @run-at      document-idle
// ==/UserScript==

/* globals $ */
$('body').append(
  '<div id="announce" class="fff">' +
  '<a class="link" href="https://fridaysforfuture.org">' +
  '<img src="//lichess1.org/assets/images/flags/_earth.png" /> ' +
  'Fridays For Future - The World Needs You</a>&nbsp;' +
  '<a class="close" title="Close">X</a>'
).find('#announce a').click(function() { $('#announce').remove(); });
