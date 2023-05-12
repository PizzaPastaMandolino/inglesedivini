var cont_err=0, cont_vuoto=0, cont_corr=0;
    function correct(n)
    {
        if(n=="1")
        {
            cont_corr++;
            return cont_corr
        }
        else
        {
            return false;
        }
    }

    function error(n)
    {
        if(n=="0")
        {
            cont_err++;
        }
        else
        {
            return false;
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
        correct(document.modulo.e1n1.value);
        error(document.modulo.e1n1.value);
        empty(document.modulo.e1n1.value);

        correct(document.modulo.e1n2.value);
        error(document.modulo.e1n2.value);
        empty(document.modulo.e1n2.value);

    //Correction of the second exercise
        correct(document.modulo.e2n1.value);
        error(document.modulo.e2n1.value);
        empty(document.modulo.e2n1.value);
        
         correct(document.modulo.e2n2.value);
         error(document.modulo.e2n2.value);
         empty(document.modulo.e2n2.value);
         
    //Correction of the third exercise 
        correct(document.modulo.e3n1.value);
        error(document.modulo.e3n1.value);
        empty(document.modulo.e3n1.value);


        correct(document.modulo.e3n2.value);
        error(document.modulo.e3n2.value);
        empty(document.modulo.e3n2.value);
        
    //Correction of the fourth exercise 
        correct(document.modulo.e4n1.value);
        error(document.modulo.e4n1.value);
        empty(document.modulo.e4n1.value);


        correct(document.modulo.e4n2.value);
        error(document.modulo.e4n2.value);
        empty(document.modulo.e4n2.value);
        
    //Correction of the fifth exercise 
        correct(document.modulo.e5n1.value);
        error(document.modulo.e5n1.value);
        empty(document.modulo.e5n1.value);

        correct(document.modulo.e5n2.value);
        error(document.modulo.e5n2.value);
        empty(document.modulo.e5n2.value);
        
    //Correction of the sixth exercise 
        correct(document.modulo.e6n1.value);
        error(document.modulo.e6n1.value);
        empty(document.modulo.e6n1.value);

        correct(document.modulo.e6n2.value);
        error(document.modulo.e6n2.value);
        empty(document.modulo.e6n2.value);
        
    //Correction of the seventh exercise 
        correct(document.modulo.e7n1.value);
        error(document.modulo.e7n1.value);
        empty(document.modulo.e7n1.value);

        correct(document.modulo.e7n2.value);
        error(document.modulo.e7n2.value);
        empty(document.modulo.e7n2.value);
            
    //Correction of the eighth exercise 
        correct(document.modulo.e8n1.value);
        error(document.modulo.e8n1.value);
        empty(document.modulo.e8n1.value);

        correct(document.modulo.e8n2.value);
        error(document.modulo.e8n2.value);
        empty(document.modulo.e8n2.value);
    
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
