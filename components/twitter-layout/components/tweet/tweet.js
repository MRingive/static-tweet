import TweetHeader from './tweet-header';
import TweetInfo from './tweet-info';
import TweetAction from './tweet-action';

export default function Tweet({ children, data }) {
  return (
    <div className="tweet">
      <blockquote>
        <TweetHeader tweet={data} />
        {children}
        <TweetInfo tweet={data} />
      </blockquote>
      <TweetAction tweet={data} />
    </div>
  );
}
