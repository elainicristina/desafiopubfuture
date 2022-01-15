import { ContaService } from "../services/contas";
import { Request, Response } from "express";
import { ModelBaseRoute } from "./base";

export class ContaRoutes extends ModelBaseRoute {

    static service: ContaService;


    static async getAll(req: Request, res: Response, next: Function): Promise<void> {
        try {
            res.status(200);
            res.json(await ContaRoutes.service.getAll(req.query));
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
            const conta = await ContaRoutes.service.getOne(id);

            if (conta !== undefined) {
                res.status(200);
                res.json(await ContaRoutes.service.getOne(id));
            }
            else {
                res.status(404);
                res.json({message: 'Conta not found'});
            }

        }
        catch (error) {
            console.log(error);

            res.status(500);
            res.json({message: 'Internal server error'})
        }        
    }


    static async transferencia(req: Request, res: Response, next: Function): Promise<void> {
            try {
                res.status(200);
                res.json(await ContaRoutes.service.transferencia(req.body));
            }
            catch (error) {
                console.log(error);

                res.status(500);
                res.json({message: 'Internal server error'});
            }
    }


    static async total(req: Request, res: Response, next: Function): Promise<void> {
            try {
                res.status(200);
                res.json(await ContaRoutes.service.totalSaldo());
            }
            catch (error) {
                console.log(error);

                res.status(500);
                res.json({message: 'Internal server error'});
            }
    }


    static async create(req: Request, res: Response, next: Function): Promise<void> {
        try {

            const requestBody = req.body;
            const conta = await ContaRoutes.service.create(requestBody); 

            if (conta !== undefined) {
                res.status(201);
                res.json(conta);
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

            const conta = await ContaRoutes.service.update(id, newFields);

            if (conta !== undefined) {
                res.status(200);
                res.json(conta);
            }
            else {
                res.status(404);
                res.json({message: 'Conta not found'});
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
            const conta = await ContaRoutes.service.delete(id);

            if (conta !== undefined) {
                res.status(200);
                res.json(conta);
            }
            else {
                res.status(404);
                res.json({message: 'Conta not found'});
            }

        }
        catch (error) {
            console.log(error);

            res.status(500);
            res.json({message: 'Internal server error'});
        }        
    }
}