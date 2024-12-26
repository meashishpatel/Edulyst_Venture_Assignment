import { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get("http://localhost:5000/api/users");
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="app-container">
      <h1>User Management</h1>
      <UserForm fetchUsers={fetchUsers} />
      <UserList users={users} fetchUsers={fetchUsers} />
    </div>
  );
};

export default App;
