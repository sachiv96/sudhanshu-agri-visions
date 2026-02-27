<?php

declare(strict_types=1);

require_once __DIR__ . '/../utils/Response.php';

function listSubjects(): void { jsonResponse(['success' => true, 'data' => [], 'message' => 'List subjects scaffold']); }
function createSubject(): void { jsonResponse(['success' => true, 'message' => 'Create subject scaffold'], 201); }
function updateSubject(): void { jsonResponse(['success' => true, 'message' => 'Update subject scaffold']); }
function deleteSubject(): void { jsonResponse(['success' => true, 'message' => 'Delete subject scaffold']); }
