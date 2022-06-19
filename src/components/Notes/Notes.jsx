import React, {useState} from 'react';
import Note from "../Note/Note";
import './Notes.css'
import Button from "../Button/Button";

const Notes = () => {
    const NotesContext = React.createContext()
    const [history, setHistory] = useState([])
    const [id, setId] = useState(1)
    const [notes, setNotes] = useState([])
    const createNote = () => {
        const name = prompt('Enter a name of the note: ')
        const text = prompt('Enter text of the note')
        const note = {
            name: name,
            text: text,
            id: id
        }
        const notes_ = [...notes, note]
        setNotes(notes_)
        setHistory(notes_)
        console.log(history)
        setId(id => id + 1)

    }

    return (
        <NotesContext.Provider value={history}>
            <div className={'notes'}>
                <h1>NOTES</h1>
                {notes.map(({name, text, id}) => {
                    return <Note key={id} name={name} text={text}/>
                })}

            </div>
            <Button text={'Create a note'} fc={createNote}/>
        </NotesContext.Provider>

    );
};

export default Notes;