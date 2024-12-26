import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types"; // Import PropTypes

const UserForm = ({ fetchUsers }) => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    profileImage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in user) {
      formData.append(key, user[key]);
    }
    await axios.post("http://localhost:5000/api/users", formData);
    fetchUsers();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="file"
        onChange={(e) => setUser({ ...user, profileImage: e.target.files[0] })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// PropTypes validation
UserForm.propTypes = {
  fetchUsers: PropTypes.func.isRequired, // Ensure fetchUsers is a function and is required
};

export default UserForm;
