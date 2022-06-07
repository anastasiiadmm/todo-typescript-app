import React, {useRef} from "react";

interface todoFormProps {
    onAdd(title: string): void
}

export const ToDoForm: React.FC<todoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('');

    const ref = useRef<HTMLInputElement>(null);

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value);
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // setTitle('')
        }
    }

    return (
        <div className='input-field mt2'>
            <input
                // value={title}
                // onChange={changeHandler}
                ref={ref}
                onKeyPress={keyPressHandler}
                type='text' id="title"
                placeholder='Введите название дела'
            />
            <label htmlFor='title' className='active'>Введите название дела</label>
        </div>
    )
}