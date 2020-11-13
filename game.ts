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

const buildBarSeries = (games : Game[], records : RecordItem[]) => {

    const mappedGames = games.map(game => {
        // 
        const filteredGames = records.filter(item => {
            return item.gameTitle === game.title && item.gamePlatform === game.platform;
        });

        return {
            x: `${game.title} | ${game.platform}`,
            y: filteredGames.length
        }
    });

    console.log(mappedGames);

    const sortedGames = mappedGames.sort((a, b) => b.y - a.y);

    return sortedGames.slice(0, 8);

}

// Dados do gráfico de plataforma
const getPlatformChartData = (records : RecordItem[]) => {

    const platforms = ['PC', 'PLAYSTATION', 'XBOX'];
    // Serie do gráfico
    // Para cada plataforma estou definindo uma função que filtra os registros e pega a quantidade dessa lista
    const series = platforms.map(platform => {
        const filteredGames = records.filter(item => {
            return platform === item.gamePlatform;
        });
        // retorna a quantidade de votos
        return filteredGames.length;
    });

    return{
        labels: platforms,
        series
    };
}

const getGenreChartData = (records : RecordItem[]) => {

    const computeRecordItem = (dictionary, recordItem : RecordItem) => {

        if (dictionary[recordItem.genreName] !== undefined) {
            dictionary[recordItem.genreName] += 1;
        }
        else {
            dictionary[recordItem.genreName] = 1;
        }

        return dictionary;
    }

    const genreByAmount = records.reduce(computeRecordItem, {} as Record<string, number>);

    // nome dos atributos
    const labels = Object.keys(genreByAmount);
    // valores 
    const series = labels.map(x => genreByAmount[x]);

    return {
        labels,
        series
    }
}

console.log('Gráficos de barras');
console.log(buildBarSeries(gameList, recordItemList));

console.log('Gráficos de Roscas (PLATAFORMAS)');
console.log(getPlatformChartData(recordItemList));

console.log('Gráficos de Roscas (GÊNEROS)' );
console.log(getGenreChartData(recordItemList));