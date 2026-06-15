import { useState, useEffect } from "react"
import NewTrain from "./pages/NewTrain"
import Modal from "./components/Modal";
import AllTrain from "./pages/AllTrain";
import Input from './components/ui/Input/Input.jsx'
import Button from "./components/ui/Button/Button.jsx";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {

  }, [isModalOpen])

  return (<>
    <h1>Журнал для тренировок</h1>
    <Button variant="secondary" onClick={() => setModalOpen(true)}>Добавить тренировку</Button> 
    <Button variant="secondary">Посмотреть все тренировки</Button>

    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}> 
      <NewTrain data={{}} onClose={() => setModalOpen(false)}/>
    </Modal>

    <AllTrain />

    <Input />
    
  </>)
}

export default App