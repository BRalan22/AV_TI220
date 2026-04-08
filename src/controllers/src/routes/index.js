const express = require('express');
const app = express();

app.use(express.json());


require('./startup/db')();


const filmeRoutes = require('./src/routes/filmeRoutes');
app.use('/api/filmes', filmeRoutes);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(` Servidor voando na porta ${port}`));