var botaoAdicionar = document.querySelector("#buscar-pacientes");

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText;
            console.log(resposta);
            console.log(typeof resposta);
    
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            console.log(typeof pacientes);
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente)
            });
            
        }else{
            //isto é para apresentar o erro, no caso 404
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});










//aq pede o tipo do json recebido, ex: "string"
        // console.log(typeof resposta)