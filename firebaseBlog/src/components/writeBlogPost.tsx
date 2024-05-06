import { useState } from "react";

export interface Blogpost {
	username: string;
	message: string;
}

const WritePost = () => {

	const [userName,setUserName] = useState('');
	const [message,setMessage] = useState('');

	


	const handleSave = async () => {

		const blogpost : Blogpost = {
			username : userName,
			message : message,
		}

	}



	return (
		<>
		{/* input username */}
		<label>Username:</label>
		<input type="text" value= {userName} onChange={(e) =>setUserName(e.target.value)} ></input>


		{/* input blogmessage */}
		<label> Write blog post here:</label>
		<input type="text" value ={message} onChange={(e) => setMessage(e.target.value)}></input>


		{/* button for saving */}
		<button onClick={handleSave}>Save</button>

		</>
	)
}


export default WritePost;