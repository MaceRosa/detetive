document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento de clique a todos os labels
    document.querySelectorAll('label').forEach(label => {
        label.addEventListener('click', function() {
            // Adiciona ou remove a classe 'selected' do label clicado
            this.classList.toggle('selected');
        });
    });

    // Adiciona evento de clique ao botão de reset
    document.getElementById('reset').addEventListener('click', function() {
        // Remove a classe 'selected' de todos os labels
        document.querySelectorAll('label').forEach(label => {
            label.classList.remove('selected');
        });
    });
});
