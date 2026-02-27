<?php

declare(strict_types=1);

require_once __DIR__ . '/../utils/Response.php';

function requireAuth(): void
{
    $token = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

    if ($token === '') {
        jsonResponse([
            'success' => false,
            'message' => 'Missing authorization token',
        ], 401);
        exit;
    }

    // TODO: replace with robust JWT verification and expiration checks.
}
