<?php
    // Imports
    include 'connectionMySQL.php';
    // Locals
    $user = $_GET['uname'];
    $pw = $_GET['psw'];
    $exist = FALSE;
    
    $sql = "select idUser, pw_user from Users where idUser = '".$user."';";
    $result = mysqli_query($conn, $sql);
    
    // 
    if (mysqli_num_rows($result)  == 1) {
        $exist = TRUE;
        $row = $result->fetch_array(MYSQLI_ASSOC);
    }
    //
    $conn->close();
    // If result exists
    if (!$exist) {
        echo "<script>alert(\"Utilisateur incorrect!\")</script>";
    } elseif ($row['pw_user'] == $pw) {
        $url = "../CuzCuzNotesServer/html/main.html";
        header("Location: ".$url);
    } else {
        echo "<script>alert(\"Mot de passe incorrect!\")</script>"; 
    }
   
?>