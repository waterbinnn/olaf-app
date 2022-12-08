import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteWish } from '../../redux/wishSlice';

type WishItemType = {
  data: any;
};

const WishItem = (props: WishItemType) => {
  const { data } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWish(data.id));
  };

  return (
    <div className="item" key={data.id}>
      <p>{data.wish}</p>
      <button className="item-btn" type="button" onClick={handleDelete}>
        ✕
      </button>
    </div>
  );
};

export default WishItem;
