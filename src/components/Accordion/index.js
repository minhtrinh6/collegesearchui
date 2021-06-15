import React, { useState } from 'react';
import FilterMenu from '../FilterMenu';
import './style.css';

function Accordion(props) {
	const { title, content, filter } = props;
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="accordion">
				<div className="accordion-item">
					<div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
						<div>{title}</div>
						<div>{isOpen ? '-' : '+'}</div>
					</div>
					<div
						className="accordion-content"
						style={{ display: isOpen ? 'block' : 'none' }}
					>
						<FilterMenu content={content} filter={filter} {...props} />
					</div>
				</div>
			</div>
		</>
	);
}
export default Accordion;
