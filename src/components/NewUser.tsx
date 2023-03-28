import React, {useState} from 'react'

function NewUser() {
const [userName, setUserName] = useState('');
const [isUser, setIsUser] = useState(false);

const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setUserName(event.target.value);
}

const handleShowUser=()=>{
    setIsUser(!isUser);
}
  return (
    <div>
      <h1>Create New User </h1>
      <input type='text' placeholder='Enter your name ' value={userName} onChange={handleChange} />
   <div>

<button onClick={handleShowUser}>Click me </button>
    {isUser? <div>{userName}  </div>  : ''}

   </div>
    
    
    </div>
  )
}

export default NewUser
