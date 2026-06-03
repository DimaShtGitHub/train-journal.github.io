import './AllTrain.css'

const AllTrain = () => {
  const workouts = JSON.parse(localStorage.getItem('workouts'))

  console.log(workouts);
  
  return <div>
    <h2>Все тренировки</h2>
    <div className='train-box'>
      <table>
        <thead>
          <th>№</th>
          <th>Место</th>
          <th>Дата</th>
        </thead>
        <tbody>
            {workouts?.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{el.id}</td>
                  <td>{el.place}</td>
                  <td>{el.date}</td>
                </tr>
              )
            })}
        </tbody>
      </table> 
    </div>
  </div>
}

export default AllTrain;