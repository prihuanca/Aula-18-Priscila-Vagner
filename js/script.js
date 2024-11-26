//Procedimento sem parâmetro
function mostraAlerta(){
      alert('isso funciona mesmo!!!');

}
//Procedimento com parâmetro
function mostraAlerta1(msg){
      alert('Boa noite ' + msg);
}
//Função com parâmetro
function  soma(n1,n2){
      n1=parseFloat(n1);
      n2-parseFloat(n2);
      soma=n1+n2;
      return(soma);
}
//Função sem parâmetro
function dobro(){
      var valor1,result
      valor1 = document.getElementById("idN");
      result = parseFloat(valor1.value)+parseFloat(valor1.value);
      document.getElementById("idResult").
      innerHTML = result;
}
//Função Calculadora
function calculadora(op){
      var valor1,valor2,result
      valor1 = document.getElementById("idN3");
      valor2 = document.getElementById("idN4");
      if(op == "+")
      {
            result = parseFloat(valor1.value)+parseFloat(valor2.value);
      }
      else{
            if(op == "-"){
            result = parseFloat(valor1.value)-parseFloat(valor2.value);
            }
            else{
                  if(op == "/")
                  {
                        result = parseFloat(valor1.value)/parseFloat(valor2.value);
                  }
                  else{
                        result = parseFloat(valor1.value)*parseFloat(valor2.value);
                  }
            }
      }
      document.getElementById("idResposta").
      innerHTML = result;
}