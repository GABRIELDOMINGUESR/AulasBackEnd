/********************************************************************
 * Objetivo: Arquivo de funções para realizar calculos matemáticos
 * Data 03/02/2023
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * versão: 1.0
 ********************************************************************/

//Realizar calculo matemático das 4 operações (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
function calcular(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();

    let resultado;

    if (operacao == 'SOMAR')
        resultado = valor1 + valor2;
    else if (operacao == 'SUBTRAIR')
        resultado = valor1 - valor2;
    else if (operacao == 'MULTIPLICAR')
        resultado = valor1 * valor2;
    else if (operacao == 'DIVIDIR') {
        //Validaçao por 0
        if (valor2 == 0) {
            console.log('Erro: Não é possivel fazer a divisão por 0.');
            entradaDados.close();
        } else
            resultado = valor1 / valor2;
    } else {
        console.log('Erro: A operação informada não é válida. Confira a sua entrada.')
        entradaDados.close();
        //Fecha o objeto de entrada de dados (encerra o programa)
    }

    //Validação para tratar varíavel resultado quando nenhum calculo é realizado
    if (resultado != undefined)
        return resultado;
    else
        return false;


};



//Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular
}