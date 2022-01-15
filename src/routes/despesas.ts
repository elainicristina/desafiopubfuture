import { DespesaService } from "../services/despesas";
import { Request, Response } from "express";
import { ModelBaseRoute } from "./base";

export class DespesaRoutes extends ModelBaseRoute {

    static service: DespesaService;

    static async getAll(req: Request, res: Response, next: Function): Promise<void> {
        try {
            res.status(200);
            res.json(await DespesaRoutes.service.getAll(req.query));
        }
        catch (error) {
            console.log(error);

            res.status(500);
            res.json({message: 'Internal server error'});
        }
    }

    static async getOne(req: Request, res: Response, next: Function): Promise<void> {
        try {
            const id = Number(req.params.id);
            const despesas = await DespesaRoutes.service.getOne(id);

            if (despesas !== undefined) {
                res.status(200);
                res.json(await DespesaRoutes.service.getOne(id));
            }
            else {
                res.status(404);
                res.json({message: 'Despesa not found'});
            }

        }
        catch (error) {
            console.log(error);

            res.status(500);
            res.json({message: 'Internal server error'})
        }        
    }

    static async create(req: Request, res: Response, next: Function): Promise<void> {
        try {

            const requestBody = req.body;
            const despesas = await DespesaRoutes.service.create(requestBody); 

            if (despesas !== undefined) {
                res.status(201);
                res.json(despesas);
            }
            else {
                res.status(422);
                res.json({message: 'Wrong fields. Please, review your request!'});
            }

        }
        catch (error) {
            console.log(error);

            res.status(500);
            res.json({message: 'Internal server error'});
        }        
    }

    static async update(req: Request, res: Response, next: Function): Promise<void> {
        try {
            const id = Number(req.params.id);
            const newFields = req.body;

            const despesas = await DespesaRoutes.service.update(id, newFields);

            if (despesas !== undefined) {
                res.status(200);
                res.json(despesas);
            }
            else {
                res.status(404);
                res.json({message: 'Despesa not found'});
            }

        }
        catch (error) {
            console.log(error);

            res.status(500);
            res.json({message: 'Internal server error'});
        }        
    }

    static async delete(req: Request, res: Response, next: Function): Promise<void> {
        try {
            const id = Number(req.params.id);
            const despesas = await DespesaRoutes.service.delete(id);

            if (despesas !== undefined) {
                res.status(200);
                res.json(despesas);
            }
            else {
                res.status(404);
                res.json({message: 'Despesa not found'});
            }

        }
        catch (error) {
            console.log(error);

            res.status(500);
            res.json({message: 'Internal server error'});
        }        
    }
}