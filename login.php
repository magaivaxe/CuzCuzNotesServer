<?php
    // Imports
    include 'connectionMySQL.php';
    
    // Locals
    $user = $_GET['uname'];
    $pw = $_GET['psw'];
    
    // Query
    $sql = "select idUser, pw_user from Users where idUser = '".$user."';";
    
    $result = mysqli_query($conn, $sql);
    
    // If result exists
    if (mysqli_num_rows($result)  == 1) {
        $row = $result->fetch_array(MYSQLI_ASSOC);
    } else {
        echo "<script>alert(\"Utilisateur incorrect!\")</script>"; 
    }
    $conn->close();
    
    if ($row['pw_user'] == $pw) {
        $url = "../CuzCuzNotesServer/html/main.html";
        header("Location: ".$url);
    } else {
        echo "<script>alert(\"Mot de passe incorrect!\")</script>"; 
    }
    
?>