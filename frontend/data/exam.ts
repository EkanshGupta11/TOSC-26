import { ExamPool, ExamScheduleItem } from "@/types";

export const EXAM_POOLS: ExamPool[] = [
  {
    id: "junior",
    name: "Junior Pool",
    classes: "Classes 6, 7 & 8",
    tagline: "Sparking foundational curiosity & lateral thinking",
    description:
      "Designed for students in middle school to cultivate observational reasoning, puzzles, basic arithmetic logic, and everyday scientific curiosity beyond standard textbooks.",
    eligibility: "Students currently enrolled in Class 6th, 7th, or 8th from any recognized education board (CBSE, ICSE, State Boards, IB, Cambridge).",
    durationMinutes: 90,
    totalQuestions: 60,
    totalMarks: 240,
    negativeMarking: "+4 for correct, -1 for incorrect, 0 for unattempted",
    subjects: [
      { name: "Logical & Mental Ability", questions: 25, marks: 100 },
      { name: "Basic Science & Exploration", questions: 20, marks: 80 },
      { name: "Quantitative Aptitude & Puzzles", questions: 15, marks: 60 },
    ],
  },
  {
    id: "senior",
    name: "Senior Pool",
    classes: "Classes 9 & 10",
    tagline: "Challenging analytical rigor & conceptual clarity",
    description:
      "A rigorous assessment for high schoolers focusing on multi-step logical deductions, mathematical problem-solving, and conceptual physics, chemistry & biology application.",
    eligibility: "Students currently enrolled in Class 9th or 10th from any recognized education board.",
    durationMinutes: 90,
    totalQuestions: 60,
    totalMarks: 240,
    negativeMarking: "+4 for correct, -1 for incorrect, 0 for unattempted",
    subjects: [
      { name: "Analytical & Critical Reasoning", questions: 20, marks: 80 },
      { name: "Mathematics & Mathematical Modeling", questions: 20, marks: 80 },
      { name: "Integrated Sciences (PCB)", questions: 20, marks: 80 },
    ],
  },
  {
    id: "super-senior",
    name: "Super Senior Pool",
    classes: "Classes 11 & 12",
    tagline: "Advanced problem solving & engineering/scientific intuition",
    description:
      "Targeted at senior secondary students aiming for Olympiad-level aptitude, deep conceptual physics/mathematics, abstract algorithmic thinking, and innovation challenges.",
    eligibility: "Students currently enrolled in Class 11th or 12th (Science / Mathematics stream or General Aptitude enthusiasts).",
    durationMinutes: 90,
    totalQuestions: 60,
    totalMarks: 240,
    negativeMarking: "+4 for correct, -1 for incorrect, 0 for unattempted",
    subjects: [
      { name: "Advanced Physics & Natural Philosophy", questions: 20, marks: 80 },
      { name: "Higher Mathematics & Combinatorics", questions: 20, marks: 80 },
      { name: "Complex Logic, Data Interpretation & Algorithms", questions: 20, marks: 80 },
    ],
  },
];

export const EXAM_STAGES = [
  {
    stageNumber: "01",
    title: "Stage 1: National Prelims",
    mode: "Online (Proctored) & In-School Center",
    duration: "90 Minutes",
    description:
      "A nationwide screening exam testing fundamental logic, science, and math through 60 multiple-choice questions. Top 500 students from each pool qualify for the Grand Finale.",
    highlights: [
      "Can be taken from your school or from home with AI proctoring",
      "Objective multiple-choice format (+4 / -1)",
      "Instant participation certificate & detailed diagnostic report",
    ],
  },
  {
    stageNumber: "02",
    title: "Stage 2: Grand Finale at IIT Kanpur",
    mode: "On-Campus at IIT Kanpur during Techkriti",
    duration: "2-Day Immersion",
    description:
      "Qualified finalists travel to the prestigious IIT Kanpur campus to compete in hands-on science demos, subjective problem solving, laboratory challenges, and live buzzer rounds.",
    highlights: [
      "All-expense stay & hospitality at IIT Kanpur campus",
      "Interact with IIT professors, scientists, and global keynote speakers",
      "Win from ₹5,00,000+ prize pool, trophies, and prestigious medals",
    ],
  },
];

export const EXAM_SCHEDULE: ExamScheduleItem[] = [
  {
    stage: "Registrations",
    title: "National Registration Window Opens",
    date: "August 15, 2026",
    mode: "Online Portal / School Coordinators",
    description: "Schools and individual students can register through the official portal.",
    status: "active",
  },
  {
    stage: "Mock Tests",
    title: "Official Mock Examination & Practice Portal Live",
    date: "October 10, 2026",
    mode: "Student Dashboard",
    description: "Registered candidates receive access to full-length simulated practice tests.",
    status: "upcoming",
  },
  {
    stage: "Stage 1",
    title: "TOSC '26 Prelims (Online / Center)",
    date: "November 22, 2026",
    time: "10:00 AM - 11:30 AM IST",
    mode: "Online Proctored & School Centers",
    description: "Nationwide preliminary exam for Junior, Senior & Super Senior pools.",
    status: "upcoming",
  },
  {
    stage: "Prelims Results",
    title: "Stage 1 Results & Finalists Declaration",
    date: "December 15, 2026",
    mode: "Online Leaderboard & SMS/Email",
    description: "Rank cards, percentile analysis, and invites sent to top finalists for Stage 2.",
    status: "upcoming",
  },
  {
    stage: "Stage 2",
    title: "Grand Finale @ Techkriti, IIT Kanpur",
    date: "March 18 - 20, 2027",
    mode: "IIT Kanpur Campus",
    description: "2-day residential finals, workshops, tech exhibitions, and mega prize ceremony.",
    status: "upcoming",
  },
];

export const EXAM_RULES = [
  "Candidates must be enrolled in Classes 6 through 12 during the academic year 2026-27.",
  "Calculators, smartwatches, and external electronic aids are strictly prohibited during both stages.",
  "Stage 1 requires a working webcam and microphone for students opting for the online proctored mode.",
  "Every question in Stage 1 carries 4 marks for a correct answer and -1 mark for an incorrect answer.",
  "Decisions of the Academic Committee of Techkriti IIT Kanpur are final and binding in all evaluation matters.",
];
