import MatchCard from '@/components/MatchCard';
import { mockMatches } from '@/lib/data';
import { Calendar, Filter } from 'lucide-react';

export default function Home() {
  const upcomingMatches = mockMatches.filter(m => m.status === 'upcoming');
  const liveMatches = mockMatches.filter(m => m.status === 'live');
  const finishedMatches = mockMatches.filter(m => m.status === 'finished');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-emerald-50/30 dark:from-zinc-950 dark:to-emerald-950/20">
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Mundial 2026
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Haz tus predicciones y compite con tu familia
          </p>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {upcomingMatches.length}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Próximos</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {liveMatches.length}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">En vivo</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
            <div className="text-2xl font-bold text-zinc-600 dark:text-zinc-400">
              {finishedMatches.length}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Finalizados</div>
          </div>
        </div>

        {/* Partidos en vivo */}
        {liveMatches.length > 0 && (
          <section className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-red-500 rounded-full"></div>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                En Vivo
              </h2>
            </div>
            <div className="space-y-3">
              {liveMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </section>
        )}

        {/* Próximos partidos */}
        {upcomingMatches.length > 0 && (
          <section className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Próximos Partidos
                </h2>
              </div>
            </div>
            <div className="space-y-3">
              {upcomingMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </section>
        )}

        {/* Partidos finalizados */}
        {finishedMatches.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Resultados
              </h2>
            </div>
            <div className="space-y-3">
              {finishedMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
