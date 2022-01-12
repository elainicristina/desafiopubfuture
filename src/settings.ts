export class AppSettings {
    static PORT: number = Number(process.env.APP_PORT) || 3001;
}