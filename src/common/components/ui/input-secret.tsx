'use client'

import { Eye, EyeOff } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/common/lib/utils'
import { Input } from './input'
import { Skeleton } from './skeleton'
import { validateInputIconClassNames } from './lib/utils/validate-input-icon-classnames'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'
import { InputFormProps } from './lib/types/input-form'

export const InputSecret = ({ id, form, label, description, icon, iconDirection, classNameContainer, loading, ...rest }: InputFormProps) => {
	const [showPassword, setShowPassword] = React.useState(false)

	if (loading) {
		return (
			<div className={cn('w-full', classNameContainer)}>
				<div className='flex justify-start items-end'>
					{label && <Skeleton className='h-5 w-full max-w-[90px]' />}
				</div>

				{description && <Skeleton className='h-5 w-full max-w-[150px] my-2' />}

				<div className='relative'>
					<Skeleton
						className={cn(validateInputIconClassNames({ iconDirection, icon, type: rest.type }), 'w-full h-9 mt-2')}
					/>
				</div>
			</div>
		)
	}

	return (
		<FormField
			control={form.control}
			name={id}
			render={({ field, formState }) => (
				<FormItem className={cn('w-full', classNameContainer)}>
					<div className='flex flex-col justify-start items-start'>
						{label && <FormLabel className='font-semibold'>{label}</FormLabel>}
					</div>
					{description && (<FormDescription className='text-xs'>{description}</FormDescription>)}
					<div className='relative'>
						{
							(iconDirection === 'left' && icon) && (
								<div className='absolute top-1 inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10 mb-2'>
									{icon}
								</div>
							)
						}
						<FormControl>
							<Input
								{...field}
								{...rest}
								disabled={rest?.disabled}
								tabIndex={rest?.tabIndex}
								className={cn(validateInputIconClassNames({ iconDirection, icon, type: rest.type }), rest.className)}
								type={showPassword ? 'text' : 'password'}
							/>

						</FormControl>

						{
							(iconDirection === 'right' && icon) && (
								<div className='absolute z-10 top-1 inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
									{icon}
								</div>
							)
						}

						<div className='absolute inset-y-0 right-0 flex items-center pr-3 z-10 text-zinc-700'>
							<button
								type='button'
								tabIndex={-1}
								onClick={() => setShowPassword(prevState => !prevState)}
							>
								{
									showPassword
										? <Eye size={18} />
										: <EyeOff size={18} />
								}
							</button>
						</div>
					</div>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
