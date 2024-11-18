import React, {useState} from "react";
import Card from "./Card";


function App() {

const [user, setUser] = useState({
  nombre: '',
  apellido: '',
  edad: '',
  deporte: ''
})
const [error, setError] = useState(false)
const [enviado, setEnviado] = useState(false)


const handleNombre = e => setUser({...user, nombre : e.target.value})
const handleApellido = e => setUser({...user, apellido : e.target.value})
const handleEdad = e => setUser({...user, edad: e.target.value})
const handleDeporte = e =>setUser({...user, deporte: e.target.value})

const validacionTextInput3 = (input) =>{

  const inputWithoutSpaces = input.trim()
        
        if(inputWithoutSpaces.length > 3){ 
            return true
        }else {
            return false
        }

}
const validacionTextInput6 = (input) =>{

  const inputWithoutSpaces = input.trim()
        
        if(inputWithoutSpaces.length > 6){ 
            return true
        }else {
            return false
        }

}
const validacionEdadInput = (input)=>{
  if(input >= 7){
      return true
  }else{
      return false
  }
}

const handleSubmit = e =>{
  e.preventDefault()

  const nameValidacion = validacionTextInput3(user.nombre)
  const apellidoValidacion = validacionTextInput3(user.apellido)
  const ageValidacion = validacionEdadInput(user.edad)
  const deporteValidacion = validacionTextInput6(user.deporte)

  if (!nameValidacion || !apellidoValidacion || !ageValidacion || !deporteValidacion) {
    setError(true)
    setEnviado(false)
  }else{
    setError(false)
    setEnviado(true)
  }

}


  const styleForm = {display:'flex', flexDirection:'column', alignItems: 'center', gap: '1rem'}

  return (
    <div className="App">
      <h1>Inscripcion:</h1>
      <form style={styleForm} onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" placeholder="Nombre"  onChange={handleNombre} required/>

        <label>Apellido</label>
        <input type="text" placeholder="Apellido" onChange={handleApellido} required/>

        <label>Edad:</label>
        <input type="number" placeholder="Edad" onChange={handleEdad} required/>

        <label>Deporte:</label>
        <input type="text" placeholder="Deporte" onChange={handleDeporte} required/>
        <button type="submit">Submit</button>
      </form>
    
    {error && "Por favor chequea que la información sea correcta"}
    {enviado ? <Card user={user} /> : null }
    </div>
  );
}

export default App;