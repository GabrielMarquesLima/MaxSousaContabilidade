document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.delay-link');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            var target = link.getAttribute('target'); // Obtém o atributo target

            var delayTime = 200; // Tempo de atraso em milissegundos (2 segundos neste exemplo)

            setTimeout(function () {
                if (target === '_blank') {
                    window.open(link.href); // Abre em uma nova aba/janela
                } else {
                    window.location.href = link.href; // Redireciona para o link após o atraso
                }
            }, delayTime);
        });
    });
});