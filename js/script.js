//seleciona o formulario e o h3
const frm = document.querySelector('form'); 
const msg = document.querySelector('h3');

frm.addEventListener('submit',(e) =>{
    const valorQuilo = Number.parseFloat(frm.valorQuilo.value);
    const consumo = Number.parseFloat(frm.valorCliente.value);
    
    // divide o valor do consumo pelo valor do kg e multiplica por valor do quilo
    const valorTotal = (consumo / 1000) * valorQuilo;

    //apresenta mensagem na tela abaixo do botão
    msg.innerText = `Valor a pagar R$: ${valorTotal.toFixed(2)}`

    //evita o envio do formulario e as informções sejam perdidas
    e.preventDefault()

})