/*
The MIT License (MIT)

Copyright (c) 2023 Sean Leitch | Keyelo
*/
function hidePasswordDefault() { document.getElementById("generatedPass").style.display = "none" }

function generatePassword() {
    String.prototype.shufflePasswordAlphabet = function() {
        for (var e = this.split(""), s = e.length, t = s - 1; t > 0; t--) {
            var a = Math.floor(Math.random() * (t + 1)),
                n = e[t];
            e[t] = e[a], e[a] = n
        }
        return e.join("")
    };
    var e = "#&B*YJmzrCx@'Ro>qhi861P:Kn~uSXW;/Mfe?$ljHky=tFOI7<}g9Gcswa|bZNU].dvQV`^LE25)T3[{0%_A-p4(+,D".shufflePasswordAlphabet(),
        s = document.getElementById("passwordLength").value;
    if (8 == s) var t = e.substring(0, 8);
    else if (9 == s) var t = e.substring(0, 9);
    else if (10 == s) var t = e.substring(0, 10);
    else if (11 == s) var t = e.substring(0, 11);
    else if (12 == s) var t = e.substring(0, 12);
    else if (13 == s) var t = e.substring(0, 13);
    else if (14 == s) var t = e.substring(0, 14);
    else if (15 == s) var t = e.substring(0, 15);
    else if (16 == s) var t = e.substring(0, 16);
    console.log(t), $("#generatedPass").val(t), document.getElementById("generatedPass").style.display = "block"
}

function copyText() {
    var e = document.getElementById("generatedPass");
    e.select(), e.setSelectionRange(0, 99999), document.execCommand("copy"), textCopiedAlert()
}

function textCopiedAlert() { alert("Se ha copiado la contrase\xf1a al portapapeles: \n\n" + document.getElementById("generatedPass").value) }