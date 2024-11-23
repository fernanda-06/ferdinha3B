// Função para obter o valor de uma variável CSS definida no :root
const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body);
    const value = bodyStyles.getPropertyValue(variavel);
    return value ? value.trim() : ''; // Retorna o valor sem espaços extras
}

// Configuração para o gráfico (ou qualquer outro componente visual)
const tickConfig = {
    family: getCSS('--font-title') || 'Montserrat, sans-serif', // Usando a fonte moderna e versátil
    size: 16,  // Tamanho da fonte do eixo
    color: getCSS('--accent-color') || '#FF7043', // Usando a cor laranja suave, representando a natureza
    fontStyle: 'normal', // Estilo da fonte, pode ser ajustado conforme necessário
}

// Exportando as funções e as configurações
export { getCSS, tickConfig };
