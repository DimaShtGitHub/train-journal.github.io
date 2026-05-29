import { useState } from "react";
import { useEffect } from "react";

const NewTrain = () => {
  const [date, setDate] = useState('')
  
  
  useEffect(() => {

    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1; // Месяцы начинаются с 0
    const year = today.getFullYear();

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
  
    
  
  return <>
    <h2>{date}: тренировка {placeTrain.find(el => el.id === 1)?.place}</h2>
    <input></input>
  </>
}

export default NewTrain