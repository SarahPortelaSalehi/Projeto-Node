import express from "express";
import db from "./config/dbConnects.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão com o banco'));
db.once("open", () => {
    console.log('Conexão realizada com sucesso')
});

const app = express();

app.use(express.json());

routes(app);

export default app