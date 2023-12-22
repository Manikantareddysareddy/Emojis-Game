/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

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
  state = {NewEmojisList: [], EmojisList: emojisList, Score: 0, TopScore: 0}

  onEmojiClick = id => {
    const {NewEmojisList} = this.state
    const shuffledEmojisList = () => {
      const {EmojisList} = this.state
      return EmojisList.sort(() => Math.random() - 0.5)
    }
    this.setState({EmojisList: shuffledEmojisList()})
    const filterData = emojisList.filter(each => each.id === id)

    this.setState(prevState => ({
      NewEmojisList: [...prevState.NewEmojisList, filterData[0]],
      Score: prevState.Score + 1,
      TopScore: prevState.TopScore + 1,
    }))
    const boolVal = NewEmojisList.map(eachItem => eachItem.id === id)
    if (boolVal.includes(true)) {
      console.log('YOU LOST THE GAME')
    }
  }

  render() {
    const {Score, TopScore, EmojisList} = this.state
    return (
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
  }
}
export default EmojiGame
