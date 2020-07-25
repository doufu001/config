// ==UserScript==
// @name         【vip影视助手】免费在线观看VIP视频，支持爱奇艺，优酷，乐视tv，腾讯视频，土豆，芒果TV，搜狐视频，Acfun，bilibili，PPTV，华数TV等主流影视平台
// @namespace    http://mmys.club/vip
// @version      7.0.3
// @description  只专注于一个功能，简洁干净，在视频播放页左侧点击VIP按钮，跳转到新页面即可免费在线观看vip视频
// @author       simples
// @match        *://*.iqiyi.com/v_*
// @match        *://*.iqiyi.com/w_*
// @match        *://*.iqiyi.com/a_*
// @match        *://v.youku.com/v_*
// @match        *://m.youku.com/v*
// @match        *://m.youku.com/a*
// @match        *://*.le.com/ptv/vplay/*
// @match        *://v.qq.com/x/cover/*
// @match        *://v.qq.com/x/page/*
// @match        *://v.qq.com/play*
// @match        *://v.qq.com/cover*
// @match        *://v.qq.com/tv/*
// @match        *://*.tudou.com/listplay/*
// @match        *://*.tudou.com/albumplay/*
// @match        *://*.tudou.com/programs/view/*
// @match        *://*.tudou.com/v*
// @match        *://*.mgtv.com/b/*
// @match        *://film.sohu.com/album/*
// @match        *://tv.sohu.com/v/*
// @match        *://*.acfun.cn/v/*
// @match        *://*.bilibili.com/video/*
// @match        *://*.bilibili.com/anime/*
// @match        *://*.bilibili.com/bangumi/play/*
// @match        *://*.pptv.com/show/*
// @match        *://*.wasu.cn/Play/show*
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var vipBtn = "<div id='vipBtn' style='cursor:pointer;z-index:998;position:fixed;left:10px;top:300px;'><img src='https://cdn.80note.com/vip.gif' height='55' ></div>";
    $("body").append(vipBtn);
    $('#vipBtn').click(function() {
        window.location.href = "https://yi29f.cn/vip.php?url=" + encodeURIComponent(window.location.href);
    });
})();