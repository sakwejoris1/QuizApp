<?php
session_start();
require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $password = $_POST["password"];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) === 1) {

        $user = mysqli_fetch_assoc($result);

        if (password_verify($password, $user["password"])) {
            $_SESSION["user_id"] = $user["id"];
            $_SESSION["name"] = $user["name"];
            header("Location: dashboard.php");
        } else {
            echo "Wrong password";
        }

    } else {
        echo "User not found";
    }
}
