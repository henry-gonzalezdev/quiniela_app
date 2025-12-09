'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Trophy, Target, User, BarChart3 } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Partidos', icon: Home },
  { href: '/predictions', label: 'Predicciones', icon: Target },
  { href: '/leaderboard', label: 'Ranking', icon: Trophy },
  { href: '/my-predictions', label: 'Mis Predicciones', icon: BarChart3 },
  { href: '/profile', label: 'Perfil', icon: User },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 md:relative md:border-t-0 md:border-r md:bg-transparent">
      <div className="flex justify-around md:flex-col md:justify-start md:gap-2 md:p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-col items-center gap-1 px-4 py-3 transition-colors
                md:flex-row md:gap-3 md:px-4 md:py-3 md:rounded-lg
                ${
                  isActive
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                }
              `}
            >
              <Icon className="w-5 h-5 md:w-4 md:h-4" />
              <span className="text-xs font-medium md:text-sm">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

