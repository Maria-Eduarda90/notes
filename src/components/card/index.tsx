export function Card() {
    return (
        <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-teal-400 focus-visible:ring-2 focus-visible:ring-teal-400">
            <span className='text-sm font-medium leading-6 text-slate-200'>
                há 2 dias
            </span>
            <p className='text-sm leading-6 text-slate-400'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, adipisci! Quibusdam ab dignissimos eaque, temporibus autem vero possimus dolores id quis molestiae asperiores nobis magni nulla tempore sequi impedit adipisci!
            </p>

            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-black/0 pointer-events-none' />
        </button>
    );
}