// ==UserScript==
// @id          Lichess_Gone_Berserk@https://github.com/ddugovic/UserScripts
// @name        Lichess Gone Berserk
// @namespace   https://github.com/ddugovic/UserScripts
// @description Go berserk whenever possible!
// @author      ddugovic
// @copyright   2015+, ddugovic
// @license     AGPL-3.0-or-later
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Gone_Berserk.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_Gone_Berserk.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     0.4
// @match       https://lichess.org/*
// @grant       none
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-black.png
// ==/UserScript==

setTimeout(function() {
    document.querySelector('button.berserk').click()
}, 100)
