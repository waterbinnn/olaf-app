import './NewsItem.scss';

type NewsItemProps = {
  data: any;
};

const NewsItem = (props: NewsItemProps) => {
  const { data } = props;

  const handleClick = () => {
    window.open(data.url, '_blank');
  };

  return (
    <>
      <li className="news-item" key={data.id} onClick={handleClick}>
        <img
          className="news-image"
          src={data.multimedia[2].url}
          alt={data.multimedia[2].caption}
        />
        <div className="news-text-wrapper">
          <strong className="news-title">{data.title}</strong>
          <p className="news-desc">{data.abstract}</p>
          <span className="news-date">{data.published_date}</span>
        </div>
      </li>
    </>
  );
};

export default NewsItem;
