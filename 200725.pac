// update: 2020.7.25
// 鉴于《刑法》、《网络安全法》等法律的有关条款，仅支持少量学术、科研网站，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// v2ray
if (
// google
  shExpMatch(url, "*://scholar.google.*/*") ||
  dnsDomainIs(host, "translate.google.com") ||
  dnsDomainIs(host, "chrome.google.com") ||
  dnsDomainIs(host, "accounts.google.com") ||
  dnsDomainIs(host, "clients1.google.com") ||
  dnsDomainIs(host, "clients2.google.com") ||
  dnsDomainIs(host, "clients3.google.com") ||
  dnsDomainIs(host, "clients4.google.com") ||
  dnsDomainIs(host, "play.google.com") ||
  dnsDomainIs(host, "apis.google.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "googleusercontent.com") ||
  dnsDomainIs(host, "accounts.youtube.com") ||
// scholar
  shExpMatch(url, "*://sci-hub.*/*") ||
  dnsDomainIs(host, "ci.nii.ac.jp") ||
// education
  dnsDomainIs(host, "coursera.org") ||
  dnsDomainIs(host, "dictionary.goo.ne.jp") ||
// art
  shExpMatch(url, "*://*.pinterest.*/*") ||
  dnsDomainIs(host, "pinimg.com") ||
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
  dnsDomainIs(host, "wix.com") ||
  dnsDomainIs(host, "wixmp.com") ||
  dnsDomainIs(host, "behance.net") ||
  shExpMatch(url, "*://*.artstation*.com/*") ||
  dnsDomainIs(host, "dribbble.com") ||
// technology
  shExpMatch(url, "*://*github*.com/*") ||
  dnsDomainIs(host, "stackoverflow.com") ||
  dnsDomainIs(host, "sstatic.net") ||
  dnsDomainIs(host, "sourceforge.net") ||
  dnsDomainIs(host, "fsdn.com") ||
  dnsDomainIs(host, "w3schools.com") ||
  dnsDomainIs(host, "android.com") ||
  dnsDomainIs(host, "golang.org") ||
  dnsDomainIs(host, "gitbook.com") ||
  dnsDomainIs(host, "webflow.com") ||
  dnsDomainIs(host, "tensorflow.org") ||
  dnsDomainIs(host, "tensorflow-dot-devsite-v2-prod-3p.appspot.com") ||
// shopping
  shExpMatch(url, "*://*.nordstrom*.com/*") ||
  dnsDomainIs(host, "amazon.com") ||
  dnsDomainIs(host, "amazon.co.jp") ||
  dnsDomainIs(host, "sierra.com") ||
  dnsDomainIs(host, "stpost.com") ||
// dmm
  dnsDomainIs(host, "dmm.com") ||
  dnsDomainIs(host, "dmmgames.com") ||
  dnsDomainIs(host, "cxense.com") ||
  dnsDomainIs(host, "a-i-ad.com") ||
  dnsDomainIs(host, "navismithapis-cdn.com") ||
  shExpMatch(url, "*://*203.104.209.*/*") ||
  dnsDomainIs(host, "touken-ranbu.jp") ||
  dnsDomainIs(host, "unity3d.com") ||
// cdn
  dnsDomainIs(host, "cloudfront.net") ||
  dnsDomainIs(host, "amazonaws.com") ||
  dnsDomainIs(host, "cloudflare.com") ||
// debug
  dnsDomainIs(host, "sspanel.net") 
) return "SOCKS5 127.0.0.1:2020";
return "DIRECT";
}
