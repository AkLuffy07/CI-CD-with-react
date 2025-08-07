import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import BodyCounter from './components/BodyCounter'

function App() {

  return (
    <>
      <div style={styles.appContainer}>
        <div style={styles.innerContainer}>
          <Header />
          <BodyCounter />
        </div>
      </div>
    </>
  )
}

const styles = {
  appContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    maxWidth: '400px',
  }
}

export default App
