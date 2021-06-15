import React, { useState } from 'react';
import './style.css';
import Modal from '../Modal';

function Card(props) {
	const [show, setShow] = useState(false);
	return (
		<div className="card">
			<div className="container">
				<div className="card-header">
					<h4>
						<b>{props.INSTNM}</b>
					</h4>
				</div>
				<div className="card-body">
					<p>
						{props.CITY}, {props.STABBR} {props.ZIP}
					</p>
					<p>{props.INSTURL}</p>
					<button onClick={() => setShow(true)}>View More Details</button>
					<Modal onClose={() => setShow(false)} show={show} {...props} />
				</div>
			</div>
		</div>
	);
}
export default Card;
