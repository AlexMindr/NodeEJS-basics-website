window.addEventListener("load",function()
{
    var linkuriMeniu=document.querySelectorAll("ul.menu a");
    var locatie=window.location.pathname;
    var lochash=window.location.hash;
    locatie= (locatie=="/")? "index": locatie;
    for(var link of linkuriMeniu)
    {
        link.style.background="transparent";
        if(link.href.endsWith(location)){
            link.style.background="black";
        }



        link.onclick=function(){console.log(1);
            var chMenu=document.getElementById("ch-menu");
            chMenu.checked=false;
            var chSubmenu=document.getElementById("opt_div");
            chSubmenu.checked=false;
            
            var chSubmenu2=document.getElementById("opt_galerii2");
            chSubmenu2.checked=false;                      
        }


        
    }

})