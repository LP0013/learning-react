import {useState} from "react";

/*
Редактирование тега появляющимся инпутом в React

Дан абзац и две кнопки. Пусть по клику на первую кнопку абзац переходит в режим редактирования, а по клику на вторую - в режим показа. Реализуйте описанное.

*/

function Tags() {
    const [value, setValue] = useState('text');
    const [isEdit, setIsEdit] = useState(false);
    let elem;
    if (!isEdit) {
        elem = <span onClick={() => setIsEdit(true)}>{value}</span>
    } else {
        elem = <input type="text" value={value} onChange={(event) => setValue(event.target.value)}
                      onBlur={() => setIsEdit(false)}/>
    }
    let [value2, setValue2] = useState('Homework');
    let [edit, setEdit] = useState(false);
    let elem2;
    if (edit) {
        elem2 = <input type="text" value={value2} onChange={event => setValue2(event.target.value)}/>
    } else {
        elem2 = <span>{value2}</span>
    }

    return <div>
        <h1>Tags</h1>
        <p>
            {elem}
        </p>
        <h3>Homework</h3>
        <p>{elem2}</p>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={() => setEdit(false)}>Done!</button>
    </div>
}

export default Tags;