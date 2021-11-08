// import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../reducers/serviceList';
import { edit } from '../reducers/serviceAdd';
import { TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList)
  const dispatch = useDispatch()

  const filter = useSelector((state) => state.serviceFilter)

  const filteredItems = items.filter((el) =>
    el.name.toUpperCase().includes(filter.toUpperCase()) || `${el.price}`.toUpperCase().includes(filter.toUpperCase())
  )
  
  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  const handleEdit = (id, name, price) => {
    dispatch(edit({ id, name, price }))
  }

  return(
    <>
      {filteredItems.map((o) => (
        <div className='List'>
          <div className='input-holder'>
            <TextField
              className='card_item-name'
              value={o.name}
              id='name'
              label='Имя сервиса'
              variant='outlined'
              style={{ width: '50%' }}
            />
            <TextField
            className='card_item-price'
              value={o.price}
              id='price'
              label='Стоимость сервиса'
              variant='outlined'
              style={{ width: '50%' }}
            /> 
          </div>
          <div className='btn-holder'>
            <EditIcon
              style={{
                cursor: 'pointer',
                border: 'black 1px solid',
                marginLeft: '1vmin',
              }}
              onClick={() => handleEdit(o.id, o.name, o.price)}
            />
          {(o.name || o.price) && (
            <CloseIcon
              style={{
                cursor: 'pointer',
                border: 'black 1px solid',
                marginLeft: '1vmin',
              }}
              onClick={() => handleRemove(o.id)}
            />
          )}
        </div>
      </div>
      ))}
    </>
  );
}