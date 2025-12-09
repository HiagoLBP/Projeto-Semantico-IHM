# 🎬 FS Streaming

Este projeto consiste no desenvolvimento do *front-end* de uma plataforma de streaming de filmes e séries, focado na experiência do usuário (UX/UI) e na estruturação correta de código web seguindo os padrões da W3C.

O site foi desenvolvido como requisito avaliativo da disciplina de **Interação Humano-Computador (IHM)**.

## 🏫 Sobre o Projeto

* **Instituição:** Instituto Federal Baiano (IF Baiano) - Campus Guanambi
* **Curso:** Análise e Desenvolvimento de Sistemas
* **Disciplina:** IHM (Interação Humano-Computador)
* **Semestre:** 2025

## 👥 Equipe

* **Hiago Rocha Souza**
* **Érlei Mendes Costa**

---

## 🚀 Tecnologias e Conceitos Aplicados

O projeto foi construído com foco em responsividade e organização de código, utilizando:

### 1. HTML5 Semântico
Utilizamos tags que dão significado ao conteúdo para melhorar a acessibilidade e a leitura do código por navegadores e leitores de tela:
* `<nav>` para menus de navegação.
* `<header>` para cabeçalhos e áreas de destaque (Hero sections).
* `<section>` para separar blocos de conteúdo (Filmes, Planos, Login).
* `<footer>` para o rodapé do site.
* Atributos `alt` em imagens para acessibilidade.

### 2. CSS3 Organizado
Para manter o projeto escalável, a estilização não foi feita em um único arquivo. Utilizamos uma arquitetura de separação de responsabilidades:
* **`style.css`**: Estilos globais (reset, fontes, variáveis de cores).
* **Arquivos específicos**: `login.css`, `planes.css`, `about.css` para carregar apenas o necessário em cada página.
* **Caminhos Relativos**: Correção de referências (`../`) para garantir que estilos e imagens carreguem corretamente independente da pasta.

### 3. Responsividade e Frameworks
* **Bootstrap 5**: Utilizado para o sistema de Grid (colunas), Navbar responsiva (menu hambúrguer) e componentes de interface.
* **Media Queries**: Ajustes manuais no CSS para garantir que o layout se adapte perfeitamente a celulares, tablets e desktops.



---

## 📂 Estrutura de Pastas

A organização dos arquivos segue uma estrutura lógica para facilitar a manutenção:

```bash
Projeto-Semantico-IHM/
│
├── index.html          # Página Inicial (Home) - Raiz do projeto
├── css/                # Folhas de estilo (style.css, login.css, planes.css...)
├── imgs/               # Imagens do site (posters, banners, logo)
├── icons/              # Ícones SVG e PNG utilizados na interface
├── script/             # Lógica JavaScript (carrossel, interações)
└── pages/              # Páginas internas do sistema
    ├── login.html      # Tela de Login
    ├── register.html   # Tela de Cadastro
    ├── planes.html     # Página de Planos e Preços
    └── about.html      # Página Sobre Nós (Institucional)


