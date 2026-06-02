import { useState } from "react"
import NewTrain from "./pages/NewTrain"
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (<>
    <h1>Train Journal</h1>
    <button onClick={() => setModalOpen(true)}>Add Train</button> 
    <button>Посмотреть все тренировки</button>

    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}> 
      <NewTrain />
    </Modal>
    
  </>)
}

export default App