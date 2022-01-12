import { Request, Response } from "express";
import { BaseService } from "../services/base";

export abstract class ModelBaseRoute {

    static service: BaseService;

    static async getAll(req: Request, res: Response, next: Function): Promise<void> {}
    static async getOne(req: Request, res: Response, next: Function): Promise<void> {}
    static async create(req: Request, res: Response, next: Function): Promise<void> {}
    static async update(req: Request, res: Response, next: Function): Promise<void> {}
    static async delete(req: Request, res: Response, next: Function): Promise<void> {}
    
}