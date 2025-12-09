import { Match } from '@/types';
import { Calendar, Clock, Trophy } from 'lucide-react';
import Link from 'next/link';

interface MatchCardProps {
  match: Match;
  showPrediction?: boolean;
  predictionScore?: string;
}

export default function MatchCard({ match, showPrediction, predictionScore }: MatchCardProps) {
  const isFinished = match.status === 'finished';
  const isLive = match.status === 'live';
  const isUpcoming = match.status === 'upcoming';

  return (
    <Link href={`/match/${match.id}`}>
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 hover:shadow-lg transition-all hover:border-emerald-300 dark:hover:border-emerald-700">
        {/* Header con fecha y grupo */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <Calendar className="w-3 h-3" />
            <span>{new Date(match.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
            <Clock className="w-3 h-3 ml-2" />
            <span>{match.time}</span>
          </div>
          {match.group && (
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded">
              Grupo {match.group}
            </span>
          )}
          {match.stage !== 'group' && (
            <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-1 rounded flex items-center gap-1">
              <Trophy className="w-3 h-3" />
              {match.stage === 'round16' ? 'Octavos' : match.stage === 'quarter' ? 'Cuartos' : match.stage === 'semi' ? 'Semis' : 'Final'}
            </span>
          )}
        </div>

        {/* Equipos y resultado */}
        <div className="space-y-3">
          {/* Equipo local */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">
                {match.homeTeam.charAt(0)}
              </div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">{match.homeTeam}</span>
            </div>
            {isFinished && (
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {match.homeScore}
              </span>
            )}
          </div>

          {/* Separador */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
            {isLive && (
              <span className="px-2 py-1 text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 rounded animate-pulse">
                EN VIVO
              </span>
            )}
            {isUpcoming && (
              <span className="px-2 py-1 text-xs text-zinc-500 dark:text-zinc-400">
                VS
              </span>
            )}
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
          </div>

          {/* Equipo visitante */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">
                {match.awayTeam.charAt(0)}
              </div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">{match.awayTeam}</span>
            </div>
            {isFinished && (
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {match.awayScore}
              </span>
            )}
          </div>
        </div>

        {/* Predicción del usuario */}
        {showPrediction && predictionScore && (
          <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-500 dark:text-zinc-400">Tu predicción:</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{predictionScore}</span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

