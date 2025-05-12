# FIAP - Landing Page -  Next.js

Este projeto é uma landing page desenvolvida em **Next.js**, **TypeScript**, **SASS** e **GSAP**, organizada em seções/componentes reutilizáveis. Foi criada como parte de um teste para a vaga de Front-end na FIAP, com foco em responsividade e animações interativas.

## Tecnologias Utilizadas

* **Next.js**: Framework React para aplicações híbridas (SSG/SSR).
* **GSAP**: Biblioteca para criação de animações robustas e controladas via ScrollTrigger.
* **SASS**: Pré-processador CSS para estilização modular.
* **TypeScript**: Tipagem estática para maior segurança e qualidade de código.

## Como Executar

1. ** Clonar o repositório: **

   ```bash
   git clone https://github.com/NataneO/FiapNextTest
   cd FiapNextTest
   ```
2. ** Instalar dependências: **

   ```bash
   npm install
   # ou
   yarn install
   ```
3. ** Rodar em modo de desenvolvimento: **

   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. **Acessar** em `http://localhost:3000`.


## Estrutura de Pastas

```
public/                    # Imagens e assets estáticos
│   ├── fonts
│   ├── imgs
│   └── svgs        
src/app/
├── components/            # Componentes para cada seção. 
│   ├── Navbar/                  
│   ├── Header/
│   ├── Intro/
│   ├── Transition/
│   ├── Courses/
│   └── FAQ/
├── shared/                # Componentes compartilhados
│   └── TextItem.tsx      
├── styles/                # Arquivos SASS globais e parciais
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── index.scss
package.json
tsconfig.json              
README.md
```

## Seções 

### Navbar

* Menu responsivo com logo da FIAP centralizado.
* Barra de progresso que cresce a medida que o scroll avança.

### Header

* Banner inicial com título e subtítulo impactantes.
* Efeito de cascata no texto, ao carregar a pagina.

### Intro

* Texto rolando horizontalmente de forma infinita, controlado pelo ScrollTrigger.
* Direção do scroll altera o movimento do texto (direita/esquerda).


## Animação Principal
### Transição - Água

* Seção intermediária que simula uma onda de água.
* Utiliza Scrolltrigger do GSAP para criar transições suaves entre as imagens, criando assim o efeito de onda.
* Onda avança ou retrocede conforme a direção do scroll.

### Cursos

* Abas (*tabs*) que alternam entre diferentes stacks e habilitam a visualizaçao dos cursos correspondentes..
* Exibição de cards de cursos em um grid responsivo.

### FAQ

* Perguntas frequentes em acordeão.
* Animação de show/hide itens.

## Responsividade

* Layout fluido para dispositivos móveis e desktops.
* Ajustes de tipografia, espaçamentos e tamanhos de imagem.


## Bônus

### Anotações

Como adicional para esse projeto, deixo [aqui um arquivo em .pdf](link) com todas minhas anotaçoes durante o decorrer do desenolvimento. Assim, voce que esta lendo o projeto, pode ter uma maior contexto de como funciona meu processo criativo. 

### Demonstrativo

Deixo aqui, tambem, um video demonstrativo do projeto.


https://github.com/user-attachments/assets/a10b2c9c-46ea-4179-aa90-ad3012efc67e


## Autor

Natane — Desenvolvedora Front-end / UX
---

*Projeto desenvolvido por Natane em Maio de 2025.*
