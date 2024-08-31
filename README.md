# Futebol App

Este é um aplicativo de gerenciamento de jogadores de futebol, desenvolvido em TypeScript com Node.js, Express e TypeORM. O projeto inclui um CRUD completo para jogadores, com funcionalidade para gerar relatórios e adicionar jogadores a times.

## Estrutura do Projeto

/futebol-app
│
├── /dist                  # Pasta onde o código transpilado será armazenado
├── /src                   # Código-fonte principal
│   ├── /controllers       # Controladores (Controllers)
│   │   └── JogadorController.ts
│   │   └── TimeController.ts
│   ├── /services          # Serviços (Services)
│   │   └── JogadorService.ts
│   │   └── TimeService.ts
│   ├── /models            # Modelos (Models)
│   │   └── Jogador.ts
│   │   └── Time.ts
│   ├── /dtos              # DTOs (Data Transfer Objects)
│   │   └── JogadorDTO.ts
│   ├── /routes            # Rotas (Routes)
│   │   └── JogadorRoutes.ts
│   │   └── TimeRoutes.ts
│   ├── /database          # Configuração do banco de dados
│   │   └── datasource.ts
│   ├── index.ts           # Arquivo de inicialização do servidor
├── /swagger               # Configuração do Swagger
│   └── swagger.json
├── package.json           # Dependências e scripts do projeto
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Documentação do projeto

