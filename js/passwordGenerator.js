/*
The MIT License (MIT)

Copyright (c) 2023 Sean Leitch | Keyelo
*/


function hidePasswordDefault() { document.getElementById("generatedPass").style.display = "none" }

function generatePassword() {
    var passwordAlphabet = "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

    // Generate Random Password Function
    String.prototype.shufflePasswordAlphabet = function() {
        var a = this.split(""),
            n = a.length;

        for (var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }

    var newPasswordFull = passwordAlphabet.shufflePasswordAlphabet();

    // Shorten Password
    var passwordLength = document.getElementById("passwordLength").value;
    if (passwordLength == 8) {
        var newPassword = newPasswordFull.substring(0, 8);
    } else if (passwordLength == 9) {
        var newPassword = newPasswordFull.substring(0, 9);
    } else if (passwordLength == 10) {
        var newPassword = newPasswordFull.substring(0, 10);
    } else if (passwordLength == 11) {
        var newPassword = newPasswordFull.substring(0, 11);
    } else if (passwordLength == 12) {
        var newPassword = newPasswordFull.substring(0, 12);
    } else if (passwordLength == 13) {
        var newPassword = newPasswordFull.substring(0, 13);
    } else if (passwordLength == 14) {
        var newPassword = newPasswordFull.substring(0, 14);
    } else if (passwordLength == 15) {
        var newPassword = newPasswordFull.substring(0, 15);
    } else if (passwordLength == 16) {
        var newPassword = newPasswordFull.substring(0, 16);
    }

    console.log(newPassword);

    $("#generatedPass").val(newPassword)
    document.getElementById("generatedPass").style.display = "block"
}

function copyText() {
    var e = document.getElementById("generatedPass");
    e.select(), e.setSelectionRange(0, 99999), document.execCommand("copy");
    textCopiedAlert();
}

function textCopiedAlert() {
    alert("Se ha copiado la contraseña al portapapeles: \n\n" + document.getElementById("generatedPass").value);
}