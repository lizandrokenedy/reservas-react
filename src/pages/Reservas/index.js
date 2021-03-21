import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'

export default function Reservas() {

  const dispatch = useDispatch();
  const reserves = useSelector(state => state.reserve);


  function handleRemove(id) {
    dispatch({
      type: 'REMOVE_RESERVE',
      id
    })
  }

  return (
    <div>
      <h1>Você solicitou {reserves.length} reserva</h1>

      {reserves.map((reserve) => (
        <div key={reserve.id} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>
          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}


      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  )
}
