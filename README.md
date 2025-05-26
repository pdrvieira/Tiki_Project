# Projeto Formulário SPA - Tiki

Este projeto foi desenvolvido utilizando **TypeScript**, **React** e **Styled Components**. Ele contém um **formulário de cadastro estilizado** e um **carrossel de imagens com thumbs interativas**, ambos baseados em um design fornecido no Figma.

---

## ✨ Funcionalidades

- Formulário com campos de nome e e-mail
- Checkbox personalizado com formato circular
- Carrossel com miniaturas clicáveis (thumbnails)
- Destaque visual na imagem selecionada
- Estilização condizente com o design original

---

## 🧠 Desafios e Problemas

Durante o desenvolvimento, me deparei com algumas dificuldades, principalmente por ainda estar aprendendo:

- **Carrossel com thumbs ativas:** A maior dificuldade foi configurar o carrossel para que a imagem principal refletisse corretamente a thumbnail selecionada, com comportamento fluido.
- **Hover e estados ativos nas thumbs:** Foi desafiador aplicar os estilos certos ao passar o mouse e ao selecionar uma imagem, garantindo feedback visual claro para o usuário.
- **Ordem da primeira imagem:** Fazer a primeira thumb aparecer corretamente como selecionada na primeira renderização exigiu alguns ajustes no controle de estado.
- **Modularização com React:** Como iniciante, tive dificuldades para estruturar o projeto dividindo os componentes, estilos e lógicas em arquivos separados.

---

## 🔧 Melhorias Futuras

- Adicionar **validação de formulário** (campos obrigatórios e e-mail válido)
- Criar **mensagens de sucesso ou erro** ao enviar o formulário
- Melhorar a **responsividade** para dispositivos móveis
- Refatorar o carrossel usando componentes mais reutilizáveis
- Adicionar mais estilos e funcionalidades aos componentes, seguindo padrões de UX/UI

---

## ▶️ Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- npm ou yarn

### Passo a passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio

2. Instale as dependências:
   ```bash
   npm install ou yarn install

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev ou yarn dev

4. Acesse no navegador:
  ```bash
   http://localhost:5173
