const Card = ({ username, gender, email, location, image }) => {
  return (
    <div className="card">
      <div className="card-img-div">
        <img src={image} alt="" />
      </div>
      <div className="user-info-div">
        <h1>{username}</h1>
        <p>{gender}</p>
        <p>{email}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
