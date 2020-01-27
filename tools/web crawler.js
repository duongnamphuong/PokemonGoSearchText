//https://db.pokemongohub.net
//How to use: run anonymous function below in browser console, then check console log.
(function () {
    var array = [];
    var max = 72;//paramter used to loot rows of the table.
    var csvPokemon = '';
    var csvType = '';
    var csvId = '';
    var monsters = [];
    var multiFormIds = [];//list of Poke Id that have multiple forms
    for (var i = 1; i <= max; i++) {
        var monster = new Object();
        monster.Id = parseInt($x('//*[@id="root"]/div/div/div[2]/div/div/div[@class="rt-table"]/div[@class="rt-tbody"]/div[@class="rt-tr-group"][' + i + ']/div[1]/div[1]')[0].innerHTML);
        monster.Species = $x('//*[@id="root"]/div/div/div[2]/div/div/div[@class="rt-table"]/div[@class="rt-tbody"]/div[@class="rt-tr-group"][' + i + ']/div[1]/div[2]/a[1]/div[1]/strong[1]')[0].innerHTML.trim();
        monster.Atk = parseInt($x('//*[@id="root"]/div/div/div[2]/div/div/div[@class="rt-table"]/div[@class="rt-tbody"]/div[@class="rt-tr-group"][' + i + ']/div[1]/div[4]')[0].innerHTML);
        monster.Def = parseInt($x('//*[@id="root"]/div/div/div[2]/div/div/div[@class="rt-table"]/div[@class="rt-tbody"]/div[@class="rt-tr-group"][' + i + ']/div[1]/div[5]')[0].innerHTML);
        monster.Hp = parseInt($x('//*[@id="root"]/div/div/div[2]/div/div/div[@class="rt-table"]/div[@class="rt-tbody"]/div[@class="rt-tr-group"][' + i + ']/div[1]/div[6]')[0].innerHTML);

        //types
        var types = [];
        var typeXPath = $x('//*[@id="root"]/div/div/div[2]/div/div/div[@class="rt-table"]/div[@class="rt-tbody"]/div[@class="rt-tr-group"][' + i + ']/div[1]/div[2]//div[@class="name-and-type"]/div/span[contains(@class,"type")]/span');
        var countType = typeXPath.length;
        for (var j = 0; j < countType; j++) {
            types.push(typeXPath[j].innerHTML.trim());
        }
        monster.types = types;
        csvPokemon += monster.Id + '\t' + monster.Species + '\t' + monster.Atk + '\t' + monster.Def + '\t' + monster.Hp + '\n';
        monsters.push(monster);
    }
    console.log(csvPokemon);

    for (var i = 0; i < monsters.length; i++) {
        for (var j = 0; j < monsters[i].types.length; j++) {
            if (multiFormIds.indexOf(monsters[i].Id) >= 0) {
                csvType += monsters[i].Id + '\t' + monsters[i].Species + '\t' + '?' + '\t' + monsters[i].types[j] + '\n';
            }
        }
        csvId += monsters[i].Id + '\n';
    }
    console.log(csvType);
    //console.log(csvId);
})();

//https://db.pokemongohub.net/moves-list/category-charge
(function () {
    var max = 158; //number of rows to loot
    var csvMove = '';
    for (var i = 1; i <= max; i++) {
        var move = new Object();
        move.Name = $x('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[3]/div[' + i + ']/div/div[1]')[0].innerText;
        move.Type = $x('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[3]/div[' + i + ']/div/div[2]/a/span/img')[0].alt.replace(/ type/g, "");
        move.PowerGymRaid = parseFloat($x('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[3]/div[' + i + ']/div/div[3]')[0].innerText);
        move.EnergyRequired = parseFloat($x('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[3]/div[' + i + ']/div/div[4]')[0].innerText);
        move.CoolDown = parseFloat($x('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[3]/div[' + i + ']/div/div[5]')[0].innerText);
        csvMove += move.Name + '\t' + move.Type + '\t' + move.PowerGymRaid + '\t' + move.EnergyRequired + '\t' + move.CoolDown + '\n';
    }
    console.log(csvMove);
})();

//https://db.pokemongohub.net/moves-list/pvp/category-charge
(function () {
    var max = 158; //number of rows to loot
    var csvMove = '';
    for (var i = 1; i <= max; i++) {
        var move = new Object();
        move.Name = $x('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[3]/div[' + i + ']/div/div[1]')[0].innerText;
        move.Type = $x('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[3]/div[' + i + ']/div/div[2]/a/span/img')[0].alt.replace(/ type/g, "");
        var PowerPvPTemp = $x('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[3]/div[' + i + ']/div/div[3]')[0].innerText;
        move.PowerPvP = PowerPvPTemp != '' ? parseFloat(PowerPvPTemp) : 'NULL';
        var EnergyRequiredPvpTemp = $x('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[3]/div[' + i + ']/div/div[4]')[0].innerText;
        move.EnergyRequiredPvp = EnergyRequiredPvpTemp != '' ? parseFloat(EnergyRequiredPvpTemp) : 'NULL';
        var TurnsTemp = $x('//*[@id="root"]/div/div/div[2]/div/div/div[1]/div[3]/div[' + i + ']/div/div[5]')[0].innerText;
        move.Turns = TurnsTemp != '' ? parseFloat(TurnsTemp) : 'NULL';
        csvMove += move.Name + '\t' + move.Type + '\t' + move.PowerPvP + '\t' + move.EnergyRequiredPvp + '\t' + move.Turns + '\n';
    }
    console.log(csvMove);
})();

//https://bulbapedia.bulbagarden.net/wiki/List_of_moves_in_Pok%C3%A9mon_GO#Charged_Attacks
(function () {
    var max = 158;
    var csvMove = '';
    for (var i = 1; i <= max; i++) {
        var move = new Object();
        move.Id = $x('//*[@id="mw-content-text"]/table[2]/tbody/tr/td/table/tbody/tr[' + i + ']/td[1]')[0].innerText;
        move.Name = $x('//*[@id="mw-content-text"]/table[2]/tbody/tr/td/table/tbody/tr[' + i + ']/td[2]')[0].innerText;
        move.DamageStart = $x('//*[@id="mw-content-text"]/table[2]/tbody/tr/td/table/tbody/tr[' + i + ']/td[7]')[0].innerText;
        move.DamageEnd = $x('//*[@id="mw-content-text"]/table[2]/tbody/tr/td/table/tbody/tr[' + i + ']/td[8]')[0].innerText;
        csvMove += move.Id + '\t' + move.Name + '\t' + move.DamageStart + '\t' + move.DamageEnd + '\n';
    }
    console.log(csvMove);
})();

//https://bulbapedia.bulbagarden.net/wiki/List_of_moves_in_Pok%C3%A9mon_GO#Fast_Attacks
(function () {
    var max = 68;
    var csvMove = '';
    for (var i = 1; i <= max; i++) {
        var move = new Object();
        move.Id = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[1]')[0].innerText;
        move.Name = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[2]')[0].innerText;
        move.Type = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[3]/a/img')[0].alt.replace(/GO /g, '').replace(/.png/g, '');
        move.PowerGR = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[4]')[0].innerText;
        move.EnergyBoostGR = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[5]')[0].innerText;
        move.Duration = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[6]')[0].innerText;
        move.DamageStart = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[7]')[0].innerText;
        move.DamageEnd = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[8]')[0].innerText;
        move.PowerPvP = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[9]')[0].innerText;
        move.EnergyBoostPvP = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[10]')[0].innerText;
        move.DurationPvP = $x('//*[@id="mw-content-text"]/table[1]/tbody/tr/td/table/tbody/tr[' + i + ']/td[11]')[0].innerText;
        csvMove += move.Id + '\t' + move.Name + '\t' + move.Type + '\t' + move.PowerGR + '\t' + move.EnergyBoostGR + '\t' + move.Duration + '\t' + move.DamageStart + '\t' + move.DamageEnd + '\t' + move.PowerPvP + '\t' + move.EnergyBoostPvP + '\t' + move.DurationPvP + '\n';
    }
    console.log(csvMove);
})();

//https://db.pokemongohub.net/moves/225
(function () {
    var max = 22;
    var csvPokemon = '';
    for (var i = 1; i <= max; i++) {
        csvPokemon += $x('//*[@id="root"]/div/div/div[2]/div[5]/div/table/tbody/tr[' + i + ']/td[1]/a/div/strong')[0].innerText + '\n';
    }
    console.log(csvPokemon);
})();

//https://gamepress.gg/pokemongo/pokemon-move/low-kick
(function () {
    var csvPokemon = '';
    var id = 'sort-table'
    var countPokemonTables = $x('//table[@id="' + id + '"]').length;
    if (countPokemonTables >= 1) {
        //first table (non-legacy)
        var table1 = $x('//table[@id="' + id + '"]')[0];
        var max1 = table1.tBodies[0].rows.length;
        for (var i = 0; i < max1; i++) {
            var linkTags = [];
            var children = table1.tBodies[0].rows[i].cells[0].childNodes;
            for (j = 0; j < children.length; j++) {
                if (children[j].tagName == "A") {
                    linkTags.push(children[j]);
                }
            }
            csvPokemon += linkTags[1].innerText + '\n';
        }
        //second table (legacy)
        if (countPokemonTables == 2) {
            var table2 = $x('//table[@id="sort-table"]')[1];
            var max2 = table2.tBodies[0].rows.length;
            for (var i = 0; i < max2; i++) {
                var linkTags = [];
                var children = table2.tBodies[0].rows[i].cells[0].childNodes;
                for (j = 0; j < children.length; j++) {
                    if (children[j].tagName == "A") {
                        linkTags.push(children[j]);
                    }
                }
                csvPokemon += linkTags[1].innerText + '\n';
            }
        }
    }
    else {
        console.log('not found any tables');
    }
    console.log(csvPokemon);
})();
