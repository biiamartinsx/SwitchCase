window.onload = function () {
    const buttons = document.querySelectorAll('button');
    const mensagemDiv = document.getElementById('mensagem');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const dia = this.getAttribute('data-dia');
            let mensagem = '';
            switch (dia) {
                case "Segunda":
                    mensagem = ("Dia de cameça a semana com energia!");
                    break;
                    case "Terça":
                    mensagem = "Hora de aprender coisas novas!";
                    break;
                    case "Quarta":
                    mensagem = "Metade da semana,continue firme!";
                    break;
                    case "Quinta":
                    mensagem = "Quase lá, um pouco mais de esforço!";
                    break;
                    case "Sexta":
                    mensagem = "Dia de comemorar, o final de semana esta chegando!";
                    break;
                default:
    mensagem = "Final de semana! |Descanse e diverta-se!";
}
mensagemDiv.textContent = mensagem;
        });
    });
};
