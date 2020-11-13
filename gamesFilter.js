"use strict";
exports.__esModule = true;
// Lista de games
var gameList = [
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
];
// Votos realizados
var recordItemList = [
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
];
// Função lambda
var buildBarSeries = function (games, records) {
    var mappedGames = games.map(function (game) {
        // Quantas ocorrencias eu terei de cada game
        var filteredGames = records.filter(function (record) {
            return record.gameTitle === game.title && record.gamePlatform === game.platform;
        });
        return {
            x: game.title + " | " + game.platform,
            y: filteredGames.length
        };
    });
    // Ordenação de games, essa ordenção sera feita pra quem tiver o maior números de votos primeiro (Y)
    // função lambda com 2 elementos a e b o criterio de ordenação será 
    var sortedGames = mappedGames.sort(function (a, b) { return b.y - a.y; });
    // O slice só pega alguns elementos da lista, partindo do zero e oito elementos
    return sortedGames.slice(0, 8);
};
console.log(buildBarSeries(gameList, recordItemList));
