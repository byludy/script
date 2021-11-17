var direct = 'DIRECT;';
var domainsUsingProxy = {
    "googleapis.com": 1,
    "googlecode.com": 1,
    "googleusercontent.com": 1,
    "ggpht.com": 1,
    "gstatic.com": 1,
    "gmail.com": 1,
    "googlegroups.com": 1,
    "googleratings.com": 1,
    "google.com.hk": 1,
    "google.com.tw": 1,
    "google.co.jp": 1,
    "google.co.kr": 1,
    "google.co.th": 1,
    "google.com.vn": 1,
    "google.com.sg": 1,
    "google.com.my": 1,
    "google.com.ru": 1,
    "google.ae": 1,
    "google.com.sa": 1,
    "google.co.in": 1,
    "google.com.np": 1,
    "google.de": 1,
    "google.com.kw": 1,
    "google.com.co": 1,
    "google.fr": 1,
    "google.co.uk": 1,
    "google.it": 1,
    "google.gr": 1,
    "google.pt": 1,
    "google.es": 1,
    "google.co.il": 1,
    "google.ch": 1,
    "google.se": 1,
    "google.nl": 1,
    "google.be": 1,
    "google.at": 1,
    "google.pl": 1,
    "google.pt": 1,
    "google.es": 1,
    "google.fi": 1,
    "google.nl": 1,
    "google.co.hu": 1,
    "google.com.tr": 1,
    "google.ro": 1,
    "google.dk": 1,
    "google.no": 1,
    "google.com.au": 1,
    "google.co.nz": 1,
    "google.ca": 1,
    "google.com": 1,
    "google.com.mx": 1,
    "google.com.br": 1,
    "google.com.ar": 1,
    "google.cl": 1,
    "google.com.pe": 1,
    "google.com.eg": 1,
    "google.com.pa": 1,
    "google.lt": 1,
    "google.bi": 1,
    "google.pn": 1,
    "google.li": 1,
    "google.com.nf": 1,
    "google.vg": 1,
    "google.mw": 1,
    "google.fm": 1,
    "google.sh": 1,
    "google.cd": 1,
    "google.ms": 1,
    "google.co.cr": 1,
    "google.lv": 1,
    "google.ie": 1,
    "google.co.gg": 1,
    "google.co.je": 1,
    "google.pr": 1,
    "google.com.py": 1,
    "google.gm": 1,
    "google.td": 1,
    "google.com.ua": 1,
    "google.co.ve": 1,
    "google.com.tr": 1,
    "google.com.mt": 1,
    "google.com.uy": 1,
    "google.hn": 1,
    "google.com.ni": 1,
    "google.gl": 1,
    "google.kz": 1,
    "google.sm": 1,
    "google.co.mu": 1,
    "google.as": 1,
    "google.uz": 1,
    "google.rw": 1,
    "google.cz": 1,
    "google.ru": 1,
    "google.rs": 1,
    "google.md": 1,
    "google.co.id": 1,
    "google.com.tj": 1,
    "thinkwithgoogle.com": 1,
    "googletagmanager.com": 1,
    "golang.org": 1,
    "tensorflow.org": 1,
    "wikimedia.org": 1,
    "wikipedia.org": 1,
    "android.com": 1,
    "chrome.com": 1,
    "blogger.com": 1,
    "about.google": 1,
    "onedrive.live.com": 1,
    "onedrive.com": 1,
    "2mdn.net": 1,
    "gvt1.com": 1,
    "xn--ngstr-lra8j.com": 1,
    "bdn.dev": 1,
};
var localTlds = {
    ".localhost": 1,
    ".test": 1
};
var proxy = "HTTPS file-02ijgkVUUj.us.steamgamecache.com:19808;HTTPS cc02ijgkVUUj.tw.huawei-cacahe.me:18443; DIRECT";
var hasOwnProperty = Object.hasOwnProperty;
var ipRegExp = new RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/);
function convertAddress(ipchars) {
    var bytes = ipchars.split('.');
    var result = ((bytes[0] & 0xff) << 24) | ((bytes[1] & 0xff) << 16) | ((bytes[2] & 0xff) << 8) | (bytes[3] & 0xff);
    return result;
}
function testDomain(target, domains, cnRootIncluded) {
    var idxA = target.lastIndexOf('.');
    var idxB = target.lastIndexOf('.', idxA - 1);
    var hasOwnProperty = Object.hasOwnProperty;
    var suffix = cnRootIncluded ? target.substring(idxA + 1) : '';
    if (suffix === 'cn') {
        return true;
    }
    while (true) {
        if (idxB === -1) {
            if (hasOwnProperty.call(domains, target)) {
                return true;
            } else {
                return false;
            }
        }
        suffix = target.substring(idxB + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return true;
        }
        idxB = target.lastIndexOf('.', idxB - 1);
    }
}
function isLocalTestDomain(domain) {
    var tld = domain.substring(domain.lastIndexOf('.'));
    if (tld === domain) {
        return false;
    }
    return Object.hasOwnProperty.call(localTlds, tld);
}
function isPrivateIp(ip) {
    return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ip) || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ip) || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ip) || /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ip) || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ip) || /^f[cd][0-9a-f]{2}:/i.test(ip) || /^fe80:/i.test(ip) || /^::1$/.test(ip) || /^::$/.test(ip);
}
var its_testdomain = {};
function isTestSpeedDomain(host) {
    if (typeof its_testdomain[host] !== "undefined") {
        return "HTTPS " + its_testdomain[host] + ";";
    }
    return false;
}
function FindProxyForURL(url, host) {
    if (isPlainHostName(host) || isPrivateIp(host) || isLocalTestDomain(host) || host === 'localhost') {
        return direct;
    }
    if (/itestspeed\.xyz$/ig.test(host)) {
        its = isTestSpeedDomain(host);
        if (its !== false) return its;
    }
    if (!ipRegExp.test(host)) {
        if (testDomain(host, domainsUsingProxy)) {
            return proxy;
        }
    }
    return direct;
}
