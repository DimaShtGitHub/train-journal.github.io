import { useState } from "react"
import NewTrain from "./pages/NewTrain"
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (<>
    <h1>Журнал для тренировок</h1>
    <button onClick={() => setModalOpen(true)}>Добавить тренировку</button> 
    <button>Посмотреть все тренировки</button>

    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}> 
      <NewTrain />
    </Modal>
    
  </>)
}

export default App