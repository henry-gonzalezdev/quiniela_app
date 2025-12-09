import { Match, User, Prediction } from '@/types';

// Datos de ejemplo para el Mundial
export const mockMatches: Match[] = [
  {
    id: '1',
    homeTeam: 'España',
    awayTeam: 'Brasil',
    date: '2025-06-15',
    time: '20:00',
    status: 'upcoming',
    group: 'A',
    stage: 'group',
  },
  {
    id: '2',
    homeTeam: 'Argentina',
    awayTeam: 'Francia',
    date: '2025-06-15',
    time: '17:00',
    status: 'upcoming',
    group: 'B',
    stage: 'group',
  },
  {
    id: '3',
    homeTeam: 'Alemania',
    awayTeam: 'México',
    date: '2025-06-16',
    time: '14:00',
    status: 'upcoming',
    group: 'C',
    stage: 'group',
  },
  {
    id: '4',
    homeTeam: 'Inglaterra',
    awayTeam: 'Portugal',
    date: '2025-06-16',
    time: '20:00',
    status: 'upcoming',
    group: 'D',
    stage: 'group',
  },
  {
    id: '5',
    homeTeam: 'Italia',
    awayTeam: 'Países Bajos',
    date: '2025-06-14',
    time: '17:00',
    status: 'finished',
    homeScore: 2,
    awayScore: 1,
    group: 'E',
    stage: 'group',
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    totalPoints: 45,
    correctPredictions: 12,
    position: 1,
  },
  {
    id: '2',
    name: 'María García',
    totalPoints: 38,
    correctPredictions: 10,
    position: 2,
  },
  {
    id: '3',
    name: 'Carlos López',
    totalPoints: 32,
    correctPredictions: 8,
    position: 3,
  },
  {
    id: '4',
    name: 'Ana Martínez',
    totalPoints: 28,
    correctPredictions: 7,
    position: 4,
  },
];

export const mockPredictions: Prediction[] = [
  {
    id: '1',
    matchId: '1',
    userId: '1',
    homeScore: 2,
    awayScore: 1,
    points: 0,
    createdAt: '2025-06-10T10:00:00Z',
  },
];

