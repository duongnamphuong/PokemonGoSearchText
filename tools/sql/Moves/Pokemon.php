<?php
    class Pokemon {
        private $Id;
        private $FormId;
        private $Species;
        function __construct($Id, $FormId, $Species) {
            $this->Id = $Id;
            $this->FormId = $FormId;
            $this->Species = $Species;
        }
        function getSpecies() {
            return $this->Species;
        }
        function getId() {
            return $this->Id;
        }
        function getFormId() {
            return $this->FormId;
        }
    }
?>
