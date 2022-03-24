
document.onclick = function(event) { 
        var target = event.target;  
        var id = target.getAttribute('data-toggle-id');
    if (!id) return;
    var elem = document.getElementById(id);
    elem.hidden = !elem.hidden;
};


    function eye(){
        if(jQuery('body').width()<991){
       const input = document.querySelector('#su');
       input.setAttribute('hidden',"");
    }
    else{
        const input = document.querySelector('#su');
        input.removeAttribute('hidden',"");
    }

    }
    
   eye();
   jQuery(window).resize(eye);

 


