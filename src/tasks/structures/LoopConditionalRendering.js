import {useState} from "react";
import uuid from 'react-uuid';
/*
Стейты и условный рендеринг в цикле в React

Дан массив с продуктами, их названиями, ценами, описаниями и комментариями. Выведите этот массив в виде списка ul. Сделайте так, чтобы описание и отзыв изначально были не показаны, а для их показа было две кнопки в конце каждой li.
*/

const initNotes = [
    {
        id: uuid(),
        name: 'name1',
        desc: 'long description 1',
        show: false,
    },
    {
        id: uuid(),
        name: 'name2',
        desc: 'long description 2',
        show: false,
    },
    {
        id: uuid(),
        name: 'name3',
        desc: 'long description 3',
        show: false,
    },
];
const initProds = [
    {
        id: uuid(),
        name: 'prod1',
        cost: 'cost1',
        desc: 'long description 1',
        comm: 'my super comment 1',
        showDesc: false,
        showComm: false,
    },
    {
        id: uuid(),
        name: 'prod2',
        cost: 'cost2',
        desc: 'long description 2',
        comm: 'my super comment 2',
        showDesc: false,
        showComm: false,
    },
    {
        id: uuid(),
        name: 'prod3',
        cost: 'cost3',
        desc: 'long description 3',
        comm: 'my super comment 3',
        showDesc: false,
        showComm: false,
    },
];

function LoopConditionalRendering() {
    let [notes, setNotes] = useState(initNotes)
    const result = notes.map(note => {
        let desc;
        if (note.show) {
            desc = <i>, {note.desc}</i>;
        }
        return <p key={note.id}>{note.name}{desc}
            <button onClick={() => toggle(note.id)}>{note.show ? 'Hide' : 'Show'}</button>
            <button onClick={() => toggle(note.id)}>{note.show ? 'Hide' : 'Show'}</button>
        </p>;
    });

    function toggle(id) {
        setNotes(notes.map(note => {
                return id === note.id ? {...note, show: !note.show} : note;
            })
        )
    }

    let [prods, setProds] = useState(initProds);
    const prodResult = prods.map(prod => {
        let desc, comm;
        if (prod.showDesc) {
            desc = <i>{prod.desc}</i>
        }
        if (prod.showComm) {
            comm = <b>{prod.comm}</b>
        }
        return <p key={prod.id}>{prod.name} {desc} {comm}
            <button
                onClick={() => toggleDesc(prod.id)}>{prod.showDesc ? 'Hide description (Italic)' : 'Show description (Italic)'}</button>
            <button
                onClick={() => toggleComm(prod.id)}>{prod.showComm ? 'Hide comment (Bold)' : 'Show comment (Bold)'}</button>
        </p>

    })

    function toggleDesc(id) {
        setProds(prods.map(prod => {
            return id = prod.id ? {...prod, showDesc: !prod.showDesc} : prod;
        }))
    }

    function toggleComm(id) {
        setProds(prods.map(prod => {
            return id = prod.id ? {...prod, showComm: !prod.showComm} : prod;
        }))
    }


    return <div>
        <h1>Loop conditional rendering</h1>
        {result}
        <h3>Homework</h3>
        {prodResult}

    </div>
}

export default LoopConditionalRendering;