<?php

declare(strict_types=1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once __DIR__ . '/utils/Response.php';
require_once __DIR__ . '/controllers/AuthController.php';
require_once __DIR__ . '/controllers/SubjectController.php';
require_once __DIR__ . '/controllers/TodoController.php';
require_once __DIR__ . '/controllers/HabitController.php';
require_once __DIR__ . '/controllers/GoalController.php';
require_once __DIR__ . '/controllers/AnalyticsController.php';

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? '/';
$basePath = '/api';
$route = str_starts_with($path, $basePath) ? substr($path, strlen($basePath)) : $path;
$route = $route === '' ? '/' : $route;

$routes = [
    ['POST', '#^/auth/login$#', 'login'],
    ['POST', '#^/auth/verify$#', 'verifyToken'],

    ['GET', '#^/subjects$#', 'listSubjects'],
    ['POST', '#^/subjects$#', 'createSubject'],
    ['PUT', '#^/subjects/\d+$#', 'updateSubject'],
    ['DELETE', '#^/subjects/\d+$#', 'deleteSubject'],

    ['GET', '#^/todos$#', 'getTodos'],
    ['POST', '#^/todos$#', 'createTodo'],
    ['GET', '#^/todos/\d+$#', 'getTodoById'],
    ['PUT', '#^/todos/\d+$#', 'updateTodo'],
    ['DELETE', '#^/todos/\d+$#', 'deleteTodo'],
    ['POST', '#^/todos/\d+/timer/start$#', 'startTodoTimer'],
    ['POST', '#^/todos/\d+/timer/stop$#', 'stopTodoTimer'],
    ['POST', '#^/todos/\d+/complete$#', 'completeTodo'],

    ['GET', '#^/habits$#', 'listHabits'],
    ['POST', '#^/habits$#', 'createHabit'],
    ['PUT', '#^/habits/\d+$#', 'updateHabit'],
    ['DELETE', '#^/habits/\d+$#', 'deleteHabit'],
    ['POST', '#^/habits/\d+/complete$#', 'completeHabit'],
    ['GET', '#^/habits/\d+/streaks$#', 'habitStreaks'],
    ['GET', '#^/habits/\d+/heatmap$#', 'habitHeatmap'],

    ['GET', '#^/goals$#', 'listGoals'],
    ['POST', '#^/goals$#', 'createGoal'],
    ['PUT', '#^/goals/\d+$#', 'updateGoal'],
    ['DELETE', '#^/goals/\d+$#', 'deleteGoal'],
    ['POST', '#^/goals/\d+/progress$#', 'addGoalProgress'],

    ['GET', '#^/analytics/dashboard$#', 'analyticsDashboard'],
    ['GET', '#^/analytics/daily$#', 'analyticsDaily'],
    ['GET', '#^/analytics/weekly$#', 'analyticsWeekly'],
    ['GET', '#^/analytics/monthly$#', 'analyticsMonthly'],
    ['GET', '#^/analytics/yearly$#', 'analyticsYearly'],
];

foreach ($routes as [$routeMethod, $pattern, $handler]) {
    if ($method === $routeMethod && preg_match($pattern, $route) === 1) {
        $handler();
        exit;
    }
}

jsonResponse([
    'success' => false,
    'message' => 'Route not found',
    'route' => $route,
], 404);
