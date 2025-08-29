const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que o futuro será mais tecnológico ou mais sustentável??",
        alternativas: [
            {
                texto: "Tecnológico!",
                afirmacao: "A tecnologia avançando em ritmo acelerado vai transformar completamente o modo como vivemos. "
            },
            {
                texto: "Sustentável!",
                afirmacao: "O futuro precisa ser voltado para a preservação do meio ambiente, com soluções mais ecológicas e responsáveis."
            }
        ]
    },
    {
        enunciado: "Você acredita que o trabalho remoto será a norma no futuro??",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "A flexibilidade de trabalhar de qualquer lugar vai se tornar cada vez mais comum, permitindo mais equilíbrio entre vida pessoal e profissional."
            },
            {
                texto: "Não.",
                afirmacao: "A interação presencial e o ambiente de escritório ainda são importantes para a criatividade e colaboração em equipes."
            }
        ]
    },
    {
        enunciado: "Você preferiria viver em uma cidade futurista ou no campo?",
        alternativas: [
            {
                texto: "Cidade futurista.",
                afirmacao: "A conveniência e as tecnologias avançadas de uma cidade futurista são atraentes para quem gosta de inovação."
            },
            {
                texto: "Campo",
                afirmacao: "A tranquilidade e o contato com a natureza do campo podem ser ideais para quem busca um estilo de vida mais simples e pacífico."
            }
        ]
    },
    {
        enunciado: "Você acha que a inteligência artificial terá mais impacto na educação ou na medicina?",
        alternativas: [
            {
                texto: "Educação.",
                afirmacao: "A IA pode personalizar o aprendizado e tornar a educação mais acessível e eficaz para todos."
            },
            {
                texto: "Medicina",
                afirmacao: "Com a IA, podemos ver avanços significativos em diagnósticos rápidos e tratamentos mais precisos"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();