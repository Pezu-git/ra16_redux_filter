import { Button, Input, Space } from 'antd';
import 'antd/lib/button/style';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../reducers/serviceFilter';


function ServiceFilter() {
  
  const filterValue = useSelector((state) => state.serviceFilter)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { value } = e.target
    dispatch( filter(value))
  }
  
  return(
    <>
      <Space style={{ paddingBottom: 20, marginLeft: 40 }} >
        <Input
          name="filter"
          onChange={handleChange}
          value={filterValue}   
          style={{ width: 490}}
        /> 
      </Space>
    </>
  )
}

export default ServiceFilter