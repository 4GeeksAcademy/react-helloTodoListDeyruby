import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask] = useState([])


	const enterPressed = (event) => {
		if (event.keyCode === 13) {
			handleChange(event)

		}
	}
	const handleChange = (event) => {
		setTask([...task, event.target.value])
		console.log(event.target.value)
		event.target.value = ""
	}


	return (
		<>
			<div className="todolist">
				<div className="header">
					<p>to-do-list</p>
				</div>
				<div className="container">
					<ul>
						<li className="input1"><input type="text" name="tareas" placeholder="Add a new task" onKeyDown={(e) => enterPressed(e)} /></li>

						{
							task.map((value, index) => { 
							console.log("index", index)
							return <li className="list" key={index}>{value} 
							<i onClick={() => setTask(task.filter((_, currentIndex) => { 
								console.log("currentIndex", currentIndex) 
								return currentIndex != index}))} className="fa-solid fa-trash"></i> 
							</li>})

						}
					</ul>

				</div>
			</div>

		</>
	);
};

export default Home;
