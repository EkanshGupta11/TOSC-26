import { Ranker } from "@/types";

export const HALL_OF_FAME: Ranker[] = [
  {
    rank: 1,
    name: "Aarav Sharma",
    pool: "Senior Pool (Class 10)",
    school: "Delhi Public School, R.K. Puram",
    city: "New Delhi",
    score: "234/240",
    percentile: "99.99%",
    award: "₹50,000 Cash + Gold Medal + Laptop",
  },
  {
    rank: 2,
    name: "Rohit Verma",
    pool: "Super Senior Pool (Class 12)",
    school: "DAV Model School, Sector 15",
    city: "Chandigarh",
    score: "230/240",
    percentile: "99.95%",
    award: "₹35,000 Cash + Silver Medal + Tablet",
  },
  {
    rank: 3,
    name: "Ananya Iyer",
    pool: "Junior Pool (Class 8)",
    school: "National Public School, Indiranagar",
    city: "Bengaluru",
    score: "228/240",
    percentile: "99.92%",
    award: "₹25,000 Cash + Bronze Medal + Smartwatch",
  },
  {
    rank: 4,
    name: "Kabir Sengupta",
    pool: "Senior Pool (Class 9)",
    school: "St. Xavier's Collegiate School",
    city: "Kolkata",
    score: "224/240",
    percentile: "99.85%",
    award: "₹15,000 Cash + Merit Trophy",
  },
  {
    rank: 5,
    name: "Meera Nair",
    pool: "Senior Pool (Class 9)",
    school: "The Choice School, Tripunithura",
    city: "Kochi",
    score: "220/240",
    percentile: "99.80%",
    award: "₹15,000 Cash + Merit Trophy",
  },
  {
    rank: 6,
    name: "Devanshu Rathore",
    pool: "Junior Pool (Class 7)",
    school: "The Mother's International School",
    city: "New Delhi",
    score: "216/240",
    percentile: "99.72%",
    award: "₹10,000 Cash + Merit Trophy",
  },
];

export const MOCK_RESULTS_DB: Record<
  string,
  {
    rollNumber: string;
    studentName: string;
    pool: string;
    school: string;
    city: string;
    totalMarks: number;
    score: number;
    rank: number;
    percentile: string;
    status: "Qualified for Stage 2 (IIT Kanpur)" | "Certificate of Merit" | "Certificate of Participation";
    subjectBreakdown: {
      subject: string;
      scored: number;
      total: number;
      accuracy: string;
    }[];
  }
> = {
  "TOSC26-1001": {
    rollNumber: "TOSC26-1001",
    studentName: "Aarav Sharma",
    pool: "Senior Pool (Classes 9-10)",
    school: "Delhi Public School, R.K. Puram",
    city: "New Delhi",
    totalMarks: 240,
    score: 234,
    rank: 1,
    percentile: "99.99%",
    status: "Qualified for Stage 2 (IIT Kanpur)",
    subjectBreakdown: [
      { subject: "Analytical & Critical Reasoning", scored: 78, total: 80, accuracy: "97.5%" },
      { subject: "Mathematics & Modeling", scored: 80, total: 80, accuracy: "100%" },
      { subject: "Integrated Sciences", scored: 76, total: 80, accuracy: "95.0%" },
    ],
  },
  "TOSC26-1002": {
    rollNumber: "TOSC26-1002",
    studentName: "Ananya Iyer",
    pool: "Junior Pool (Classes 6-8)",
    school: "National Public School, Indiranagar",
    city: "Bengaluru",
    totalMarks: 240,
    score: 228,
    rank: 3,
    percentile: "99.92%",
    status: "Qualified for Stage 2 (IIT Kanpur)",
    subjectBreakdown: [
      { subject: "Logical & Mental Ability", scored: 96, total: 100, accuracy: "96.0%" },
      { subject: "Basic Science & Exploration", scored: 76, total: 80, accuracy: "95.0%" },
      { subject: "Quantitative Aptitude", scored: 56, total: 60, accuracy: "93.3%" },
    ],
  },
  "TOSC26-1003": {
    rollNumber: "TOSC26-1003",
    studentName: "Siddharth Rao",
    pool: "Super Senior Pool (Classes 11-12)",
    school: "Hyderabad Public School",
    city: "Hyderabad",
    totalMarks: 240,
    score: 196,
    rank: 42,
    percentile: "98.50%",
    status: "Qualified for Stage 2 (IIT Kanpur)",
    subjectBreakdown: [
      { subject: "Advanced Physics", scored: 64, total: 80, accuracy: "80.0%" },
      { subject: "Higher Mathematics", scored: 68, total: 80, accuracy: "85.0%" },
      { subject: "Complex Logic & Algorithms", scored: 64, total: 80, accuracy: "80.0%" },
    ],
  },
};
