import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeName,addAge } from '../store/userSlice';
import { addCount } from '../store';


function Cart() {

    let state = useSelector((state)=>{return state});
    let dispatch = useDispatch()

    return (
      <div>
        <h4>{state.user.name}{state.user.age}의 장바구니</h4>
        <button onClick={()=>{
            dispatch(addAge(1))
        }}>+</button>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.cart.map((a,i)=>
                       <tr key={i}>
                         <td> {i} </td>
                         <td> {state.cart[i].name} </td>
                         <td> {state.cart[i].count} </td>
                         <td> <button className='border border-black w-5' onClick={()=>{
                            dispatch(addCount(state.cart[i].id))
                         }}>+</button> </td>
                       </tr>
                    )
                }
            </tbody>
        </Table>
      </div>
    )
}

export default Cart;