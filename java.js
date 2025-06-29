let estaquebrado=false;
let contacliques=0;

let botao = document.querySelector("button")
botao.style.background="blue"


botao.addEventListener("mouseover",e =>{
    (!estaquebrado)
    botao.style.background="green";
});


botao.addEventListener("mouseout",e =>{
    (!estaquebrado)
        botao.style.background="blue";
});


botao.addEventListener("click",e =>{
    botao.style.background="red";
    botao.innerHTML="quebrei";
    estaquebrado=true
    contacliques++'1'
});
