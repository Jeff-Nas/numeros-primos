# 🔢 Verificação de Números Primos com JavaScript

Este repositório contém um simples script em **JavaScript** para verificar se um número é **primo**.

## 📌 O que é um número primo?
Um número primo é aquele que **só pode ser dividido por 1 e por ele mesmo**, ou seja, ele possui exatamente **dois divisores**. Exemplos de números primos:  
`2, 3, 5, 7, 11, 13, 17, ...`

## 🛠️ Como funciona o código?

O código percorre todos os números de `1` até o número inserido (`num`), contando quantas vezes ele é divisível sem deixar resto. Se ele tiver **exatamente dois divisores (1 e ele mesmo)**, ele é primo. Caso contrário, não é.

### 🧩 Código principal:

```javascript
let numerosDivisores = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        numerosDivisores++;
    }
}

if (numerosDivisores === 2) {
    resposta.innerText = `O número ${num} é primo.`;
} else {
    resposta.innerText = `O número ${num} não é primo.`;
}
```
🧩 Explicação do código:
Criamos a variável numerosDivisores para armazenar a quantidade de divisores do número num.
Usamos um loop for para percorrer todos os números de 1 até num.
Dentro do loop, verificamos se num é divisível por i (ou seja, se num % i === 0).
Sempre que for divisível, aumentamos a contagem de numerosDivisores.
Após o loop, verificamos:
Se numerosDivisores === 2, significa que num só foi dividido por 1 e por ele mesmo, então é primo.
Caso contrário, ele tem mais de dois divisores e não é primo.

🧐 Exemplo prático: num = 5
Vamos analisar o que acontece quando num = 5.
O loop percorre de 1 a 5, verificando quais valores resultam em divisão exata:
```
i	5 % i == 0?	Contagem de Divisores
1	✅ Sim	1
2	❌ Não	1
3	❌ Não	1
4	❌ Não	1
5	✅ Sim	2
```

💡 Conclusão: Como 5 só foi divisível por 1 e 5, ele tem exatamente dois divisores, então o código exibe:

O número 5 é primo.

Agora, veja o que acontece para num = 6:
```
i	6 % i == 0?	Contagem de Divisores
1	✅ Sim	1
2	✅ Sim	2
3	✅ Sim	3
4	❌ Não	3
5	❌ Não	3
6	✅ Sim	4
```
💡 Conclusão: Como 6 foi divisível quatro vezes (1, 2, 3 e 6), ele não é primo.



