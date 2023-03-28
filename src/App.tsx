import React, {useState} from "react";


function App() {
const [name, setName] = useState('');
const [email , setEmail] = useState('');
const handleChangeName=(event:React.ChangeEvent<HTMLInputElement>)=>{
  setName(event.target.value);
}
const handleChangeEmail=(event:React.ChangeEvent<HTMLInputElement>)=>{
  setEmail(event.target.value);
}
const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  const newUser={
    name,
    email,
  }

  console.log(newUser);
  setName('');
  setEmail('');

}

  return (
    <div>
      <h2>Create New User </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type='text' value={name} onChange={handleChangeName} required placeholder="Enter Your Name" />
          
        </div>
        <div>
          <label htmlFor="email">Name: </label>
          <input id="email" type='text' value={email} onChange={handleChangeEmail} required placeholder="Enter Your Email" />

        </div>
        <button type="submit" >Submit</button>
      </form>

    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import User from './User';

// import Button from './Button';

// const user=(
//   <div>
//  <h1>Shariful islam </h1>
//   <h1>Asiha khatun </h1>
//   <p>Adiyat islam  islam </p>

//   </div>

// )

// const user={
//   name:"Shariful Islam",
//   age:34,
//   profession:'Instructor (Non-tech-Bangla',
//   qoute:"Love your path always",
// }

// const users=[
//   {
//     id:1,
//     name:"Shariful Islam",
//     age:34,
//     profession:'Instructor (Non-tech-Bangla',
//     qoute:"Love your path always",
//   },
//   {
//     id:2,
//     name:"Adiyat Islam",
//     age:34,
//     profession:'Student',
//     qoute:"Love your parents",
//   },
//   {
//     id:3,
//     name:"Ashia Islam",
//     age:30,
//     profession:'Asistant teacher',
//     qoute:"Love your husband",
//   }

// ]

// import DataFetch from './DataFetch';
// function App() {
//   return (
//     <div className="App">
//       <h1>User Management </h1>

//     <DataFetch status="success" />

//     </div>
//   );
// }

// export default App;
