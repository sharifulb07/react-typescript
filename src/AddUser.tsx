import React, { useState } from "react";

type AddUserProps = {
  id: number;
  name: string;
};

function AddUser() {
  const [user, setUser] = useState< AddUserProps>({} as AddUserProps);
  const handleAddUser = () => {
    setUser({ id: 1, name: "shariful islam " });
  };
  return (
    <>
      <button onClick={handleAddUser}>AddUser</button>

      <div>{user?.name}</div>
    </>
  );
}

export default AddUser;
