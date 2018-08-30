<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" href="../CuzCuzNotesServer/css/style_index.css">
    </head>
    <body>
        <form action="login.php">
            <div class="imgcontainer">
                <img src="../CuzCuzNotesServer/images/avatar.png" alt="Avatar" class="avatar">
            </div>

            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>

                <button type="submit" name="signIn">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button  type="submit" name="signUp" class="cancelbtn">Sign Up</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
        <script type="text/javascript" src="../CuzCuzNotesServer/Js/js_index.js"></script>
    </body>
</html>
