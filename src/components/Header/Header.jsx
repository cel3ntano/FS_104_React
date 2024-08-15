import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={s.header}>
      <h2>Auth</h2>
      <h3>{user.name}</h3>
      <ul className={s.list}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/tasks'>Tasks</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            {" "}
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={() => dispatch(logoutThunk())}>Exit</button>
          </li>
        )}
      </ul>
    </header>
  );
};
export default Header;
