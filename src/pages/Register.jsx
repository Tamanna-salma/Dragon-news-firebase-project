import React, { use } from 'react'
import { Link } from 'react-router'
import { Authcontext } from '../provaider/AuthProvider'

const Register = () => {
  const {creatUser ,setuser}=use(Authcontext)
  const handleregister=(e)=>{
e.preventDefault();
// console.log(e.target);
const form =e.target;
// console.log(form.name.value);
// console.log(form.email.value);
// console.log(form.password.value);
// const name=form.name.value;
// console.log(name);
const name=form.name ?.value;
const photo=form.photo?.value;
const email=form.email?.value;
const password=form.password?.value;
console.log({name,email,photo, password});
creatUser(email,password)
.then((result)=>{
  const user =result.user;
  // console.log(user);
  alert("register successfull")
  setuser(user);
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });

  }
  return (
     <div className='bg-base-200 min-h-screen'>
        <header className='w-11/12 mx-auto py-5'>
            
        </header>
        <main className='w-11/12 mx-auto py-5'>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse"> 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleregister} className="card-body">
         <h3 className='font-bold text-center'>Register your account</h3>
        <fieldset className="fieldset">

            {/* name */}
             <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" required />

           <label className="label">photo</label>
          <input name='photo' type="text" className="input" 
        placeholder="photo" required /> 

            {/* email */}

          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />

               {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />

          
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
         <h3 className='font-semibold mt-4'>
           AllReady Have An Account ? <Link className='text-secondary' to="/auth/login" >Login</Link>
         </h3>

      </form>
    </div>
  </div>
</div>

        </main>
    </div>
  )
}

export default Register