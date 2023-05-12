var cont_err=0, cont_vuoto=0, cont_corr=0, i=0;
var sol = new Array("WOULDBE","HAD KNOWN","WERE", "WOULDNOTBE", "WOULDLOOK", "DOESNOTWRITE", "WOULDHAVENOTCOME", "WOULDHAVEPASSED", "HADASKED", "WILLGIVE", "WOULDHAVEPRINTED", "HADNOTRAINED", "WILL BREAK", "DIDNOTWASTE");
var ans = new Array();
function correct(n)
    {
        for(i; i<14; i++)
        {
            string1 = ans[1]
            string1 = string1.replace(/\s/g,'').toLowerCase();
            string2 = string2.replace(/\s/g,'').toLowerCase();
    
            if(string1 === string2){
            console.log("Le due stringhe sono uguali!");
            } else {
            console.log("Le due stringhe sono diverse!");
            }
        }
    }

function empty(n)
    {
        if(n=="")
        {
            cont_vuoto++;
        }
        else
        {
            return false;
        }
    }
    
    function controlla(n)
    {  
    //Correction of the first exercise 
        correct(document.modulo.e1.value);
        empty(document.modulo.e1.value);

    //Correction of the second exercise
        correct(document.modulo.e2.value);
        empty(document.modulo.e2.value);
         
    //Correction of the third exercise 
        correct(document.modulo.e3.value);
        empty(document.modulo.e3.value);
        
    //Correction of the fourth exercise 
        correct(document.modulo.e4.value);
        empty(document.modulo.e4.value);
        
    //Correction of the fifth exercise 
        correct(document.modulo.e5.value);
        empty(document.modulo.e5.value);
        
    //Correction of the sixth exercise 
        correct(document.modulo.e6.value);
        empty(document.modulo.e6.value);
        
    //Correction of the seventh exercise 
        correct(document.modulo.e7.value);
        empty(document.modulo.e7.value);
            
    //Correction of the eighth exercise 
        correct(document.modulo.e8.value);
        empty(document.modulo.e8.value);

    //Correction of the nineth exercise 
        correct(document.modulo.e9.value);
        empty(document.modulo.e9.value);

    //Correction of the tenth exercise 
        correct(document.modulo.e10.value);
        empty(document.modulo.e10.value);

    //Correction of the eleventh exercise 
        correct(document.modulo.e11.value);
        empty(document.modulo.e11.value);
    
    //Correction of the twelfth exercise 
        correct(document.modulo.e12.value);
        empty(document.modulo.e12.value);
        
    //Correction of the thirteenth exercise 
        correct(document.modulo.e13.value)
        empty(document.modulo.e13.value);
        
    //Correction of the fourteenth exercise 
        correct(document.modulo.e14.value);      
        empty(document.modulo.e14.value);

        
        print();
        
        cont_corr=0;
        cont_err=0;
        cont_vuoto=0;
    }
    
    function print()
    {
        //printing result with alerts
        if(cont_vuoto==0)
        {   
            alert("You got "+cont_corr+" exact exercises");
            alert("You made " +cont_err +" errors!");
            
        }
        else
        {
            alert("You haven't answered "+cont_vuoto+" exercises!");
            alert("You got "+cont_corr+" exact exercises");
            alert("You made " +cont_err +" errors!");
        }
    }   
