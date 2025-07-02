const message = document.getElementById("message");
const optionsContainer = document.getElementById("options-container");
const startButton = document.getElementById("start-button");
const sceneImage = document.getElementById("scene-image");

let inventory = {
    ouro: 0
};

let cenasVisitadas = {};
let todasCenasComercialVisitadas = false;
let todasCenasInfraVisitadas = false;
let todasCenasTiMeninosVisitadas = false;
let todasCenasTiMeninasVisitadas = false;

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
        texto: "Após incontáveis dias lutando contra os bugs da entrada de Unioland, o nobre cavaleiro Matheus precisa completar uma missão importante: entregar o anel da rainha para a princesa e tomá-la em casamento. Para isso, ele terá que enfrentar a floresta densa do seu reino: a DataFlorest.",
        imagem: "src/imagens/forest.png",
        opcoes: [
            { texto: "Sair pelo portão do reino de Unioland", cena: "portao_reino" }
        ]
    },

    portao_reino: {
        texto: "Você se aproxima da saída do castelo de Unioland e encontra o guarda real, ele parece querer falar com você.",
        imagem: "src/imagens/castelo.png",
        opcoes: [
            { texto: "Falar com o guarda real", cena: "guarda_real" }
        ]
    },

    guarda_real:{
        texto: "OH nobre cavaleiro, há vários caminhos à frente que o levarão para diversos acampamentos onde fornecerão suprimentos para sua nova missão. Siga em frente e não os perca de vista. Boa sorte!",
        imagem: "src/imagens/cavaleiro_real.png",
        opcoes: [
            { texto: "Ir para o acampamento dos registros reais", cena: "cadastro"},
        ]
    },
    
    cadastro: {
        texto: "Você encontra duas guardiãs. Você se aproxima para falar com elas.",
        imagem: "src/imagens/guardias_cadastro.png",
        opcoes: [
            { texto: "Ouvir mensagem das guardiãs", cena: "presente_cadastro"}
        ]
    },

    presente_cadastro: {
        texto: "Oh nobre cavaleiro, parabéns por ganhar o coração da princesa! Desejamos muitas felicidades, companheirismo, união e amor para vocês dois. Que Deus seja sempre o alicerce do relacionamento de vocês. Aqui, aceite este presente.",
        imagem: "src/imagens/bag_coins.png",
        acoes: () => {
            if (!cenasVisitadas["presente_cadastro"]) {
                inventory.ouro += 100;
                cenasVisitadas["presente_cadastro"] = true;
            }
        },
         opcoes: [
            { texto: "Sair do acampamento dos registros reais", cena: "encontra_monica" },
         ]
    },

    encontra_monica: {
        texto: "Ao sair do acampamento dos registros reais, você entra na floresta e escuta um barulho. Você olha ao redor e encontra uma criatura mágica, ela parece querer falar com você.",
        imagem: "src/imagens/criatura_magica.png",
         opcoes: [
            { texto: "Falar com a criatura mágica", cena: "criatura_magica" }
         ]
    },

    criatura_magica: {
        texto: "Oh você é o nobre cavaleiro, conhecido como o Mano Matt, que felicidade esse momento! Que a vida com sua princesa seja imensa de muita união, de prosperidade, de diálogo, risadas e muita cumplicidade! Que Deus abençõe grandemente a jornada de vocês e que sejam imensamente felizes! Aqui, aceite este presente",
        imagem: "src/imagens/coin.png",
        acoes: () => {
            if (!cenasVisitadas["criatura_magica"]) {
                inventory.ouro += 20;
                cenasVisitadas["criatura_magica"] = true;
            }
        },
         opcoes: [
            { texto: "Avançar para o acampamento dos comerciantes de Unioland", cena: "comercial"},
         ]
    },

    comercial: {
        texto: "Após caminhar pela floresta, encontra um grupo de comerciantes. Você se aproxima para falar com eles.",
        imagem: "src/imagens/comerciantes.png",
        opcoes: [
            { texto: "Falar com a líder dos comerciantes", cena: "comercial_josana"},
            { texto: "Falar com o comerciante Marcus", cena: "comercial_marcus"}
        ]
    },

    comercial_josana: {
        texto: "A líder dos comerciantes se aproxima de você e se emociona ao dizer: Que alegria ver você dando esse passo tão importante! Que nunca falte amor, risadas, viagens inesperadas, DRs resolvidas com pizza e planos malucos a dois. Casar é dividir a vida — inclusive o controle remoto, o edredom e as séries favoritas. Que seja uma jornada incrível, cheia de parceria, leveza e muitos momentos inesquecíveis. Felicidades mil!",
        imagem: "src/imagens/comerciantes.png",
        acoes: () => {
        if (!cenasVisitadas["comercial_josana"]) {
            cenasVisitadas["comercial_josana"] = true;
            
            if (cenasVisitadas["comercial_marcus"]) {
                todasCenasComercialVisitadas = true;
            }
        }
    },
    opcoes: () => {
        const opcoes = [];
        
        if (!cenasVisitadas["comercial_marcus"]) {
            opcoes.push({ texto: "Falar com o comerciante Marcus", cena: "comercial_marcus" });
        }
        
        if (todasCenasComercialVisitadas) {
            opcoes.push({ texto: "Aceitar presente", cena: "presente_comercial" });
        } else if (opcoes.length === 0) {
            opcoes.push({ texto: "Continuar explorando", cena: "comercial" });
        }
        
        return opcoes;
    }
},

    comercial_marcus: {
        texto: "Nobre cavaleiro Math, desejo muito amor, companheirismo e uma vida cheia de momentos felizes para vocês. Aproveitem cada segundo dessa caminhada!'",
        imagem: "src/imagens/comerciantes.png",
        acoes: () => {
        if (!cenasVisitadas["comercial_marcus"]) {
            cenasVisitadas["comercial_marcus"] = true;
            
            if (cenasVisitadas["comercial_josana"]) {
                todasCenasComercialVisitadas = true;
            }
        }
    },
    opcoes: () => {
        const opcoes = [];
        
        if (!cenasVisitadas["comercial_josana"]) {
            opcoes.push({ texto: "Falar com a líder dos comerciantes", cena: "comercial_josana" });
        }
        
        if (todasCenasComercialVisitadas) {
            opcoes.push({ texto: "Aceitar presente", cena: "presente_comercial" });
        } else if (opcoes.length === 0) {
            opcoes.push({ texto: "Continuar explorando", cena: "comercial" });
        }
        
        return opcoes;
    }
},

    presente_comercial: {
        texto: "Você recebeu botas ágeis",
        imagem: "src/imagens/boots.png",
        opcoes: [
            { texto: "Avançar pelo caminho escuro da Dataflorest", cena: "encontra_fantasma" }
         ]
    },

    encontra_fantasma: {
        texto: "Você avança pelo caminho escuro da Dataflorest e encontra um fantasma. Ele parece querer falar com você.",
        imagem: "src/imagens/ghost.png",
        opcoes: [
            { texto: "Falar com os fantasmas", cena: "falar_fantasmas" }
         ]
    },

    falar_fantasmas: {
        texto: "Oh nobre cavaleiro, você está entrando em um caminho obscuro, mas não se preocupe tenho algo que irá te ajudar, mas antes quero que você saiba 'Ouvi sobre sua união com a princsesa e desejo muita felicidade e amor para vocês dois.' Aqui, aceite este presente.'",
        imagem: "src/imagens/ghost.png",
        opcoes: [
            { texto: "Receber armadura", cena: "presente_fantasmas" }
        ]
    },

    presente_fantasmas: {
        texto: "Você recebeu uma armadura mágica que irá te proteger dos perigos da Dataflorest.",
        imagem: "src/imagens/armadura.png",
        opcoes: [
            { texto: "Avançar para o acampamento dos magos digitais", cena: "infra" }
        ]
    },

    infra: {
        texto: "Você avista o acampamento dos magos digitais, você se sente em casa e começa a explocar a primeira tenda. Você encontra um grupo de magos rodeados de máquinas tecnologicas.",
        imagem: "src/imagens/infra.png",
        opcoes: [
            { texto: "Falar com o líder dos magos de infraestrutura", cena: "infra_luciano" },
            { texto: "Falar com o mago da barba", cena: "infra_wigori" },
            { texto: "Falar com o mago vegano", cena: "infra_diego"},
            { texto: "Falar com o mago da nova geração", cena: "infra_fernando"},
        ]
    },

    infra_luciano: {
        texto: "Oh nobre cavaleiro, à ti nossos votos de uma união feliz e duradoura, aqui receba este presente.",
        imagem: "src/imagens/coin.png",
        acoes: () => {
            if (!cenasVisitadas["infra_luciano"]) {
                inventory.ouro += 50;
                cenasVisitadas["infra_luciano"] = true;
            }
    },
        opcoes: () => {
            const opcoes = [
                { texto: "Falar com o mago da barba", cena: "infra_wigori" },
                { texto: "Falar com o mago vegano", cena: "infra_diego"},
                { texto: "Falar com o mago da nova geração", cena: "infra_fernando"},
            ];
            
            if (todasCenasInfraVisitadas) {
                opcoes.push({ texto: "Explorar próxima tenda", cena: "ti_meninos" });
            }
            
            return opcoes;
        },
    },

    infra_wigori: {
        texto: "Caro cavaleiro, parabéns! Desejo um casamento cheio de amor, cumplicidade e felicidade. Que a jornada a dois seja repleta de momentos inesquecíveis e que a união de vocês seja eterna. Aqui, aceite este presente.",
        imagem: "src/imagens/coin.png",
        acoes: () => {
            if (!cenasVisitadas["infra_wigori"]) {
                inventory.ouro += 50;
                cenasVisitadas["infra_wigori"] = true;
            }
    },
        opcoes: () => {
            const opcoes = [
                { texto: "Falar com o mago vegano", cena: "infra_diego"},
                { texto: "Falar com o mago da nova geração", cena: "infra_fernando"},
            ];
            
            if (todasCenasInfraVisitadas) {
                opcoes.push({ texto: "Explorar próxima tenda", cena: "ti_meninos"  });
            }
            
            return opcoes;
        },
    },

    infra_diego: {
        texto: "Caro cavaleiro, aproveite muito cada momento e etapa desse ciclo e que o relacionamento de vcs seja sempre repleto de alegria e sonhos realizados. Você merece, aceite este presente.",
        imagem: "src/imagens/coin.png",
        acoes: () => {
            if (!cenasVisitadas["infra_diego"]) {
                inventory.ouro += 10;
                cenasVisitadas["infra_diego"] = true;
            }
    },
        opcoes: () => {
            const opcoes = [
                { texto: "Falar com o mago da nova geração", cena: "infra_fernando"},
            ];
            
            if (todasCenasInfraVisitadas) {
                opcoes.push({ texto: "Explorar próxima tenda", cena: "ti_meninos"  });
            }
            
            return opcoes;
        },
    },

    infra_fernando: {
        texto: "Caro cavaleiro, aproveite muito cada momento e etapa desse ciclo e que o relacionamento de vcs seja sempre repleto de alegria e sonhos realizados. Você merece, aceite este presente.",
        imagem: "src/imagens/coin.png",
        acoes: () => {
            if (!cenasVisitadas["infra_fernando"]) {
                inventory.ouro += 30;
                cenasVisitadas["infra_fernando"] = true;
            }
        },
        opcoes: [
        { texto: "Explorar próxima tenda", cena: "ti_meninos"  }
        ],
    },

    ti_meninos: {
        texto: "Você avista um local com um grupo de magos. Eles estão te esperando. Parece que cada um deseja falar com você.",
        imagem: "src/imagens/magos_homens.png",
        opcoes: [
            { texto: "Falar com o mago do desenvolvimento", cena: "presente_gusta"},
            { texto: "Falar com o mago do python", cena: "presente_wagner"},
            { texto: "Falar com o mago dos negócios", cena: "presente_gui"},
        ]
    },

    presente_gusta: {
        texto: "Oh nobre cavaleiro, seja bem vindo de volta! Soubemos sobre o noivado...desejo tuudo de bom nessa nova fase, que Deus te acompanhe em cada decisão, em cada batalha e te desejo muuuuitas felicidades nesse novo ciclo! Aceite este presente.",
        imagem: "src/imagens/mana_potion.png",
        acoes: () => {
            if (!cenasVisitadas["presente_gusta"]) {
                cenasVisitadas["presente_gusta"] = true;
                if (cenasVisitadas["presente_wagner"] && cenasVisitadas["presente_gui"]) {
                    todasCenasTiMeninosVisitadas = true;
                }
            }
        },
        opcoes: () => {
            const opcoes = [];
            
            if (!cenasVisitadas["presente_wagner"]) {
                opcoes.push({ texto: "Falar com o mago do python", cena: "presente_wagner"});
            }
            
            if (!cenasVisitadas["presente_gui"]) {
                opcoes.push({ texto: "Falar com o mago dos negócios", cena: "presente_gui"});
            }
            
            if (todasCenasTiMeninosVisitadas) {
                opcoes.push({ texto: "Continuar explorando o acampamento", cena: "ti_meninas" });
            } else if (opcoes.length === 0) {
                opcoes.push({ texto: "Voltar", cena: "ti_meninos" });
            }
            
            return opcoes;
        }
    },

    presente_wagner: {
        texto: "Oh nobre cavaleiro, que esta nova jornada seja repleta de alegrias e conquistas! Que vocês construam uma história linda juntos, cheia de amor e compreensão. Aceite este presente.",
        imagem: "src/imagens/potion.png",
        acoes: () => {
            if (!cenasVisitadas["presente_wagner"]) {
                cenasVisitadas["presente_wagner"] = true;
                if (cenasVisitadas["presente_gusta"] && cenasVisitadas["presente_gui"]) {
                    todasCenasTiMeninosVisitadas = true;
                }
            }
        },
        opcoes: () => {
            const opcoes = [];
            
            if (!cenasVisitadas["presente_gusta"]) {
                opcoes.push({ texto: "Falar com o mago do desenvolvimento", cena: "presente_gusta"});
            }
            
            if (!cenasVisitadas["presente_gui"]) {
                opcoes.push({ texto: "Falar com o mago dos negócios", cena: "presente_gui"});
            }
            
            if (todasCenasTiMeninosVisitadas) {
                opcoes.push({ texto: "Continuar explorando o acampamento", cena: "ti_meninas" });
            } else if (opcoes.length === 0) {
                opcoes.push({ texto: "Voltar", cena: "ti_meninos" });
            }
            
            return opcoes;
        }
    },

    presente_gui: {
        texto: "Oh nobre cavaleiro, que esta união seja abençoada e repleta de momentos felizes! Desejo a vocês uma vida de harmonia e realizações. Aceite este presente.",
        imagem: "src/imagens/sword.png",
        acoes: () => {
            if (!cenasVisitadas["presente_gui"]) {
                cenasVisitadas["presente_gui"] = true;
                if (cenasVisitadas["presente_gusta"] && cenasVisitadas["presente_wagner"]) {
                    todasCenasTiMeninosVisitadas = true;
                }
            }
        },
        opcoes: () => {
            const opcoes = [];
            
            if (!cenasVisitadas["presente_gusta"]) {
                opcoes.push({ texto: "Falar com o mago do desenvolvimento", cena: "presente_gusta"});
            }
            
            if (!cenasVisitadas["presente_wagner"]) {
                opcoes.push({ texto: "Falar com o mago do python", cena: "presente_wagner"});
            }
            
            if (todasCenasTiMeninosVisitadas) {
                opcoes.push({ texto: "Continuar explorando o acampamento", cena: "ti_meninas" });
            } else if (opcoes.length === 0) {
                opcoes.push({ texto: "Voltar", cena: "ti_meninos" });
            }
            
            return opcoes;
        }
    },

    ti_meninas: {
        texto: "Você caminha pelo acampamento e encontra a tenda mais aconchegante do acampamento, nela você encontra as magas da Dataflorest... Elas estão te esperando e parece que cada uma deseja falar com você.",
        imagem: "src/imagens/magas_ti.png",
        opcoes: () => {
            const opcoes = [];
            
            if (!cenasVisitadas["presente_my"]) {
                opcoes.push({ texto: "Falar com a maga dos testes", cena: "presente_my"});
            }
            
            if (!cenasVisitadas["presente_lari"]) {
                opcoes.push({ texto: "Falar com a maga dos dados", cena: "presente_lari"});
            }
            
            if (!cenasVisitadas["presente_jaque"]) {
                opcoes.push({ texto: "Falar com a maga da fortuna", cena: "presente_jaque"});
            }
            
            if (todasCenasTiMeninasVisitadas) {
                opcoes.push({ texto: "Seguir para o centro da floresta", cena: "encontro_dragao" });
            } else if (opcoes.length === 0) {
                opcoes.push({ texto: "Voltar", cena: "ti_meninas" });
            }
            
            return opcoes;
        }
    },

    presente_my: {
        texto: "Oh nobre cavaleiro, passamos todos esses anos juntos e agora você está prestes a tomar a princesa em casamento. Que alegria, Deus ama casamentos! Desejo que a união de vocês seja saudável, cheia de amor, cumplicidade e respeito mútuo... Aqui, aceite este presente.",
        imagem: "src/imagens/coin.png",
        acoes: () => {
            if (!cenasVisitadas["presente_my"]) {
                inventory.ouro += 50;
                cenasVisitadas["presente_my"] = true;
                if (cenasVisitadas["presente_lari"] && cenasVisitadas["presente_jaque"]) {
                    todasCenasTiMeninasVisitadas = true;
                }
            }
        },
        opcoes: () => {
            const opcoes = [];
            
            if (!cenasVisitadas["presente_lari"]) {
                opcoes.push({ texto: "Falar com a maga dos dados", cena: "presente_lari"});
            }
            
            if (!cenasVisitadas["presente_jaque"]) {
                opcoes.push({ texto: "Falar com a maga da fortuna", cena: "presente_jaque"});
            }
            
            if (todasCenasTiMeninasVisitadas) {
                opcoes.push({ texto: "Seguir para o centro da floresta", cena: "encontro_dragao" });
            } else if (opcoes.length === 0) {
                opcoes.push({ texto: "Voltar", cena: "ti_meninas" });
            }
            
            return opcoes;
        }
    },

    presente_lari: {
        texto: "Oh nobre cavaleiro, que seu casamento seja repleto de dados de felicidade! Desejo que cada dia seja um novo registro de amor no banco de dados do seu relacionamento. Aceite este presente.",
        imagem: "src/imagens/bag_coins.png",
        acoes: () => {
            if (!cenasVisitadas["presente_lari"]) {
                inventory.ouro += 100;
                cenasVisitadas["presente_lari"] = true;
                if (cenasVisitadas["presente_my"] && cenasVisitadas["presente_jaque"]) {
                    todasCenasTiMeninasVisitadas = true;
                }
            }
        },
        opcoes: () => {
            const opcoes = [];
            
            if (!cenasVisitadas["presente_my"]) {
                opcoes.push({ texto: "Falar com a maga dos testes", cena: "presente_my"});
            }
            
            if (!cenasVisitadas["presente_jaque"]) {
                opcoes.push({ texto: "Falar com a maga da fortuna", cena: "presente_jaque"});
            }
            
            if (todasCenasTiMeninasVisitadas) {
                opcoes.push({ texto: "Seguir para o centro da floresta", cena: "encontro_dragao" });
            } else if (opcoes.length === 0) {
                opcoes.push({ texto: "Voltar", cena: "ti_meninas" });
            }
            
            return opcoes;
        }
    },

    presente_jaque: {
        texto: "Oh nobre cavaleiro, leio nas estrelas que seu futuro será repleto de felicidade! Que a sorte sempre esteja ao lado de vocês nesta nova jornada. Aceite este presente.",
        imagem: "src/imagens/bag_coins.png",
        acoes: () => {
            if (!cenasVisitadas["presente_jaque"]) {
                inventory.ouro += 100;
                cenasVisitadas["presente_jaque"] = true;
                if (cenasVisitadas["presente_my"] && cenasVisitadas["presente_lari"]) {
                    todasCenasTiMeninasVisitadas = true;
                }
            }
        },
        opcoes: () => {
            const opcoes = [];
            
            if (!cenasVisitadas["presente_my"]) {
                opcoes.push({ texto: "Falar com a maga dos testes", cena: "presente_my"});
            }
            
            if (!cenasVisitadas["presente_lari"]) {
                opcoes.push({ texto: "Falar com a maga dos dados", cena: "presente_lari"});
            }
            
            if (todasCenasTiMeninasVisitadas) {
                opcoes.push({ texto: "Seguir para o centro da floresta", cena: "encontro_dragao" });
            } else if (opcoes.length === 0) {
                opcoes.push({ texto: "Voltar", cena: "ti_meninas" });
            }
            
            return opcoes;
        }
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
        texto: "Você utiliza um ataque mágico poderoso e derrota o dragão! Enquanto o dragão cai você visualiza um brilho dentro do covil. O que você deseja fazer?",
        imagem: "src/imagens/vitoria.png",
        opcoes: [
            { texto: "Olhar o dragão derrotado", cena: "encontra_anel" },
            { texto: "Se aproximar do covil", cena: "saquear_tesouro" },
        ]
    },

    encontra_anel: {
        texto: "Você se aproxima do dragão derrotado e encontra um anel mágico em seu pescoço. Você o pega, é o anel da princesa!",
        imagem: "src/imagens/ring.png",
        opcoes: [
            { texto: "Entrar no covil", cena: "saquear_tesouro" },
        ]
    },

    saquear_tesouro: {
        texto: () => {
            return `Você entra no covil e quando menos espera encontra um baú com ${inventory.ouro} moedas de ouro. Você coleta essas moedas e guarda em sua mochila.`;
        },
        imagem: "src/imagens/bau.png",
        opcoes: [
            { texto: "Encontrar à princesa", cena: "final" }
        ]
    },

    final: {
        texto: "Você chega ao castelo. A princesa o espera ansiosamente. Matheus, você completou sua missão! Com coragem e coração, atravessou toda a floresta. Agora vá, entregue o anel e viva seu felizes para sempre!",
        imagem: "src/imagens/princesa.png",
    }
};

function mostrarCena(id) {
    const cena = cenas[id];
    
    if (cena.acoes) {
        cena.acoes();
    }

    message.innerText = typeof cena.texto === "function" ? cena.texto() : cena.texto;
    sceneImage.src = cena.imagem;
    optionsContainer.innerHTML = "";

    atualizarInventario();

    if (cena.opcoes) {
        const opcoes = typeof cena.opcoes === "function" ? cena.opcoes() : cena.opcoes;
        
        opcoes.forEach(opcao => {
            const button = document.createElement("button");
            button.innerText = opcao.texto;
            button.onclick = () => mostrarCena(opcao.cena);
            optionsContainer.appendChild(button);
        });
    }
}