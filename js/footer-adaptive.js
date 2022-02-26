jQuery(document).ready(function(){
    function classFunction(){
    //*1-footer-block*//
        if(jQuery('body').width()<973){ jQuery('.block-1').removeClass('block-1 collaps.show').addClass('navbarScroll collapse');
    }
    else{
      jQuery('.navbarScroll').removeClass('navbarScroll collapse').addClass('block-1 collaps.show');
    }
        //*2-footer-block*//
        if(jQuery('body').width()<973){ jQuery('.block-2').removeClass('block-2 collaps.show').addClass('navbarScroll-2 collapse');
        }
        else{
        jQuery('.navbarScroll-2').removeClass('navbarScroll-2 collapse').addClass('block-2 collaps.show');
        }
            //*3-footer-block*//
            if(jQuery('body').width()<973){ jQuery('.block-3').removeClass('block-3 collaps.show').addClass('navbarScroll-3 collapse');
            }
            else{
            jQuery('.navbarScroll-3').removeClass('navbarScroll-3 collapse').addClass('block-3 collaps.show');
            }
    }
    
    classFunction();
    jQuery(window).resize(classFunction);
   })
