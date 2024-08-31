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

## Executando o Script de Teste

Para preencher o banco de dados com dados iniciais e executar consultas SQL de teste, siga os passos abaixo:

1. **Compile o projeto TypeScript**:
    ```bash
    npm run build
    ```

2. **Execute o script de teste**:
    ```bash
    node dist/teste/Teste.js
    ```

Este script irá:
- Criar três times e três jogadores com dados fictícios.
- Executar uma série de consultas SQL para filtrar e exibir informações sobre os jogadores e os times.
- Imprimir os resultados no console para análise.

As consultas incluídas são:
- Jogadores que estão no mesmo time.
- Jogadores com mais de 5 gols e menos de 5 gols.
- Jogadores ordenados por assistências (crescente e decrescente).
- Jogadores com mais gols e assistências.
- Jogadores de um time específico.
- Jogadores com o maior e menor número de vitórias.
- Jogadores com mais assistências e menos vitórias.

# CASO QUEIRA POR AS CONSULTAS MANUALMENTE
 
## Consultas SQL

Aqui estão algumas consultas SQL úteis para consultar e analisar dados dos jogadores e times no banco de dados.

### 1. Jogadores que estão no mesmo time
```sql
SELECT j1.nome AS jogador1, j2.nome AS jogador2, t.nome AS time
FROM Jogador j1
JOIN Jogador j2 ON j1.timeId = j2.timeId
JOIN Time t ON j1.timeId = t.id
WHERE j1.id < j2.id;
```
### 2. Jogadores com mais de 5 gols
```sql
Copiar código
SELECT nome, apelido, gols, assistencias, vitorias, timeId
FROM Jogador
WHERE gols > 5;
```
### 3. Jogadores com menos de 5 gols
```sql
Copiar código
SELECT nome, apelido, gols, assistencias, vitorias, timeId
FROM Jogador
WHERE gols < 5;
```
### 4. Jogadores ordenados por assistências em ordem decrescente
```sql
Copiar código
SELECT nome, apelido, assistencias
FROM Jogador
ORDER BY assistencias DESC;
```
### 5. Jogadores ordenados por assistências em ordem crescente
```sql
Copiar código
SELECT nome, apelido, assistencias
FROM Jogador
ORDER BY assistencias ASC;
```
### 6. Jogadores com mais gols e mais assistências
```sql
Copiar código
SELECT nome, apelido, gols, assistencias
FROM Jogador
ORDER BY gols DESC, assistencias DESC;
### 7. Jogadores de um time específico
Substitua 'Time A' pelo nome do time desejado:
```
```sql
Copiar código
SELECT j.nome, j.apelido, j.gols, j.assistencias
FROM Jogador j
JOIN Time t ON j.timeId = t.id
WHERE t.nome = 'Time A';
```
### 8. Jogadores com o maior número de vitórias
```sql
Copiar código
SELECT nome, apelido, vitorias
FROM Jogador
ORDER BY vitorias DESC;
```
### 9. Jogadores com o menor número de vitórias
```sql
Copiar código
SELECT nome, apelido, vitorias
FROM Jogador
ORDER BY vitorias ASC;
```
### 10. Jogadores com mais assistências e menos vitórias
```sql
Copiar código
SELECT nome, apelido, assistencias, vitorias
FROM Jogador
ORDER BY assistencias DESC, vitorias ASC;
```
