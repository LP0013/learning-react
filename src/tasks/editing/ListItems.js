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
			{note.text};
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

    return <div>
        <h1>ListItems</h1>
        <ul>{result}</ul>
        <h3>Homework</h3>
    </div>
}

export default ListItems;