

function ldtheme() {
    //document.body.className= (document.body.className=="light") ? "dark" : "light";
    if (document.body.className == "light") {
        document.body.className = "dark";
        document.getElementById("icn").className = "fas fa-moon";
        document.getElementById("bt").style.backgroundColor = "black";
        document.getElementById("bt").style.color = "gold";
    }
    else {
        document.body.className = "light";
        document.getElementById("icn").className = "fas fa-sun";
        document.getElementById("bt").style.backgroundColor = "rgb(29, 233, 233)";
        document.getElementById("bt").style.color = "rgb(255, 115, 0)";

    }
    localStorage.setItem("tema",document.body.className);
    localStorage.setItem("btcul",document.getElementById("bt").style.color);
    localStorage.setItem("btbgc",document.getElementById("bt").style.backgroundColor);
    localStorage.setItem("icon",document.getElementById("icn").className);
}

window.addEventListener("load",function()
{if(localStorage.getItem("tema")==null){
    localStorage.setItem("tema","light");
    localStorage.setItem("bt",document.getElementById("bt").style.color);
    localStorage.setItem("bt",document.getElementById("bt").style.backgroundColor);
    localStorage.setItem("icon",document.getElementById("icn").className);
    }
    document.body.className=localStorage.getItem("tema");
    document.getElementById("bt").style.color=localStorage.getItem("btcul");
    document.getElementById("bt").style.backgroundColor=localStorage.getItem("btbgc");
    document.getElementById("icn").className=localStorage.getItem("icon");
})
    