import { useState } from 'react'
import './App.css'

function App() {
  //Se crea el array inicial
  const[items, setItems] = useState([
    {id:1, name: 'Tarea 1', descripcion: 'Realizar ...', fecha: '10-02-2023', status: false},
    {id:2, name: 'Tarea 2', descripcion: 'Realizar ...', fecha: '12-02-2023', status: false},
    {id:3, name: 'Tarea 3', descripcion: 'Realizar ...', fecha: '13-02-2023', status: false}
  ])
  //Element add
  const [item, setItem] = useState("")
  const [desc, setDesc] = useState("")
  const [date, setDate] = useState("")

  const addList = () => {
    var cont = items.length +1;
    setItems([
      {id: cont, name: item, descripcion: desc, fecha: date, status: false },
      ...items
    ])
  }

// lissening to events
  const changeHandler = (e) => {
    setItem(e.target.value)
  }
  const changeHandler2 = (e) => {
    setDesc(e.target.value)
  }
  const changeHandler3= (e) => {
    setDate(e.target.value)
  }
//Delete 
const DeleteItem = (index) =>{
  console.log(index);
   const filterItems= items.filter(items => items.id != index)
   setItems(filterItems)
}
//Delete All
const DeleteItemALL = () =>{
   console.log('entro')
   //const filterItems2= []
   //setItems(filterItems2)
}

//All Delete
//Simple check delete
const [isChecked, setIsChecked] = useState(false);

const handleOnChange = () => {
  setIsChecked(!isChecked);
  setItems([
    {id: 1, name: 'no data', descripcion: '', fecha: '', status: false },
  ])
  //setItems(items.length = 0)// no se como hacer la validacion debajo en el html
};



console.log(isChecked);



  return (
    <div className='row'>
       <div>
        <h2 className= 'mb-5'>Adiciona tus tareas diarias</h2>
        <div className='row '>
          <div className='col-md-3'>
            <label>Nombre de la tarea</label>
          <input className="form-control" type="text" value={item} onChange={changeHandler} />
          </div>
          <div className='col-md-3'>
          <label>Descripción</label>
          <input className="form-control" type="text" value={desc} onChange={changeHandler2} />
          </div>
          <div className='col-md-3'>
          <label>Fecha</label>
          <input className="form-control" type="text" value={date} onChange={changeHandler3} />
          </div>
          <div className='col-md-3 pt-4'>
          <button className='btn btn-primary' onClick={addList}>Add</button>
          </div>
          <div className='col-md-12'>
          
          <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                checked={isChecked}
                onChange={handleOnChange}
              />
              <label className='m-3'>Eliminar todas las tareas.</label>
          </div>
        </div>
       </div>
       <br/><br/>

       <table className='table table-bordered table-striped mt-5'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Eliminar realizadas</th>
            </tr>
          </thead>
          <tbody>
            
          {
              
              items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.fecha}</td>
                  <td>
                  <button className="btn btn-secondary" onClick={() => DeleteItem(item.id)}>
                     Eliminar
                  </button>
                  </td>
                </tr>  
                    )
                    
                    )
              }
            
          </tbody>
        </table>
        <p>
         Se han eliminado todas las tareas. {isChecked ? "true" : "false"}
      </p>
    </div>
  )
}

export default App
