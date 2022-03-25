import {useState} from "react";

/*
Редактирование элементов списка появляющимся инпутом в React

Дан массив. Выведите его в виде списка ul. В конце каждой li сделайте кнопку для редактирования. Пусть по первому нажатию на эту кнопку в тексте li появляется инпут для редактирования, а по второму нажатию - появляется измененный текст.

*/

const initNotes = [
    {text: 'note1', isEdit: false},
    {text: 'note2', isEdit: false},
    {text: 'note3', isEdit: false},
];

function ListItems() {
    const [notes, setNotes] = useState(initNotes);
    let result = notes.map((note, index) => {
        let elem;
        if (!note.isEdit) {
            elem = <span onClick={() => startEdit(index)}>
			{note.text}
		</span>
        } else {
            elem = <input value={note.text}
                          onChange={event => changeNotes(event, index)}
                          onBlur={() => endEdit(index)}/>;
        }
        return <li key={index}>{elem}</li>;
    })

    function startEdit(index) {
        setNotes(notes.map((note, i) => {
            return (i === index) ? {...note, isEdit: true} : note;
        }))
    }

    function changeNotes(event, index) {
        setNotes(notes.map((note, i) => {
            return (i === index) ? {...note, text: event.target.value} : note
        }))
    }

    function endEdit(index) {
        setNotes(notes.map((note, i) => {
            return (i === index) ? {...note, isEdit: false} : note;
        }))
    }

    let [notesHW, setNotesHW] = useState(initNotes);
    let resultHW = notesHW.map((note, index) => {
        let content;

        if (!note.isEdit) {
            content = <li key={index}>{note.text}
                <button onClick={() => editNote(index)}>Click & Edit...</button>
            </li>
        } else {
            content =
                <li key={index}><input type="text" value={note.text} onChange={event => changeInpVal(event, index)}/>
                    <button onClick={() => saveNote(index)}>Click to Save!</button>
                </li>
        }

        return content
    })

    function editNote(index) {
        setNotesHW(notesHW.map((note, no) => {
            if (index === no) {
                return {...note, isEdit: true}
            } else {
                return note
            }
        }))
    }

    function saveNote(index) {
        setNotesHW(notesHW.map((note, no) => {
            if (index === no) {
                return {...note, isEdit: false}
            } else {
                return note
            }
        }))
    }

    function changeInpVal(event, index) {
        setNotesHW(notesHW.map((note, no) => {
            if (index === no) {
                return {...note, text: event.target.value}
            } else {
                return note
            }
        }))
    }

    return <div>
        <h1>ListItems</h1>
        <ul>{result}</ul>
        <h3>Homework</h3>
        <ul>{resultHW}</ul>
    </div>
}

export default ListItems;