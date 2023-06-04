import _patients from '../_data/patients.json';

export default function PatientsPage() {
    return (
        <div>
            <table className='govuk-table'>
                <caption className="govuk-table__caption govuk-table__caption--m">Patients</caption>
                <thead className="govuk-table__head">
                    <tr className="govuk-table__row">
                        <th scope="col" className="govuk-table__header">Sr. No.</th>
                        <th scope="col" className="govuk-table__header">Patient Name</th>
                        <th scope="col" className="govuk-table__header">Age</th>
                        <th scope="col" className="govuk-table__header">Visits</th>
                        <th scope="col" className="govuk-table__header">Progress</th>
                    </tr>
                </thead>
                <tbody className="govuk-table__body">
                    {_patients.map((item, index) => (
                        <tr className="govuk-table__row" key={index}>
                            <td className="govuk-table__cell">{index + 1}</td>
                            <td className="govuk-table__cell">{item.name}</td>
                            <td className="govuk-table__cell">{item.age}</td>
                            <td className="govuk-table__cell">{item.visits}</td>
                            <td className="govuk-table__cell">{item.progress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}