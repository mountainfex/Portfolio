<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
    
            $recipient = 'niklas.tibbe@outlook.de';  
            $subject = "Contact From $email";
            $headers = "<From:  $email>";
            $message = "From:" . $name . "/n" . $message;
    
            mail($recipient, $subject, $message, $headers);
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
} 