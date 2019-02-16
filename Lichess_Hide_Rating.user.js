// ==UserScript==
// @id          Lichess_Hide_Rating@https://github.com/ddugovic/UserScripts
// @name        Lichess Hide Rating
// @namespace   https://github.com/ddugovic/UserScripts
// @description Hide rating in Lichess.org
// @author      ddugovic, ianremsen
// @copyright   2016+ ddugovic, ianremsen
// @license     AGPL-3.0-or-later
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Hide_Rating.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Hide_Rating.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     0.4
// @match       https://lichess.org/*
// @grant       none
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-black.png
// ==/UserScript==


(function() {
    'use strict';
    var els = document.getElementsByClassName("user_link");
    for(var i = 0; i < els.length; i++) {
        els[i].innerHTML = els[i].innerHTML.replace(/[\s]*[\x160]*[(]\d*[?]*[)]/g, '');
    }
    var els1 = document.getElementsByTagName("rating");
    for (var j = 0; j < els1.length; j++) {
        console.log(els[j].innerHTML);
        els1[j].innerHTML = els1[j].innerHTML.replace(/[\s]*[\x160]*\d*[?]*/g, '');
        console.log(els1[j].innerHTML);
    }
})();
