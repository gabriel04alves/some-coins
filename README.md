## Some Coins

**Some Coins** é um aplicativo web para conversão de moedas, desenvolvido como projeto de estudo. Ele oferece uma interface simples e rápida, consumindo dados de câmbio da [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas).

## Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript para construção de interfaces reativas.
- **JavaScript** - Linguagem de programação principal do projeto.
- **Bulma CSS** - Framework CSS para estilização e layout.

## Estrutura do Projeto

```
.
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   └── favicon.svg
├── README.md
├── src
│   ├── App.vue                  # Componente principal da aplicação
│   ├── assets                   # Arquivos de estilo
│   │   ├── main.css
│   │   └── reset.css
│   ├── components               # Componentes reutilizáveis
│   │   ├── CardComponent.vue
│   │   └── FooterComponent.vue
│   ├── composables              # Funções utilitárias reutilizáveis
│   │   ├── currencyConverter.js
│   │   └── fetchCurrencies.js
│   ├── main.js                  # Arquivo principal da aplicação
│   ├── router                   # Configuração de rotas
│   │   └── index.js
│   ├── services                 # Integração com APIs externas
│   │   └── api.js
│   ├── utils                    # Funções auxiliares
│   │   └── formatCurrency.js
│   └── views                    # Páginas principais
│       ├── AboutView.vue
│       └── HomeView.vue
└── vite.config.js               # Configuração do Vite
```

## Instalação e Execução

### Pré-requisitos

- **Node.js** versão 14 ou superior
- **NPM** versão 6 ou superior

### Passo a Passo

1. **Instalar dependências**

   ```sh
   npm install
   ```

2. **Compilar e Rodar em Ambiente de Desenvolvimento**

   ```sh
   npm run dev
   ```

3. **Compilar para Produção**

   ```sh
   npm run build
   ```

4. **Linter**
   ```sh
   npm run lint
   ```

---

Este projeto foi criado com Vue 3 e Vite, para mais informações sobre configuração consulte a [documentação do Vite](https://vitejs.dev/config/).
