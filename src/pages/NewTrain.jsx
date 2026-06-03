import { useState } from "react";
import './NewTrain.css'

const NewTrain = () => {
  const [list, setList] = useState([])
  const [place, setPlace] = useState('')
  
  
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1; // Месяцы начинаются с 0
  const year = today.getFullYear();
  const date = `${day}.${month}.${year}`
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const gym = event.target.gym.value
    const num = event.target.num.value
    const lap = event.target.lap.value
    const weight = event.target.weight.value

    setList(pre => [...pre, {
      gym: gym,
      number: num,
      lap: lap,
      weight: weight
    }])

    event.target.reset();
  }

  const setTrain = () => {
    const preLs = JSON.parse(localStorage.getItem('workouts'))
    
    if (!preLs) {
      const result = [{
        id: 1,
        date: date,
        place: place,
        exercises: list  
      }]
      
      localStorage.setItem('workouts', JSON.stringify(result))
    } else {
      
      const infoTrain = {
        id: preLs[preLs.length - 1].id + 1,
        date: date,
        place: place,
        exercises: list
      }
  
      preLs.push(infoTrain)
      localStorage.setItem('workouts', JSON.stringify(preLs))
    }

  }
  
  return <div className="train_box">
    <div className="train_panel">
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="gym" placeholder="Упражнение:"></input>
        </p>

        <p>
          <input type="text" name="num" placeholder="Количество повторений:"></input>
        </p>        
        
        <p>
          <input type="number" name="lap" placeholder="Количество кругов:"></input>
        </p>

        <p>
          <input type="text" name="weight" placeholder="Дополнительный вес:"></input>
        </p>
        <button type="submit">+</button>
      </form>
    </div>


    <div className="train_list">
      <select name="place" id="place-select" onChange={(e) => console.log(e.target) || setPlace(e.target.value)}>
        <option value={''}>Выбери место тренировки</option>
        <option value={'house'}>Дома</option>
        <option value={'gym'}>В спорт зале</option>
        <option value={'street'}>На улице</option>
      </select>
      <h2>{date}: тренировка {place}</h2>
    
        <table>
          <thead>
            <th>№</th>
            <th>Упражнение</th>
            <th>Кол</th>
            <th>Круг</th>
            <th>Доп вес</th>
          </thead>
          <tbody>
            {list.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.gym}</td>
                  <td>{el.number}</td>
                  <td>{el.lap}</td>
                  <td>{el.weight}</td>
                </tr>
              )})
            }
      </tbody> 
      </table>

      <button onClick={setTrain}>Сохранить</button>
    </div>
  </div>
}

export default NewTrain