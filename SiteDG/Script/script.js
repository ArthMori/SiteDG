// Seleciona o botão de tema pelo ID
const btnTema = document.getElementById("btn-tema");
let darkAtivo = false;

// Definição das variáveis de CSS para o modo escuro
// AQUI ESTÃO AS MUDANÇAS: Adicionamos regras específicas para o Footer
const darkCSS = `
    /* Redefinição das Variáveis Globais */
    body.dark {
        --green-primary: #00E676;
        --green-dark: #00C853;
        --black-text: #F5F5F5;
        --white-bg: #111827;      /* Fundo principal (cinza quase preto) */
        --blue-dark: #60a5fa;     /* Azul claro (usado para títulos em dark mode) */
        --gray-light: #1F2937;    /* Fundo secundário */
        --shadow-sm: 0 2px 4px rgba(0,0,0,0.5);
        --shadow-md: 0 4px 8px rgba(0,0,0,0.6);
        --shadow-lg: 0 10px 20px rgba(0,0,0,0.8);
    }

    /* --- Ajustes Específicos para Dark Mode --- */
    
    /* Header e Navegação */
    body.dark .header {
        background-color: var(--white-bg);
        border-bottom: 1px solid #374151;
    }
    
    body.dark .nav a { color: #E5E5E5; }
    body.dark .nav a:hover { color: var(--green-primary); }
    
    body.dark .logo-title, 
    body.dark .logo-subtitle { color: #FFFFFF; }
    
    /* Cards (Serviços e Cursos) */
    body.dark .servico-card, 
    body.dark .curso-card {
        background-color: var(--gray-light);
        border: 1px solid #374151;
    }
    
    body.dark .servico-card h3,
    body.dark .curso-card p { color: #E5E5E5; }
    
    body.dark .curso-header {
        background-color: #1e3a8a; /* Mantém azul escuro forte no topo do curso */
        color: white;
    }
    
    /* Formulários */
    body.dark .contato-form input,
    body.dark .contato-form textarea {
        background-color: #374151;
        border-color: #4B5563;
        color: white;
    }
    
    body.dark .contato-form input:focus,
    body.dark .contato-form textarea:focus {
        border-color: var(--green-primary);
        background-color: #4B5563;
    }
    
    /* Box de Contato e Ícones */
    body.dark .info-contato {
        background-color: var(--gray-light);
        border: 1px solid #374151;
    }
    
    body.dark .info-contato p { color: #E5E5E5; }
    
    body.dark .zap, body.dark .pin {
        filter: drop-shadow(0 0 5px rgba(255,255,255,0.3));
    }

    /* ---> NOVO: Footer - Ajuste de legibilidade <--- */
    /* Usamos uma cor sólida e escura, diferente das variáveis globais */
    body.dark .footer {
        background-color: #0a0e17; /* Um tom mais profundo que o fundo principal */
        color: #E5E5E5; /* Texto claro */
        border-top: 1px solid #1F2937; /* Borda sutil para separação */
    }
    body.dark .icon-tema {
            filter: brightness(0) invert(1);
    }  body.dark .pin {
            filter: brightness(0) invert(1);
    }
     body.dark .zap {
            filter: brightness(0) invert(1);
    }
            `;

// Função de troca de tema (Permanece igual)
btnTema.addEventListener("click", () => {
    darkAtivo = !darkAtivo;

    if (darkAtivo) {
        document.body.classList.add("dark");
        const styleTag = document.createElement("style");
        styleTag.id = "dark-mode-style";
        styleTag.innerHTML = darkCSS;
        document.head.appendChild(styleTag);
        btnTema.src = "../Images/moon.png";
        
    } else {
        document.body.classList.remove("dark");
        const styleElement = document.getElementById("dark-mode-style");
        if (styleElement) styleElement.remove();
        btnTema.src = "../Images/sunny.png";
    }
});