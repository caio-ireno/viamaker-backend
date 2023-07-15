import express from "express";
import db from "./config/dbConnection";
import routes from "./routes";
import cors from 'cors';
import manipulador404 from "./middlewares/manipulador404";
import manipuladorDeErros from "./middlewares/manipuladorDeErros";


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}));
routes(app);
app.use(manipulador404)
app.use(manipuladorDeErros);

export default app