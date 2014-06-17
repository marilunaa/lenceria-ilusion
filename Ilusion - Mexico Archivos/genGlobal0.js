function gen0LinkCss(strHref) { var objN = document.createElement("link"); objN.type = "text/css"; objN.rel = "stylesheet"; objN.href = strHref; return objN; }
function gen0Head(strHref) { return document.getElementsByTagName("head")[0]; }
function gen0LinkJs(strJref) { var objF = document.getElementsByTagName('SCRIPT')[0], objS = document.createElement('SCRIPT'); objS.type = 'text/javascript'; objS.async = true; if (arguments.length > 1) { objS.id = arguments[1].toString(); } objS.src = strJref; objF.parentNode.insertBefore(objS, objF); }

function z_il_PageQuery(q) {
if(q.length > 1) this.q = q.substring(1, q.length);
else this.q = null;
this.keyValuePairs = new Array();
if(q) {
for(var i=0; i < this.q.split("&").length; i++) {
this.keyValuePairs[i] = this.q.split("&")[i];
}
}
this.getKeyValuePairs = function() { return this.keyValuePairs; }
this.getValue = function(s) {
for(var j=0; j < this.keyValuePairs.length; j++) {
if(this.keyValuePairs[j].split("=")[0] == s)
return this.keyValuePairs[j].split("=")[1];
}
return false;
}
this.getParameters = function() {
var a = new Array(this.getLength());
for(var j=0; j < this.keyValuePairs.length; j++) {
a[j] = this.keyValuePairs[j].split("=")[0];
}
return a;
}
this.getLength = function() { return this.keyValuePairs.length; }
this.Valor = function(strK) {
if(unescape(this.getValue(strK))=="false")
return "";
else
return unescape(this.getValue(strK));
}
this.toString = function() { return window.location.search; }
}

if (typeof (window.QueryString) == "undefined") window.QueryString = new z_il_PageQuery(window.location.search);

if (typeof jsExa == "undefined") { var jsExa = new Object(); }
if (typeof jsExa.Browser == "undefined") { jsExa.Browser = new Object(); }
jsExa.Browser = function () {
    var intIdx = 0;
    var strUA = navigator.userAgent.toLowerCase();
    strUA = strUA.toLowerCase();
    this.appVersion = navigator.appVersion;
    this.appProduct = navigator.product;
    this.appPlatform = navigator.platform;
    this.appName = navigator.appName;
    this.appCodeName = navigator.appCodeName;
    this.intVer = 0;
    this.sngVer = 0;
    this.strVer = "";
    this.bolIE = false;
    this.bolNav = false;
    this.bolFF = false;
    this.bolSaf = false;
    this.bolWin32 = false;
    this.bolWin16 = false;
    this.bolUnix = false;
    this.bolLinux = false;
    this.bolMac = false;
    this.bolWinCE = false;
    this.bolChrome = false;
    //---  080218  HMO  Browser y version 
    if (strUA.indexOf("msie") != -1) {
        this.bolIE = true;
        this.strVer = strUA.substring(intIdx = strUA.indexOf("msie") + 5, strUA.indexOf(";", intIdx));
    }
    else
        if (strUA.indexOf("netscape6/") != -1 || strUA.indexOf("netscape/") != -1) {
            this.bolNav = true;
            this.strVer = strUA.indexOf("netscape6/") != -1 ? strUA.split(' netscape6/')[1] : strUA.split(' netscape/')[1];
        }
        else
            if (strUA.indexOf("firefox/") != -1) {
                this.bolFF = true;
                this.strVer = strUA.split(' firefox/')[1];
            }
            else
                if (strUA.indexOf("chrome") != -1) {
                    this.bolChrome = true;
                    this.strVer = strUA.split(' chrome/')[1].split(' ')[0];
                }
                else
                    if (strUA.indexOf("safari/") != -1) {
                        this.bolSaf = true;
                        this.strVer = strUA.split(' safari/')[1];
                    }
                    else
                        if (strUA.indexOf("opera") != -1) {
                            this.bolOpe = true;
                            //---  090729  HMO  Se corrige un problema al obtener la version, se tomaba strUA.agent cuando strUA es tan solamente un string...
                            this.strVer = strUA.split('opera')[1].substring(1).split(' (')[0];
                        }

    //---  080218  HMO  Plataforma...
    if (strUA.indexOf("windows 95") > 0 || strUA.indexOf("win95") != -1 || strUA.indexOf("win98") != -1 || strUA.indexOf("windows 98") != -1 || strUA.indexOf("windows nt") != -1) { this.bolWin32 = true; }
    else if (strUA.indexOf("windows 3.1") != -1 || strUA.indexOf("win16") != -1) { this.bolWin16 = true; }
    else if (strUA.indexOf("mac") != -1) { this.bolMac = true; }
    else if (strUA.indexOf("linux") != -1) { this.bolLinux = true; }
    else if (!this.bolLinux && (strUA.indexOf("sunos") != -1 || strUA.indexOf("hp-ux") != -1 || strUA.indexOf("x11") != -1)) { this.bolUnix = true; }
    else if (strUA.indexOf("windows ce") != -1) { this.bolWinCE = true; }

    this.sngVer = parseFloat(this.strVer);
    this.intVer = Math.floor(this.sngVer);
};
var objBC = new jsExa.Browser();

function gGbl1_RedimensionaFndClient() {
    /*
    var intT1 = jQ("#divSecPag").attr("offsetHeight"), intT2 = jQ(window).attr("innerHeight");
    if (intT2 === undefined) { intT2 = jQ("body").attr("clientHeight"); }
    jQ("#divSecFnd").css("height", intT1 >= intT2 ? intT1 : intT2);
    intT1 = jQ("#divPag").attr("offsetWidth"); intT2 = jQ(window).attr("innerWidth");
    if (intT2 === undefined)  { intT2 = jQ("body").attr("clientWidth"); }
    jQ("#divSecFnd").css("width", intT1 >= intT2 ? intT1 : intT2);
    */
}

function gGbl1_PresionaTecla(ev, objO) {
    var fC = null;
    if (typeof (objO.__funObj) == "function") fC = objO.__funObj;
    else { var strO = objO.attributes.getNamedItem("__strObj").value; if (strO != null) fC = $get(strO); }
    if (fC != null) {
        var e = ev || window.event, tP = (document.all) ? e.keyCode : e.which;
        if (tP == 13) {
            e.cancelBubble = true;
            e.returnValue = false;
            if (e.stopPropagation) {
                e.stopPropagation();
                e.preventDefault();
            }
            if (typeof (fC) == "function")
                fC();
            else
                fC.click();
        }
    }
}

function gGbl1_EstableceBotonDefault(strJQ, objEje) {
    jQ(strJQ).each(function (obj) {
        if (typeof (objEje) == "function")
            this.__funObj = objEje;
        else
            jQ(this).attr("__strObj", objEje);
        this.onkeydown = function (e) { gGbl1_PresionaTecla(e, this); };
    });
}
