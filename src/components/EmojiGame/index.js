
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'

import {NavBar, NavBar1} from '../NavBar'

import EmojiCard from '../EmojiCard'

import {WinCard, LoseCard} from '../WinOrLoseCard'

import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    NewEmojisList: [],
    EmojisList: emojisList,
    isActive: 'neutral',
    Score: 0,
    TopScore: 0,
  }

  onEmojiClick = id => {
    const {NewEmojisList, TopScore, Score} = this.state
    const shuffledEmojisList = () => {
      const {EmojisList} = this.state
      return EmojisList.sort(() => Math.random() - 0.5)
    }
    this.setState({EmojisList: shuffledEmojisList()})
    const filterData = emojisList.filter(each => each.id === id)

    this.setState(prevState => ({
      NewEmojisList: [...prevState.NewEmojisList, filterData[0]],
    }))

    const boolVal = NewEmojisList.map(eachItem => eachItem.id === id)
    if (boolVal.includes(false)) {
      this.setState({Score: Score + 1})
    }
    if (boolVal.includes(true)) {
      let newTopScore
      if (Score > TopScore) {
        newTopScore = Score
      } else {
        newTopScore = TopScore
      }
      this.setState({
        isActive: 'Loss',
        TopScore: newTopScore,
        NewEmojisList: [],
      })
    }
    if (boolVal.length === 11) {
      const newTopScore = Score + 1
      this.setState({
        isActive: 'Win',
        TopScore: newTopScore + 1,
        NewEmojisList: [],
      })
    }
  }

  newGameStart = () => {
    const {Score, TopScore} = this.state
    console.log(TopScore, Score)
    if (TopScore < Score) {
      this.setState({TopScore: Score})
    }
    this.setState({isActive: 'neutral', Score: 0})
  }

  render() {
    let WinOrLose
    const {Score, TopScore, EmojisList, isActive} = this.state
    let Game
    if (isActive === 'neutral') {
      Game = (
        <div className="top-bg-container">
          <NavBar Score={Score} TopScore={TopScore} />
          <div className="bg-container">
            <ul className="ul-container">
              {EmojisList.map(eachEmoji => (
                <EmojiCard
                  emojiCard={eachEmoji}
                  key={eachEmoji.id}
                  onEmojiClick={this.onEmojiClick}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    } else if (isActive === 'Win') {
      Game = <WinCard Score={Score} newGameStart={this.newGameStart} />
    } else {
      Game = <LoseCard Score={Score} newGameStart={this.newGameStart} />
    }
    return <div>{Game}</div>
  }
}
export default EmojiGame
