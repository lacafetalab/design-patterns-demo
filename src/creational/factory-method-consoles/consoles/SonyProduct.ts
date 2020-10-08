import { IConsole } from "../console-factory/IConsole";

export class SonyProduct implements IConsole {
    public name(): string {
        return 'PS5';
    } 
    
    public exclusives(): number {
        return 4;
    }
    
    public play() {
        return console.log('Aun no disponible');
    }
}