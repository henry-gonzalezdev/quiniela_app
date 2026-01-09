'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from './button'
import { cn } from '@/common/lib/utils'

interface ThemeToggleProps {
	className?: string
	variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'brand'
	size?: 'default' | 'sm' | 'lg' | 'icon' | 'brand'
}

export const ThemeToggle = ({ 
	className, 
	variant = 'ghost', 
	size = 'icon' 
}: ThemeToggleProps) => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<Button
				variant={variant}
				size={size}
				className={cn('h-9 w-9', className)}
				disabled
			>
				<Sun className='h-5 w-5 opacity-0' />
			</Button>
		)
	}

	return (
		<Button
			variant={variant}
			size={size}
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className={cn('h-9 w-9 border-2 border-gray-200 dark:border-gray-800', className)}
			aria-label="Cambiar tema"
		>
			{theme === 'dark' ? (
				<Sun className='h-5 w-5' />
			) : (
				<Moon className='h-5 w-5' />
			)}
		</Button>
	)
}

