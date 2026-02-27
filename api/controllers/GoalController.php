<?php

declare(strict_types=1);

require_once __DIR__ . '/../utils/Response.php';

function listGoals(): void { jsonResponse(['success' => true, 'data' => [], 'message' => 'List goals scaffold']); }
function createGoal(): void { jsonResponse(['success' => true, 'message' => 'Create goal scaffold'], 201); }
function updateGoal(): void { jsonResponse(['success' => true, 'message' => 'Update goal scaffold']); }
function deleteGoal(): void { jsonResponse(['success' => true, 'message' => 'Delete goal scaffold']); }
function addGoalProgress(): void { jsonResponse(['success' => true, 'message' => 'Goal progress scaffold']); }
