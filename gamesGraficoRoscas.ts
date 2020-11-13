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
// Função lambda
const buildBarSeries = (games : Game[], records : RecordItem[]) => {

    const mappedGames = games.map(game => {
        // Quantas ocorrencias eu terei de cada game
        const filteredGames = records.filter(record => {
            return record.gameTitle === game.title && record.gamePlatform === game.platform;
        });

        return {
            x: `${game.title} | ${game.platform}`,
            y: filteredGames.length
        }
    });
    const sortedGames = mappedGames.sort((a, b) => b.y - a.y);

    return sortedGames.slice(0, 8);
}

const getPlatformChartData = (records : RecordItem[]) => {

    const platforms = ['PC', 'PLAYSTATION', 'XBOX'];

    const series = platforms.map(platform => {
        const filteredGames = records.filter(item => {
            return platform === item.gamePlatform;
        });

        return filteredGames.length;
    });

    return{
        labels: platforms,
        series
    };
}



console.log(buildBarSeries(gameList, recordItemList));
