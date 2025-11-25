const botaoModo = document.getElementById("modos");
let darkAtivo = false;

const darkCSS = `
    body.dark {
        --green-primary: #00E676;
        --green-dark: #00C853;
        --black-text: #F5F5F5;
        --white-bg: #1F2937;
        --blue-dark: #60a5fa;
        --gray-light: #111827;
        --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.6);
        --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.8);
    }

    body.dark .container {
        background: #1F2937;
        border: 2px solid var(--green-primary);
        box-shadow: 0 0 20px rgba(0, 230, 118, 0.15);
    }

    body.dark .top-header h1 {
        color: #FFFFFF;
        text-shadow: none;
    }

    body.dark .curso {
        background-color: #111827;
        border: 1px solid #374151;
    }

    body.dark .curso:hover {
        border-color: var(--green-primary);
        background-color: #1f2937;
    }

    body.dark .curso-info h2 {
        color: #FFFFFF;
    }

    body.dark .curso p {
        color: #9CA3AF;
    }

    body.dark .icon {
        filter: brightness(0) invert(1);
    }

    body.dark .logo {
        filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.2));
    }
`;

if (botaoModo) {
    botaoModo.addEventListener("click", () => {
        darkAtivo = !darkAtivo;

        if (darkAtivo) {
            document.body.classList.add("dark");
            const styleTag = document.createElement("style");
            styleTag.id = "dark-mode-style";
            styleTag.innerHTML = darkCSS;
            document.head.appendChild(styleTag);
            botaoModo.src = "../Images/moon.png";
        } else {
            document.body.classList.remove("dark");
            const styleElement = document.getElementById("dark-mode-style");
            if (styleElement) styleElement.remove();
            botaoModo.src = "../Images/sunny.png";
        }
    });
}