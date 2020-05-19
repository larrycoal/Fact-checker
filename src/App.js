import React, { useEffect, useState } from 'react';
import './App.css'

const randomize = (req) => {
  if (req === "num") {
    return (
      (Math.floor(Math.random() * 99))
    )
  }
  else {
    return (
      `${new Date().getMonth() + 1}/${new Date().getDate()}/`
    )
  }
}

const display = (fact) => {
  if (fact === null) {
    return (
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui text loader">Loading....</div>
        </div>
        <p></p>
      </div>
    )
  }
  else {
    return (
      fact
    )
  }
}

function App() {
  const [state, setState] = useState('1')
  const [fact, setFact] = useState('')

  useEffect(() => {
    setFact(null)
    fetch(`http://numbersapi.com/${state}?json`)
      .then(response => response.json())
      .then(data => setFact(data.text))
  }, [state])


  return (
    <div className="main-body">
      <div className="top-div">
        <section>{display(fact)}</section>
      </div>
      <div className="bottom-div">
        <section>
          <button onClick={() => setState(randomize("num"))}>Random Number</button>
          <button onClick={() => setState(randomize("nu"))}>Today's Fact</button>
        </section>
        <section className="input">
          <input type="number" name="num" placeholder="Enter a number you need facts" onChange={(e) => { setState(e.target.value) }} />
        </section>
      </div>
    </div>
  );
}

export default App;
