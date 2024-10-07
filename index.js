
function Resultado() {
    var a = document.getElementById("NumeroA").value;
    var b = document.getElementById("NumeroB").value;
    var c = document.getElementById("NumeroC").value;
    var delta = b*b -4*a*c;
    var resultadoP = ((-b + Math.sqrt(delta)) / (2*a));
    var resultadoN = ((-b - Math.sqrt(delta)) / (2*a));
    
    var RetornoP =document.getElementById("boxResultPositive").innerHTML= resultadoP  
    var RetornoN =document.getElementById("boxResultNegative").innerHTML= resultadoN  
    
    return RetornoP + RetornoN
}
 
 