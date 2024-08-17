import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Tasks from "../pages/Tasks/Tasks";
import NotFound from "../pages/NotFound/NotFound";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMeThunk } from "../redux/auth/operations";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { useSelector } from "react-redux";
import Loader from "./TodoList/Loader";

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='tasks'
            element={
              <PrivateRoute>
                <Tasks />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
