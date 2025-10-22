import React, { use } from 'react'
import { Link } from 'react-router'
import { Authcontext } from '../provaider/AuthProvider'

const Login = () => {
  const { signIn}=use(Authcontext)
  const handleLogin=(e)=>{
    e.preventDeafult();
    const form=e.target;
    const email=form.email?.value;
    const password=form.password?.value;
    console.log({email,password});

    signIn(email,password)
    .then((result)=>{
      const user=result.user
      console.log(user);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   alert(errorCode,errorMessage);
  });


  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h3 className='font-bold text-center'>Login your account</h3>
            <fieldset className="fieldset">

              {/* email */}
              <label className="label">Email</label>
              <input name='name' type="email" className="input" placeholder="Email" required/>

              {/* password */}

              <label className="label">Password</label>
              <input name='name' type="password" className="input" placeholder="Password" required/>

              <div><a className="link link-hover">Forgot password?</a></div>
              <button type='submit' className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <h3 className='font-semibold mt-4'>
              Dont Have An Account ? <Link className='text-secondary' to="/auth/register" >Register</Link>
            </h3>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login