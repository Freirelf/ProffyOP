import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Rota() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' Component = {Landing} />
        <Route path='/study' Component={TeacherList} />
        <Route path='/give-classes' Component={TeacherForm} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rota;