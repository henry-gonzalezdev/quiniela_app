import { User } from '@/types';
import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardCardProps {
  user: User;
  isCurrentUser?: boolean;
}

export default function LeaderboardCard({ user, isCurrentUser }: LeaderboardCardProps) {
  const getPositionIcon = () => {
    if (user.position === 1) return <Trophy className="w-5 h-5 text-amber-500" />;
    if (user.position === 2) return <Medal className="w-5 h-5 text-zinc-400" />;
    if (user.position === 3) return <Award className="w-5 h-5 text-amber-600" />;
    return <span className="text-sm font-bold text-zinc-400 w-5 h-5 flex items-center justify-center">{user.position}</span>;
  };

  const getPositionColor = () => {
    if (user.position === 1) return 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800';
    if (user.position === 2) return 'bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700';
    if (user.position === 3) return 'bg-amber-50/50 dark:bg-amber-950/10 border-amber-200/50 dark:border-amber-800/50';
    return 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800';
  };

  return (
    <div
      className={`
        rounded-xl border p-4 transition-all
        ${getPositionColor()}
        ${isCurrentUser ? 'ring-2 ring-emerald-500 dark:ring-emerald-400' : ''}
      `}
    >
      <div className="flex items-center gap-4">
        {/* Posición */}
        <div className="flex items-center justify-center w-10 h-10">
          {getPositionIcon()}
        </div>

        {/* Avatar y nombre */}
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">{user.name}</span>
              {isCurrentUser && (
                <span className="text-xs px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                  Tú
                </span>
              )}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {user.correctPredictions} predicciones correctas
            </div>
          </div>
        </div>

        {/* Puntos */}
        <div className="text-right">
          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            {user.totalPoints}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">puntos</div>
        </div>
      </div>
    </div>
  );
}

