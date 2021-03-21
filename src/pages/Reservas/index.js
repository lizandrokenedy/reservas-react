import React from 'react'
import { MdAddCircle, MdDelete, MdRemoveCircle } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeReserve, updateAmountReserve } from '../../store/modules/reserve/actions';
import './style.css'

export default function Reservas() {

  const dispatch = useDispatch();
  const reserves = useSelector(state => state.reserve);


  function handleRemove(id) {
    dispatch(removeReserve(id))
  }

  function decrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount - 1));
  }

  function incrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount + 1));
  }

  return (
    <div>
      <h1>Você solicitou {reserves.length} reserva</h1>

      {reserves.map((reserve) => (
        <div key={reserve.id} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>

          <div id="amount">

            <button type="button" onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={20} color="#191919" />
            </button>

            <input type="text" readOnly value={reserve.amount} />

            <button type="button" onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={20} color="#191919" />
            </button>
          </div>

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
