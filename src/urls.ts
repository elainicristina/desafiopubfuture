import { Express } from "express";
import { Connection } from "typeorm";
import { ContaService } from "./services/contas";
import { DespesaService } from "./services/despesas";
import { ReceitaService } from "./services/receita";
import { ContaRoutes } from "./routes/conta";
import { DespesaRoutes } from "./routes/despesas";
import { ReceitaRouter } from "./routes/receita";

export default function makeRoutes(app: Express, conn: Connection) {

    ContaRoutes.service = new ContaService(conn);

    app.get('/contas', ContaRoutes.getAll);
    app.post('/contas', ContaRoutes.create);
    app.get('/contas/:id', ContaRoutes.getOne);
    app.put('/contas/:id', ContaRoutes.update);
    app.delete('/contas/:id', ContaRoutes.delete);
    app.post('/contas/transferencia', ContaRoutes.transferencia);

    DespesaRoutes.service = new DespesaService(conn);

    app.get('/despesas', DespesaRoutes.getAll);
    app.post('/despesas', DespesaRoutes.create);
    app.get('/despesas/:id', DespesaRoutes.getOne);
    app.put('/despesas/:id', DespesaRoutes.update);
    app.delete('/despesas/:id', DespesaRoutes.delete);

    ReceitaRouter.service = new ReceitaService(conn);

    app.get('/receitas', ReceitaRouter.getAll);
    app.post('/receitas', ReceitaRouter.create);
    app.get('/receitas/:id', ReceitaRouter.getOne);
    app.put('/receitas/:id', ReceitaRouter.update);
    app.delete('/receitas/:id', ReceitaRouter.delete);
    
}