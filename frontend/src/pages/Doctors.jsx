import _doctors from '../_data/doctors.json';

export default function Doctors() {
	return (
		<div>
			<table className='govuk-table'>
				<caption className='govuk-table__caption govuk-table__caption--m'>Doctors</caption>
				<thead className='govuk-table__head'>
					<tr className='govuk-table__row'>
						<th scope='col' className='govuk-table__header'>
							Sr. No.
						</th>
						<th scope='col' className='govuk-table__header'>
							Doctor Name
						</th>
						<th scope='col' className='govuk-table__header'>
							Degree
						</th>
						<th scope='col' className='govuk-table__header'>
							Appointments
						</th>
					</tr>
				</thead>
				<tbody className='govuk-table__body'>
					{_doctors.map((item, index) => (
						<tr className='govuk-table__row' key={index}>
							<td className='govuk-table__cell'>{index + 1}</td>
							<td className='govuk-table__cell'>{item.name}</td>
							<td className='govuk-table__cell'>{item.degree}</td>
							<td className='govuk-table__cell'>{item.appointments}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

