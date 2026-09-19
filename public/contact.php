<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
    exit;
}

// Read raw JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

// 1. Honeypot check for spam protection (bots fill this in, humans leave it empty)
if (!empty($data['website'])) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent.']);
    exit;
}

$fullName = trim($data['fullName'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$topic = trim($data['topic'] ?? 'General Inquiry');
$message = trim($data['message'] ?? '');

// 2. Validate required fields
if (empty($fullName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

// 3. Email Destination
$to = 'mail@spinacloud.com';
$subject = "Spin'A'Cloud™ Inquiry: " . htmlspecialchars($topic) . " - " . htmlspecialchars($fullName);

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Spin\'A\'Cloud™ Contact Form <no-reply@spinacloud.in>';
$headers[] = 'Reply-To: ' . htmlspecialchars($fullName) . ' <' . htmlspecialchars($email) . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$htmlBody = "<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; padding: 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #080808; padding: 24px; text-align: center; border-bottom: 3px solid #ff5722; }
    .header h2 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0 0; font-size: 13px; color: #ff8a65; }
    .content { padding: 28px; }
    .field { margin-bottom: 18px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0f172a; font-weight: 500; }
    .value a { color: #ff5722; text-decoration: none; }
    .msg-box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; white-space: pre-wrap; font-size: 14px; color: #334155; margin-top: 6px; }
    .footer { background: #f1f5f9; padding: 14px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h2>New Contact Form Inquiry</h2>
      <p>Spin&apos;A&apos;Cloud&trade; Web Portal</p>
    </div>
    <div class='content'>
      <div class='field'>
        <div class='label'>Full Name</div>
        <div class='value'>" . htmlspecialchars($fullName) . "</div>
      </div>
      <div class='field'>
        <div class='label'>Email Address</div>
        <div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
      </div>
      <div class='field'>
        <div class='label'>Phone Number</div>
        <div class='value'><a href='tel:" . htmlspecialchars($phone) . "'>" . htmlspecialchars($phone) . "</a></div>
      </div>
      <div class='field'>
        <div class='label'>Inquiry Topic</div>
        <div class='value'>" . htmlspecialchars($topic) . "</div>
      </div>
      <div class='field'>
        <div class='label'>Message</div>
        <div class='msg-box'>" . nl2br(htmlspecialchars($message)) . "</div>
      </div>
    </div>
    <div class='footer'>
      Received via spinacloud.in • Date: " . date('Y-m-d H:i:s T') . "
    </div>
  </div>
</body>
</html>";

$mailSuccess = mail($to, $subject, $htmlBody, implode("\r\n", $headers));

if ($mailSuccess) {
    echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server could not dispatch the email. Please email us directly at mail@spinacloud.com.']);
}
