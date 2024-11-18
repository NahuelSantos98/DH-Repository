function Card({user}) {
    return (
      <div>
        <p>{user.nombre}</p>
        <p>{user.apellido}</p>
        <p>{user.edad}</p>
        <p>{user.deporte}</p>
      </div>
    );
  }
  
  export default Card;
  