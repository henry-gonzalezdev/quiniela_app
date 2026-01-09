import React from "react";
import { Heart, Ribbon } from "lucide-react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen w-full flex flex-col overflow-hidden bg-[#f5f5f5] dark:bg-[#1a1a1a]'>

            <div className='flex flex-col md:flex-1 w-full flex-1 px-4 justify-center items-center relative'>
                {children}

                {/* <div className='absolute top-0 right-0'>
                    <Ribbon />
                </div> */}
            </div>

            <footer className='w-full py-4 px-4 text-center text-sm text-muted-foreground flex items-center justify-center gap-2'>
                <span>Desarrollado con cariño para la familia y cercanos</span>
                <Heart className='h-4 w-4 fill-current text-red-500' />
            </footer>

        </div>
    )
}