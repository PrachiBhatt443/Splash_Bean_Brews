import React from 'react';
import styles from './Navbar.module.css';
import { Routes, Route, Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import { app } from '../../firebase.config';
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { useState ,useEffect} from 'react';
import CartContainer from '../CartContainer';

function Navbar() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{user,cartShow},dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } 
    else {
      // setIsMenu(!isMenu);
      localStorage.clear();

      dispatch({
        type: actionType.SET_USER,
        user: null,
      });
    }
  };
  
  // const [cart, setCart] = useState(false);
  // const [{ user, cartShow }, dispatch] = useStateValue();
  const toggleCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
// ect(() => {
//     console.log('After state update: cart:', cart);
//   }, [cart]); // useEffect will run whenever the value of cart changes
  
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>BREWS</div>
        <ul>
          <Link to={'/'} className={styles.nav_items}>HOME</Link>
          <Link to="/menu" className={styles.nav_items}>MENU</Link>
          <Link to="/about" className={styles.nav_items}>ABOUT US</Link>
          <Link to="/facilities" className={styles.nav_items}>FACILITIES</Link>

        </ul>
        
        
        <Routes >
          
          {/* <Route path="/" element={< />}></Route> */}
          {/* <Route path="/menu" element={<Page1 />}></Route> */}
          {/* <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/facilities" element={<Facilities />}></Route>*/}
        </Routes>
        
        <div className={styles.basket}>
          {user && ( 
              <MdShoppingBasket style={{ fontSize: '32px' }} onClick={toggleCart} />
          )}
          {cartShow && (
           <CartContainer/>)}
          <button className={styles.red} onClick={login}>
            {user ? <Link className={styles.nav_items}>Log Out</Link> : 'Sign In'}
          </button>
        </div>


    </div>
  );
}

export default Navbar;
