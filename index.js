var lastname = $("#lastname");
var firstname = $("#firstName");
var age = $("#age");
var pseudo = $("#pseudo");
var mdp = $("#mdp");
var confirmMdp = $("#confirmMdp");

$(document).ready(function () {
    $(".container").hide().fadeIn("slow");
})

ageFunction();
passwordFunction();

function ageFunction() {
    age.keyup(function () {
        if (age.val() == 0) {
            $("#ageVerif").text("Votre champ doit être un nombre").addClass('text-warning');
        } else if (age.val() >= 18) {
            $("#ageVerif").text('vous êtes majeur.');
            $("#ageVerif").animate({ fontSize: '3em' }, "slow").removeClass().addClass('text-success');
        } else if (age.val() < 18) {
            $("#ageVerif").text('vous êtes mineur.');
            $("#ageVerif").animate({ fontSize: '1em' }, "slow").addClass('text-warning');
        } 
    });
}

function passwordFunction() {
    mdp.change(function () {
        if (mdp.val() != confirmMdp.val()) {
            $(".mdpVerif").text(" Les 2 mots de passes ne correspondent pas");
        } else {
            $(".mdpVerif").text(" ");
        }
    })
    confirmMdp.change(function () {
        if (mdp.val() != confirmMdp.val()) {
            $(".mdpVerif").text(" Les 2 mots de passes ne correspondent pas");
        } else {
            $(".mdpVerif").text(" ");
        }
    })
}

$("#submit").click(function () {
    if ($("input[name='civility']:checked").val() == undefined || lastname.val() == '' || firstname.val() == '' || age.val() == '' || pseudo.val() == '' || mdp.val() == '' || confirmMdp.val() == '') {
        $("#helloText").text("Veuillez remplir tous les champs").addClass("text-warning");
    } else {
        $("#helloText").html($("input[name='civility']:checked").val() + '<br>' + lastname.val() + '<br>' + firstname.val() + '<br>' + age.val() + '<br>' + pseudo.val() + '<br>' + mdp.val() + '<br>' + confirmMdp.val()).removeClass();
    }
})