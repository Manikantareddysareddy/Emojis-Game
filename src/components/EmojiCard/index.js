import './index.css'

const EmojiCard = props => {
  const {emojiCard, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = emojiCard

  const onImageClick = () => {
    onEmojiClick(id)
  }
  return (
    <div className="emoji-container">
      <li className="list-container">
        <button type="button" onClick={onImageClick} className="img-button">
          <img src={emojiUrl} alt={emojiName} className="emoji-image" />
        </button>
      </li>
    </div>
  )
}

export default EmojiCard

