import { useState } from 'react'

import { BrowserRouter as Router } from "react-router-dom"

import './App.css'




function App() {


  const var10_1 = import.meta.env.VITE_10_1_VAR
  //console.log("One of our environment Variables: ", import.meta.env.VITE_10_1_VAR)
 console.log("One of Our Enviornment Variables: ", var10_1)

  return (
    <>
    <Router>
     
     <h1>ScreenViews</h1>


    <h2>-Test-{ var10_1 }</h2>

     </Router>
  
    </>
  )
}

export default App
