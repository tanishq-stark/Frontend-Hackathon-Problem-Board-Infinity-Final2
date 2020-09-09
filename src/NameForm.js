import React, { useState } from "react";
import Compare from './Compare';

const NameForm =(props) => {
	const [name, setName] = useState("");
	const [items, setItems] = useState([])
  
	const handleSubmit = (evt) => {
		evt.preventDefault();
		alert(`Submitting Name ${name}`)

		setItems([
			...items,
			{
				id: items.length,
				value: `${name}`
			}
		])
	}


	
	return (<div>

	  <form onSubmit={handleSubmit}>
		<label>
		  GitHub Username:
		  <input
			type="text"
			value={name}
			onChange={e => setName(e.target.value)}
		  />
		</label>
		<input type="submit" value="Submit" />
	  </form>

	  <ul>
				{items.map(item => (
					
						<Compare username={item.value}/>
						
				))}
			</ul>
			
	  </div>
	);
  
}

export default NameForm;