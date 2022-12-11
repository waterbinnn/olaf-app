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
  console.log(data);
  useEffect(() => {
    if (data.multimedia) {
      setImage(data.multimedia[2].url);
    } else {
      setImage(
        'https://bodybigsize.com/wp-content/uploads/2020/03/noimage-1.png'
      );
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
