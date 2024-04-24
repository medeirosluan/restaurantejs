const frm = document.querySelector('form');
const msg = document.querySelector('h3');

frm.addEventListener('submit',(e) =>{
    const valorQuilo = Number.parseFloat(frm.valorQuilo.value);
    const consumo = Number.parseFloat(frm.valorCliente.value);
    
    const valorTotal = (consumo / 1000) * valorQuilo;

    msg.innerText = `Valor a pagar R$: ${valorTotal.toFixed(2)}`

    e.preventDefault()

})