function toggleEspecificar() {
    const isYesSelected = document.getElementById("yes").checked;
    const outField = document.querySelector(".outh");

    
    if (isYesSelected) {
        outField.style.display = "block";
    } else {
        outField.style.display = "none";
    }
}


function formatarCPF (input){
    let cpf = input.value.replace(/\D/g, '');

    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    input.value = cpf;
}


function buscaCEP(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response =>{
        if(!response.ok){
            throw new Error('ERRO DE CONEXAO')
        }
        return response.json()

    })
    .then(data =>{
        console.log(data)
        city.value = data.localidade
        bairro.value = data.bairro
        uf.value = data.uf
        local.value = data.logradouro

    })
    .catch(error =>{
        console.log('ERRO:', error)
    })
}