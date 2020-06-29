var i = 0;

setInterval(function(){i
    i++;
    label(i);
    if(i >= 5){
        i=-1;
    }
},3000);


function label(a){
    var alabel = document.getElementById("i1");
    switch(a){
        case 0:alabel.style.marginLeft = "0"; i = a; break;
        case 1:alabel.style.marginLeft = "-25%"; i = a; break;
        case 2:alabel.style.marginLeft = "-50%"; i = a; break;
        case 3:alabel.style.marginLeft = "-75%"; i = a; break;
        case 4:alabel.style.marginLeft = "-100%"; i = a; break;
    }
}