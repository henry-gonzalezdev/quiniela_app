'use client';

import { useState } from 'react';
import MatchCard from '@/components/MatchCard';
import { mockMatches } from '@/lib/data';
import { Match } from '@/types';
import { CheckCircle2 } from 'lucide-react';

export default function PredictionsPage() {
  const [predictions, setPredictions] = useState<Record<string, { home: number; away: number }>>({});
  const [savedMatches, setSavedMatches] = useState<Set<string>>(new Set());

  const upcomingMatches = mockMatches.filter(m => m.status === 'upcoming');

  const handlePredictionChange = (matchId: string, team: 'home' | 'away', value: number) => {
    setPredictions(prev => ({
      ...prev,
      [matchId]: {
        ...prev[matchId],
        [team]: value,
        away: prev[matchId]?.away ?? 0,
        home: prev[matchId]?.home ?? 0,
      }
    }));
  };

  const handleSavePrediction = (matchId: string) => {
    setSavedMatches(prev => new Set([...prev, matchId]));
    // Aquí iría la lógica para guardar en el backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-emerald-50/30 dark:from-zinc-950 dark:to-emerald-950/20">
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Haz tus Predicciones
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Predice los resultados de los próximos partidos
          </p>
        </div>

        <div className="space-y-4">
          {upcomingMatches.map((match) => {
            const prediction = predictions[match.id];
            const isSaved = savedMatches.has(match.id);

            return (
              <div
                key={match.id}
                className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4"
              >
                {/* Información del partido */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {new Date(match.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })} • {match.time}
                    </span>
                    {match.group && (
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded">
                        Grupo {match.group}
                      </span>
                    )}
                  </div>

                  {/* Equipos */}
                  <div className="space-y-4">
                    {/* Equipo local */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm font-bold">
                          {match.homeTeam.charAt(0)}
                        </div>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                          {match.homeTeam}
                        </span>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={prediction?.home ?? ''}
                        onChange={(e) => handlePredictionChange(match.id, 'home', parseInt(e.target.value) || 0)}
                        className="w-16 h-12 text-center text-2xl font-bold border-2 border-zinc-300 dark:border-zinc-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-400 focus:outline-none bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                      />
                    </div>

                    <div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>

                    {/* Equipo visitante */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm font-bold">
                          {match.awayTeam.charAt(0)}
                        </div>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                          {match.awayTeam}
                        </span>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        value={prediction?.away ?? ''}
                        onChange={(e) => handlePredictionChange(match.id, 'away', parseInt(e.target.value) || 0)}
                        className="w-16 h-12 text-center text-2xl font-bold border-2 border-zinc-300 dark:border-zinc-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-400 focus:outline-none bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Botón guardar */}
                <button
                  onClick={() => handleSavePrediction(match.id)}
                  disabled={!prediction?.home && !prediction?.away || isSaved}
                  className={`
                    w-full py-3 rounded-lg font-semibold transition-all
                    ${
                      isSaved
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 cursor-not-allowed'
                        : prediction?.home !== undefined && prediction?.away !== undefined
                        ? 'bg-emerald-600 dark:bg-emerald-500 text-white hover:bg-emerald-700 dark:hover:bg-emerald-600'
                        : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 cursor-not-allowed'
                    }
                  `}
                >
                  {isSaved ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Predicción guardada
                    </span>
                  ) : (
                    'Guardar Predicción'
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {upcomingMatches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-500 dark:text-zinc-400">
              No hay partidos próximos para predecir
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

