<?php
$conn = mysqli_connect("localhost", "root", "", "auth_db");

if (!$conn) {
    die("Database connection failed");
}
