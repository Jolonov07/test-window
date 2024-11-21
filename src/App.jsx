import { useState } from "react";
import ModalWindow from "./ModalWindow"
import Button from "./Components/Button";
import "./index.scss"

const App = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleWindow = () => {
    setIsActive((prev) => !prev)
  }
  
  return (
    <div className="main">
      <Button text="NEW Create a Job" onClick={toggleWindow} />
      {
        isActive && <ModalWindow onClose={toggleWindow} />
      }
    </div>
  )
};

export default App;
