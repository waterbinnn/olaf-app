import { useEffect, useState } from 'react';
import './NewsItem.scss';

type NewsItemProps = {
  data: any;
};

const NewsItem = (props: NewsItemProps) => {
  const { data } = props;
  const [image, setImage] = useState('');

  const handleClick = () => {
    window.open(data.url, '_blank');
  };

  useEffect(() => {
    if (data.multimedia) {
      setImage(data.multimedia[2].url);
    } else {
      setImage(data.thumbnail_standard);
    }
  }, [data.multimedia, data.thumbnail_standard]);

  return (
    <>
      <li className="news-item" key={data.id} onClick={handleClick}>
        <img className="news-image" src={image} />
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
