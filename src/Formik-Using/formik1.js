import React from 'react'
import {useFormik} from 'react';

const Formik1 = () => {

    const formik= useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
     },
     onSubmit:(values)=>{
     console.log(values);
     }
    })
    

  return (
    <div>
        <h1>Resister</h1>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
          <input type='text'
          value={formik.values.name}
          id='name'
          name='name'
          onChange={formik.handleChange}
          >
          </input>
          </div>

          <div>
            <label htmlFor='email'>Email:</label>
          <input type='email'
          value={formik.values.email}
          id='email'
          name='email'
          onChange={formik.handleChange}
          >
          </input>
          </div> 
          
          <div>
            <label htmlFor='password'>Password</label>
          <input type='password'
          value={formik.values.password}
          name='password'
          id='password'
          onChange={formik.handleChange}
          >
          </input>
          </div>
          <button type='submit'> Submit</button>
        </form>
    </div>
  );
};

export default Formik1