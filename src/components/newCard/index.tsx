import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { PlusOutlined } from "@ant-design/icons";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

interface NewNotCardProps {
    onNoteCreated: (content: string) => void;
}

export function NewCard({ onNoteCreated }: NewNotCardProps) {

    const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
    const [content, setContent] = useState('');

    function handleStartEditor() {
        setShouldShowOnboarding(false);
    }

    function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value);

        if (event.target.value === '') {
            setShouldShowOnboarding(true);
        }
    }

    function handleSaveNote(event: FormEvent) {
        event.preventDefault();

        onNoteCreated(content);

        setContent('');
        setShouldShowOnboarding(true);

        toast.success('Nota criada com sucesso');
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md bg-slate-700 flex justify-center items-center">
                <button className='bg-slate-500 p-4 rounded-md w-20 h-20'>
                    <PlusOutlined style={{ fontSize: '24px' }} />
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/50" />
                <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">
                    <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
                        <X className="size-5" />
                    </Dialog.Close>
                    <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">

                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className='text-sm font-medium leading-6 text-slate-200'>
                                Adicionar nota
                            </span>
                            {
                                shouldShowOnboarding ? (
                                    <p className='text-sm leading-6 text-slate-400'>
                                        Comece <button className="font-medium text-teal-400 hover:underline">gravando uma nota</button> em audio ou se preferir <button className="font-medium text-teal-400 hover:underline" onClick={handleStartEditor}>utilize apenas texto</button>.
                                    </p>
                                ) : (
                                    <textarea
                                        autoFocus
                                        className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                                        onChange={handleContentChange}
                                        value={content}
                                    />
                                )
                            }
                        </div>

                        <button type="submit" className="w-full bg-teal-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-teal-500">
                            Salvar nota
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}