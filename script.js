/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener('DOMContentLoaded', function() {
    // Manejar el clic en el botón de búsqueda
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', function() {
        alert('Funcionalidad de búsqueda no implementada en este ejemplo.');
    });

    // Manejar el clic en el botón de chat
    const chatBtn = document.querySelector('.chat-btn');
    chatBtn.addEventListener('click', function() {
        alert('Funcionalidad de chat no implementada en este ejemplo.');
        // Remover la notificación después de hacer clic
        const notification = chatBtn.querySelector('.notification');
        if (notification) {
            notification.remove();
        }
    });

    // Añadir efecto hover a los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#ff6600';
        });
        link.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to your server
        console.log('Form data:', data);
        
        // Show success message
        alert('Gracias por tu interés. Nos pondremos en contacto contigo pronto.');
        form.reset();
    });

    function validateForm() {
        let isValid = true;
        
        // Validate email format
        const email = document.getElementById('correo').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            isValid = false;
        }

        // Validate phone number (Colombian format)
        const phone = document.getElementById('celular').value;
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Por favor, ingresa un número de celular válido (10 dígitos).');
            isValid = false;
        }

        // Validate document number
        const document = document.getElementById('documento').value;
        if (document.length < 8) {
            alert('Por favor, ingresa un documento de identidad válido.');
            isValid = false;
        }

        // Validate policy checkbox
        const policy = document.getElementById('politica');
        if (!policy.checked) {
            alert('Debes aceptar la política de protección de datos personales.');
            isValid = false;
        }

        return isValid;
    }

    // Add floating labels effect
    const inputs = document.querySelectorAll('.form-group input, .form-group select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});

