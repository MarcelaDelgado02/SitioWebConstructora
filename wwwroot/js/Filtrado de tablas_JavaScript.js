jsTablaFiltrado = {
    objetos: {},
    controles: {
        TbDoc: "#TbDoc"
    },
    botones: {},
    variables: {},
    metodos: {
        IniciarDataTableDocs: function () {
            $(jsTablaFiltrado.controles.TbDoc).DataTable({

                paging: false,
                searching: true,
                ordering: true,
                info: false,
                pageLength: 1,
                lengthMenu: [[2, 8, 14], [1, 2, 3]],
                language: {
                    search: "&nbsp Buscar bonos:&nbsp;"  
                   
                },
            });
        }
    },
    eventos: {} 
};

$(function () {
    jsTablaFiltrado.metodos.IniciarDataTableDocs();
});