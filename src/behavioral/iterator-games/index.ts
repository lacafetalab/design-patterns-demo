import { GamesCollector } from "./GamesCollector";

export const executeIterator = () => {
    const collection = new GamesCollector();
    collection.addItem(
        {
            id: 1,
            name: "Among Us",
            studio: {
                name: 'Innersloth',
                games: 3
            }
        }
    );
    collection.addItem(
        {
            id: 2,
            name: "The Last of Us",
            studio: {
                name: 'Naughty Dog',
                games: 5
            }
        }
    )
    collection.addItem( {
        id: 3,
        name: "Tetris",
        studio: {
            name: 'Un ruso',
            games: 1
        }
    });
    collection.addItem( {
        id: 4,
        name: "Injustice: Gods Among Us",
        studio: {
            name: 'Warner Bros',
            games: 10
        }
    });
    collection.addItem( {
        id: 5,
        name: "Star Craft",
        studio: {
            name: 'Blizzard',
            games: 15
        }
    });

    const iterator = collection.getStudioNameIterator();

    console.log('Orden por estudio:');
    while (iterator.valid()) {
        console.log(iterator.next().studio.name);
    }

    console.log('');
    console.log('Orden por nomnbre de juego:');
    const reverseIterator = collection.getNameIterator();
    while (reverseIterator.valid()) {
        console.log(reverseIterator.next().name);
    }
}