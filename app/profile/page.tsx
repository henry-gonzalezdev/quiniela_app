import { User, Trophy, Target, Award } from 'lucide-react';

export default function ProfilePage() {
  // Datos del usuario actual (simulado)
  const currentUser = {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    totalPoints: 45,
    correctPredictions: 12,
    exactPredictions: 5,
    position: 1,
    totalPredictions: 15,
  };

  const accuracy = currentUser.totalPredictions > 0
    ? Math.round((currentUser.correctPredictions / currentUser.totalPredictions) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-emerald-50/30 dark:from-zinc-950 dark:to-emerald-950/20">
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-6">
        {/* Header con avatar */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-3xl">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                {currentUser.name}
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">{currentUser.email}</p>
            </div>
            {currentUser.position <= 3 && (
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  #{currentUser.position}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Estadísticas principales */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Puntos totales</span>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {currentUser.totalPoints}
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Precisión</span>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {accuracy}%
            </div>
          </div>
        </div>

        {/* Estadísticas detalladas */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Estadísticas Detalladas
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-zinc-400" />
                <span className="text-zinc-600 dark:text-zinc-400">Predicciones correctas</span>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {currentUser.correctPredictions}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-zinc-600 dark:text-zinc-400">Predicciones exactas</span>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {currentUser.exactPredictions}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-zinc-400" />
                <span className="text-zinc-600 dark:text-zinc-400">Total de predicciones</span>
              </div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {currentUser.totalPredictions}
              </span>
            </div>
          </div>
        </div>

        {/* Progreso */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Progreso del Torneo
          </h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-zinc-600 dark:text-zinc-400">Predicciones completadas</span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {currentUser.totalPredictions} / 64
                </span>
              </div>
              <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full transition-all"
                  style={{ width: `${(currentUser.totalPredictions / 64) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

