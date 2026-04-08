# 🎬 CineArchive API

### Descrição
API desenvolvida em arquitetura MVC para gerenciar uma coleção de filmes famosos, associando-os a amigos colecionadores.

### Como Rodar
1. `npm install` (Para instalar Express e Mongoose)
2. `node index.js` para rodar o servidor.

### Exemplos de Requisição (POST /api/filmes)
```json
{
  "titulo": "O Senhor dos Anéis: O Retorno do Rei",
  "anoLancamento": 2003,
  "genero": "Fantasia",
  "venceuOscar": true,
  "amigoId": "ID_GERADO_NO_BANCO"
}