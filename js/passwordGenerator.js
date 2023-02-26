/*
The MIT License (MIT)

Copyright (c) 2023 Sean Leitch | Keyelo
*/


function hidePasswordDefault() { document.getElementById("generatedPass").style.display = "none" }

function generatePassword() {
    var passwordAlphabet_Full = "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    var passwordAlphabet_Lowercase = "abcdefghijklmnopqrstuvwxyz";
    var passwordAlphabet_Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordAlphabet_Numbers = "0123456789";
    var passwordAlphabet_Symbols = "#$%&'()*+,-./¡:;<=>?@[\]^_`{|}~";

    // Modify alphabet according to parameters
    var passwordAlphabet = "";
    var passwordCheckbox_Lowercase = document.getElementById("check_Include_Lowercase").checked;
    var passwordCheckbox_Uppercase = document.getElementById("check_Include_Uppercase").checked;
    var passwordCheckbox_Numbers = document.getElementById("check_Include_Numbers").checked;
    var passwordCheckbox_Symbols = document.getElementById("check_Include_Symbols").checked;

    if (passwordCheckbox_Lowercase == true) {
        passwordAlphabet = passwordAlphabet + passwordAlphabet_Lowercase;
    }

    if (passwordCheckbox_Uppercase == true) {
        passwordAlphabet = passwordAlphabet + passwordAlphabet_Uppercase;
    }

    if (passwordCheckbox_Numbers == true) {
        passwordAlphabet = passwordAlphabet + passwordAlphabet_Numbers;
    }

    if (passwordCheckbox_Symbols == true) {
        passwordAlphabet = passwordAlphabet + passwordAlphabet_Symbols;
    }


    console.log(passwordAlphabet);

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
    var newPasswordFull = newPasswordFull.shufflePasswordAlphabet();

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
    } else if (passwordLength == 17) {
        var newPassword = newPasswordFull.substring(0, 17);
    } else if (passwordLength == 18) {
        var newPassword = newPasswordFull.substring(0, 18);
    } else if (passwordLength == 19) {
        var newPassword = newPasswordFull.substring(0, 19);
    } else if (passwordLength == 20) {
        var newPassword = newPasswordFull.substring(0, 20);
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

function cleanText() {
    var e = document.getElementById("generatedPass");
    e.value = "";
}