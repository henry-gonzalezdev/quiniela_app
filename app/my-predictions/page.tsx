import MatchCard from '@/components/MatchCard';
import { mockMatches, mockPredictions } from '@/lib/data';
import { BarChart3, CheckCircle2, XCircle } from 'lucide-react';

export default function MyPredictionsPage() {
  // Simular predicciones del usuario actual
  const userPredictions = mockPredictions;
  const matchesWithPredictions = mockMatches.map(match => {
    const prediction = userPredictions.find(p => p.matchId === match.id);
    return {
      ...match,
      prediction,
    };
  });

  const calculatePoints = (match: typeof matchesWithPredictions[0]) => {
    if (!match.prediction || match.status !== 'finished') return null;
    const { homeScore, awayScore } = match;
    const { homeScore: predHome, awayScore: predAway } = match.prediction;

    // Exacto: 3 puntos
    if (homeScore === predHome && awayScore === predAway) return 3;
    // Resultado correcto (ganador): 1 punto
    if (
      (homeScore > awayScore && predHome > predAway) ||
      (homeScore < awayScore && predHome < predAway) ||
      (homeScore === awayScore && predHome === predAway)
    ) return 1;
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-emerald-50/30 dark:from-zinc-950 dark:to-emerald-950/20">
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Mis Predicciones
            </h1>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Revisa tus predicciones y puntos obtenidos
          </p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {userPredictions.length}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Predicciones</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              {matchesWithPredictions.filter(m => calculatePoints(m) === 3).length}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Exactas</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
            <div className="text-2xl font-bold text-zinc-600 dark:text-zinc-400">
              {matchesWithPredictions.reduce((acc, m) => acc + (calculatePoints(m) || 0), 0)}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Puntos totales</div>
          </div>
        </div>

        {/* Lista de predicciones */}
        <div className="space-y-4">
          {matchesWithPredictions.map((match) => {
            const points = calculatePoints(match);
            const hasPrediction = !!match.prediction;

            return (
              <div
                key={match.id}
                className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
              >
                <MatchCard
                  match={match}
                  showPrediction={hasPrediction}
                  predictionScore={
                    hasPrediction
                      ? `${match.prediction!.homeScore} - ${match.prediction!.awayScore}`
                      : undefined
                  }
                />
                {hasPrediction && (
                  <div className="px-4 pb-4 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {match.status === 'finished' ? (
                          <>
                            {points === 3 ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            ) : points === 1 ? (
                              <CheckCircle2 className="w-5 h-5 text-amber-500" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500" />
                            )}
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">
                              {points === 3
                                ? 'Predicción exacta'
                                : points === 1
                                ? 'Resultado correcto'
                                : 'Predicción incorrecta'}
                            </span>
                          </>
                        ) : (
                          <span className="text-sm text-zinc-500 dark:text-zinc-400">
                            Esperando resultado...
                          </span>
                        )}
                      </div>
                      {points !== null && (
                        <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                          +{points} pts
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {matchesWithPredictions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-500 dark:text-zinc-400 mb-4">
              Aún no has hecho ninguna predicción
            </p>
            <a
              href="/predictions"
              className="inline-block px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
            >
              Haz tu primera predicción
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

