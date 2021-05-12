function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor digite um número.')
    }else{
        let n = Number(num.value)
        let c = 1
        //Somente para limpar o select sempre que digitar um novo numero.
        tab.innerHTML =''

        while(c <= 10){
            //Esse metedo serve para criar um elemento dinamicamente na tag select do html 
            let item = document.createElement('option')
            //Adicionando os numeros na tag select
            item.text = `${n} x ${c} = ${n*c}`
            //Adicionando um item(filho) no select
            tab.appendChild(item)
            c++
        }
    }
}