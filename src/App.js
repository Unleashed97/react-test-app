import React from 'react'

import Header from './components/Header'
import SideBar from './components/SideBar'
import Todo from './components/Todo'
import './fontAwesome'

function App(){
  return(
    <div className="wrapper">
      <SideBar/>
      <main className="main">
        <Header />
        <Todo />
      </main>
    </div>
  )
}

export default App