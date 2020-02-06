<?php
    require 'Pokemon.php';
    $myfile = fopen("map.csv", "r") or die("Unable to open file!");
    $fcontent = fread($myfile, filesize("map.csv"));
    fclose($myfile);
    $lines = preg_split("/\\r\\n|\\r|\\n/", $fcontent);
    $Pokemons = [];
    for ($i = 0; $i < count($lines); $i++) {
        if (preg_match('/(.+)\t(\d+)\t(\d+)/', $lines[$i])) {
            $parts = preg_split("/\t/", $lines[$i]);
            $poke = new Pokemon($parts[1], $parts[2], $parts[0]);
            array_push($Pokemons, $poke);
        }
    }
    echo "We have ".count($Pokemons)." Pokémon.";
?>
<?php
    require 'Move.php';
    $fname = "Fast Moves.txt";
    $myfile = fopen($fname, "r") or die("Unable to open file!");
    $fcontent = fread($myfile, filesize($fname));
    fclose($myfile);
    $lines = preg_split("/\\r\\n|\\r|\\n/", $fcontent);
    $moves = [];
    $mappingCount = 0;
    $script = '';
    for ($i = 0; $i < count($lines); $i++) {
        if (preg_match("/(\d+)\t(.+)\t(.+)/", $lines[$i])) {
            $parts = preg_split("/\t/", $lines[$i]);
            $move = new FastMove($parts[0], $parts[1]);
            array_push($moves, $move);
            $count = 0;
            $j = $i + 1;
            while ($j < count($lines) and preg_match("/(.+)\t[01]/", $lines[$j])) {
                $searchedValue = preg_split("/\t/", $lines[$j])[0];
                $IsTM = preg_split("/\t/", $lines[$j])[1];
                $poke = array_filter(
                    $Pokemons,
                    function($e) use ($searchedValue) {
                        return $e->getSpecies() == $searchedValue;
                    }
                );
                if (count($poke) == 0) {
                    echo 'not found Pokémon by Species. shut down.';
                    return;
                }
                $script .= 'insert into PokeFastMove(PokeId,FormId,MoveId,IsTM)values '.'('.$poke[array_keys($poke)[0]]->getId().','.$poke[array_keys($poke)[0]]->getFormId().','.$move->getId().','.$IsTM.')'."\r\n";
                $count++;
                $j++;
            }
            echo $move->getName()." has ".$count." Pokémon\n";
            $mappingCount += $count;
        }
    }
    echo count($moves)." fast moves and ".$mappingCount." mappings\n";
    
    // write script to file
    $fp = fopen('fast move.sql','w');
    fwrite($fp, $script);
    fclose($fp);
    echo "Script is written to file."
?>
