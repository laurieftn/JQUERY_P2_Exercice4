$(function(){ //
    //$('elementCiblé').css('propriété','valeur'); 
    $("#green").click(function(){ // déclaration de la fonction qui permet d'afficher en vert
        $("#text").css("color", "green");
        })
    $("#red").click(function(){ // déclaration de la fonction qui permet d'afficher en rouge
        $("#text").css("color", "red");
        })
    $("#blue").click(function(){ // déclaration de la fonction qui permet d'afficher en bleu
        $("#text").css("color", "blue");
        })
});