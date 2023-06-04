import _appointments from '../_data/appointments.json';

export default function Appointments() {
	return (
		<div>
			<table className='govuk-table'>
				<caption className='govuk-table__caption govuk-table__caption--m'>Appointments</caption>
				<thead className='govuk-table__head'>
					<tr className='govuk-table__row'>
						<th scope='col' className='govuk-table__header'>
							Sr. No.
						</th>
						<th scope='col' className='govuk-table__header'>
							Patient Name
						</th>
						<th scope='col' className='govuk-table__header'>
							Age
						</th>
						<th scope='col' className='govuk-table__header'>
							Status
						</th>
						<th scope='col' className='govuk-table__header'>
							Actions
						</th>
					</tr>
				</thead>
				<tbody className='govuk-table__body'>
					{_appointments.map((item, index) => (
						<tr className='govuk-table__row' key={index}>
							<td className='govuk-table__cell'>{index + 1}</td>
							<td className='govuk-table__cell'>{item.name}</td>
							<td className='govuk-table__cell'>{item.age}</td>
							<td className='govuk-table__cell'>{item.status}</td>
							<td className='govuk-table__cell'>
								<button className='govuk-button govuk-button--warning' data-module='govuk-button'>
									Cancel
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

