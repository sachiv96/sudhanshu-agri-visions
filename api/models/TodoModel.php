<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/database.php';

function listTodos(): array
{
    $pdo = getDatabaseConnection();
    $stmt = $pdo->query('SELECT * FROM todos ORDER BY created_at DESC LIMIT 100');
    return $stmt->fetchAll();
}
