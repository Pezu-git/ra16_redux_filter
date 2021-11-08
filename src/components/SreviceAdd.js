import { Button, Input, Space } from 'antd';
import 'antd/lib/button/style';
import { useDispatch, useSelector } from 'react-redux';
import { add, update } from '../reducers/serviceList';
import { changeServiceField, clearServiceFields } from '../reducers/serviceAdd';

function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(changeServiceField( { name, value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.id) {
      dispatch(update({...item}))
    } else {
      dispatch(add({ name: item.name, price: item.price }))
    }
    dispatch(clearServiceFields())
  }

  const handleCancel = (e) => {
    dispatch(clearServiceFields())
  }

  return(
    <div >
    
    <form onSubmit={handleSubmit} >
      <Space style={{ paddingBottom: 20, marginLeft: 40, marginTop: 50 }}>
        <Input
          name="name"
          onChange={handleChange}
          value={item.name}
          style={{ width: 205}}
        />
        <Input
          name="price"
          onChange={handleChange}
          value={item.price}   
          style={{ width: 205}}
        />              
        <Button onClick={handleSubmit} type="primary">Save</Button>
        {item.id ? <Button onClick={handleCancel} type="primary">Cancel</Button> : null}
      </Space>
    </form>
    </div>
  )
}

export default ServiceAdd