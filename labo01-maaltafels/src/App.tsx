import { useState } from 'react'
import './App.css'
import React from 'react';

class MultiplicationTable extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            {Array.from({ length: 10 }, (_, index) => (
              <th key={index}>{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, rowIndex) => (
            <tr key={rowIndex}>
              <th>{rowIndex + 1}</th>
              {Array.from({ length: 10 }, (_, colIndex) => (
                <td key={colIndex}>{(rowIndex + 1) * (colIndex + 1)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}


function App() {

  return (
    <>
      <MultiplicationTable/>  
    </>
  )
}

export default App

