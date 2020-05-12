<?php

header ("Content-Type: application/json");

include "database.php";



$res = [
    $data1,$data2

];

echo json_encode($res);
