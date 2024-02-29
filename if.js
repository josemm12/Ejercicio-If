var salarioActual;
var aumento;
var salarioAjustado;
salarioActual=parseFloat(prompt("Ingrese su salario actual"));
aumento = parseFloat(aumento);
if (salarioActual<1300606) {
    aumento=salarioActual*0.15
} else {
    aumento=0
}
salarioAjustado=salarioActual+aumento;
alert("Su salario con ajuste es igual a "+salarioAjustado)