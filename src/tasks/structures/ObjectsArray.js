import {useState} from "react";
import uuid from 'react-uuid';

/*
Реактивность массива объектов в React

Пусть в переменной хранится id элемента. Сделайте кнопку, которая будет удалять элемент с заданным id.
Под абзацами сделайте кнопку, по нажатию на которую в наш массив будет добавляться новый элемент. Пусть при каждом нажатии на кнопку для добавляемого элемента генерируется новый id.
Сделайте кнопку, по нажатию на которую будет изменен элемент массива с id, равным 'JAmjRlfQT8rLTm5tG2m1L'.
Сделайте кнопку, по нажатию на которую будет браться элемент массива с указанным id, в нем будет браться свойство с указанным именем и в конец значения этого свойства будет дописываться знак '!'.

*/

const initNotes = [
    {
        id: 'GYi9G_uC4gBF1e2SixDvu',
        prop1: 'value11',
        prop2: 'value12',
        prop3: 'value13',
    },
    {
        id: 'IWSpfBPSV3SXgRF87uO74',
        prop1: 'value21',
        prop2: 'value22',
        prop3: 'value23',
    },
    {
        id: 'JAmjRlfQT8rLTm5tG2m1L',
        prop1: 'value31',
        prop2: 'value32',
        prop3: 'value33',
    },
];

const newElem = {
    id: 'GMNCZnFT4rbBP6cirA0Ha',
    prop1: 'value41',
    prop2: 'value42',
    prop3: 'value43',
};

const data = {
    id: 'JAmjRlfQT8rLTm5tG2m1L',
    prop1: 'value21 !',
    prop2: 'value22 !',
    prop3: 'value23 !',
};

const id = 'IWSpfBPSV3SXgRF87uO74';
const prop = 'prop1';
const value = '!!!';

const id1 = 'JAmjRlfQT8rLTm5tG2m1L';
const prop1 = 'prop2';

const id2 = 'IWSpfBPSV3SXgRF87uO74'


function ObjectsArray() {
    let [notes, setNotes] = useState(initNotes)
    const id = 'IWSpfBPSV3SXgRF87uO74';

    const result = notes.map(note => {
        return <p key={note.id} data-id={note.id}>
            <span>{note.prop1}</span>,
            <span>{note.prop2}</span>,
            <span>{note.prop3}</span>
        </p>;
    });

    function addElemToObj() {
        setNotes([...notes, {...newElem, id: uuid()}])
    }

    return <div>
        <h1>Objects-Array</h1>
        {result}
        <button onClick={() => setNotes(notes.filter(note => note.id !== id))}>Click to delete</button>
        <button onClick={() => addElemToObj()}>Click to add (unique ID)</button>
        <button onClick={() => setNotes(notes.map(note => note.id === data.id ? data : note))}>Click to edit</button>
        <button onClick={() => setNotes(notes.map(note => note.id === id ? {...note, [prop]: value} : note))}>Edit one
            property
        </button>
        <button onClick={() => setNotes(notes.map(note => note.id === id1 ? {
            ...note,
            [prop1]: note[prop1] + '!'
        } : note))}>Click to add '!'
        </button>
        <button onClick={() => console.log(notes.reduce((x, note) => note.id === id ? note : x, {}))}>Click to get (see
            console)
        </button>
    </div>
}

export default ObjectsArray;