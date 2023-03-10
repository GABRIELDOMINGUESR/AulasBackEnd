/**********************************************************************
 * Objetivo: criar uma api para manipulação de Estados e Cidades
 * Autor: Gabriel Domingues
 * Data: 10/03/2023
 * Vesão 1.0 
 **********************************************************************/

/*******************************************************************************
 * Ecprres - dependencia do Node, que penprmite a integração entre o protocolo http com código
 *          npm entall exprress --save
 * 
 *       cors - gerenciador de permissões para o protocolo HTTP
 *          npm entall cors --save
 * 
 * 
 *   Body-parser - É uma dependencia que permite manipular dados enviados pelo body de requisição
 *           npm entall body-parser --save         
 */

//importe das depemdencias para criar as API

//Responsavel pelas requisições 
const express = require('express');

//Responsavel pelas permissões das requisições
const cors = require('cors');

//Responsavel pela manipulação do body da requisição
const bodyParser = require('body-parser');


//Cria um objeto com as informações da classe express
const app = express();


app.use((request, response, next) => {

    //Permite gerenciar a origem das requisições da API
    //O "*"  siguinifica que a API sera publica
    //O "IP" secolocar o IP, a API somente vai responder a aquela maquina  
    response.header('Access-Control-Allow-Origin', '*');

    //Permite gerenciar quais verbos (metodos) poderão fazer requisições
    response.header('Aceces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPITIONS')

    //Ativa o cors das requisições as permissões estabelecidas
    app.use(cors())

    next()
});


//endPoints

//endPoint para listar os estados
app.get('/estados', cors(), async function(request, response, next) {

    const estadosCidades = require('./modulo/estados_cidades.js')

    let listaDeEstados = estadosCidades.getCidades('sp')

    response.json(listaDeEstados)
    response.status(200)

});

//Permite carregar os endPoints e agradar as 
//requisições pelo protocolo http na porta 8080

app.listen(8080, function() {
    console.log('Servidor aguardando requisição na porta 8080');

})