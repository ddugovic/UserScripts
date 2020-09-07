// ==UserScript==
// @id          Lichess_Hide_IGMGataKamsky@https://github.com/ddugovic/UserScripts
// @name        Lichess Hide IGMGataKamsky
// @namespace   https://github.com/ddugovic/UserScripts
// @description Hide IGMGataKamsky advertisements in Lichess.org
// @author      ddugovic
// @copyright   2020+ ddugovic
// @license     AGPL-3.0-or-later
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Hide_IGMGataKamsky.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Hide_IGMGataKamsky.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     0.1
// @match       https://lichess.org/*
// @grant       none
// @require     https://code.jquery.com/jquery-3.4.1.slim.min.js
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-white.png
// ==/UserScript==


(function() {
    'use strict';
    $( "span:contains('IGMGataKamsky')" ).parents('a').hide();
    $( "a:contains('IGMGataKamsky')" ).parents('tr').hide();
})();
