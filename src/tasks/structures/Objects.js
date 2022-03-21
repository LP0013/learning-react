import {useState} from "react";

/*
Сделайте 3 кнопки. Пусть первая кнопка изменяет значение свойства prop1, вторая - prop2, а третья - prop3
*/

function Objects() {

    let [obj, setObj] = useState({
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
    })

    return <div>
        <h1>Objects</h1>
        <button onClick={() => setObj({...obj, prop1: 'hello, world'})}>Prop1</button>
        <button onClick={() => setObj({...obj, prop2: 'how are you, world'})}>Prop2</button>
        <button onClick={() => setObj({...obj, prop3: 'bye, world'})}>Prop3</button>
        <p>{obj.prop1}</p>
        <p>{obj.prop2}</p>
        <p>{obj.prop3}</p>
    </div>
}

export default Objects;