import { useEffect, useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import { fetchUsers } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useLocation, useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const filterValue = searchParams.get("query") ?? "";

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  const handleChangeFilter = newFilterValue => {
    if (!newFilterValue) {
      return setSearchParams({});
    }
    searchParams.set("query", newFilterValue);
    setSearchParams(searchParams);
  };

  const filteredData = users.filter(
    user =>
      user.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
      user.lastName.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <SearchBar
        handleChangeFilter={handleChangeFilter}
        filterValue={filterValue}
      />
      <UsersList users={filteredData} />
    </>
  );
};
export default Users;
// http://localhost:5173/users
// http://localhost:5173/users/
