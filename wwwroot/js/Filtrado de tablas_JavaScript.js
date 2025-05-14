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
                    search: "&nbsp;Buscar bonos:&nbsp;",
                    zeroRecords: "Hola, no encontramos resultados con esos filtros", // Mensaje personalizado
                    emptyTable: " Bono no encontrado: Verifique el nombre " // Mensaje cuando no hay datos iniciales
                }
            });
        }
    },
    eventos: {} 
};

$(function () {
    jsTablaFiltrado.metodos.IniciarDataTableDocs();
});