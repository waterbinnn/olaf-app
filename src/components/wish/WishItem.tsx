import { useDispatch } from 'react-redux';
import { deleteWish } from '../../redux/wishSlice';
import { WishItemType } from '../../common/types';

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
