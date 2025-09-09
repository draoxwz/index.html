/**
 * Arquivo: script.js
 * Descrição: Lógica para capturar e salvar dados de um formulário no Local Storage.
 */

// Obtém o formulário e o botão do HTML usando seus IDs
const chatForm = document.getElementById('chatForm');
const enterBtn = document.getElementById('enterBtn');

// Adiciona um 'event listener' ao botão 'Enter' para lidar com o clique
enterBtn.addEventListener('click', (event) => {
    // 1. Previne o comportamento padrão de recarregar a página ao submeter o formulário
    event.preventDefault();

    // 2. Captura os valores digitados nos campos do formulário
    const urlInput = document.getElementById('url');
    const emailInput = document.getElementById('email');
    const nicknameInput = document.getElementById('nickname');

    const url = urlInput.value;
    const email = emailInput.value;
    const nickname = nicknameInput.value;

    // 3. Cria um objeto com os dados capturados
    const chatData = {
        url: url,
        email: email,
        nickname: nickname
    };

    // 4. Salva o objeto no Local Storage
    try {
        localStorage.setItem('chatUserData', JSON.stringify(chatData));
        
        // 5. Exibe uma mensagem de sucesso no console do navegador
        console.log('Dados salvos com sucesso no Local Storage!');
        console.log('Dados salvos:', chatData);

    } catch (e) {
        console.error('Erro ao salvar os dados no Local Storage:', e);
    }
});