function validar() {
    var valor = document.getElementById("number").value;
    if (valor.length > 2){ //valor.lenght mostra a quantidade de algarismo
        alert("O valor inserido é maior que 2 algarismos");
        
        return false;
    } else{
        return true;
    }
}