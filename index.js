const botones = document.querySelectorAll('.mostrarImagenBtn');
    botones.forEach(function (boton) {
        boton.addEventListener('click', function () {
            let modalId = this.getAttribute('data-modal');
            let modal = document.getElementById(modalId);
            modal.style.display = 'block';

            window.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' || e.key === 'Esc') {
                    cerrarModal(modalId);
                }
            });
        });
    });

    // Función para cerrar el modal específico
    function cerrarModal(modalId) {
        let modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }