import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--secondary-color') // Usando o verde vibrante do tema relacionado à natureza
            }
        }
    ]

    const layout = { 
        plot_bgcolor: getCSS('--bg-color'), // Fundo do gráfico, claro como no tema animal
        paper_bgcolor: getCSS('--bg-color'), // Fundo do papel (do gráfico)
        title: {
            text: 'Plataformas de Animais Mais Famosos nos Últimos 5 Anos',
            x: 0,
            font: {
                color: getCSS('--primary-color'), // Cor do título
                size: 30,
                family: getCSS('--font') // Fonte do título
            }
        },
        xaxis: {
            tickfont: tickConfig, // Configuração da fonte para os ticks no eixo X
            title: {
                text: 'Espécies de Animais',
                font: {
                    color: getCSS('--secondary-color') // Cor do título do eixo X
                }
            }
        },
        yaxis: {
            tickfont: tickConfig, // Configuração da fonte para os ticks no eixo Y
            title: {
                text: 'Popularidade (em milhões)',
                font: {
                    color: getCSS('--secondary-color') // Cor do título do eixo Y
                }
            }
        }
    }

    // Criando o div para o gráfico
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)

    // Gerando o gráfico com Plotly
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuariosPorRede()
