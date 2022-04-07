import Image from 'next/image';

export default function TweetHeader({ tweet }) {
  const url = `https://twitter.com/${tweet.username}`;
  const avatar = tweet.avatar.normal;

  return (
    <div className="tweet-header">
      <a href={url} className="tweet-avatar" target="_blank" rel="noopener noreferrer">
        <Image src={avatar} alt={tweet.name} width={36} height={36} />
      </a>
      <a href={url} className="author" target="_blank" rel="noopener noreferrer">
        <span className="name" title={tweet.name}>
          {tweet.name}
        </span>
        <span className="username" title={`@${tweet.username}`}>
          @{tweet.username}
        </span>
      </a>
      <a href={url} className="brand" target="_blank" rel="noopener noreferrer">
        <div className="icon twitterIcon" title="View on Twitter" role="img" />
      </a>
    </div>
  );
}
