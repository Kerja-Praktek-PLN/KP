import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();
  const location = useLocation();

  useEffect(()=>{
    // getUserById();
    const user = location.state ? location.state.user : null;
    console.log(user);
    console.log(location.state)
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
  }, []);

  const saveUser = async (e) => {
    e.preventDefault();
    console.log(id)
    try {
      await axios.patch(`http://localhost:5000/edit/${id}`, {
        name,
        email,
        password
      });
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async() => {
    const response = await axios.get(`http://localhost:5000/edit/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPassword(response.data.password);
  }

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input 
              type="text" 
              className="input" 
              value={name} 
              onChange={(e)=> setName(e.target.value)}
              placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input 
              type="text" 
              className="input" 
              value={email} 
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
            <input 
              type="text" 
              className="input" 
              value={password} 
              onChange={(e)=> setPassword(e.target.value)}
              placeholder="Password"
              />
            </div>
          </div>
          <div className="field">
            <button type='submit' className='button is-success'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;