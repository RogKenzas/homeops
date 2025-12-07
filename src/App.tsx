import { useState } from 'react'
import './App.css'
import AppCtn from './components/app_ctn'
import Firstsidebar from './components/first_sidebar'
function App() {
  const [isCtnDashVisible, setIsCtnDashVisible] = useState(true);

  const toggleCtnDash = () => {
    setIsCtnDashVisible(!isCtnDashVisible);
  };

  return (
    <div className='app__ctn'>
      <Firstsidebar isCtnDashVisible={isCtnDashVisible} onToggle={toggleCtnDash} />
      <AppCtn isCtnDashVisible={isCtnDashVisible} />
    </div>
  )
}

export default App
