import React, { useState } from 'react';
import './style.css';
import Modal from '../Modal';

function Card(props) {
	const [show, setShow] = useState(false);
  const {CITY, STABBR, ZIP, INSTNM, INSTURL} = props;
	return (
		<div className="card">
			<div className="container">
				<div className="card-header">
					<h4>
						<b>{INSTNM}</b>
					</h4>
				</div>
				<div className="card-body">
					<p>
						{CITY}, {STABBR} {ZIP}
					</p>
					<p>{INSTURL}</p>
					<button onClick={() => setShow(true)}>View More Details</button>
					<Modal onClose={() => setShow(false)} show={show} {...props} />
				</div>
			</div>
		</div>
	);
}
export default Card;
