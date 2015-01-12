function calculaFac(){
var numero1=document.datos.num1.value;
var numero2=document.datos.num2.value;
var numero3=document.datos.num3.value;

var temp=numero1-1; 
var r=numero1; 
while (temp>=1) 
{ 
r=r*temp; 
temp--; 
}


var temp2=numero2-1; 
var r2=numero2; 
while (temp2>=1) 
{ 
r2=r2*temp2; 
temp2--; 
} 

var temp3=numero3-1; 
var r3=numero3; 
while (temp3>=1) 
{ 
r3=r3*temp3; 
temp3--; 
} 
document.getElementById('respuesta').innerHTML="NUMERO 1:"+r+"<BR>NUMERO2: "+r2+"<BR>NUMERO3 "+r3;
}