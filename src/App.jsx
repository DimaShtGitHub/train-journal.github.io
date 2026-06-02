import { useState } from "react"
import NewTrain from "./pages/NewTrain"
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (<>
    <h1>Train Journal</h1>
    <button onClick={() => setModalOpen(true)}>Открыть</button> 

    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}> 
      <NewTrain />
    </Modal>
    <button>add training</button>
    <button>see tranings</button>
  </>)
}

export default App