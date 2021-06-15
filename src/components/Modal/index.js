import React from 'react';
import './style.css';
import programDict from '../Data/programs.json';
import { getHighestGrad, getLocale, getCCSizSet } from '../../lib/Dictionaries';

function Modal(props) {
	if (!props.show) {
		return null;
	}

	const cleanData = () => {
		const collegeData = {
			HIGHDEG: 'N/A',
			LOCALE: 'N/A',
			CCSIZSET: 'N/A',
			ADM_RATE: 'N/A',
			SAT_AVG: 'N/A',
			PROGRAMS: [],
		};
		if (props.HIGHDEG !== 'NULL') {
			collegeData.HIGHDEG = getHighestGrad(props.HIGHDEG);
		}
		if (props.LOCALE !== 'NULL') {
			collegeData.LOCALE = getLocale(props.LOCALE);
		}
		if (props.CCSIZSET !== 'NULL') {
			collegeData.CCSIZSET = getCCSizSet(props.CCSIZSET);
		}
		if (props.ADM_RATE !== 'NULL') {
			collegeData.ADM_RATE =
				(parseFloat(props.ADM_RATE) * 100).toFixed(2) + '%';
		}
		if (props.SAT_AVG !== 'NULL') {
			collegeData.SAT_AVG = props.SAT_AVG;
		}
		props.PROGRAMS.forEach((program) => {
			collegeData.PROGRAMS.push(programDict[program]);
		});
		return collegeData;
	};

	const cData = cleanData();
	const listPrograms = cData.PROGRAMS.map((p) => {
		return <li>{p}</li>;
	});

	return (
		<div className="modal" onClick={props.onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<h4 className="modal-title">{props.INSTNM}</h4>
				</div>
				<div className="modal-body">
					<p>Highest degree awarded: {Object.values(cData.HIGHDEG)}</p>
					<p>Locale: {Object.values(cData.LOCALE)}</p>
					<p>
						Carnegie Classification (Size and Setting):{' '}
						{Object.values(cData.CCSIZSET)}
					</p>
					<p>Admission Rate: {Object.values(cData.ADM_RATE)}</p>
					<p>SAT Average: {Object.values(cData.SAT_AVG)}</p>
					<p>Programs Offered:</p>
					<ul>{listPrograms}</ul>
				</div>
				<div className="modal-footer">
					<button onClick={props.onClose} className="button">
						OK
					</button>
				</div>
			</div>
		</div>
	);
}
export default Modal;
