document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. CONTROLE DE ABAS SPA (SINGLE PAGE APPLICATION)
       ========================================================================== */
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link, .footer-nav-link');
    const header = document.querySelector('.header');

    function navigateToSection(targetId) {
        // Encontra a seção correspondente
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return;

        // Fecha o menu mobile caso esteja aberto
        const navMenu = document.getElementById('main-navigation');
        const menuToggle = document.getElementById('menu-toggle');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }

        // Remove active class de todas as seções e esconde
        sections.forEach(section => {
            section.classList.remove('section-active');
        });

        // Mostra a seção alvo com animação
        targetSection.classList.add('section-active');
        
        // Atualiza a navegação ativa
        navLinks.forEach(link => {
            if (link.getAttribute('data-section') === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Rola até o topo de forma suave
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Configura os ouvintes de clique nos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section') || link.getAttribute('href').substring(1);
            navigateToSection(targetId);
        });
    });

    // Conecta cliques no Logo do header
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection('home');
        });
    }

    // Conecta botões internos de chamada para ação (CTAs)
    const ctaProducts = document.getElementById('cta-products');
    const ctaAbout = document.getElementById('cta-about');

    if (ctaProducts) {
        ctaProducts.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection('produtos');
        });
    }
    if (ctaAbout) {
        ctaAbout.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection('quem-somos');
        });
    }

    /* ==========================================================================
       2. MENU MOBILE HAMBÚRGUER
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-navigation');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Efeito visual no hambúrguer
            const bars = menuToggle.querySelectorAll('.bar');
            if (menuToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    /* ==========================================================================
       3. EFEITOS DE ROLAGEM (SCROLL EFFECTS)
       ========================================================================== */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    /* ==========================================================================
       4. FORMULÁRIO DE CONTATO (VALIDAÇÃO & SUBMISSÃO)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const successBox = document.getElementById('success-box');
    const successCloseBtn = document.getElementById('success-close-btn');

    if (contactForm) {
        // Validação imediata ao sair do campo (Blur)
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateField(input);
            });
            input.addEventListener('input', () => {
                // Limpa erros enquanto digita
                clearError(input);
            });
        });

        // Submissão do Formulário
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isFormValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Simulação de envio com animação de loading no botão
                const submitBtn = document.getElementById('form-submit-btn');
                const originalText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Enviando...</span> <i class="fa-solid fa-circle-notch fa-spin"></i>`;
                
                setTimeout(() => {
                    // Exibe animação de sucesso
                    successBox.classList.add('active');
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, 1200);
            }
        });
    }

    if (successCloseBtn && successBox) {
        successCloseBtn.addEventListener('click', () => {
            successBox.classList.remove('active');
        });
    }

    // Função para validar campo individual
    function validateField(input) {
        const parent = input.closest('.form-group') || input.closest('.form-checkbox');
        let isValid = true;

        if (input.required) {
            if (input.type === 'checkbox') {
                isValid = input.checked;
            } else if (input.value.trim() === '') {
                isValid = false;
            }
        }

        if (isValid && input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(input.value.trim());
        }

        if (!isValid) {
            parent.classList.add('invalid');
        } else {
            parent.classList.remove('invalid');
        }

        return isValid;
    }

    // Função para limpar erros de validação
    function clearError(input) {
        const parent = input.closest('.form-group') || input.closest('.form-checkbox');
        parent.classList.remove('invalid');
    }

    /* ==========================================================================
       5. MICRO-INTERAÇÕES & ANIMAÇÃO DE CARREGAMENTO
       ========================================================================== */
    // Adiciona animação leve aos cartões quando a página carregar
    const activeSection = document.querySelector('.section-active');
    if (activeSection) {
        const cards = activeSection.querySelectorAll('.premium-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
});
