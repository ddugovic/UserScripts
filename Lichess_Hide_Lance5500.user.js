// ==UserScript==
// @id          Lichess_Hide_Lance5500@https://github.com/ddugovic/UserScripts
// @name        Lichess Hide Lance5500
// @namespace   https://github.com/ddugovic/UserScripts
// @description Hide Lance5500 advertisements in Lichess.org
// @author      ddugovic
// @copyright   2019+ ddugovic
// @license     AGPL-3.0-or-later
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Hide_Lance5500.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Hide_Lance5500.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     0.1
// @match       https://lichess.org/*
// @grant       none
// @require     https://code.jquery.com/jquery-3.4.1.slim.min.js
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-white.png
// ==/UserScript==


(function() {
    'use strict';
    $( "span:contains('Lance5500')" ).parents('a').hide();
    $( "a:contains('Lance5500')" ).parents('tr').hide();
})();
