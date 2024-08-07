// ==UserScript==
// @name        Lichess User Enhancer
// @namespace   https://github.com/ddugovic/UserScripts
// @description Enhance user and simul appearance in Lichess.org
// @author      mawekuwe, ddugovic
// @copyright   2015+, mawekuwe, ddugovic
// @license     AGPL-3.0-or-later
// @downloadURL https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_User_Enhancer.user.js
// @updateURL   https://raw.githubusercontent.com/ddugovic/UserScripts/master/Lichess_User_Enhancer.user.js
// @supportURL  https://github.com/ddugovic/UserScripts/issues
// @version     1.12
// @match       https://lichess.org/*
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
var colors;
if (document.body.classList.contains('dark')) {
    colors = shuffleArray([
        "#EF2F41", "#5179FF", "orange", "silver", "cyan", "white", "fuchsia", "gold", "forestgreen", "lightseagreen"]);
} else {
    colors = shuffleArray([
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
    $('a[href^="/@/"]:not([href$="/following"])').each(function (i, e) {
        var keyContent = $(e).attr('href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('a[data-href^="/@/"]').each(function (i, e) {
        var keyContent = $(e).attr('data-href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('a[href^="/games/"]:not([href="/games/search"])').each(function (i, e) {
        var keyContent = $(e).attr('href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('a[href^="/opening/"]').each(function (i, e) {
        var keyContent = $(e).attr('href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('a[href^="/team/"]').each(function (i, e) {
        var keyContent = $(e).attr('href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('a[href^="/tv/"]').each(function (i, e) {
        var keyContent = $(e).attr('href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('score[data-href^="/@/"]').each(function (i, e) {
        if ($(e).children().length > 0) {
            var keyContent = $(e).attr('data-href');
            if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
            $(e).css('color', colorContents[keyContent]);
        }
    });
    $('span[data-href^="/@/"]').each(function (i, e) {
        var keyContent = $(e).attr('data-href');
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
    $('team').each(function (i, e) {
        var keyContent = e.textContent;
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

if (document.getElementById('chat') !== null) {
    observer.observe(list, {
        attributes: true,
        childList: true,
        characterData: true
    });
}
