'use strict';

let oHeadings = {
    hRef : null,
    hTextRef : null,
    divRef : document.querySelector('div[class=container-fluid]'),
    
    checkNbr : function( nbr ){
        if( nbr>= 1 && nbr <=6 ){
            return true;
        } else{
            return false;
        }
    }
};

oHeadings.createHeadings = function (nbr){

    if(this.checkNbr(nbr)){   
        this.hRef=document.createElement('h'+nbr);
        this.hTextRef=document.createTextNode(nbr);
        this.hRef.appendChild(this.hTextRef);
        this.divRef.appendChild(this.hRef);
    }
};

for(let i =0; i<8; i++){
    oHeadings.createHeadings(i);
}