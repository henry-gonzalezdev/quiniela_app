export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen w-full flex flex-row overflow-hidden'>

            <div className='flex flex-col md:flex-1 w-full h-svh px-4 justify-center items-center'>
                {children}
                
            </div>

        </div>
    )
}