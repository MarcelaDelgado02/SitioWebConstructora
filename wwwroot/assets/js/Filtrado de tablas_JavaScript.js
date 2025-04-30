jsTablaFiltrado = {

    objetos: {
        

    },
    controles: {

        

    },

    botones: {


    },

    variables: {




    },
    metodos: {




    },
    eventos:
        function () {

            $(jslogin.botones.btnIniciarSesion).on('click', function () {

                jslogin.metodos.IniciarSesion();

            });


        }

}

$(function () {
    jslogin.eventos();
});