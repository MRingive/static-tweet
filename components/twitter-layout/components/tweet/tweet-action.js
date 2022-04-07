import formatNumber from '../../../../lib/format-number';

export default function TweetAction({ tweet }) {
  const userUrl = `https://twitter.com/${tweet.username}`;
  const tweetUrl = `${userUrl}/status/${tweet.id}`;
  const count = tweet.replies + tweet.retweets;
  const isConversation = tweet.ctaType === 'conversation' || count > 4;

  return (
    <>
      {isConversation ? (
        <div className='tweet-action'>
        <a
          href={tweetUrl}
          title="View the conversation on Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon icon-reply" />
          <span className="text">
            {count ? formatNumber(count) : tweet.ctaCount} people are talking about this
          </span>
          <div className="icon icon-chevron" />
        </a>
        </div>
      ) : (
        <div className='tweet-action'>
        <a
          href={userUrl}
          title={`View ${tweet.name}'s profile on Twitter`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon icon-profile" />
          <span className="text">See {tweet.name}'s other Tweets</span>
          <div className="icon icon-chevron" />
        </a>
        </div>
      )}
    </>
  );
}
