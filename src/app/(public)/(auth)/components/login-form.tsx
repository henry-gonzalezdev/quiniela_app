// import { IconRefresh } from '@tabler/icons-react'
import { Lock, User } from 'lucide-react'

import { Button } from '@/common/components/ui/button'
import { Form } from '@/common/components/ui/form'
import { InputForm } from '@/common/components/ui/input-form'
import { InputSecret } from '@/common/components/ui/input-secret'

import { useHandleLogin } from './handlers/handle-login'

export const SignInForm = () => {
	const { form, loading, onSubmitLogin } = useHandleLogin()

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmitLogin)} className='space-y-4' noValidate>
				<div className='space-y-3'>
					<div className='relative'>
						<InputForm
							label='Identificador'
							id='email'
							type='email'
							form={form}
							placeholder='Identificador'
							className='pl-10 mb-1'
							iconDirection='left'
							disabled={false}
							icon={<User className=' text-zinc-700 ' size={18} />}
						/>
					</div>

					<div className='relative'>
						<InputSecret
							label='Clave'
							form={form}
							id='password'
							iconDirection='left'
							type='password'
							placeholder='Clave'
							disabled={false}
							className='pl-10 mb-1'
							icon={<Lock className='text-zinc-700' size={18} />}
						/>
					</div>
				</div>

				<div>
					<Button
						type='submit'
						size={'lg'}
						className='w-full'
						disabled={false}
					>
						Ingresar
					</Button>

				</div>

			</form>
		</Form>
	)
}
