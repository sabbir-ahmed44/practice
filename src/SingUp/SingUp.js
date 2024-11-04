import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css'; // Import CSS for styling

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      additionalFields: [''], // Dynamic fields
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email format').required('Required'),
      password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
      additionalFields: Yup.array().of(Yup.string().required('Required')),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
      // Handle form submission (e.g., send data to API)
    },
  });

  

  const handleRemoveField = (index) => {
    const newFields = formik.values.additionalFields.filter((_, i) => i !== index);
    formik.setFieldValue('additionalFields', newFields);
  };

  return (
    <form className="signup-form" onSubmit={formik.handleSubmit}>
      <h2>Sign Up</h2>
      
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && <div className="error">{formik.errors.username}</div>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="error">{formik.errors.confirmPassword}</div>}
      </div>

      <div className="additional-fields">
        {formik.values.additionalFields.map((field, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              name={`additionalFields[${index}]`}
              onChange={formik.handleChange}
              value={field}
              placeholder={`Additional Field ${index + 1}`}
            />
            {formik.touched.additionalFields && formik.errors.additionalFields && formik.errors.additionalFields[index] && (
              <div className="error">{formik.errors.additionalFields[index]}</div>
            )}
            <button type="button" onClick={() => handleRemoveField(index)}>Remove</button>
          </div>
        ))}
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default SignUpForm;
