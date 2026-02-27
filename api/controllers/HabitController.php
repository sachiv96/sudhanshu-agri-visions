<?php

declare(strict_types=1);

require_once __DIR__ . '/../utils/Response.php';

function listHabits(): void { jsonResponse(['success' => true, 'data' => [], 'message' => 'List habits scaffold']); }
function createHabit(): void { jsonResponse(['success' => true, 'message' => 'Create habit scaffold'], 201); }
function updateHabit(): void { jsonResponse(['success' => true, 'message' => 'Update habit scaffold']); }
function deleteHabit(): void { jsonResponse(['success' => true, 'message' => 'Delete habit scaffold']); }
function completeHabit(): void { jsonResponse(['success' => true, 'message' => 'Complete habit scaffold']); }
function habitStreaks(): void { jsonResponse(['success' => true, 'data' => ['current_streak' => 0, 'longest_streak' => 0]]); }
function habitHeatmap(): void { jsonResponse(['success' => true, 'data' => []]); }
