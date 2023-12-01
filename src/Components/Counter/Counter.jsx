import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [subha, setSubha] = useState(0)
    
    const subHanallah = () => {
        setSubha((prev)=> prev < 33 ? prev+1 : prev )
    }
    
    const [alHamdu, setAlHamdu] = useState(0)
    const alHamdulillah = () => {
        setAlHamdu((prev)=> prev <33 ? prev+1 : prev )
    }

    const [akbar, setAkbar] = useState(0)
    const AllahuAkbar = () => {
        setAkbar((prev)=> prev < 34 ? prev+1 : prev )
    }
        

  return (
    <>
    <div className='container'>
        <h1 className='headLine'>Tasbih Application</h1>
        <p className='total'>Total: {subha + alHamdu + akbar}</p>
            <div className="counter">
                
                <div className="subha">
                    <h2 className='h2'>{subha}</h2>
                    <button onClick={subHanallah} className='tasbih'>سُـبْحانَ الله </button>
                    <button onClick={() => setSubha(subha > 0 ? subha - 1 : 0)}  className='decrement'>Decrement</button>
                </div>
                <div className="al-hamdu">
                    <h2 className='h2'>{alHamdu}</h2>
                    <button onClick={alHamdulillah} className='tasbih'>سُـبْحانَ الله </button>
                    <button onClick={() => setAlHamdu(alHamdu > 0 ? alHamdu - 1 : 0)} className='decrement'>Decrement</button>
                </div>
                <div className="Akbar">
                    <h2 className='h2'>{akbar}</h2>
                    <button onClick={AllahuAkbar} className='tasbih'>سُـبْحانَ الله </button>
                    <button onClick={() => setAkbar(akbar > 0 ? akbar - 1 : 0)} className='decrement'>Decrement</button>
                </div>
                
            </div>
            <button onClick={() => (setSubha(0), setAlHamdu(0), setAkbar(0))} className='decrement'>Reset</button>
    </div>
    </>
  )
}

export default Counter