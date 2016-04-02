// ==UserScript==
// @id          Lichess_User_Enhancer@https://github.com/ddugovic/UserScripts
// @name        Lichess User Enhancer
// @namespace   https://github.com/ddugovic/UserScripts
// @description Enhance user appearance in Lichess.org
// @author      mawekuwe, ddugovic
// @copyright   2015+, mawekuwe, ddugovic
// @license     CC0 1.0 Universal
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_User_Enhancer.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_User_Enhancer.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     1.6
// @match       http://*.lichess.org/
// @grant       none
// @run-at      document-end
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-white.png
// ==/UserScript==

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
var $dark = $("body.dark");
if ($dark.length) {
    var colors = shuffleArray([
        "#EF2F41", "#FFC700", "#5179FF", "orange", "silver", "cyan", "white", "fuchsia", "gold", "forestgreen", "lightseagreen"]);
} else {
    var colors = shuffleArray([
        "#EF2F41", "#61BDF2", "#5179D6", "#66CC66", "black", "maroon", "teal", "blue", "navy","fuchsia", "olive", "gray",
        "purple", "green", "red"]);
}

var colorContents = {};
var colorize = function () {
    $('div.messages_container ol.messages.content span a').each(function (i, e) {
        var keyContent = $(e).text().split("\s+", 2)[0];
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[i % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('a.user_link').each(function (i, e) {
        var keyContent = $(e).text().split("\s+", 2)[0];
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[i % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('span.ulink').each(function (i, e) {
        var keyContent = $(e).text().split("\s+", 2)[0];
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[i % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('span.user_link').each(function (i, e) {
        var keyContent = $(e).text().split("\s+", 2)[0];
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[i % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('#tv_channels > a > span').each(function (i, e) {
        var keyContent = $(e).text().split("\s+", 2)[0];
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[i % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
};
colorize();
setInterval(function() {
  colorize();
}, 100);

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var list = document.querySelector('ol.messages');
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type === 'childList') {
            colorize();
        }
    });
});

var chat = $('#chat');
if (chat.length) {
    observer.observe(list, {
        attributes: true,
        childList: true,
        characterData: true
    });
}

