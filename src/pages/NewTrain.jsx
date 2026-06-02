import { useState } from "react";
import { useEffect } from "react";
import './NewTrain.css'

const NewTrain = () => {
  const [date, setDate] = useState('')
  const [list, setList] = useState([])
  
  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1; // Месяцы начинаются с 0
  const year = today.getFullYear();
  useEffect(() => {

    setDate(`${day}.${month}.${year}`)
  }, [])
  
  const placeTrain = [
    {
      id: 1,
      place: 'Спорт зал'
    },
    {
      id: 2,
      place: 'На улице'
    },
    {
      id: 3,
      place: 'Дома'
    },
  ];
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const gym = event.target.gym.value
    const num = event.target.num.value
    const weight = event.target.weight.value

    setList(pre => [...pre, {
      gym: gym,
      number: num,
      weight: weight
    }])

    event.target.reset();
  }

  const setTrain = () => {
    // TODO: отправлять данные тренировки в БД и закрывать форму
    console.log('Пока не добавил эту функцию :3');
    
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
          <input type="text" name="weight" placeholder="Дополнительный вес:"></input>
        </p>
        <button type="submit">добавить в тренировку</button>
      </form>
    </div>

    <div className="train_list">
      <h2>{day}.{month}.{year}: тренировка {placeTrain.find(el => el.id === 1)?.place}</h2>
      <p>Упражнение / Количество / Доп. вес</p>
    
        <table>
          <thead>
            <th>№</th>
            <th>Упражнение</th>
            <th>Кол повторений</th>
            <th>Доп вес</th>
          </thead>
          <tbody>
            {list.map((el, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{el.gym}</td>
                  <td>{el.number}</td>
                  <td>{el.weight}</td>
                </tr>
              )})
            }
      </tbody> 
      </table>



      <button onClick={setTrain}>Сохранить тренировку</button>
    </div>
  </div>
}

export default NewTrain