// ==UserScript==
// @id          Lichess_Hide_Rating@https://github.com/ddugovic/UserScripts
// @name        Lichess Hide Rating
// @namespace   https://github.com/ddugovic/UserScripts
// @description Hide rating in Lichess.org
// @author      ddugovic
// @copyright   2016+ ddugovic
// @license     CC0 1.0 Universal
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Hide_Rating.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Hide_Rating.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     0.2
// @match       https://*.lichess.org/*
// @grant       none
// @run-at      document-end
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-black.png
// ==/UserScript==

(function() {
    'use strict';
    var els = document.getElementsByTagName("title");
    for(var i = 0, l = els.length; i < l; i++) {
        els[i].innerHTML = els[i].innerHTML.replace(/\(\d+\??\)/gi, '(?)');
    }
    els = document.getElementsByTagName("a");
    for(i = 0, l = els.length; i < l; i++) {
        els[i].innerHTML = els[i].innerHTML.replace(/\(\d+\??\)/gi, '(?)');
    }
})();
