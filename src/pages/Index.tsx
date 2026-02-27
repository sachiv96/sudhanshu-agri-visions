import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Activity,
  BarChart3,
  CheckCircle2,
  Flame,
  Goal as GoalIcon,
  LayoutDashboard,
  ListTodo,
  PartyPopper,
  Play,
  Square,
  Timer,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Goal, Habit, Subject, Todo } from "@/types/productivity";

const nav = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { id: "todos", icon: ListTodo, label: "Todos" },
  { id: "habits", icon: Flame, label: "Habits" },
  { id: "goals", icon: GoalIcon, label: "Goals" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
] as const;

const subjects: Subject[] = [
  { id: 1, name: "Deep Work", color: "#3b82f6", icon: "🧠" },
  { id: 2, name: "Creative", color: "#8b5cf6", icon: "🎨" },
  { id: 3, name: "Health", color: "#22c55e", icon: "🏃" },
  { id: 4, name: "Urgent", color: "#ef4444", icon: "🚨" },
];

const initialTodos: Todo[] = [
  { id: 1, title: "Design Sachiv dashboard", subjectId: 1, estimatedMinutes: 90, elapsedSeconds: 0, status: "pending", dueDate: "Today", priority: "high" },
  { id: 2, title: "Plan Hostinger API routes", subjectId: 4, estimatedMinutes: 45, elapsedSeconds: 0, status: "pending", dueDate: "Today", priority: "urgent" },
  { id: 3, title: "Evening run", subjectId: 3, estimatedMinutes: 30, elapsedSeconds: 0, status: "completed", dueDate: "Today", priority: "medium", rating: 4, distractionCount: 1, energyLevel: "high" },
];

const habits: Habit[] = [
  { id: 1, name: "Read 20 pages", color: "#22c55e", streak: 8, completionsThisWeek: 6 },
  { id: 2, name: "No social media before noon", color: "#84cc16", streak: 12, completionsThisWeek: 5 },
  { id: 3, name: "Morning journaling", color: "#14b8a6", streak: 5, completionsThisWeek: 4 },
];

const goals: Goal[] = [
  { id: 1, title: "Study 56 hours this week", type: "weekly", targetValue: 56, currentValue: 29, unit: "hours", startDate: "2026-02-22", endDate: "2026-02-28" },
  { id: 2, title: "Finish 40 deep tasks this month", type: "monthly", targetValue: 40, currentValue: 21, unit: "tasks", startDate: "2026-02-01", endDate: "2026-02-28" },
];

const weeklyFocus = [
  { day: "Mon", hours: 4.3 }, { day: "Tue", hours: 5.1 }, { day: "Wed", hours: 3.8 }, { day: "Thu", hours: 6.4 }, { day: "Fri", hours: 4.9 }, { day: "Sat", hours: 2.2 }, { day: "Sun", hours: 3.1 },
];

const statusData = [
  { name: "Completed", value: 68, color: "#22c55e" },
  { name: "In progress", value: 20, color: "#3b82f6" },
  { name: "Pending", value: 12, color: "#f59e0b" },
];

const energyRatingData = [
  { energy: 1, rating: 2 },
  { energy: 2, rating: 3 },
  { energy: 3, rating: 3 },
  { energy: 4, rating: 4 },
  { energy: 5, rating: 5 },
];

const nudges = [
  "Blue zones increase calm focus. Start with one 10-minute sprint.",
  "Green signals progress and safety. Keep your streak alive today.",
  "Purple unlocks creativity. Finish one meaningful task now.",
  "Orange cues urgency. Close your highest-priority task first.",
];

const heatCells = Array.from({ length: 91 }, (_, i) => ({ count: (i * 7) % 4 }));

const Index = () => {
  const [activeView, setActiveView] = useState<(typeof nav)[number]["id"]>("dashboard");
  const [todos, setTodos] = useState(initialTodos);
  const [activeTodoId, setActiveTodoId] = useState<number | null>(null);
  const [intention, setIntention] = useState("If I feel distracted, I will run one 10-minute timer before checking my phone.");
  const [rewardMessage, setRewardMessage] = useState("Finish one task to unlock celebration mode 🎉");

  useEffect(() => {
    if (!activeTodoId) return;
    const timer = window.setInterval(() => {
      setTodos((prev) => prev.map((todo) => todo.id === activeTodoId ? { ...todo, elapsedSeconds: todo.elapsedSeconds + 1, status: "in_progress" } : todo));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [activeTodoId]);

  const activeTodo = todos.find((todo) => todo.id === activeTodoId) ?? null;
  const completedTasks = todos.filter((todo) => todo.status === "completed").length;
  const todayFocusMins = Math.floor(todos.reduce((sum, todo) => sum + todo.elapsedSeconds, 0) / 60);
  const startedTasks = todos.filter((todo) => todo.elapsedSeconds > 0).length;
  const topGoal = useMemo(() => goals[0], []);
  const dailyTarget = useMemo(() => topGoal.targetValue / 7, [topGoal]);
  const momentumScore = useMemo(() => Math.min(100, completedTasks * 20 + startedTasks * 8 + todayFocusMins), [completedTasks, startedTasks, todayFocusMins]);

  const formatTime = (seconds: number) => `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

  const completeTask = (todoId: number) => {
    setTodos((prev) => prev.map((item) => item.id === todoId ? { ...item, status: "completed", rating: 5, distractionCount: 0, energyLevel: "high" } : item));
    setRewardMessage("Excellent. Your brain now associates finishing with positive feedback.");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-7xl gap-4 p-4 md:p-6">
        <aside className="sticky top-4 hidden h-fit w-64 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 md:block">
          <h1 className="mb-1 text-2xl font-bold">Sachiv v2</h1>
          <p className="mb-6 text-xs text-slate-400">Color psychology + behavior design</p>
          <div className="space-y-2">
            {nav.map((item) => (
              <button key={item.id} onClick={() => setActiveView(item.id)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition ${activeView === item.id ? "bg-sky-500/20 text-sky-300" : "hover:bg-slate-800"}`}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 pb-20 md:pb-4">
          <header className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Behavior Design Command Center</p>
              <h2 className="text-xl font-semibold">{new Date().toLocaleString()}</h2>
            </div>
            <Badge className={`${momentumScore >= 75 ? "bg-green-500/20 text-green-300" : momentumScore >= 40 ? "bg-amber-500/20 text-amber-300" : "bg-sky-500/20 text-sky-300"}`}>{momentumScore >= 75 ? "High momentum" : momentumScore >= 40 ? "Building momentum" : "Warm-up mode"}</Badge>
          </header>

          <AnimatePresence mode="wait">
            <motion.section key={activeView} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="space-y-4">
              {activeView === "dashboard" && (
                <>
                  <div className="grid gap-4 lg:grid-cols-3">
                    <Card className="border-slate-800 bg-slate-900 lg:col-span-2">
                      <CardHeader><CardTitle className="flex items-center gap-2"><Timer className="h-4 w-4" />Focus Timer Widget</CardTitle></CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-slate-400">{activeTodo ? activeTodo.title : "Start timer for your top priority"}</p>
                        <p className="text-4xl font-bold tabular-nums">{formatTime(activeTodo?.elapsedSeconds ?? 0)}</p>
                        <div className="flex gap-2"><Button onClick={() => setActiveTodoId(todos[0].id)} className="gap-2"><Play className="h-4 w-4" />Start Sprint</Button><Button variant="outline" onClick={() => setActiveTodoId(null)} className="gap-2"><Square className="h-4 w-4" />Pause</Button></div>
                      </CardContent>
                    </Card>
                    <Card className="border-slate-800 bg-slate-900">
                      <CardHeader><CardTitle>Identity + Nudge</CardTitle></CardHeader>
                      <CardContent className="space-y-3 text-sm"><p>I am a person who finishes what I start.</p><p className="rounded-lg bg-slate-800 p-2">{nudges[completedTasks % nudges.length]}</p></CardContent>
                    </Card>

                    <Card className="border-slate-800 bg-slate-900"><CardContent className="p-4"><p className="text-sm text-slate-400">Momentum score</p><p className="text-2xl font-bold">{momentumScore}</p><Progress value={momentumScore} className="mt-3" /></CardContent></Card>
                    <Card className="border-slate-800 bg-slate-900"><CardContent className="p-4"><p className="text-sm text-slate-400">Focus mins today</p><p className="text-2xl font-bold">{todayFocusMins}</p></CardContent></Card>
                    <Card className="border-slate-800 bg-slate-900"><CardContent className="p-4"><p className="text-sm text-slate-400">Tasks completed</p><p className="text-2xl font-bold">{completedTasks}</p></CardContent></Card>

                    <Card className="border-slate-800 bg-slate-900 lg:col-span-2"><CardHeader><CardTitle>Weekly Focus Trend</CardTitle></CardHeader><CardContent className="h-64"><ResponsiveContainer width="100%" height="100%"><LineChart data={weeklyFocus}><CartesianGrid strokeDasharray="3 3" stroke="#1e293b" /><XAxis dataKey="day" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip /><Line type="monotone" dataKey="hours" stroke="#38bdf8" strokeWidth={3} /></LineChart></ResponsiveContainer></CardContent></Card>
                    <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle className="flex items-center gap-2"><PartyPopper className="h-4 w-4" />Reward Loop</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><p>{rewardMessage}</p><p className="text-slate-400">Immediate reward strengthens effort consistency.</p></CardContent></Card>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>If-Then Planning</CardTitle></CardHeader><CardContent className="space-y-3"><Input value={intention} onChange={(e) => setIntention(e.target.value)} /><p className="text-sm text-slate-400">Pre-deciding your response reduces decision fatigue.</p></CardContent></Card>
                    <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>Today's Overview</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><p>Tasks due today: <strong>{todos.length}</strong></p><p>Habits to complete: <strong>{habits.length}</strong></p><p>Goals in progress: <strong>{goals.length}</strong></p><p>Daily target: <strong>{dailyTarget.toFixed(1)} {topGoal.unit}</strong></p></CardContent></Card>
                  </div>
                </>
              )}

              {activeView === "todos" && (
                <div className="space-y-4">
                  <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>Subject Manager + Task Creation</CardTitle></CardHeader><CardContent className="grid gap-2 text-sm md:grid-cols-2"><Input placeholder="Task title" /><Input placeholder="Estimated time (HH:MM)" /><Input placeholder="Due date" /><Input placeholder="Priority / Subject" /><p className="text-slate-400 md:col-span-2">Color intent: Blue for deep work, Green for habits, Purple for creativity, Red for urgent attention.</p></CardContent></Card>
                  {todos.map((todo) => {
                    const subject = subjects.find((item) => item.id === todo.subjectId);
                    const estimateProgress = Math.min(100, (todo.elapsedSeconds / (todo.estimatedMinutes * 60)) * 100 || 0);
                    return (
                      <Card key={todo.id} className="border-slate-800 bg-slate-900"><CardContent className="space-y-3 p-4"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="font-medium">{todo.title}</p><p className="text-xs text-slate-400">{subject?.icon} {subject?.name} • Due {todo.dueDate}</p></div><div className="flex items-center gap-3"><Badge>{todo.priority}</Badge><span className="text-sm tabular-nums">{formatTime(todo.elapsedSeconds)}</span><Button size="sm" onClick={() => setActiveTodoId(todo.id)}>Start</Button><Button size="sm" variant="outline" onClick={() => completeTask(todo.id)}><CheckCircle2 className="mr-1 h-4 w-4" />Finish</Button></div></div><Progress value={estimateProgress} /><p className="text-xs text-slate-400">Completion modal data: ⭐ rating, distractions, energy level (Very High → Very Low).</p></CardContent></Card>
                    );
                  })}
                </div>
              )}

              {activeView === "habits" && (
                <div className="space-y-4">
                  <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>Create Habit Form</CardTitle></CardHeader><CardContent className="grid gap-2 text-sm md:grid-cols-2"><Input placeholder="Habit name" /><Input placeholder="Frequency (daily/weekly)" /><Input placeholder="Color" /><Input placeholder="Description" /></CardContent></Card>
                  <div className="grid gap-4 md:grid-cols-3">{habits.map((habit) => (<Card key={habit.id} className="border-slate-800 bg-slate-900"><CardContent className="p-4"><p className="font-semibold">{habit.name}</p><p className="text-sm text-slate-400">Current streak: {habit.streak} days</p><Progress className="mt-3" value={(habit.completionsThisWeek / 7) * 100} /></CardContent></Card>))}</div>
                  <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>GitHub-style Contribution Graph</CardTitle></CardHeader><CardContent><div className="grid grid-cols-7 gap-1">{heatCells.map((cell, index) => (<div key={index} className={`h-3 w-3 rounded-sm ${cell.count === 0 ? "bg-slate-800" : cell.count === 1 ? "bg-green-900" : cell.count === 2 ? "bg-green-600" : "bg-green-400"}`} />))}</div></CardContent></Card>
                </div>
              )}

              {activeView === "goals" && (
                <div className="space-y-4">
                  <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>Goal Form (Weekly / Monthly)</CardTitle></CardHeader><CardContent className="grid gap-2 text-sm md:grid-cols-2"><Input placeholder="Goal title" /><Input placeholder="Target value + unit" /><Input placeholder="Goal type" /><Input placeholder="Start date" /></CardContent></Card>
                  <div className="grid gap-4 md:grid-cols-2">{goals.map((goal) => { const percent = (goal.currentValue / goal.targetValue) * 100; const days = goal.type === "weekly" ? 7 : 30; return (<Card key={goal.id} className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>{goal.title}</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><p>Daily target: {(goal.targetValue / days).toFixed(1)} {goal.unit}</p><p>Current: {goal.currentValue} / {goal.targetValue} {goal.unit}</p><Progress value={percent} /><p className={percent >= 50 ? "text-green-400" : "text-amber-300"}>{percent >= 50 ? "✓ On-track" : "✗ Behind schedule"}</p></CardContent></Card>); })}</div>
                </div>
              )}

              {activeView === "analytics" && (
                <div className="grid gap-4 lg:grid-cols-2">
                  <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>Focus Time Chart</CardTitle></CardHeader><CardContent className="h-64"><ResponsiveContainer width="100%" height="100%"><BarChart data={weeklyFocus}><CartesianGrid strokeDasharray="3 3" stroke="#1e293b" /><XAxis dataKey="day" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip /><Bar dataKey="hours" fill="#38bdf8" radius={[8, 8, 0, 0]} /></BarChart></ResponsiveContainer></CardContent></Card>
                  <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>Task Completion Rate</CardTitle></CardHeader><CardContent className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={statusData} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={95}>{statusData.map((entry) => (<Cell key={entry.name} fill={entry.color} />))}</Pie><Tooltip /></PieChart></ResponsiveContainer></CardContent></Card>
                  <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>Energy vs Rating Correlation</CardTitle></CardHeader><CardContent className="h-64"><ResponsiveContainer width="100%" height="100%"><ScatterChart><CartesianGrid strokeDasharray="3 3" stroke="#1e293b" /><XAxis dataKey="energy" stroke="#94a3b8" /><YAxis dataKey="rating" stroke="#94a3b8" /><Tooltip /><Scatter data={energyRatingData} fill="#a78bfa" /></ScatterChart></ResponsiveContainer></CardContent></Card>
                  <Card className="border-slate-800 bg-slate-900"><CardHeader><CardTitle>Breakdown & Export</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><p>Daily/Weekly/Monthly/Yearly selector: included in analytics scaffold.</p><p>Breakdown table fields: Date | Focus | Tasks | Habits | Rating | Distractions.</p><Button variant="outline">Export CSV</Button></CardContent></Card>
                  <Card className="border-slate-800 bg-slate-900 lg:col-span-2"><CardContent className="flex items-center justify-between p-4 text-sm text-slate-300"><span>Analytics for Week 8, February 2026</span><span className="flex items-center gap-2"><Activity className="h-4 w-4" />Daily target: {dailyTarget.toFixed(1)} {topGoal.unit}</span></CardContent></Card>
                </div>
              )}
            </motion.section>
          </AnimatePresence>

          <div className="fixed bottom-0 left-0 right-0 z-10 grid grid-cols-5 border-t border-slate-800 bg-slate-950/95 p-2 md:hidden">
            {nav.map((item) => (
              <button key={item.id} onClick={() => setActiveView(item.id)} className={`rounded-lg px-2 py-2 text-xs ${activeView === item.id ? "bg-sky-500/20 text-sky-300" : "text-slate-400"}`}>{item.label}</button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
