import {useState} from "react";

/*
Стейты и условный рендеринг тегов в React

Пусть у вас есть три абзаца. Сделайте три кнопки, каждая из которых будет отвечать за показ определенного абзаца.
*/

function ConditionalTagRendering() {
    const [visible0, setVisible0] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    let elem0;
    if (visible0) {
        elem0 = <p>text1</p>
    }
    let elem1;
    if (visible1) {
        elem1 = <p>text2</p>
    }
    let elem2;
    if (visible2) {
        elem2 = <p>text3</p>
    }


    return <div>
        <h1>Conditional tag rendering</h1>
        {elem0}
        {elem1}
        {elem2}
        <button onClick={() => setVisible0(!visible0)}>{visible0 ? 'Hide1' : 'Show1'}</button>
        <button onClick={() => setVisible1(!visible1)}>{visible1 ? 'Hide2' : 'Show2'}</button>
        <button onClick={() => setVisible2(!visible2)}>{visible2 ? 'Hide3' : 'Show3'}</button>
    </div>
}

export default ConditionalTagRendering;