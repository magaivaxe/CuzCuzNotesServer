
<?php
       if(!empty($_GET))
       {
            echo "Vous avez fait un GET avec " . count($_GET) . " parametres(s).\n";
            foreach ($_GET as $nom => $valeur)
            {
                echo "\n" . $nom . " = " . $valeur;
            }
            echo "\n";
        }

        // PARAMÈTRES DU POST ******************************************************************
        if(!empty($_POST))
        {
            echo ">Vous avez fait un POST avec " . count($_POST) . " input(s).\n";
            foreach ($_POST as $nom => $valeur)
            {
                echo "\n" . $nom . " = " . $valeur;
            }
            echo "\n";
        }
    ?>		