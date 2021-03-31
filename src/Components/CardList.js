import React from 'react';
import Card from './Card';

const CardList = ({Robots}) => {
		const CardComponent = Robots.map((user,i)=>{
			return <Card key={i} id={user.id} name={user.name} age={user.age} email={user.email}/>
		})
	return(
		<div>
			{CardComponent}
		</div>
	)
}

export default CardList; 