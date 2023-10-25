import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://loaclhost:5000/users', {
        name,
        email,
        password
      });
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

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
              className="input" 
              type="password" 
              placeholder="Masukkan password" 
              value={password} 
              onChange={(e)=> setPassword(e.target.value)}
            />
            </div>
          </div>
          <div className="field">
            <button type='submit' className='button is-success'>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;