import { IConsole } from "../console-factory/IConsole";

export class NintendoProduct implements IConsole {
    public name(): string {
        return 'Nintendo';
    } 
    
    public exclusives(): number {
        return 25;
    }
    
    public play() {
        return console.log('Nintendero jugando');
    }
}