import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../../component/Button";
import { deleteUser } from "./UserSlice";

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const handleDeleteUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  console.log(users);

  const renderCard = () =>
    users.map((user, id) => (
      <div
        className="flex items-center justify-between p-5 bg-gray-300"
        key={id}
      >
        <div>
          <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>

        <div className="flex gap-4">
          <Link to={`edit-user/${user.id}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </Link>

          <button onClick={() => handleDeleteUser(user.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    ));

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <Link to="/add-user">
          <Button className="">Add user</Button>
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          renderCard()
        ) : (
          <div className="">
            <p>No User</p>
          </div>
        )}
      </div>
    </div>
  );
}
