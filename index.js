var lastname = $("#lastname");
var firstname = $("#firstName");
var age = $("#age");
var pseudo = $("#pseudo");
var mdp = $("#mdp");
var confirmMdp = $("#confirmMdp");
// animate page
$(document).ready(function () {
    $(".container").hide().fadeIn(3000);
})
// function verication age and password
age.keyup(function () {
    if (age.val() == 0) {
        $("#ageVerif").text("Votre champ doit être un nombre").css('color', 'red');
    } else if (age.val() >= 18) {
        $("#ageVerif").text('vous êtes majeur.');
        $("#ageVerif").animate({
            fontSize: '1.2em'
        }, "slow").removeClass().css('color', 'green');
    } else if (age.val() < 18) {
        $("#ageVerif").text('vous êtes mineur.');
        $("#ageVerif").animate({
            fontSize: '1em'
        }, "slow").css('color', 'red');
    }
});

$("#mdp, #confirmMdp").change(function () {
    if (mdp.val() != confirmMdp.val()) {
        $(".mdpVerif").text(" Les 2 mots de passes ne correspondent pas").css('color', 'red');
    } else {
        $(".mdpVerif").text(" ");
    }
})
// display forms with button id submit
$("#submit").click(function () {
    if ($("input[name='civility']:checked").val() == undefined || lastname.val() == '' || firstname.val() == '' || age.val() == '' || pseudo.val() == '' || $("#mdp").val() == '' || confirmMdp.val() == '' || mdp.val() != confirmMdp.val()) {
        $("#display-error").text("Veuillez remplir tous les champs").css('color', 'red');
    } else {
        $("#helloText").html($("input[name='civility']:checked").val() + '<br>' + lastname.val() + '<br>' + firstname.val() + '<br>' + age.val() + '<br>' + pseudo.val() + '<br>' + mdp.val() + '<br>' + confirmMdp.val()).hide().fadeIn(3000);
        $("#d-none-card").hide();
        $(".cardText").fadeIn(1500).removeClass("d-none");
    }
})