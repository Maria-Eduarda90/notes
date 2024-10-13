import { PlusOutlined } from "@ant-design/icons";

export function NewCard() {
    return (
        <div className="rounded-md bg-slate-700 flex justify-center items-center">
            <button className='bg-slate-500 p-4 rounded-md w-20 h-20'>
                <PlusOutlined style={{ fontSize: '24px' }} />
            </button>
        </div>
    )
}