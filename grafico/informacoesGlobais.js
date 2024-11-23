const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function vizualizarInformacoesGlobais() {
    try {
        // Fazendo a requisição dos dados
        const res = await fetch(url);
        const dados = await res.json();

        // Convertendo valores para milhões (mais legível)
        const animaisProtegidos = (dados.animais_protegidos / 1e6).toFixed(2);
        const animaisNoMundo = (dados.animais_no_mundo / 1e6).toFixed(2);

        // Calculando a porcentagem de animais protegidos
        const porcentagemProtegida = ((animaisProtegidos / animaisNoMundo) * 100).toFixed(2);

        // Criando o parágrafo para exibição
        const paragrafo = document.createElement('p');
        paragrafo.classList.add('graficos-container__texto');
        paragrafo.innerHTML = `
            Você sabia que o mundo tem cerca de <span>${animaisNoMundo} milhões</span> de animais, 
            e que aproximadamente <span>${animaisProtegidos} milhões</span> estão protegidos em áreas de conservação? 🦁 
            Isso significa que cerca de <span>${porcentagemProtegida}%</span> das espécies estão vivendo sob proteção, 
            contribuindo para a preservação da biodiversidade e o equilíbrio do nosso planeta. 🌍🐾
        `;

        // Encontrando o container onde o parágrafo será inserido
        const container = document.getElementById('graficos-container');
        container.appendChild(paragrafo);

    } catch (error) {
        // Tratamento de erro
        console.error("Erro ao carregar os dados:", error);
        const erroParagrafo = document.createElement('p');
        erroParagrafo.classList.add('graficos-container__texto');
        erroParagrafo.innerHTML = "Desculpe, não conseguimos carregar as informações no momento. Tente novamente mais tarde. 🦒⚠";
        document.getElementById('graficos-container').appendChild(erroParagrafo);
    }
}
