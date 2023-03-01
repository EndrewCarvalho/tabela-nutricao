var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    // extraindo inf dos pacientes do form
    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);


   
   


var erros = validaPaciente(paciente);
    console.log(erros);

if(erros.length > 0){
    exibeMensagemDeErro(erros);
    return;
    //esse return anonimo e ara se o validaPaciente for invalido ele sai da funcao e n inclui na tbela
}




    //adc paciente na tabela
   

   adicionaPacienteNaTabela(paciente);


    form.reset();
    var mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){

    var pacienteTr = montaTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


}


function exibeMensagemDeErro(erros){
     var ul = document.querySelector('#mensagens-erro');
     ul.innerHTML = "";

     erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
     });

}

function obtemPacienteDoFormulario(form){

var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value,form.altura.value)
}

    return paciente;
}


function montaTR(paciente){

     //cria tr e td do paciente
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

// ou esta funcao... 
    // var nomeTd = (montaTd(paciente.nome, "info-nome"));
    // var pesoTd = (montaTd(paciente.peso, "info-peso"));
    // var alturaTd = (montaTd(paciente.altura, "info-altura"));
    // var gorduraTd = (montaTd(paciente.gordura, "info-gordura"));
    // var imcTd = (montaTd(paciente.imc, "info-imc"));

// ou esta + simplificada .... 

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr

}


function montaTd(dado, classe){


    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;



}



//aq ja posso puxar a props de paciente pois ja tenho no return da var paciente acima...
function validaPaciente(paciente){

    var erros = [];

    if(!validaPeso(paciente.peso)) erros.push('O Peso é Inválido!') ;
    if(!validaAltura(paciente.altura)) erros.push('Altura é Inválida!');
    if(paciente.nome.length == 0){
        erros.push('O "Nome" não pode estar em branco!');
    }
    if(paciente.gordura.length == 0){
        erros.push('A "Gordura" nao pode estar em branco!');
    }
    if(paciente.peso.length == 0){
        erros.push('O "Peso" nao pode estar em branco!');
    }
    if(paciente.altura.length == 0){
        erros.push('A "Altura" nao pode estar em branco!');
    }
        
    
   
return erros;

}



// duvidas:
// index.html: pq no <h2 class=titulo>Endrew ... <h2> nao entra meu nome e fica Aparecida ? 


// na ultima arrey passo somente nome mas uso pesoe altura tb?... é pq no retunr paciente ja coloquei td la ?
// 