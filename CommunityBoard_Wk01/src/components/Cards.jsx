import '../App.css';

const Cards = (props) => {

  return (
    <>
      <div className="grid-items">
        <img src={props.images}/>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{props.description}</p>
      </div>
      
    </>
  )
}

export default Cards;
