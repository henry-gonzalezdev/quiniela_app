import LeaderboardCard from '@/components/LeaderboardCard';
import { mockUsers } from '@/lib/data';
import { Trophy } from 'lucide-react';

export default function LeaderboardPage() {
    const sortedUsers = [...mockUsers].sort((a, b) => b.totalPoints - a.totalPoints);

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-emerald-50/30 dark:from-zinc-950 dark:to-emerald-950/20">
            <div className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-6">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <Trophy className="w-8 h-8 text-amber-500" />
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                            Tabla de Posiciones
                        </h1>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Clasificación general de participantes
                    </p>
                </div>

                {/* Podio para los top 3 */}
                {sortedUsers.length >= 3 && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {/* Segundo lugar */}
                        <div className="pt-8">
                            <LeaderboardCard user={sortedUsers[1]} />
                        </div>
                        {/* Primer lugar */}
                        <div className="relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">

                            </div>
                            <LeaderboardCard user={sortedUsers[0]} />
                        </div>
                        {/* Tercer lugar */}
                        <div className="pt-8">
                            <LeaderboardCard user={sortedUsers[2]} />
                        </div>
                    </div>
                )}

                {/* Resto de participantes */}
                <div className="space-y-3">
                    {sortedUsers.slice(3).map((user) => (
                        <LeaderboardCard key={user.id} user={user} />
                    ))}
                </div>

                {/* Estadísticas generales */}
                <div className="mt-8 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                        Estadísticas del Torneo
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                                {sortedUsers.length}
                            </div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">Participantes</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                                {sortedUsers.reduce((acc, user) => acc + user.correctPredictions, 0)}
                            </div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">Predicciones totales</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

