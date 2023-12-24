import './index.css'

const NavBar = props => {
  const {Score, TopScore} = props
  return (
    <div className="nav-container">
      <div className="image-heading">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="para"> Score: {Score}</p>
        <p className="para">Top Score: {TopScore}</p>
      </div>
    </div>
  )
}

const NavBar1 = props => {
  const {Score, TopScore} = props
  return (
    <div className="nav-container">
      <div className="image-heading">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
    </div>
  )
}

export {NavBar, NavBar1}
