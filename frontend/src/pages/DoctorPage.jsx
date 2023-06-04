import _patients from '../_data/patients.json';
import _appointments from '../_data/appointments.json';

export default function DoctorPage() {
    return (
        <div>
            <div className="govuk-grid-row">
                <div className="govuk-grid-column-one-third">
                    <div className="card">
                        <h3 className="card__title">Patients</h3>
                        <p className="card__body">{_patients.length}</p>
                    </div>
                </div>
                <div className="govuk-grid-column-one-third">
                    <div className="card">
                        <h3 className="card__title">Appointments</h3>
                        <p className="card__body">{_appointments.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}