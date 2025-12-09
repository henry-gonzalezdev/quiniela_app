export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag?: string;
  awayFlag?: string;
  date: string;
  time: string;
  status: 'upcoming' | 'live' | 'finished';
  homeScore?: number;
  awayScore?: number;
  group?: string;
  stage: 'group' | 'round16' | 'quarter' | 'semi' | 'final';
}

export interface Prediction {
  id: string;
  matchId: string;
  userId: string;
  homeScore: number;
  awayScore: number;
  points?: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  totalPoints: number;
  correctPredictions: number;
  position: number;
}

export interface MatchWithPrediction extends Match {
  prediction?: Prediction;
}

