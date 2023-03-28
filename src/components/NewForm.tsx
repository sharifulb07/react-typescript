import React, {useState} from 'react'


function NewForm() {
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
    <>
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
      
    </>
  )
}

export default NewForm
