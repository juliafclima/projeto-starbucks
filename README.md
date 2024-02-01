# Starbucks - Página Inicial

Este é o código-fonte HTML para a página inicial do Starbucks, uma representação básica da estrutura do site. O HTML é acompanhado por um arquivo de estilo CSS (`style.css`) e um script JavaScript (`script.js`) para fornecer uma experiência interativa.

## Estrutura do HTML

### Meta e Links
- `<!DOCTYPE html>`: Define a versão do HTML utilizada.
- `<html lang="pt-BR">`: Declara o idioma do documento como português do Brasil.
- `<head>`: Contém informações sobre o documento.
  - Meta tags para codificação e viewport.
  - Links para pré-conectar ao Google Fonts e carregar a fonte Poppins.
  - Título da página e links para o arquivo de estilo e ícone.

### Corpo da Página
- `<body>`: Contém todo o conteúdo visível da página.
  - `<div class="container">`: Agrupa o conteúdo da página.
  - `<div class="circulo">`: Elemento de design.
  - `<img class="logo" src="../images/logo.png" alt="Logo Starbucks">`: Logotipo do Starbucks.
  
  - `<main class="conteudo">`: Seção principal da página.
    - `<section class="texto">`: Contém o texto e um botão de redirecionamento.
    - `<h1>`: Título principal.
    - `<p>`: Parágrafos de texto.
    - `<button onclick="redirecionar()">Saiba mais</button>`: Botão de redirecionamento.
    
    - `<section class="imagem">`: Contém uma imagem representativa.
    - `<img class="copo-grande" src="../images/img1.png" alt="Copo Starkburks">`: Imagem do copo grande.

  - `<section class="menu">`: Seção de exibição de diferentes opções do menu.
    - Imagens representativas de copos pequenos em diferentes cores.

### Script JavaScript
- `<script src="../js/script.js"></script>`: Inclui o arquivo JavaScript para interatividade.

## Como Usar

1. Clone ou faça o download do repositório.
2. Abra o arquivo `index.html` em um navegador web.
3. Explore a página inicial do Starbucks e interaja com os elementos.

Divirta-se explorando a experiência Starbucks!
