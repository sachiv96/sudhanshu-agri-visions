<?php

declare(strict_types=1);

require_once __DIR__ . '/../utils/Response.php';

function login(): void
{
    jsonResponse([
        'success' => true,
        'message' => 'Auth scaffold endpoint. Replace with password hash verification + JWT issue.',
    ]);
}

function verifyToken(): void
{
    jsonResponse([
        'success' => true,
        'message' => 'Token verify scaffold endpoint. Replace with real JWT validation.',
    ]);
}
