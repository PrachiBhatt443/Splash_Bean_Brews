import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
// // import EmptyCart from "../img/emptyCart.png";
// import CartItem from "./CartItem";
import styles from './Navbar/Navbar.module.css';

// const CartContainer = () => {
//   console.log('hello container')
//   const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
//   const [flag, setFlag] = useState(1);
//   const [tot, setTot] = useState(0);

//   const showCart = () => {
//     dispatch({
//       type: actionType.SET_CART_SHOW,
//       cartShow: !cartShow,
//     });
//   };
//   useEffect(() => {
//     let totalPrice = cartItems.reduce(function (accumulator, item) {
//       return accumulator + item.qty * item.price;
//     }, 0);
//     setTot(totalPrice);
//     console.log(tot);
//   }, [tot, flag]);

//   const clearCart = () => {
//     dispatch({
//       type: actionType.SET_CARTITEMS,
//       cartItems: [],
//     });

//     localStorage.setItem("cartItems", JSON.stringify([]));
//   };

//   return (
//     <div className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
//       <div className="w-full flex items-center justify-between p-4 cursor-pointer">
//         <div onClick={showCart}>
//           <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
//         </div>
//         <p className="text-textColor text-lg font-semibold">Cart</p>
//         <p
//           className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
//           onClick={clearCart}
//         >
//           Clear <RiRefreshFill />
//         </p>
//       </div>

//       {cartItems && cartItems.length > 0 ? (
//         <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
//           <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
//             {cartItems &&
//               cartItems.length > 0 &&
//               cartItems.map((item) => (
//                 <CartItem key={item.id} item={item} setFlag={setFlag} flag={flag} />
//               ))}
//           </div>
//           <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
//             <div className="w-full flex items-center justify-between">
//               <p className="text-gray-400 text-lg">Sub Total</p>
//               <p className="text-gray-400 text-lg">$ {tot}</p>
//             </div>
//             <div className="w-full flex items-center justify-between">
//               <p className="text-gray-400 text-lg">Delivery</p>
//               <p className="text-gray-400 text-lg">$ 2.5</p>
//             </div>
//             <div className="w-full border-b border-gray-600 my-2"></div>
//             <div className="w-full flex items-center justify-between">
//               <p className="text-gray-200 text-xl font-semibold">Total</p>
//               <p className="text-gray-200 text-xl font-semibold">${tot + 2.5}</p>
//             </div>
//             {user ? (
//               <button
//                 type="button"
//                 className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
//               >
//                 Check Out
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
//               >
//                 Login to check out
//               </button>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="w-full h-full flex flex-col items-center justify-center gap-6">
//           <p className="text-xl text-textColor font-semibold">Add some items to your cart</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartContainer;
// import React from 'react'

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  const clearCart = () => {
         dispatch({
          type: actionType.SET_CARTITEMS,
          cartItems: [],
        });
      }
  return (
    <div className={styles.cart}>
      <div className={styles.chead}>
         <div onClick={showCart}>
           <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
         </div>
         <p className="text-textColor text-lg font-semibold">Cart</p>
         <p
           className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
           onClick={clearCart}
         >
           Clear <RiRefreshFill />
         </p>
       </div>
    </div>
  )
}

export default CartContainer
