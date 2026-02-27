# Sachiv — Productivity App Scaffold

Sachiv is a productivity suite scaffold that combines a React + TypeScript frontend with a PHP + MySQL backend design for Hostinger deployment.

## Included in this repository

- **Frontend app shell (Vite + React + Tailwind + Framer Motion + Recharts)**
  - Sidebar + mobile navigation: Dashboard, Todos, Habits, Goals, Analytics
  - Focus timer widget, task flow, and completion reinforcement
  - Subject manager/task creation scaffold, habit creation scaffold, goal creation scaffold
  - Habit streak cards + GitHub-style contribution heatmap
  - Goal cards with daily target and on-track indicator
  - Analytics charts: focus trend, completion pie, energy-rating correlation, and export CTA
  - Psychology-first motivation widgets:
    - Identity loop
    - Reward loop
    - If-Then implementation intention
    - Momentum scoring
  - Color-psychology cues:
    - Blue = focus calm
    - Green = growth/streaks
    - Purple = creativity
    - Red/Orange = urgency/action

- **Backend API scaffold (PHP)**
  - `api/index.php` router entry with route map for auth/subjects/todos/habits/goals/analytics
  - Database connector
  - Authentication middleware stub
  - Controller stubs for planned REST endpoints

- **Database schema**
  - `database/schema.sql` with tables for config, tasks, timer sessions, habits, goals, and analytics

## Development

```bash
npm install
npm run dev
```

## Build checks

```bash
npm run lint
npm run build
```

## Backend structure

```text
api/
├── config/database.php
├── middleware/auth.php
├── controllers/
│   ├── AuthController.php
│   ├── SubjectController.php
│   ├── TodoController.php
│   ├── HabitController.php
│   ├── GoalController.php
│   └── AnalyticsController.php
├── models/TodoModel.php
├── utils/Response.php
└── index.php
```

## Deployment direction

- Deploy frontend build output to Vercel.
- Deploy `api/` folder and MySQL schema to Hostinger.
- Configure your frontend API base URL to point to Hostinger API.
