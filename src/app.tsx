import { Card } from './components/card';
import { NewCard } from './components/newCard';

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold outline-none placeholder:text-slate-400"
        />
      </form>

      <div className="h-px bg-teal-400" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewCard />

        <Card date={new Date} content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, adipisci! Quibusdam ab dignissimos eaque, temporibus autem vero possimus dolores id quis molestiae asperiores nobis magni nulla tempore sequi impedit adipisci!' />
        <Card date={new Date} content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, adipisci! Quibusdam ab dignissimos eaque, temporibus autem vero possimus dolores id quis molestiae asperiores nobis magni nulla tempore sequi impedit adipisci!' />
        <Card date={new Date} content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, adipisci! Quibusdam ab dignissimos eaque, temporibus autem vero possimus dolores id quis molestiae asperiores nobis magni nulla tempore sequi impedit adipisci!' />
      </div>
    </div>
  )
}