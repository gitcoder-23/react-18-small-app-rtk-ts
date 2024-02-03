import React from "react";
import { Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllUser } from "../redux/actions/userActions";
import { UserModel } from "../redux/models/userModel";

const UserList = () => {
  const dispatch = useAppDispatch();
  const { allUsers, isLoading } = useAppSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(getAllUser());
  }, []);
  return (
    <>
      {isLoading === true ? (
        <h2>Loading...</h2>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#Sl.No</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {allUsers &&
              allUsers.map((userData: UserModel, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{userData.username}</td>
                    <td>{userData.email}</td>
                    <td>{userData.phone}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserList;
