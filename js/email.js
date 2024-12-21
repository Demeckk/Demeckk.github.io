// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa EmailJS con tu Public Key
    emailjs.init("tA5KdUr9leaCsdrRT");

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    const showMessage = (message, type) => {
        formStatus.textContent = message;
        formStatus.className = type;
        formStatus.style.display = 'block';

        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    };

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            submitButton.disabled = true;
            
            try {
                const templateParams = {
                    from_name: document.getElementById('name').value,
                    from_email: document.getElementById('email').value,
                    message: document.getElementById('message').value,
                };

                await emailjs.send(
                    'service_bt3akdi',
                    'template_nxabxot',
                    templateParams
                );

                showMessage('¡Mensaje enviado con éxito!', 'success');
                contactForm.reset();

            } catch (error) {
                console.error('Error:', error);
                showMessage('Error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');
            } finally {
                submitButton.disabled = false;
            }
        });
    } else {
        console.error('El formulario no fue encontrado');
    }
});