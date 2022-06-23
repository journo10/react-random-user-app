import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import ActiveUserList from './ActiveUserList';

function App() {
  const [users, setUser] = useState([]);
  const [active, setActive] = useState(0);

  const getUser = async () => {
    try {
      let url = "https://randomuser.me/api/";
      const { data } = await axios.get(url);
      setUser(data.results)
      //console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  //icons array
  const icons = [
    "fa-solid fa-user",
    "fa-solid fa-envelope",
    "fa-solid fa-calendar-days",
    "fa-solid fa-map-location-dot",
    "fa-solid fa-phone",
    "fas fa-lock"
  ]

  //onMouseOver
  const handleActiveUser = (index) => {
    setActive(index)
  }

  return (
    <div className="app">
      {users.map((user, id) => (
        <div className="conteiner" key={user.id}>
          <div className="image">
            <img src={user.picture.large} alt="img" />
            <button name="name" type="button" className="image-btn" onClick={getUser}>Yenile</button>
          </div>
          <div className="title">
            <ActiveUserList user={user} active={active} setActive={setActive} />
          </div>
          <div className="icons">
            {icons.map((icon, index) => (
              <button className="btn-icon" type="button" key={index}>
                <i className={icon} onMouseOver={() => handleActiveUser(index)}></i>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
