import { type } from "os";
import React from "react";

// type UserProps={
//     name:string;
//     age:number;
// }

// type UserProps={
//     user: {
//         name: string;
//         age: number;
//         profession: string;
//         qoute: string;
//     }
// }

type UsersProps = {
  users: {
    id:number;
    name: string;
    age: number;
    profession: string;
    qoute: string;
  }[];
};

function User({ users }: UsersProps) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.id}</h1>
            <h1>{user.age}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default User;

// function User({users}:UsersProps) {

//   return
//   (
//     <>

//     {/* <h1>{name}</h1>
//     <h1>{age}</h1>
//     <h1>{profession}</h1>
//     <h1>{qoute}</h1> */}

//      {/* <h1>{name}</h1>
//      <h3>Instructor (Non-tech-Bangla) </h3>
//      <p>{age} </p>*/}
//     </>
//   )
// }

// export default User
