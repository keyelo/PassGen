/*
The MIT License (MIT)

Copyright (c) 2023 Sean Leitch | Keyelo
*/

function hidePasswordDefault() { document.getElementById("generatedPass").style.display = "none" }

function generatePassword() { var e, s = "",
        t = document.getElementById("check_Include_Lowercase").checked,
        a = document.getElementById("check_Include_Uppercase").checked,
        n = document.getElementById("check_Include_Numbers").checked;!0 == t && (s += "abcdefghijklmnopqrstuvwxyz"), !0 == a && (s += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), !0 == n && (s += "0123456789"), !0 == document.getElementById("check_Include_Symbols").checked && (s += "#$%&'()*+,-./\xa1:;<=>?@[]^_`{|}~"), console.log(s), String.prototype.shufflePasswordAlphabet = function() { for (var e = this.split(""), s = e.length, t = s - 1; t > 0; t--) { var a = Math.floor(Math.random() * (t + 1)),
                n = e[t];
            e[t] = e[a], e[a] = n } return e.join("") }; var r = s.shufflePasswordAlphabet(),
        r = r.shufflePasswordAlphabet(),
        l = document.getElementById("passwordLength").value; if (8 == l) var i = r.substring(0, 8);
    else if (9 == l) var i = r.substring(0, 9);
    else if (10 == l) var i = r.substring(0, 10);
    else if (11 == l) var i = r.substring(0, 11);
    else if (12 == l) var i = r.substring(0, 12);
    else if (13 == l) var i = r.substring(0, 13);
    else if (14 == l) var i = r.substring(0, 14);
    else if (15 == l) var i = r.substring(0, 15);
    else if (16 == l) var i = r.substring(0, 16);
    else if (17 == l) var i = r.substring(0, 17);
    else if (18 == l) var i = r.substring(0, 18);
    else if (19 == l) var i = r.substring(0, 19);
    else if (20 == l) var i = r.substring(0, 20);
    console.log(i), $("#generatedPass").val(i), document.getElementById("generatedPass").style.display = "block" }

function copyText() { var e = document.getElementById("generatedPass");
    e.select(), e.setSelectionRange(0, 99999), document.execCommand("copy"), textCopiedAlert() }

function textCopiedAlert() { alert("Se ha copiado la contrase\xf1a al portapapeles: \n\n" + document.getElementById("generatedPass").value) }

function cleanText() { document.getElementById("generatedPass").value = "" }