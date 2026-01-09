import { Flower2 } from 'lucide-react'
import { SignInForm } from './login-form'
import { Card, CardContent } from "@/common/components/ui/card"
import { ThemeToggle } from "@/common/components/ui/theme-toggle"

export const SignInPageContent = () => {
    return (
        <div className='w-full max-w-sm flex flex-col gap-4'>
            {/* Sección de homenaje */}
            {/* <div className='flex flex-col items-center gap-2 mb-2'>
                <div className='text-sm text-muted-foreground'>
                    En honor a
                </div>
                <div className='flex items-center justify-center'>
                    <Flower2 className='h-8 w-8 text-muted-foreground opacity-70' />
                </div>
                <div className='text-md font-medium text-foreground'>
                    Eustoquio Valladares Peña
                </div>
                <div className='text-sm text-muted-foreground'>
                    1941 - 2025
                </div>
            </div> */}

            <Card className='w-full max-w-sm'>
                <CardContent>
                    <div className='container mx-auto justify-center items-center flex'>
                        <div className='w-full max-w-sm'>
                            <div className='flex justify-end mb-4'>
                                <ThemeToggle />
                            </div>
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
                </CardContent>
            </Card>
        </div>
    )
}
