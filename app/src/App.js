import React from 'react'
import './App.css'

function App() {
  const [tweets, setTweets] = React.useState([
    {
      id: 0,
      icon: '🌽',
      displayName: 'もろこし太郎',
      accountName: 'morokoshi',
      content: '今日も一日もろこしがうまい'
    },
    {
      id: 1,
      icon: '🍤',
      displayName: 'エビデンス',
      accountName: 'evidence',
      content: 'かにみそたべたい'
    }
  ])

  const addTweet = React.useCallback(
    tweet => setTweets(prev => [tweet, ...prev]),
    [setTweets]
  )

  return (
    <div>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets} />
    </div>
  )
}

function Timeline(props) {
  const tweetList = props.tweets.map(tw => (
    <Tweet
      key={tw.id}
      icon={tw.icon}
      displayName={tw.displayName}
      accountName={tw.accountName}
      content={tw.content}
    />
  ))
  return <div className="timeline">{tweetList}</div>
}

function Tweet(props) {
  const [liked, setLike] = React.useState(false)
  const toggleLike = React.useCallback(() => setLike(prev => !prev), [setLike])

  return (
    <div className="tweet">
      <div className="icon-container">{props.icon}</div>
      <div>
        <div className="status-display">
          <span className="display-name">{props.displayName}</span>
          <span className="account-name">@{props.accountName}</span>
        </div>
        <div className="content">{props.content}</div>
        <div className="status-action">
          <span onClick={toggleLike}>{liked ? '♥' : '♡'}</span>
        </div>
      </div>
    </div>
  )
}

function TweetInput(props) {
  const textareaRef = React.useRef(null)
  const sendTweet = React.useCallback(() => {
    if (textareaRef.current) {
      props.addTweet({
        id: new Date().getTime(),
        icon: '💀',
        displayName: 'ミスター死',
        accountName: 'mrdeath',
        content: textareaRef.current.value
      })
    }
  }, [textareaRef.current, props.addTweet])

  return (
    <div>
      <div>
        <textarea className="tweet-textarea" ref={textareaRef}></textarea>
      </div>
      <div>
        <button className="send-tweet" onClick={sendTweet}>
          Tweet
        </button>
      </div>
    </div>
  )
}

export default App
