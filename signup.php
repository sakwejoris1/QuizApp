<?php
require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = mysqli_real_escape_string($conn, $_POST["name"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

    // Check if email already exists
    $check = mysqli_query($conn, "SELECT id FROM users WHERE email='$email'");
    if (mysqli_num_rows($check) > 0) {
        echo "Email already exists";
        exit();
    }

    $sql = "INSERT INTO users (name, email, password)
            VALUES ('$name', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
        header("Location: login.html");
    } else {
        echo "Signup failed";
    }
}
