import api from '../../../services/api';
import { addReserveSuccess } from './actions';
import { call, put, all, takeLatest } from 'redux-saga/effects';

function* addToReserve({ id }) {
  const response = yield call(api.get, `trips/${id}`);

  yield put(addReserveSuccess(response.data))
}

export default all([
  takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])