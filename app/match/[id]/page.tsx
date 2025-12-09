import { notFound } from 'next/navigation';
import { mockMatches, mockPredictions } from '@/lib/data';
import { Calendar, Clock, Trophy, Users } from 'lucide-react';

export default function MatchDetailPage({ params }: { params: { id: string } }) {
  const match = mockMatches.find(m => m.id === params.id);
  
  if (!match) {
    notFound();
  }

  const prediction = mockPredictions.find(p => p.matchId === match.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-emerald-50/30 dark:from-zinc-950 dark:to-emerald-950/20">
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-6">
        {/* Header */}
        <div className="mb-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-4 transition-colors"
          >
            ← Volver
          </a>
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(match.date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <Clock className="w-4 h-4 ml-2" />
            <span>{match.time}</span>
          </div>
          {match.group && (
            <span className="inline-block text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full mb-2">
              Grupo {match.group}
            </span>
          )}
        </div>

        {/* Card principal del partido */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
          <div className="space-y-6">
            {/* Equipo local */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-2xl font-bold">
                  {match.homeTeam.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {match.homeTeam}
                  </h2>
                </div>
              </div>
              {match.status === 'finished' && (
                <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
                  {match.homeScore}
                </div>
              )}
            </div>

            {/* Separador */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
              {match.status === 'live' && (
                <span className="px-4 py-2 text-sm font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 rounded-full animate-pulse">
                  EN VIVO
                </span>
              )}
              {match.status === 'upcoming' && (
                <span className="px-4 py-2 text-sm text-zinc-500 dark:text-zinc-400">
                  VS
                </span>
              )}
              <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
            </div>

            {/* Equipo visitante */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-2xl font-bold">
                  {match.awayTeam.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {match.awayTeam}
                  </h2>
                </div>
              </div>
              {match.status === 'finished' && (
                <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
                  {match.awayScore}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tu predicción */}
        {prediction && (
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Tu Predicción
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {match.homeTeam}
                </span>
                <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                  {prediction.homeScore}
                </span>
                <span className="text-zinc-400">-</span>
                <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                  {prediction.awayScore}
                </span>
                <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {match.awayTeam}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Estadísticas del partido */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-zinc-400" />
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Predicciones</span>
            </div>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {Math.floor(Math.random() * 50) + 10}
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Predicción más común</span>
            </div>
            <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              2 - 1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

