
import './index.css'

import {NavBar, NavBar1} from '../NavBar'

const WinCard = props => {
  const {Score, newGameStart} = props
  const newGame = () => {
    newGameStart()
  }
  return (
    <div className="container">
      <NavBar1 />
      <div className="top-bg-container1">
        <div className="Won-container">
          <div className="won-data-container">
            <h1 className="won-heading">You Won</h1>
            <div className="won-para-container">
              <p className="won-para">Best Score</p>
              <p className="won-para1">{Score + 1}/12</p>
              <button
                className="play-again-btn"
                type="button"
                onClick={newGame}
              >
                Play Again
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            className="won-image"
            alt="win or lose"
          />
        </div>
      </div>
    </div>
  )
}

const LoseCard = props => {
  const {Score, newGameStart} = props
  const newGame = () => {
    newGameStart()
  }
  console.log(Score)
  return (
    <div className="container">
      <NavBar1 />
      <div className="top-bg-container1">
        <div className="Won-container">
          <div className="won-data-container">
            <h1 className="won-heading">You Lose</h1>
            <div className="won-para-container">
              <p className="won-para">Score</p>
              <p className="won-para1">{Score}/12</p>
              <button
                className="play-again-btn"
                type="button"
                onClick={newGame}
              >
                Play Again
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            className="won-image"
            alt="win or lose"
          />
        </div>
      </div>
    </div>
  )
}
export {WinCard, LoseCard}
