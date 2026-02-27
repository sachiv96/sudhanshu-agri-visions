<?php

declare(strict_types=1);

require_once __DIR__ . '/../utils/Response.php';

function analyticsDashboard(): void { jsonResponse(['success' => true, 'data' => ['focus_minutes_today' => 0]]); }
function analyticsDaily(): void { jsonResponse(['success' => true, 'data' => []]); }
function analyticsWeekly(): void { jsonResponse(['success' => true, 'data' => []]); }
function analyticsMonthly(): void { jsonResponse(['success' => true, 'data' => []]); }
function analyticsYearly(): void { jsonResponse(['success' => true, 'data' => []]); }
