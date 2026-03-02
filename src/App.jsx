import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();

    console.log(data);

    setUsers(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(users);
  return (
    <div className="container">
      <Header />
      <div className="content">
        {users.map((user, index) => (
          <Card
            key={index}
            username={users[index].name.first}
            gender={users[index].gender}
            email={users[index].email}
            location={users[index].location.country}
            image={users[index].picture.large}
          />
        ))}
      </div>
    </div>
  );
}

export default App;