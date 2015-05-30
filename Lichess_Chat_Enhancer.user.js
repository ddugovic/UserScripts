// ==UserScript==
// @id          Lichess_Chat_Enhancer@https://github.com/mawekuwe/UserScripts
// @name        Lichess Chat Enhancer
// @namespace   https://github.com/mawekuwe/UserScripts
// @description Enhance the chat in Lichess.org
// @author      mawekuwe
// @copyright   2015+, mawekuwe
// @license     GNU GPLv3
// @homepage    https://github.com/mawekuwe/UserScripts/tree/master/Lichess_Chat_Enhancer
// @homepageURL https://github.com/mawekuwe/UserScripts/tree/master/Lichess_Chat_Enhancer
// @downloadURL https://github.com/mawekuwe/UserScripts/raw/master/Lichess_Chat_Enhancer/Lichess_Chat_Enhancer.user.js
// @updateURL   https://github.com/mawekuwe/UserScripts/raw/master/Lichess_Chat_Enhancer/Lichess_Chat_Enhancer.user.js
// @supportURL  https://github.com/mawekuwe/UserScripts/issues
// @contributionURL 
// @version     1.3
// @grant       none
// @run-at      document-end
// @include     http://*.lichess.org/*
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-white.png
// ==/UserScript==


if ($("body.dark").length) {
    var colors = [
        "#2F5E8C", "#EF2F41", "#FFC700", "#61BDF2", "#5179D6", "#66CC66", "aqua", "lime", "silver", "teal", "navy", "white",
        "fuchsia", "olive", "yellow", "gray", "purple", "green", "red"];
} else {
    var colors = [
        "#EF2F41", "#61BDF2", "#5179D6", "#66CC66", "black", "maroon", "teal", "blue", "navy","fuchsia", "olive", "gray",
        "purple", "green", "red"];
}

var colorContents = {};
var colorize = function () {
    $('div.messages_container ol.messages.content span a').each(function (i, e) {
        var keyContent = $(e).text();
        if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[i % colors.length];
        $(e).css('color', colorContents[keyContent]);
    });
};
colorize();

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
