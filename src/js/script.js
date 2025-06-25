const message = document.getElementById("message");
const optionsContainer = document.getElementById("options-container");
const startButton = document.getElementById("start-button");
const sceneImage = document.getElementById("scene-image");

let inventory = {
    ouro: 0
};

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    startGame();
});

function startGame() {
    mostrarCena("inicio");
}

function atualizarInventario() {
  document.getElementById("ouro").textContent = inventory.ouro;
}

const cenas = {
    inicio: {
        texto: "Após incontáveis dias lutando contra os bugs da entrada de Unioland, o nobre cavaleiro Matheus recebeu a sua tão desejada missão: entregar o anel da rainha para a princesa e tomá-la em casamento. Para isso, ele terá que enfrentar a floresta densa do seu reino: a DataFlorest. O guarda se aproxima do cavaleiro Matheus e fala: 'OH nobre cavaleiro, há três caminhos à frente que o levarão para diversos acampamentos onde fornecerão suprimentos para sua nova missão. Escolha um caminho para seguir:",
        imagem: "src/imagens/forest.png",
        opcoes: [
            { texto: "Ir para o acampamento dos registros reais", cena: "cadastro"},
            { texto: "Ir para o acampamento dos comerciantes de Unioland", cena: "comercial"},
            { texto: "Ir para o acampamento dos magos digitais", cena: "ti"},
        ]
    },

    cadastro: {
        texto: "Você encontra duas guardiãs. Você se aproxima para falar com elas.",
        imagem: "src/imagens/guardias_cadastro.png",
        opcoes: [
            { texto: "Falar com as guardiãs", cena: "presente_cadastro"}
        ]
    },

    presente_cadastro: {
        texto: "Oh nobre cavaleiro, ['Digitar mensagem do cadastro']. Aqui, aceite este presente.",
        imagem: "src/imagens/bag_coins.png",
        acoes: () => {
            inventory.ouro += 100;
         },
         opcoes: [
            { texto: "Ir para o acampamento dos comerciantes de Unioland", cena: "comercial"},
            { texto: "Ir para o acampamento dos magos digitais", cena: "ti"},
         ]
    },

    comercial: {
        texto: "Você encontra um grupo de comerciantes. Você se aproxima para falar com eles.",
        imagem: "src/imagens/comerciantes.png",
        opcoes: [
            { texto: "Falar com os comerciantes", cena: "presente_comercial"}
        ]
    },

    presente_comercial: {
        texto: "Oh nobre cavaleiro, ['Digitar mensagem do comercial']. Aqui, aceite este presente.",
        imagem: "src/imagens/boots.png",
        opcoes: [
            { texto: "Ir para o acampamento dos magos digitais", cena: "ti"},
         ]
    },

    ti: {
        texto: "Você avista um local com um grupo de magos. Eles estão te esperando. Parece que cada um deseja falar com você.",
        imagem: "src/imagens/magos3.png",
        opcoes: [
            { texto: "Falar com o mago do desenvolvimento", cena: "presente_gusta"},
            { texto: "Falar com a maga dos testes", cena: "presente_my"},
            { texto: "Falar com a líder dos magos", cena: "presente_thalia"},
            { texto: "Falar com a maga dos dados", cena: "presente_lari"},
            { texto: "Falar com o mago do python", cena: "presente_wagner"},
            { texto: "Falar com o mago dos negócios", cena: "presente_gui"},
            { texto: "Falar com a maga da fortuna", cena: "presente_jaque"},
        ]
    },

    presente_gusta: {
        texto: "Oh nobre cavaleiro, ['Digitar mensagem do gusta']. Aqui, aceite este presente.",
        imagem: "src/imagens/mana_potion.png",
        opcoes: [
            { texto: "Falar com a maga dos testes", cena: "presente_my"},
            { texto: "Falar com a líder dos magos", cena: "presente_thalia"},
            { texto: "Falar com a maga dos dados", cena: "presente_lari"},
            { texto: "Falar com o mago do python", cena: "presente_wagner"},
            { texto: "Falar com o mago dos negócios", cena: "presente_gui"},
            { texto: "Falar com a maga da fortuna", cena: "presente_jaque"},
        ]
    },

    presente_my: {
        texto: "Oh nobre cavaleiro, ['Digitar mensagem da my']. Aqui, aceite este presente.",
        imagem: "src/imagens/coin.png",
        opcoes: [
            { texto: "Falar com o mago do desenvolvimento", cena: "presente_gusta"},
            { texto: "Falar com a líder dos magos", cena: "presente_thalia"},
            { texto: "Falar com a maga dos dados", cena: "presente_lari"},
            { texto: "Falar com o mago do python", cena: "presente_wagner"},
            { texto: "Falar com o mago dos negócios", cena: "presente_gui"},
            { texto: "Falar com a maga da fortuna", cena: "presente_jaque"},
        ]
    },

    presente_thalia: {
        texto: "Oh nobre cavaleiro, ['Digitar mensagem da thalia']. Aqui, aceite este presente.",
        imagem: "src/imagens/bag_coins.png",
        acoes: () => {
            inventory.ouro += 100;
        },
        opcoes: [
           { texto: "Falar com o mago do desenvolvimento", cena: "presente_gusta"},
            { texto: "Falar com a maga dos testes", cena: "presente_my"},
            { texto: "Falar com a maga dos dados", cena: "presente_lari"},
            { texto: "Falar com o mago do python", cena: "presente_wagner"},
            { texto: "Falar com o mago dos negócios", cena: "presente_gui"},
            { texto: "Falar com a maga da fortuna", cena: "presente_jaque"},
        ]
    },

    presente_lari: {
        texto: "Oh nobre cavaleiro, ['Digitar mensagem da lari']. Aqui, aceite este presente.",
        imagem: "src/imagens/bag_coins.png",
        acoes: () => {
            inventory.ouro += 100;
        },
        opcoes: [
            { texto: "Falar com o mago do desenvolvimento", cena: "presente_gusta"},
            { texto: "Falar com a maga dos testes", cena: "presente_my"},
            { texto: "Falar com a líder dos magos", cena: "presente_thalia"},
            { texto: "Falar com o mago do python", cena: "presente_wagner"},
            { texto: "Falar com o mago dos negócios", cena: "presente_gui"},
            { texto: "Falar com a maga da fortuna", cena: "presente_jaque"},
        ]
    },

    presente_wagner: {
        texto: "Oh nobre cavaleiro, ['Digitar mensagem do wagner']. Aqui, aceite este presente.",
        imagem: "src/imagens/potion.png",
        opcoes: [
            { texto: "Falar com o mago do desenvolvimento", cena: "presente_gusta"},
            { texto: "Falar com a maga dos testes", cena: "presente_my"},
            { texto: "Falar com a líder dos magos", cena: "presente_thalia"},
            { texto: "Falar com a maga dos dados", cena: "presente_lari"},
            { texto: "Falar com o mago dos negócios", cena: "presente_gui"},
            { texto: "Falar com a maga da fortuna", cena: "presente_jaque"},
        ]
    },

    presente_gui: {
        texto: "Oh nobre cavaleiro, ['Digitar mensagem do gui']. Aqui, aceite este presente.",
        imagem: "src/imagens/sword.png",
        opcoes: [
            { texto: "Falar com o mago do desenvolvimento", cena: "presente_gusta"},
            { texto: "Falar com a maga dos testes", cena: "presente_my"},
            { texto: "Falar com a líder dos magos", cena: "presente_thalia"},
            { texto: "Falar com a maga dos dados", cena: "presente_lari"},
            { texto: "Falar com o mago do python", cena: "presente_wagner"},
            { texto: "Falar com a maga da fortuna", cena: "presente_jaque"},
        ]
    },

    presente_jaque: {
        texto: "Oh nobre cavaleiro, ['Digitar mensagem da jaque']. Aqui, aceite este presente.",
        imagem: "src/imagens/bag_coins.png",
        acoes: () => {
            inventory.ouro += 100;
        },
        opcoes: [
            { texto: "Falar com o mago do desenvolvimento", cena: "presente_gusta"},
            { texto: "Falar com a maga dos testes", cena: "presente_my"},
            { texto: "Falar com a líder dos magos", cena: "presente_thalia"},
            { texto: "Falar com a maga dos dados", cena: "presente_lari"},
            { texto: "Falar com o mago do python", cena: "presente_wagner"},
            { texto: "Seguir para o centro da floresta", cena: "encontro_dragao" },
        ]
    },

    encontro_dragao: {
        texto: "Você chega ao centro da floresta e encontra um dragão feroz. Ele está guardando o covil, o dragão ruge e se prepara para atacar!",
        imagem: "src/imagens/dragon.png",
        opcoes: [
            { texto: "Utilizar botas de agilidade para desviar do ataque", cena: "desviar_dano"},
            { texto: "Tentar acerto com a espada mística", cena: "atacar_dragao"},
            { texto: "Utilizar ataque mágico", cena: "ataque_magico" },
        ]
    },

    desviar_dano: {
        texto: "Você consegue desviar do ataque do dragão, mas ele fica furioso e ataca novamente. Você perde 20 de vida.",
        imagem: "src/imagens/sofreu_dano.png",
        opcoes: [
            { texto: "Tentar acerto com a espada mística", cena: "atacar_dragao" },
            { texto: "Utilizar ataque mágico", cena: "ataque_magico" },
        ]
    },

    atacar_dragao: {
        texto: "Você tenta acertar o dragão com a espada mística e acerta o golpe! O dragão grita de dor, mas ainda está de pé.",
        imagem: "src/imagens/dragon.png",
        opcoes: [
            { texto: "Utilizar ataque mágico", cena: "ataque_magico" },
            { texto: "Utilizar poção de vida", cena: "usar_pocao_vida" },
        ]
    },

    usar_pocao_vida: {
        texto: "Você utiliza a poção de vida e recupera 20 de vida.",
        imagem: "src/imagens/barra_vida.png",
        opcoes: [
            { texto: "Utilizar ataque mágico", cena: "ataque_magico" },
        ]
    },
    ataque_magico: {
        texto: "Você utiliza um ataque mágico poderoso e derrota o dragão!",
        imagem: "src/imagens/vitoria.png",
        opcoes: [
            { texto: "Saquear tesouro no covil do dragão", cena: "saquear_tesouro" },
        ]
    },

    saquear_tesouro: {
    texto: () => {
        return `Matheus derrota o monstro! Ele encontra um baú com ${inventory.ouro} moedas de ouro. Hora de entregá-lo à princesa!`;
    },
        imagem: "src/imagens/ring.png",
        opcoes: [
            { texto: "Encontrar à princesa", cena: "final" }
        ]
    },

    final: {
        texto: "Você chega ao castelo. A princesa o espera ansiosamente. Matheus, você completou sua missão! Com coragem e coração, atravessou toda a floresta. Agora, entregue o anel e viva seu felizes para sempre!",
        imagem: "src/imagens/princesa.jpg",
        opcoes: [
            { texto: "Jogar novamente", cena: "inicio" }
        ]
  }
};

function mostrarCena(id) {
    const cena = cenas[id];
    if(cena.acoes) cena.acoes();

    message.innerText = typeof cena.texto === "function" ? cena.texto() : cena.texto;
    sceneImage.src = cena.imagem;
    optionsContainer.innerHTML = "";

    atualizarInventario();

    cena.opcoes.forEach(opcao => {
        const button = document.createElement("button");
        button.innerText = opcao.texto;
        button.onclick = () => mostrarCena(opcao.cena);
        optionsContainer.appendChild(button);
    });
}