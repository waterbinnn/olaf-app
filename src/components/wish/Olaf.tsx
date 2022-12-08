import './Olaf.css';
import { Link } from 'react-router-dom';

export default function Olaf() {
  return (
    <>
      <div className="olaf-wrapper">
        <div className="olaf">
          <div className="face">
            <div className="mainHead"></div>
            <div className="forhead"></div>
          </div>
          <div className="hair first"></div>
          <div className="hair middle"></div>
          <div className="hair last"></div>
          <div className="all">
            <div className="tooth"></div>
            <div className="mouth"></div>
            <div className="mouthHider"></div>

            {/* <!-- eyebrow  --> */}
            <div className="eyebrow left"></div>
            <div className="eyebrow right"></div>
            <div className="eyebrowHider"></div>

            <div className="blush left"></div>
            <div className="blush right"></div>

            {/* <!-- eye  --> */}
            <div className="eyehole left"></div>
            <div className="eyehole right"></div>

            <div className="eyeOutline left"></div>
            <div className="eyeOutline right"></div>

            <div className="eyeInline left"></div>

            <div className="eyeInline right"></div>
            <Link to="/wish">
              <div className="eye left"></div>
            </Link>

            <Link to="/wish">
              <div className="eye right"></div>
            </Link>

            <div className="nosewrapper">
              <div className="carrot first"></div>
              <div className="carrot sec"></div>
              <div className="carrot third"></div>
              <div className="nose"></div>
              <div className="carrotline first"></div>
              <div className="carrotline sec"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
