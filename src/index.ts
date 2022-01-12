import express, { Express } from "express";
import { createConnection } from "typeorm";
import { AppSettings } from "./settings";
import makeRoutes from "./urls";
import cors from 'cors';

const app: Express = express();

app.use(express.json());
app.use(cors());

createConnection().then((connection) => {
    console.log('Conexão estabelecida com o banco de dados!')
    
    app.listen(AppSettings.PORT, () => {
        console.log('Aplicação rodando!');
        makeRoutes(app, connection);
    });

}).catch((error) => {
    console.log(error);
});
