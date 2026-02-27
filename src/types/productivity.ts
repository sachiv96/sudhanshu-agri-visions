export type EnergyLevel = 'very_high' | 'high' | 'medium' | 'low' | 'very_low';

export interface Subject {
  id: number;
  name: string;
  color: string;
  icon: string;
}

export interface Todo {
  id: number;
  title: string;
  subjectId: number;
  estimatedMinutes: number;
  elapsedSeconds: number;
  status: 'pending' | 'in_progress' | 'completed';
  dueDate: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  rating?: number;
  distractionCount?: number;
  energyLevel?: EnergyLevel;
}

export interface Habit {
  id: number;
  name: string;
  color: string;
  streak: number;
  completionsThisWeek: number;
}

export interface Goal {
  id: number;
  title: string;
  type: 'weekly' | 'monthly';
  targetValue: number;
  currentValue: number;
  unit: string;
  startDate: string;
  endDate: string;
}
