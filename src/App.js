import './App.css';
import React from "react";
import uuid from 'react-uuid';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overall: []
        }
    }

    show1(text) {
        alert(text)
    }

    getDigitsSum(num) {
        num = num.toString();
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum = sum + +num[i];
        }
        return sum
    }

    func(event, arg) {
        console.log(event, arg);
    }

    overallPrice = e => {
        const prods = [
            {name: 'regular', price: 490},
            {name: 'premium', price: 520},
            {name: 'super', price: 620}
        ]
        this.setState({
            overall: prods.map(function (sort, i) {
                return <p key={i}>{e.target.value * sort.price}</p>
            })
        })
    }
    a1 = () => {
        const prods = [
            {id: uuid(), name: 'product1', cost: 100},
            {id: uuid(), name: 'product2', cost: 200},
            {id: uuid(), name: 'product3', cost: 300},
        ];
        const rows = prods.map(function (item) {
            return <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.cost}</td>
            </tr>;
        });

        return <table>
            <thead>
            <tr>
                <td>название</td>
                <td>стоимость</td>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.show1(1)}>act1</button>
                <button onClick={() => this.show1(2)}>act2</button>
                <button onClick={() => this.show1(3)}>act3</button>
                <button onClick={() => console.log(this.getDigitsSum(123))}>act3</button>
                <p>{this.getDigitsSum(12345)}</p>
                <button onClick={(event) => this.func(event, 'eee')} className={'btn1'}>Check!</button>
                <ul>
                </ul>
                <input type="number" className={'liters'} onChange={this.overallPrice}/>
                {this.state.overall}
                {this.a1()}
            </div>
        )
    }
}

export default App;
