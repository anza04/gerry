var conta = 0;

var array = new Array();

array = ["meme1.jpeg", "meme2.jpeg", "meme3.jpeg", "meme4.jpeg", "meme5.jpeg", "meme6.jpeg" ]

function Carosello(a){
    conta = conta+a;
    if(conta<0)
        conta = 5;
    if(conta>5)
        conta=0;

    document.getElementById("carosello").style.background="url('"+array[conta];
    document.getElementById("carosello").style.backgroundRepeat="no-repeat";
    document.getElementById("carosello").style.backgroundSize="cover";
}