import { useEffect, useState } from 'react'
import './AllTrain.css'
import Modal from '../components/Modal';
import NewTrain from './NewTrain';
import Button from '../components/ui/Button/Button';

const AllTrain = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [dataTrain, setDataTrain] = useState({})
  const [workouts, setWorkouts] = useState(() => {
    const data = JSON.parse(localStorage.getItem('workouts'));
    return Array.isArray(data) ? data : [];
  });

  useEffect(() => {}, [workouts])
  const deleteTrain = (id) => {
    const filterTrains = workouts.filter((el) => el.id !== id);
    
    setWorkouts(filterTrains)
    localStorage.setItem('workouts', JSON.stringify(filterTrains))
  };

  const openTrain = (data) => {
    setDataTrain(data)
    setModalOpen(true)
  }

  
  return <div>
    <h2>Все тренировки</h2>
    <div className='train-box'>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Место</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
            {workouts?.map((el, index) => {
              return (<>

                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el.place}</td>
                    <td>{el.date}</td>
                    <Button variant='danger' onClick={() => deleteTrain(el.id)}>удалить</Button>
                    <Button variant='secondary' onClick={() => {
                      setModalOpen(true)
                      openTrain(el)
                      }}>открыть</Button>
                  </tr>
                </>
              )
            })}
        </tbody>
      </table> 

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <NewTrain data={dataTrain} />
      </Modal>
    </div>
  </div>
}

export default AllTrain;