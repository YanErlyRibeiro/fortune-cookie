//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const btnQuote = document.querySelector(".quote")
//Eventos

btnTry.addEventListener('click', handleTryClick )
btnReset.addEventListener('click', handleResetClick)

//funções
function handleTryClick() {
  toggleScreen()
  let quotes = [
    {
      quote:"Comece onde você está, use o que você tem e faça o que você pode."
    },
    {
      quote:"Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
    },
    {
      quote:"Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado."

    },
    {
      quote:"Não importa que você vá devagar, contanto que você não pare."
    },
    {
      quote: "A inspiração existe, porém temos que encontrá-la trabalhando."
    },
    {
      quote: "Conhecer a si mesmo é o começo de toda sabedoria."
    },
    {
      quote: "Acredite em milagres, mas não dependa deles."
    },
    {
      quote: "Não é a carga que o derruba, mas a maneira como você a carrega."
    },
    {
      quote: "Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia."
    },
    {
      quote: "A vida é 10% o que acontece a você e 90% como você reage a isso."
    },
    {
      quote: "O otimismo é a fé daquele que conduz à realização; nada pode ser feito sem esperança."
    },

  ]

  let randomIndex = Math.floor(Math.random() * quotes.length)
  let randomQuote = quotes[randomIndex]

  btnQuote.textContent = randomQuote.quote;
}

function handleResetClick() {
  toggleScreen()
}

function toggleScreen() {
screen1.classList.toggle("hide")
screen2.classList.toggle("hide")

}