/*
The MIT License (MIT)

Copyright (c) 2023 Sean Leitch | Keyelo
*/

function hidePasswordDefault() { document.getElementById("generatedPass").style.display = "none" }

function generatePassword() { var e = "#$%&+-?@",
        s = "",
        t = document.getElementById("check_Include_Lowercase").checked,
        a = document.getElementById("check_Include_Uppercase").checked,
        n = document.getElementById("check_Include_Numbers").checked,
        l = document.getElementById("check_Include_Symbols").checked,
        r = document.getElementById("check_Exclude_Ambiguous").checked;!0 == t && (s += "abcdefghijklmnopqrstuvwxyz"), !0 == a && (s += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), !0 == n && (s += "0123456789"), !0 == l && !1 == r && (s = s + "'()*,./\xa1:;<=>[]^_`{|}~" + e), !0 == l && !0 == r && (s += e), console.log(s), String.prototype.shufflePasswordAlphabet = function() { for (var e = this.split(""), s = e.length, t = s - 1; t > 0; t--) { var a = Math.floor(Math.random() * (t + 1)),
                n = e[t];
            e[t] = e[a], e[a] = n } return e.join("") }; var i = s.shufflePasswordAlphabet(),
        i = i.shufflePasswordAlphabet() + i,
        c = document.getElementById("passwordLength").value; if (8 == c) var d = i.substring(0, 8);
    else if (9 == c) var d = i.substring(0, 9);
    else if (10 == c) var d = i.substring(0, 10);
    else if (11 == c) var d = i.substring(0, 11);
    else if (12 == c) var d = i.substring(0, 12);
    else if (13 == c) var d = i.substring(0, 13);
    else if (14 == c) var d = i.substring(0, 14);
    else if (15 == c) var d = i.substring(0, 15);
    else if (16 == c) var d = i.substring(0, 16);
    else if (17 == c) var d = i.substring(0, 17);
    else if (18 == c) var d = i.substring(0, 18);
    else if (19 == c) var d = i.substring(0, 19);
    else if (20 == c) var d = i.substring(0, 20);
    console.log(d), $("#generatedPass").val(d), document.getElementById("generatedPass").style.display = "block" }

function copyText() { var e = document.getElementById("generatedPass");
    e.select(), e.setSelectionRange(0, 99999), document.execCommand("copy"), textCopiedAlert() }

function textCopiedAlert() { alert("Se ha copiado la contrase\xf1a al portapapeles: \n\n" + document.getElementById("generatedPass").value) }

function cleanText() { document.getElementById("generatedPass").value = "" }