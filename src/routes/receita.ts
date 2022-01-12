import { ReceitaService } from "../services/receita";
import { Request, Response } from "express";
import { ModelBaseRoute } from "./base";

export class ReceitaRouter extends ModelBaseRoute {

    static service: ReceitaService;

    static async getAll(req: Request, res: Response, next: Function): Promise<void> {
        try {
            res.status(200);
            res.json(await ReceitaRouter.service.getAll());
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
            const receitas = await ReceitaRouter.service.getOne(id);

            if (receitas !== undefined) {
                res.status(200);
                res.json(await ReceitaRouter.service.getOne(id));
            }
            else {
                res.status(404);
                res.json({message: 'Receita not found'});
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
            const receitas = await ReceitaRouter.service.create(requestBody); 

            if (receitas !== undefined) {
                res.status(201);
                res.json(receitas);
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

            const receitas = await ReceitaRouter.service.update(id, newFields);

            if (receitas !== undefined) {
                res.status(200);
                res.json(receitas);
            }
            else {
                res.status(404);
                res.json({message: 'Receitas not found'});
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
            const receitas = await ReceitaRouter.service.delete(id);

            if (receitas !== undefined) {
                res.status(200);
                res.json(receitas);
            }
            else {
                res.status(404);
                res.json({message: 'Receita not found'});
            }

        }
        catch (error) {
            console.log(error);

            res.status(500);
            res.json({message: 'Internal server error'});
        }        
    }
}