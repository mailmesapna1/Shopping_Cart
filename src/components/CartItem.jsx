import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import {toast} from 'react-hot-toast';
import {remove} from "../redux/Slices/CartSlice";


const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();
  const removeFromcart = () =>{
    dispatch(remove(item.id));
    toast.success("Item Removed")
  }

  return(
    <div>
      <div>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div 
            onClick={removeFromcart}
            >
              <FcDeleteDatabase />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
