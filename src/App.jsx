import './App.css'
import userContext from './Context/UserContext'
import UserAccount from './components/UserAccount'
const App = () => {
  const user = 'xyz'
  return (
    <userContext.Provider value={user}>
      <div>
        <UserAccount/>
      </div>
    </userContext.Provider>
  )
}
export default App
