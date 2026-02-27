<?php

declare(strict_types=1);

require_once __DIR__ . '/../models/TodoModel.php';
require_once __DIR__ . '/../utils/Response.php';

function getTodos(): void
{
    $todos = listTodos();
    jsonResponse([
        'success' => true,
        'data' => $todos,
    ]);
}

function createTodo(): void { jsonResponse(['success' => true, 'message' => 'Create todo scaffold'], 201); }
function getTodoById(): void { jsonResponse(['success' => true, 'data' => null, 'message' => 'Get todo by id scaffold']); }
function updateTodo(): void { jsonResponse(['success' => true, 'message' => 'Update todo scaffold']); }
function deleteTodo(): void { jsonResponse(['success' => true, 'message' => 'Delete todo scaffold']); }
function startTodoTimer(): void { jsonResponse(['success' => true, 'message' => 'Timer start scaffold']); }
function stopTodoTimer(): void { jsonResponse(['success' => true, 'message' => 'Timer stop scaffold']); }
function completeTodo(): void { jsonResponse(['success' => true, 'message' => 'Todo completion with rating/distractions/energy scaffold']); }
