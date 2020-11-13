export {}

//Tipo enumerado com 3 valores
type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';

//Tipos definidos ou classes 
type RecordItem = {
    gameTitle: string;
    gamePlatform: Platform;
    genreName: string;
}

type Game = {
    id: number;
    title: string;
    platform: Platform;
}

// Lista de games
const gameList : Game[] = [ // Iniciando a lista
    {
        "id": 1,
        "title": "FORZA 7",
        "platform": "XBOX"
    },
    {
        "id": 2,
        "title": "GOD OF WAR",
        "platform": "PLAYSTATION"
    },
    {
        "id": 3,
        "title": "CS",
        "platform": "PC"
    }
]

// Votos realizados
const recordItemList : RecordItem[] = [
    {
        "gameTitle": "GOD OF WAR",
        "gamePlatform": "PLAYSTATION",
        "genreName": "Aventura"
    },
    {
        "gameTitle": "FORZA",
        "gamePlatform": "XBOX",
        "genreName": "Corrida"
    },
    {
        "gameTitle": "CS",
        "gamePlatform": "PC",
        "genreName": "Tiro"
    },
    {
        "gameTitle": "FORZA",
        "gamePlatform": "XBOX",
        "genreName": "Corrida"
    },
    {
        "gameTitle": "CS",
        "gamePlatform": "PC",
        "genreName": "Tiro"
    }
]

const mappedGames = gameList.map(game => {

    return {
        x: `${game.title} | ${game.platform}`,
        y: 0
    }
});

console.log(mappedGames);
