window.onload = function () {
    const buttons = document.querySelectorAll('button'); {
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                const dia = this.getAttribute('data-dia');
                
                switch (dia) {
                case "Segunda":
                    alert("Dia de cameça a semana com energia!");
                    break;
                    case "Terça":
                    alert("Hora de aprender coisas novas!");
                    break;
                    case "Quarta":
                    alert("Metade da semana,continue firme!");
                    break;
                    case "Quinta":
                    alert("Quase lá, um pouco mais de esforço!");
                    break;
                    case "Sexta":
                    alert("Dia de comemorar, o final de semana esta chegando!");
                    break;
                default:
                    alert("Final de semana! |Descanse e diverta-se!");
            }

            }

        }
    }
}
