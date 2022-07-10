import React from 'react'
import { useState} from 'react'


const ScoreKeeper = () => {

  const [winningScore, setWinningScore] = useState(0)
  const [score, setScore] = useState(0)
  const [scoreTwo, setScoreTwo] = useState(0)
  const [isGameOver, setGameOver] = useState(false)
  const [colorOne, setColorOne] = useState('')
  const [colorTwo, setColorTwo] = useState('')


  const selectRound = (e) => {
    const playingTo = parseInt(e.target.value)
    setWinningScore(playingTo)
    setGameOver(false)
    setScore(0) || setScoreTwo(0)
    setColorOne('')
    setColorTwo('')
  }


const playerOneHandler =  () => {
  if(isGameOver) return;
  const newScore = score + 1;
  if(newScore === winningScore){
    setGameOver(true)
    setColorOne('green')
    setColorTwo('red')
  }
  setScore(newScore)
}



const playerTwoHandler =  () => {
 if(isGameOver) return;
 const newScore = scoreTwo + 1;
 if(newScore === winningScore){
   setGameOver(true)
   setColorTwo('green')
   setColorOne('red')
 }
 setScoreTwo(newScore)
  } 

  const resetHandler = () => {
    setGameOver(false)
    setScore(0) || setScoreTwo(0)
    setColorOne('')
    setColorTwo('')
  }

  return (<div className="content">
    <div className="text-center">
      <div className="row d-flex justify-content-center">
        <div className="card" style={{ "width": "45rem" }}>
          <img src="https://images.unsplash.com/photo-1584813539806-2538b8d918c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
          <div className="card-body">
            <h5 className="card-title">Ping Pong Score Keeper</h5>
          </div>
          <h1><span className={colorOne}>{score}</span> to <span className={colorTwo}>{scoreTwo}</span></h1>
          <h6>Use the buttons below to keep score</h6>
          <div>
            <h6 className="selectScore">Playing to:</h6>
            <select value={winningScore} onChange={selectRound}>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
            </select>
          </div>
          <div className="card-body">
            <button onClick={playerOneHandler} type="button" className="playerOne btn btn-primary">Player One</button>
            <button onClick={playerTwoHandler} type="button" className="playerTwo btn btn-success">Player Two</button>
            <button onClick={resetHandler} type="button" className="reset btn btn-danger">Reset</button>
          </div>
        </div>
      </div>
    </div>);
  </div>);
}

export default ScoreKeeper;






// const playerOneHandler = (e) => {
//   if (!isGameOver) {
//     if (score !== winningScore) {
//       setScore(score + 1)
//     } else if(setGameOver && score === winningScore){
//       setColorOne('green')
//       setColorTwo('red')
//       setGameOver(true)
//     }
//   }
// }

// const playerTwoHandler = () => {
// if (!isGameOver) {
//   if (scoreTwo !== winningScore) {
//     setScoreTwo(scoreTwo + 1)
//   } else if(setGameOver && scoreTwo === winningScore){
//       setColorTwo('green')
//       setColorOne('red')
//       setGameOver(true)
//   }
// } 
// }


// const playerOneHandler = (e) => {
//   if (!isGameOver) {
//     if (score !== winningScore) {
//       setScore(score + 1)
//     } else {
//       setGameOver(true)
//     }
//   }
// }

// const playerTwoHandler = () => {
//   if (!isGameOver) {
//     if (scoreTwo !== winningScore) {
//       setScoreTwo(scoreTwo + 1)
//     } else{
//       setGameOver(true)
//     }
//   } 
// }


 // useEffect(() => {
  //     if(isGameOver)
  //     if(score === winningScore) {
  //       setColorOne('green')
  //       setColorTwo('red')
  //     } else {
  //       if (scoreTwo === winningScore) {
  //         setColorTwo('green')
  //         setColorOne('red')
  //       }
  //     }
  // }, [score, scoreTwo, winningScore, isGameOver])
