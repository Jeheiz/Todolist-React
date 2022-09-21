import React, { useState } from "react";


const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const handlerInput = (e) => {
        setInputValue(e.target.value)
    }
    const handleButton = () => {
        // tasks.push(inputValue)
        setTasks([...tasks, inputValue]);
        setInputValue("");
    }
    const handlePress = (e) => {
        // if (e.keyCode == 13){
        if (e.key == "Enter") {
            setTasks([...tasks, inputValue]);
            setInputValue("");
        }
        const Box = () => {
            const [box, setBox] = useState(0);
            return <button onClick={() => (Box + 1)}>{box}No quedan tareas</button>
        }
    }


const resetButton = (index) => {
    let temp = tasks;
    tasks.splice(index, 1);
    setTasks([...temp]);
}
const html = tasks.map((e, i) => {
    return <li className="elementLista" key={i}>{e}
        <button className="delete" onClick={() => resetButton(i)} value={tasks}>  X  </button>

    </li>
})

    return (
        <div className="text-contenedor">
            <h1>ToDos</h1>


            <input className="todo-input1"
                type="text" onChange={handlerInput} onKeyDown={(e) => handlePress(e)} value={inputValue} />


            <ul>

                {html}
            </ul>
        </div>
);
}


export default Home;