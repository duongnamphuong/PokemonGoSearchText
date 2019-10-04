//https://db.pokemongohub.net
//How to use: run anonymous function below in browser console, then check console log.
(function () {
    var array = [];
    var max = 72;//paramter used to loot rows of the table.
    var csvPokemon = "";
    var csvType = "";
    var csvId = "";
    var monsters = [];
    var multiFormIds = [];//list of Poke Id that have multiple forms
    for (var i = 1; i <= max; i++) {
        var monster = new Object();
        monster.Id = parseInt($x("//*[@id='root']/div/div/div[2]/div/div/div[@class='rt-table']/div[@class='rt-tbody']/div[@class='rt-tr-group'][" + i + "]/div[1]/div[1]")[0].innerHTML);
        monster.Species = $x("//*[@id='root']/div/div/div[2]/div/div/div[@class='rt-table']/div[@class='rt-tbody']/div[@class='rt-tr-group'][" + i + "]/div[1]/div[2]/a[1]/div[1]/strong[1]")[0].innerHTML.trim();
        monster.Atk = parseInt($x("//*[@id='root']/div/div/div[2]/div/div/div[@class='rt-table']/div[@class='rt-tbody']/div[@class='rt-tr-group'][" + i + "]/div[1]/div[4]")[0].innerHTML);
        monster.Def = parseInt($x("//*[@id='root']/div/div/div[2]/div/div/div[@class='rt-table']/div[@class='rt-tbody']/div[@class='rt-tr-group'][" + i + "]/div[1]/div[5]")[0].innerHTML);
        monster.Hp = parseInt($x("//*[@id='root']/div/div/div[2]/div/div/div[@class='rt-table']/div[@class='rt-tbody']/div[@class='rt-tr-group'][" + i + "]/div[1]/div[6]")[0].innerHTML);

        //types
        var types = [];
        var typeXPath = $x("//*[@id='root']/div/div/div[2]/div/div/div[@class='rt-table']/div[@class='rt-tbody']/div[@class='rt-tr-group'][" + i + "]/div[1]/div[2]//div[@class='name-and-type']/div/span[contains(@class,'type')]/span");
        var countType = typeXPath.length;
        for (var j = 0; j < countType; j++) {
            types.push(typeXPath[j].innerHTML.trim());
        }
        monster.types = types;
        csvPokemon += monster.Id + "\t" + monster.Species + "\t" + monster.Atk + "\t" + monster.Def + "\t" + monster.Hp + "\n";
        monsters.push(monster);
    }
    console.log(csvPokemon);

    for (var i = 0; i < monsters.length; i++) {
        for (var j = 0; j < monsters[i].types.length; j++) {
            if (multiFormIds.indexOf(monsters[i].Id) >= 0) {
                csvType += monsters[i].Id + "\t" + monsters[i].Species + "\t" + "?" + "\t" + monsters[i].types[j] + "\n";
            }
        }
        csvId += monsters[i].Id + "\n";
    }
    console.log(csvType);
    //console.log(csvId);
})();