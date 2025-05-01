var jsResponsiveNav = {
    objetos: {},
    controles: {
        navToggle: '.responsive-nav .nav-toggle',
        navMenu: '.responsive-nav .nav-menu'
    },
    botones: {},
    variables: {
        isOpen: false
    },
    metodos: {
        /**
         * Inicializa la navegación responsiva: 
         * - Controla el toggle del menú
         * - Alinea el menú a la izquierda cuando se despliega
         */
        InitResponsiveNav: function () {
            var self = this;
            var $btn = $(self.controles.navToggle);
            var $menu = $(self.controles.navMenu);
            var $iconOpen = $btn.find('.icon-expand');
            var $iconClose = $btn.find('.icon-close');

            // Al clicar el botón hamburguesa
            $btn.on('click', function () {
                self.variables.isOpen = !self.variables.isOpen;
                $menu.toggleClass('open', self.variables.isOpen);

                // Mostrar/ocultar íconos
                $iconOpen.toggle(!self.variables.isOpen);
                $iconClose.toggle(self.variables.isOpen);

                // Alinear menú a la izquierda
                if (self.variables.isOpen) {
                    $menu.css({
                        'text-align': 'left',
                        'padding-left': '1rem'
                    });
                } else {
                    // Opcional: limpiar estilos inline al cerrarse
                    $menu.css({
                        'text-align': '',
                        'padding-left': ''
                    });
                }
            });
        }
    },
    eventos: {
        /**  
         * Registra todos los eventos necesarios al cargar la página
         */
        Registrar: function () {
            jsResponsiveNav.metodos.InitResponsiveNav();
        }
    }
};

// Al cargar documento
$(function () {
    jsResponsiveNav.eventos.Registrar();
});
