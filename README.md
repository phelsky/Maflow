# Maflow do Brasil - Website Corporativo Premium

Este projeto consiste em um redesenho e reestruturação completa da presença digital da **Maflow do Brasil Ltda.** (integrante do grupo industrial polonês **Boryszew S.A.**). O site foi desenvolvido do zero com foco em alta performance, design industrial moderno e interatividade fluida, substituindo a antiga ferramenta básica por uma solução robusta e profissional.

---

## 🚀 Principais Recursos (Features)

*   **Arquitetura SPA (Single Page Application)**: Navegação instantânea e contínua entre as seções (*Início, Quem Somos, Produtos, Políticas, Trabalhe Conosco e Contato*) sem recarregar o navegador.
*   **Design System Moderno**:
    *   **Identidade Visual Revisitada**: Paleta de cores inspirada na marca corporativa original do Grupo Boryszew (Vermelho e Prata Metálico), sobre um fundo cinza antracita escuro de alta tecnologia.
    *   **Glassmorphism**: Painéis e menus com efeito translúcido (vidro fosco) usando a propriedade moderna `backdrop-filter`.
    *   **Tipografia Refinada**: Uso das fontes corporativas `Inter` (para textos corridos altamente legíveis) e `Outfit` (para títulos imponentes).
*   **Linha do Tempo Interativa**: Uma cronologia elegante detalhando a história do grupo desde a fundação da Manuli em 1935 até a integração global atual.
*   **Central de Compliance & Políticas**: Hub integrado com acesso direto aos documentos oficiais em PDF (Código de Ética, Políticas de EHS, Privacidade e Qualidade).
*   **Formulário de Contato Inteligente**:
    *   Validação em tempo real (inline) que previne o envio de e-mails inválidos ou campos em branco.
    *   Seleção de assunto voltada para otimizar o fluxo interno (Comercial, RH, Qualidade, Engenharia).
    *   Feedback dinâmico e animado após o envio bem-sucedido.
*   **Responsividade Total (Mobile-First)**: Adaptado e testado para funcionamento impecável em monitores de alta definição, notebooks, tablets e smartphones.

---

## 🛠️ Tecnologias Utilizadas

Para garantir velocidade de carregamento máxima e evitar arquivos pesados desnecessários, o projeto foi desenvolvido de forma nativa e limpa:

1.  **HTML5 Semântico**: Uso de tags estruturadas (`<header>`, `<main>`, `<section>`, `<footer>`) que auxiliam em acessibilidade e SEO (otimização para motores de busca como o Google).
2.  **CSS3 Avançado**: 
    *   Uso de **CSS Custom Properties (Variáveis)** no `:root` para centralizar o gerenciamento de cores e facilitar alterações de tema.
    *   Sistemas de layout flexíveis e responsivos com **CSS Grid** e **Flexbox**.
3.  **JavaScript Vanilla (Nativo)**: Lógica pura de navegação, transição de abas, controle do menu hambúrguer móvel e validações de formulário, eliminando dependências pesadas como JQuery ou frameworks de terceiros.
4.  **FontAwesome & Google Fonts**: Ícones vetoriais modernos e fontes de alta qualidade carregadas via CDN.

---

## 📂 Estrutura de Arquivos

```text
maflow-website/
│
├── index.html        # Estrutura e conteúdo semântico do site
├── style.css         # Design system, layout, responsividade e animações
├── script.js         # Lógica da SPA, formulários e interações
└── README.md         # Documentação e guia do projeto (este arquivo)
```

---

## 💻 Como Executar o Projeto

Como o site é construído em tecnologia web nativa, ele é extremamente leve e **não requer nenhuma instalação, servidor ou banco de dados** para testes locais.

1.  Navegue até a pasta do projeto.
2.  Dê um duplo clique no arquivo `index.html`.
3.  O site será aberto de forma instantânea em seu navegador padrão.

---

## 💡 Decisões de Arquitetura & Código (Para apresentação)

Durante a apresentação para a gerência/diretoria, você pode destacar estes pontos fundamentais sobre a qualidade do seu código:

*   **Centralização de Estilos (DRY - Don't Repeat Yourself)**: O uso de variáveis CSS no `:root` do arquivo `style.css` permite que qualquer mudança futura de cor (como o tom de vermelho ou a cor do texto) seja alterada em apenas um único lugar, refletindo em todo o site automaticamente.
*   **Navegação Sem Reload**: A arquitetura SPA desenvolvida em JavaScript melhora expressivamente a experiência do usuário (UX), evitando a tela branca de recarregamento típica de sites tradicionais.
*   **Validação Inline**: Validar campos no evento `blur` (quando o usuário sai de um campo) oferece um feedback imediato e agradável, melhorando a taxa de conversão e a qualidade das mensagens recebidas.
