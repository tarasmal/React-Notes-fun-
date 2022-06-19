import React from 'react';
import './Note.css'
import Cell from "./Cell/Cell";

const Note = ({name, text}) => {

    return (
        <div className={'note-item'}>
            <Cell name={name} value={text}/>
        </div>
    );
};

export default Note;