import './card.css';

const Card = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">{props.title}</p>
          <p>{props.desc}</p>
        </div>
        <div className="flip-card-back">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
