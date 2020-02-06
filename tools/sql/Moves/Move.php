<?php
    class Move {
        protected $Id;
        protected $Name;
        function getId() {
            return $this->Id;
        }
        function getName() {
            return $this->Name;
        }
        function __construct($Id, $Name) {
            $this->Id = $Id;
            $this->Name = $Name;
        }
    }
    class FastMove extends Move {
    }
    class ChargeMove extends Move {
    }
?>
