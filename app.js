let form = document.querySelector('form')
let resposta = document.getElementById('resp1')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const num = Number(form.num.value)

    let numerosDivisores = 0

    for (i = 1; i <= num; i++) {

        if (num % i == 0) {
            numerosDivisores++
        }
    }
    if (numerosDivisores == 2) {
        resposta.innerText = ` ${num} é um número primo.`
    } else {
        resposta.innerText = ` ${num} não é um número primo.`
    }

    clearInput()
})

const clearInput = () => {
    let input = document.getElementById('num')
    input.value = ''
}

//CONSIDERAÇÕES
//todo número é divisível por 1 e por ele mesmo valor % 1 == 0 && valor % valor == 0
//O código deve testar e assegurar que o número é divisível, apenas, por 1 e por ele mesmo
//o i verifica os divisores possíveis naquele intervalo
//em seguida é feita a divisão e comparação
