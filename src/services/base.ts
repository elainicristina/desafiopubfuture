import { Connection, Repository } from "typeorm";

export interface BaseService {

    connection: Connection;
    repository: Repository<object>;

    getAll(queryParameters: any): Promise<object[] |undefined>; 
    getOne(id: number): Promise<object | undefined>; 
    create(entity: any): Promise<object | undefined>;
    update(id: number, values: any): Promise<object | undefined>; 
    delete(id: number): Promise<object | undefined>;

}