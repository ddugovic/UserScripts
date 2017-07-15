// ==UserScript==
// @id          Lichess_User_Enhancer@https://github.com/ddugovic/UserScripts
// @name        Lichess User Enhancer
// @namespace   https://github.com/ddugovic/UserScripts
// @description Enhance user and simul appearance in Lichess.org
// @author      mawekuwe, ddugovic
// @copyright   2015+, mawekuwe, ddugovic
// @license     CC0 1.0 Universal
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_User_Enhancer.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_User_Enhancer.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     1.10
// @match       https://lichess.org/*
// @require     https://code.jquery.com/jquery-1.12.4.min.js
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
        "#EF2F41", "#5179FF", "orange", "silver", "cyan", "white", "fuchsia", "gold", "forestgreen", "lightseagreen"]);
} else {
    var colors = shuffleArray([
        "#EF2F41", "#61BDF2", "#5179D6", "#66CC66", "black", "maroon", "teal", "blue", "navy","fuchsia", "olive", "gray",
        "purple", "green", "red"]);
}

var n = 0;
var colorContents = {};
var colorize = function () {
    var e = document.getElementById('user_tag');
    var keyContent = e.href;
    if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
    e.style.color = colorContents[keyContent];
    $('a[href^="/@/"]').each(function (i, e) {
        var keyContent = $(e).attr('href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('a[href^="/simul/"]').each(function (i, e) {
        var keyContent = $(e).attr('href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('span[data-href^="/@/"]').each(function (i, e) {
        var keyContent = $(e).attr('data-href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('#lichess > div.user_show > div.content_box_top > h1').each(function (i, e) {
        var keyContent = $(e).attr('href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('#tv_channels > a').each(function (i, e) {
        var keyContent = $(e).attr('href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
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

