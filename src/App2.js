import './App2.css';
import uuid from 'react-uuid';
import React, {useState} from 'react';

function App2() {
    const [prodName, setProdName] = useState('product');
    const [prodCost, setProdCost] = useState('cost');
    let [inCart, setInCart] = useState(false);
    let [count, setCount] = useState(0);
    let [userName, setUserName] = useState('name will appear here');
    let [userSurname, setUserSurname] = useState('surname will appear here');
    let [userAge, setUserAge] = useState('age will appear here');
    let [userBanned, setUserBanned] = useState(false);
    let [value, setValue] = useState('')
    let [value2, setValue2] = useState('')
    let [value3, setValue3] = useState('')
    let [value4, setValue4] = useState('')
    let [value5, setValue5] = useState('')
    let [newValue1, setNewValue1] = useState(formatDate(new Date()))
    let [newValue2, setNewValue2] = useState(formatDate(new Date()))
    let [result, setResult] = useState('')
    let [newValue3, setNewValue3] = useState('')
    let [result4val3, setResult4val3] = useState()
    let [isChecked, setIsChecked] = useState(false)
    let [isChecked1, setIsChecked1] = useState(false)
    let [isChecked2, setIsChecked2] = useState(false)
    let [langs, setLangs] = useState('')
    let [selValue, setSelValue] = useState('')
    let texts = ['text1', 'text2', 'text3', 'text4', 'text5']
    let [selValue2, setSelValue2] = useState('')
    let options = texts.map((text, index) => {
        return <option key={index}>{text}</option>
    })
    let [radValue, setRadValue] = useState()
    let [radText, setRadText] = useState(['HTML', 'CSS', 'PHP', 'JS'])
    let [arr1, setArr1] = useState([1, 2, 3, 4, 5])
    let [arr2, setArr2] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    let [arr2Value, setArr2Value] = useState('')
    let arr2Result = arr2.map((arr2, index) => {
        return <p key={index}>{arr2}</p>
    })
    let [notes1, setNotes1] = useState(['a', 'b', 'c', 'd', 'e', 'f'])
    let [notes1Value, setNotes1Value] = useState('')
    let notes1Result = notes1.map((note, index) => {
        return <li key={index}>{note}</li>
    })
    let [notes3, setNotes3] = useState([1, 2, 3, 4, 5])
    let notes3Result = notes3.map((note, index) => {
        return <p key={index} onClick={() => remNote3(index)}>{note}</p>
    })

    function remNote3(index) {
        setNotes3([...notes3.slice(0, index), ...notes3.slice(index + 1)])
    }

    let [notes4, setNotes4] = useState(['a', 'b', 'c', 'd', 'e', 'f'])
    let notes4Result = notes4.map((note, index) => {
        return <li key={index}>{note}
            <button onClick={() => remNote4(index)}>delete</button>
        </li>
    })

    function remNote4(index) {
        setNotes4([...notes4.slice(0, index), ...notes4.slice(index + 1)])
    }


    function formatDate(date) {
        return date.getFullYear() + '-' +
            date.getMonth() + '-' + date.getDate();
    }

    function dateRes() {
        let d1 = new Date(newValue1)
        let d2 = new Date(newValue2)
        setResult(Math.abs((d1 - d2) / (60000 * 60 * 24)))
    }

    function changeFunc(event) {
        setNewValue3(event.target.value)
        let num = event.target.value.toString()
        let result2 = 0
        for (let i = 0; i < num.length; i++) {
            result2 += +num[i]
        }
        setResult4val3(result2)
    }

    function checkedHandler() {
        let langsStr = [];
        if (isChecked) {
            langsStr.push('HTML');
        }
        if (isChecked1) {
            langsStr.push('CSS');
        }
        if (isChecked2) {
            langsStr.push('JS');
        }
        setLangs(langsStr.join(','))
    }


    function selectHandler(event) {
        setSelValue(event.target.value);
    }

    function radioHandler(event) {
        setRadValue(event.target.value)
    }

    function radTextHandler(text) {
        return text[radValue - 1]
    }

    function arr1Handler() {
        let index = arr1.length + 1
        setArr1([...arr1, index])
    }

    function arr1Handler2() {
        let index = arr1.length - 1
        setArr1([...arr1.slice(0, index)])
    }

    let [notes5, setNotes5] = useState([1, 2, 3])

    function notes5Sum(arr) {
        let sum = 0
        for (const elem of arr) {
            sum += +elem
        }
        return sum
    }

    function notes5changeHandler(index, event) {
        setNotes5([...notes5.slice(0, index), event.target.value, ...notes5.slice(index + 1)])
    }

    let [notes6, setNotes6] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    function notes6avr(arr) {
        let avr = 0;
        for (const elem of arr) {
            avr += +elem;
        }
        return avr / arr.length;
    }

    let notes6res = notes6.map((note, index) => {
        return <input type='text' key={index} value={note} onChange={event => notes6changeHandler(event, index)}/>
    })

    function notes6changeHandler(event, index) {
        setNotes6([...notes6.slice(0, index), event.target.value, ...notes6.slice(index + 1)])
    }

    let [notes7, setNotes7] = useState([1, 2, 3, 4, 5]);
    let [editNotes7Num, setEditNotes7Num] = useState(null);
    let notes7Result = notes7.map((note, index) => {
        return <p key={index} onClick={() => setEditNotes7Num(index)}>{note}</p>
    })
    let [notes8, setNotes8] = useState([1, 2, 3, 4, 5]);
    let [editNotes8Num, setEditNotes8Num] = useState(null)
    let notes8Result = notes8.map((note, index) => {
        return <p key={index} onClick={() => setEditNotes8Num(index)}>{note}</p>
    })
    let [defVal, setDefVal] = useState('')

    function notes8Inps() {
        return editNotes8Num === null ?
            <input type="text" value={defVal} onBlur={event => {
                setNotes8([...notes8, event.target.value]);
                setDefVal('')
            }}
                   onChange={event => setDefVal(event.target.value)}/> :
            <input type="text"
                   onChange={event => setNotes8([...notes8.slice(0, editNotes8Num), event.target.value, ...notes8.slice(editNotes8Num + 1)])}
                   onBlur={toAdd}
                   value={editNotes8Num ? notes8[editNotes8Num] : ''}/>
    }

    function toAdd() {
        setEditNotes8Num(null);
    }


    return <div>
        <span>{prodName}</span><br/>
        <span>{prodCost}</span><br/>
        <button onClick={() => setProdName('milk')}>btn1</button>
        <button onClick={() => setProdCost('480')}>btn2</button>
        <br/>
        <span>{inCart ? 'в корзине' : 'не в корзине'}</span><br/>
        <button onClick={() => setInCart(!inCart)}>Add to cart</button>
        <br/>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>
            <button onClick={() => setUserName('Lorn')}>Name</button>
            <button onClick={() => setUserSurname('Malvo')}>Surname</button>
            <button onClick={() => setUserAge(42)}>Age</button>
            <button onClick={() => setUserBanned(!userBanned)}>{userBanned ? 'Unban User' : 'Ban User'}</button>
            <button onClick={() => setUserAge(userAge + 1)}>+ age</button>
            <button onClick={() => setUserAge(userAge - 1)}>- age</button>
            <p>{userName}</p>
            <p>{userSurname}</p>
            <p>{userAge}</p>
            <p>{userBanned.toString()}</p>
        </div>

        <h2>Input</h2>
        <input value={value} type={"number"}
               onChange={event => setValue((event.target.value === '') ? '' : +event.target.value)}/>
        <input value={value2} type={"number"}
               onChange={event => setValue2((event.target.value === '') ? '' : +event.target.value)}/>
        <input value={value3} type={"number"}
               onChange={event => setValue3((event.target.value === '') ? '' : +event.target.value)}/>
        <input value={value4} type={"number"}
               onChange={event => setValue4((event.target.value === '') ? '' : +event.target.value)}/>
        <input value={value5} type={"number"}
               onChange={event => setValue5((event.target.value === '') ? '' : +event.target.value)}/>
        <p>Calc: {(value + value2 + value3 + value4 + value5) / 5}</p>
        <input value={newValue1} type="text" onChange={(event) => setNewValue1(event.target.value)}/>
        <input value={newValue2} type="text" onChange={(event) => setNewValue2(event.target.value)}/>
        <button onClick={dateRes}>Click to get sum</button>
        <p>Days: {result}</p>
        <input type="text" value={newValue3} onChange={changeFunc}/>
        <p>{result4val3}</p>

        <h2>Checkbox</h2>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
        <p>HTML</p>
        <input type="checkbox" checked={isChecked1} onChange={() => setIsChecked1(!isChecked1)}/>
        <p>CSS</p>
        <input type="checkbox" checked={isChecked2} onChange={() => setIsChecked2(!isChecked2)}/>
        <p>JS</p>
        <button onClick={checkedHandler}>Click!</button>
        <p>Selected - {langs}</p>
        <br/>

        <h2>Select</h2>
        <select value={selValue} onChange={selectHandler}>
            <option value="Afganistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antigua & Barbuda">Antigua & Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bonaire">Bonaire</option>
            <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Canary Islands">Canary Islands</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Channel Islands">Channel Islands</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos Island">Cocos Island</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote DIvoire">Cote DIvoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Curaco">Curacao</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="East Timor">East Timor</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands">Falkland Islands</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Ter">French Southern Ter</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Great Britain">Great Britain</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="Indonesia">Indonesia</option>
            <option value="India">India</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea North">Korea North</option>
            <option value="Korea Sout">Korea South</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Macedonia">Macedonia</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Malawi">Malawi</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Midway Islands">Midway Islands</option>
            <option value="Moldova">Moldova</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Nambia">Nambia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherland Antilles">Netherland Antilles</option>
            <option value="Netherlands">Netherlands (Holland, Europe)</option>
            <option value="Nevis">Nevis</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau Island">Palau Island</option>
            <option value="Palestine">Palestine</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Phillipines">Philippines</option>
            <option value="Pitcairn Island">Pitcairn Island</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Republic of Montenegro">Republic of Montenegro</option>
            <option value="Republic of Serbia">Republic of Serbia</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Rwanda">Rwanda</option>
            <option value="St Barthelemy">St Barthelemy</option>
            <option value="St Eustatius">St Eustatius</option>
            <option value="St Helena">St Helena</option>
            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
            <option value="St Lucia">St Lucia</option>
            <option value="St Maarten">St Maarten</option>
            <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
            <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
            <option value="Saipan">Saipan</option>
            <option value="Samoa">Samoa</option>
            <option value="Samoa American">Samoa American</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome & Principe">Sao Tome & Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Tahiti">Tahiti</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Thailand">Thailand</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad & Tobago">Trinidad & Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks & Caicos Is">Turks & Caicos Is</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Erimates">United Arab Emirates</option>
            <option value="United States of America">United States of America</option>
            <option value="Uraguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican City State">Vatican City State</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
            <option value="Wake Island">Wake Island</option>
            <option value="Wallis & Futana Is">Wallis & Futana Is</option>
            <option value="Yemen">Yemen</option>
            <option value="Zaire">Zaire</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
        </select>
        <p>You've selected {selValue}</p>
        <select value={selValue2} onChange={(event) => setSelValue2(event.target.value)}>
            {options}
        </select>
        <p>You've selected {selValue2}</p>

        <h2>Radio</h2>
        <label><input type="radio" name="radio" key={1} value={1} checked={radValue === '1'}
                      onChange={radioHandler}/>HTML</label>
        <label><input type="radio" name="radio" key={1} value={2} checked={radValue === '2'}
                      onChange={radioHandler}/>CSS</label>
        <label><input type="radio" name="radio" key={1} value={3} checked={radValue === '3'}
                      onChange={radioHandler}/>PHP</label>
        <label><input type="radio" name="radio" key={1} value={4} checked={radValue === '4'}
                      onChange={radioHandler}/>JavaScript</label>
        <p>selected: {radValue}</p>
        <p>selected: {radTextHandler(radText)}</p>
        <button onClick={arr1Handler}>Click to add!</button>
        <button onClick={arr1Handler2}>Click to delete!</button>
        <p>{arr1.join(',')}</p>
        <input type="text" onChange={event => setArr2Value(event.target.value)} value={arr2Value}/>
        <button onClick={() => setArr2([...arr2, arr2Value])}>Click for arr2</button>
        <p>{arr2Result}</p>
        <h2>HomeWork</h2>
        <input type="text" value={notes1Value} onChange={(event) => setNotes1Value(event.target.value)}/>
        <button onClick={() => {
            setNotes1([...notes1, notes1Value]);
            setNotes1Value("");
        }}>Click to add
        </button>
        <ul>{notes1Result}</ul>
        <p>{notes3Result}</p>
        <ul>{notes4Result}</ul>
        <input type="text" value={notes5[0]} onChange={event => notes5changeHandler(0, event)}/>
        <input type="text" value={notes5[1]} onChange={event => notes5changeHandler(1, event)}/>
        <input type="text" value={notes5[2]} onChange={event => notes5changeHandler(2, event)}/>
        <p>{notes5Sum(notes5)}</p>
        <h2>Note 6</h2>
        <p>{notes6res}</p>
        <p>{notes6avr(notes6)}</p>
        <h2>Note 7</h2>
        <input type="text" value={editNotes7Num !== null ? notes7[editNotes7Num] : ''} onChange={event => {
            setNotes7([...notes7.slice(0, editNotes7Num), event.target.value, ...notes7.slice(editNotes7Num + 1)])
        }
        } onBlur={event => {
            setEditNotes7Num(null)
        }
        }/>
        {notes7Result}
        <h2>notes 8</h2>
        {notes8Inps()}
        {notes8Result}
    </div>
}

export default App2;