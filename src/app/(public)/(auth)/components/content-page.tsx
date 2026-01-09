
import { SignInForm } from './login-form'

// import { SignInForm } from './login-form'

export const SignInPageContent = () => {

    return (
        <>
            <div className='container mx-auto justify-center items-center flex'>
                <div className='w-full max-w-sm'>

                    <div className='flex flex-col gap-2 text-center mb-4'>
                        <div className='text-3xl font-bold flex justify-center '>
                            ¡Bienvenido!
                        </div>
                        <div className='text-muted-foreground text-md'>
                            Inicia sesión con tu cuenta
                        </div>

                    </div>
                    <SignInForm />
                </div >
            </div>
        </>
    )
}
