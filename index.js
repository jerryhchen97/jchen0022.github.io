function moveAbout(e) {
    e.preventDefault();
    $("#main").toggle("slide", {direction: "right"}, 500);
    $("#about").toggle("slide", {direction: "left"}, 500);
}

function moveProjects(e) {
    e.preventDefault();
    $("#main").toggle("slide", {direction: "left"}, 500);
    $("#projects").toggle("slide", {direction: "right"}, 500);
}

function proj1Toggle(e) {
    e.preventDefault();
    $("#projects").toggle("slide", {direction: "down"}, 500);
    $("#proj1").toggle("slide", {direction: "up"}, 500);
}

function proj2Toggle(e) {
    e.preventDefault();
    $("#projects").toggle("slide", {direction: "left"}, 500);
    $("#proj2").toggle("slide", {direction: "right"}, 500);
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(document).ready(function() {
    $(".about-toggle").click(moveAbout);
    $(".projects-toggle").click(moveProjects);
    $(".proj1-toggle").click(proj1Toggle);
    $(".proj2-toggle").click(proj2Toggle);
});

