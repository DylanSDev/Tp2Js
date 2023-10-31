for( let i = 1; i < 101 ; i++)
{
    if(i==1){document.write(i); }
    else{
        document.write("<br>"+ i  ); 
        if((i % 4) == 0) { document.write(" (Múltiplo de 4)");}
        if((i % 9) == 0) { document.write(" (Múltiplo de 9)");}
        if((i % 5) == 0) { document.write(" <br> ------------------------------------");}
    }
}
