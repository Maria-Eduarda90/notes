import { useState } from 'react';
import { Card } from './components/card';
import { NewCard } from './components/newCard';

interface Note {
  id: string,
  date: Date,
  content: string,
}

export function App() {

  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes');

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return []
  });

  function onNoteCreated(content: string) {
    const newNotes = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const notesArray = [newNotes, ...notes]

    setNotes(notesArray);

    localStorage.setItem('notes', JSON.stringify(notesArray));
  }

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
        <NewCard onNoteCreated={onNoteCreated} />

        {notes.map(note => {
          return <Card key={note.id} date={note.date} content={note.content} />
        })}
      </div>
    </div>
  )
}