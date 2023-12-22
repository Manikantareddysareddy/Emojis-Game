import './index.css'

const EmojiCard = props => {
  const {emojiCard, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = emojiCard

  const onImageClick = () => {
    onEmojiClick(id)
  }
  return (
    <li className="list-container">
      <div className="emoji-container">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emoji-image"
          onClick={onImageClick}
        />
      </div>
    </li>
  )
}

export default EmojiCard
