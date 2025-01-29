import React from 'react'
import { useState } from 'react'
import { useFormik } from 'formik';
import { validateMovie } from './ValidateAdminForm';

export const AdminForm = ({ addMovie }) => {

  // const [title, setTitle] = useState("")
  // const [year, setYear] = useState("")
  // const [price, setPrice] = useState("")

  // const hadleSubmit = (e) => {
  //   e.preventDefault()
  //   if (!title || !year || !price) return
  //   addMovie(title, year, price)
  //   setTitle("")
  //   setYear("")
  //   setPrice("")
  // }

  const formik = useFormik({
    initialValues: {
      title: '',
      year: '',
      price: ''
    },
    validate: validateMovie,
    onSubmit: values => {
      addMovie(values.title, values.year, values.price)
      formik.resetForm()
    },
  });

  return (
    <div className="admin-form">
        <h2>Enter a Movie:</h2>
        <form onSubmit={formik.handleSubmit}>
            <input id="title" name="title" type="text" placeholder="Title" onChange={formik.handleChange} value={formik.values.title}/>
            <div> {formik.errors.title ? <span className="error">{formik.errors.title}</span> : null} </div>
            <input id="year" name="year" type="text" placeholder="Year" onChange={formik.handleChange} value={formik.values.year}/>
            <div> {formik.errors.year ? <span className="error">{formik.errors.year}</span> : null} </div>
            <input id="price" name="price" type="text" placeholder="Price" onChange={formik.handleChange} value={formik.values.price}/>
            <div> {formik.errors.price ? <span className="error">{formik.errors.price}</span> : null} </div>
            <button type="submit" >ADD</button>
        </form>
    </div>
  )
}
