import React, {useState} from "react";

function form() {
    const [userName, setUsername] = useState ("")
    const [userDetails, setUserDetails]= useState ("")


    const handleChange = (e) => {
        setUsername (e.target.value)
    }
 const handleUserDetailsChange =(e) => {
    setUserDetails(e.target.value)
 }
 
 return(
    <div>
        <form>
            <input type="text" name="username" id="formes" value={userName} onChange={handleChange} />
            <p>Username is : {userName}</p>
            <textarea name ="user-details" id ="forms"cols="30" rows="10" value={userDetails} onChange= {handleUserDetailsChange} />
            <p> User details are: {userDetails}</p>
        </form>
    </div>
 )
}
 export default form;