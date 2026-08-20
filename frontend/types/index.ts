export interface ExamPool {
  id: string;
  name: string;
  classes: string;
  tagline: string;
  description: string;
  eligibility: string;
  subjects: {
    name: string;
    questions: number;
    marks: number;
  }[];
  durationMinutes: number;
  totalQuestions: number;
  totalMarks: number;
  negativeMarking: string;
}

export interface ExamScheduleItem {
  stage: string;
  title: string;
  date: string;
  time?: string;
  mode: string;
  description: string;
  status: "upcoming" | "active" | "completed";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "registration" | "exam-pattern" | "finals-iitk" | "results";
}

export interface StudentStory {
  slug: string;
  name: string;
  pool: string;
  rank: string;
  year: string;
  school: string;
  city: string;
  state: string;
  quote: string;
  fullStory: string;
  score: string;
  avatar: string;
  keyTakeaways: string[];
  iitkExperience: string;
}

export interface PartnerItem {
  name: string;
  category: "title" | "knowledge" | "media" | "school-network" | "tech";
  role: string;
  description: string;
  logoText: string;
  badge: string;
  location?: string;
}

export interface PYQPaper {
  id: string;
  year: number;
  pool: "Junior (6-8)" | "Senior (9-10)" | "Super Senior (11-12)";
  poolId: "junior" | "senior" | "super-senior";
  duration: string;
  questionsCount: number;
  sampleQuestions: {
    qNum: number;
    subject: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface Ranker {
  rank: number;
  name: string;
  pool: string;
  school: string;
  city: string;
  score: string;
  percentile: string;
  award: string;
}
