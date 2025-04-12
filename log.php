<?php
// Get the user's IP address
$user_ip = $_SERVER['REMOTE_ADDR'];

// Get the user's browser info
$user_agent = $_SERVER['HTTP_USER_AGENT'];

// Log the info to a file
$log_file = 'user_logs.txt';
$log_data = "IP: $user_ip, User Agent: $user_agent, Time: " . date('Y-m-d H:i:s') . "\n";
file_put_contents($log_file, $log_data, FILE_APPEND);

// Return a JSON response
header('Content-Type: application/json');
echo json_encode(['status' => 'success', 'ip' => $user_ip, 'user_agent' => $user_agent]);
?>
