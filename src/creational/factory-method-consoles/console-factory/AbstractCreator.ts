import {IConsole} from './IConsole';

export abstract class AbstractCreator {

    public abstract factoryMethod(): IConsole;

    public getExclusives(): string {
        const console = this.factoryMethod();
        return `La consola ${console.name()} tiene ${console.exclusives()} juegos exclusivos`;
    }

    public playWithConsole() {
        this.factoryMethod().play();;
    }
}