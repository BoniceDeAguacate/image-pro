import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';

export default function signup() {
const navigate = useNavigate();
const[email, setEmail] = useState<string>('');
const[password, setPassword] = useState<string>('');
const[error, setError] = useState<string>('');


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
e.preventDefault();

try{
  await createUserWithEmailAndPassword(auth, email, password);
  navigate('/');
  console.log("se ha redireccionado correctamente")
}catch(error){
  setError(error.message)
  console.log(error)
}

};


  return (
    <form onSubmit={handleSubmit} >
      {error && error}
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">FrontAbyss</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SIGNUP</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </form>
  )
}