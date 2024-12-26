import axios from "axios";
import PropTypes from "prop-types"; // Import PropTypes

const UserList = ({ users, fetchUsers }) => {
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers(); // Refresh the user list after deletion
  };

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user._id} className="user-card">
          <img
            src={`http://localhost:5000/${user.profileImage}`}
            alt={user.name}
            className="user-image"
          />
          <h3>{user.name}</h3>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <button onClick={() => deleteUser(user._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

// PropTypes validation
UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired, // Assuming _id is a string
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      profileImage: PropTypes.string.isRequired,
    })
  ).isRequired,
  fetchUsers: PropTypes.func.isRequired, // Ensure fetchUsers is a function and is required
};

export default UserList;
