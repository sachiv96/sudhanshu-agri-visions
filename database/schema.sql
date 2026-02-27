CREATE TABLE app_config (
    id INT PRIMARY KEY AUTO_INCREMENT,
    config_key VARCHAR(50) UNIQUE NOT NULL,
    config_value TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    color VARCHAR(7) DEFAULT '#3b82f6',
    icon VARCHAR(50) DEFAULT '📚',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE todos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    subject_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pending', 'in_progress', 'completed', 'abandoned') DEFAULT 'pending',
    priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
    estimated_minutes INT,
    actual_minutes INT DEFAULT 0,
    rating TINYINT CHECK (rating BETWEEN 1 AND 5),
    distraction_count INT DEFAULT 0,
    energy_level ENUM('very_high', 'high', 'medium', 'low', 'very_low'),
    due_date DATE,
    completed_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE SET NULL,
    INDEX idx_status (status),
    INDEX idx_due_date (due_date)
);

CREATE TABLE timer_sessions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    todo_id INT NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NULL,
    duration_seconds INT,
    is_paused BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (todo_id) REFERENCES todos(id) ON DELETE CASCADE
);

CREATE TABLE habits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    frequency ENUM('daily', 'weekly') DEFAULT 'daily',
    color VARCHAR(7) DEFAULT '#22c55e',
    current_streak INT DEFAULT 0,
    longest_streak INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE habit_completions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    habit_id INT NOT NULL,
    completed_date DATE NOT NULL,
    completion_count INT DEFAULT 1,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_habit_date (habit_id, completed_date),
    FOREIGN KEY (habit_id) REFERENCES habits(id) ON DELETE CASCADE,
    INDEX idx_completed_date (completed_date)
);

CREATE TABLE goals (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    goal_type ENUM('weekly', 'monthly') DEFAULT 'weekly',
    target_value DECIMAL(10,2) NOT NULL,
    current_value DECIMAL(10,2) DEFAULT 0,
    unit VARCHAR(50) DEFAULT 'hours',
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status ENUM('active', 'completed', 'failed', 'paused') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_status_dates (status, start_date, end_date)
);

CREATE TABLE goal_progress (
    id INT PRIMARY KEY AUTO_INCREMENT,
    goal_id INT NOT NULL,
    value DECIMAL(10,2) NOT NULL,
    logged_date DATE NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (goal_id) REFERENCES goals(id) ON DELETE CASCADE
);

CREATE TABLE daily_analytics (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE NOT NULL UNIQUE,
    todos_completed INT DEFAULT 0,
    todos_created INT DEFAULT 0,
    total_focus_minutes INT DEFAULT 0,
    total_distractions INT DEFAULT 0,
    habits_completed INT DEFAULT 0,
    avg_task_rating DECIMAL(3,2),
    avg_energy_level VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_date (date)
);
