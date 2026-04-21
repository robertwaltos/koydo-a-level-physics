// Auto-generated content manifest for A Level Physics
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  questionTarget: number;
  activityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "a-level-physics",
  examName: "A Level Physics",
  totalQuestions: 2700,
  category: "k12_national",
  topics: [
  {
    id: "mechanics",
    domain: "mechanics",
    title: "Mechanics",
    icon: "⚙️",
    color: "#DC2626",
    questionTarget: 700,
    activityTypes: ["multiple_choice", "calculation", "whiteboard"],
  },
  {
    id: "electricity",
    domain: "electricity",
    title: "Electricity & Magnetism",
    icon: "⚡",
    color: "#7C3AED",
    questionTarget: 600,
    activityTypes: ["multiple_choice", "calculation"],
  },
  {
    id: "waves",
    domain: "waves",
    title: "Waves & Optics",
    icon: "〰️",
    color: "#059669",
    questionTarget: 500,
    activityTypes: ["multiple_choice", "diagram_label"],
  },
  {
    id: "thermodynamics",
    domain: "thermodynamics",
    title: "Thermodynamics",
    icon: "🌡️",
    color: "#DC2626",
    questionTarget: 500,
    activityTypes: ["multiple_choice", "calculation"],
  },
  {
    id: "modern-physics",
    domain: "modern-physics",
    title: "Modern Physics",
    icon: "⚛️",
    color: "#D97706",
    questionTarget: 400,
    activityTypes: ["multiple_choice"],
  }
  ],
};
