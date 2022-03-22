import {useState} from "react";

/*
Привязка инпутов к объекту в React

---Homework
Выведите в абзаце год, месяц и день из даты, хранящейся в стейте, а также день недели, соответствующий ей.
Модифицируйте предыдущую задачу, добавив три инпута для редактирования даты.
*/

function InputsToObjects() {
    const initObj = {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
    }
    let [obj, setObj] = useState(initObj)

    function handleChange(event, prop) {
        setObj({...obj, [prop]: event.target.value})
    }

    const date = {
        year: 2025,
        month: 12,
        day: 31,
    }
    let [xDate, setXDate] = useState(date)

    function weekDay(dateObj) {
        let weekdays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        return weekdays[new Date(dateObj.year, dateObj.month, dateObj.day).getDay()]

    }

    function changeDate(event, key) {
        setXDate({...xDate, [key]: event.target.value})
    }


    return <div>
        <h1>Inputs To Objects</h1>

        <input value={obj.prop1} onChange={event => handleChange(event, 'prop1')}/>
        <input value={obj.prop2} onChange={event => handleChange(event, 'prop2')}/>
        <input value={obj.prop3} onChange={event => handleChange(event, 'prop3')}/>
        <br/>
        {obj.prop1}-{obj.prop2}-{obj.prop3}

        <h3>Homework</h3>
        <input value={xDate.year} type="number" onChange={event => changeDate(event, 'year')}/>
        <input value={xDate.month} type="number" onChange={event => changeDate(event, 'month')}/>
        <input value={xDate.day} type="number" onChange={event => changeDate(event, 'day')}/>

        <p>{xDate.year}</p>
        <p>{xDate.month}</p>
        <p>{xDate.day}</p>
        <p>{weekDay(xDate)}</p>
    </div>
}

export default InputsToObjects;