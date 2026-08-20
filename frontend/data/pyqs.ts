import { PYQPaper } from "@/types";

export const PYQ_PAPERS: PYQPaper[] = [
  {
    id: "pyq-2025-senior",
    year: 2025,
    pool: "Senior (9-10)",
    poolId: "senior",
    duration: "90 Mins",
    questionsCount: 60,
    sampleQuestions: [
      {
        qNum: 1,
        subject: "Physics & Natural Logic",
        question:
          "A sealed glass beaker half-filled with water contains an ice cube floating with a small steel ball embedded inside it. When the ice cube completely melts, the water level in the beaker will:",
        options: ["Increase", "Decrease", "Remain unchanged", "Depends on temperature of water"],
        correctAnswer: "Decrease",
        explanation:
          "When the steel ball is inside the floating ice, the combined mass displaces water equal to the weight of ice + steel. Since the density of steel is greater than water, when the ice melts, the steel sinks and only displaces its own volume (which is much smaller than the volume corresponding to its weight). Hence the water level falls.",
      },
      {
        qNum: 2,
        subject: "Mathematics & Number Patterns",
        question:
          "If the sum of 5 consecutive prime numbers is itself a prime number, which of the following could be the smallest of these 5 primes?",
        options: ["2", "3", "5", "7"],
        correctAnswer: "2",
        explanation:
          "Consider primes starting with 2: 2 + 3 + 5 + 7 + 11 = 28 (not prime). Next: 3 + 5 + 7 + 11 + 13 = 39 (not prime). Next: 5 + 7 + 11 + 13 + 17 = 53 (which IS a prime number!). Smallest prime in this set is 5.",
      },
      {
        qNum: 3,
        subject: "Logical Deduction",
        question:
          "In a room, 5 people shake hands with each other exactly once. Person A shakes hands with 4 people, Person B shakes with 3, Person C shakes with 2, Person D with 1. How many handshakes did Person E make?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        explanation:
          "Person A shook hands with B, C, D, and E (all 4). Person D only had 1 handshake (which was with A), so D shook with nobody else. Person B had 3 handshakes (must be A, C, E). Person C had 2 (with A and B). Thus, Person E has shaken hands with A and B (total 2 handshakes).",
      },
    ],
  },
  {
    id: "pyq-2025-junior",
    year: 2025,
    pool: "Junior (6-8)",
    poolId: "junior",
    duration: "90 Mins",
    questionsCount: 60,
    sampleQuestions: [
      {
        qNum: 1,
        subject: "Mental Ability & Puzzles",
        question:
          "A clock loses 5 minutes every hour. If it is set correctly at 12:00 PM noon on Monday, what real time is it when the clock shows 6:00 PM on the same day?",
        options: ["6:25 PM", "6:30 PM", "6:32 PM", "6:36 PM"],
        correctAnswer: "6:32 PM",
        explanation:
          "In 1 true hour (60 true minutes), the faulty clock advances only 55 minutes. When the faulty clock shows 6 hours elapsed (360 faulty minutes), true minutes elapsed = 360 * (60/55) = 392.72 minutes = 6 hours and ~32.7 minutes (approx 6:32 PM).",
      },
      {
        qNum: 2,
        subject: "Science & Exploration",
        question:
          "Why do astronauts on the Moon see a pitch-black sky even during daytime while standing in bright sunlight?",
        options: [
          "The Moon is too far from the Sun",
          "The Moon has no atmosphere to scatter sunlight",
          "Lunar dust absorbs all atmospheric reflections",
          "The Moon's gravity bends light away from the surface",
        ],
        correctAnswer: "The Moon has no atmosphere to scatter sunlight",
        explanation:
          "On Earth, Rayleigh scattering of sunlight by air molecules illuminates the sky in blue. Without an atmosphere on the Moon, light travels in straight lines from the Sun without sky scattering, leaving the sky pitch black with visible stars.",
      },
    ],
  },
  {
    id: "pyq-2025-super-senior",
    year: 2025,
    pool: "Super Senior (11-12)",
    poolId: "super-senior",
    duration: "90 Mins",
    questionsCount: 60,
    sampleQuestions: [
      {
        qNum: 1,
        subject: "Advanced Physics",
        question:
          "A charged particle enters a region of perpendicular uniform electric and magnetic fields without suffering any deflection. If the electric field is suddenly switched off, the path of the particle will be:",
        options: ["Straight line", "Parabolic", "Circular", "Helical with constant pitch"],
        correctAnswer: "Circular",
        explanation:
          "When velocity is perpendicular to the magnetic field alone, the magnetic Lorentz force acts solely as a centripetal force without changing the particle's speed, producing uniform circular motion in the perpendicular plane.",
      },
    ],
  },
];
