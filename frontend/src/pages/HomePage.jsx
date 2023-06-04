import { NavLink } from "react-router-dom"

export default function HomePage() {
  return (
    <div>
      <div className="govuk-width-container" style={{ textAlign: 'center' }}>
        <h1 className="govuk-heading-xl">Welcome</h1>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <NavLink to={'/admin'} className="govuk-button" data-module="govuk-button">
              Go to Admin Panel
            </NavLink>
          </div>
          <div className="govuk-grid-column-one-half">
            <NavLink to={'/doctor'} className="govuk-button" data-module="govuk-button">
              Go to Doctor Panel
            </NavLink>
          </div>
        </div>
        {/* <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-third">
            <div className="card">
              <h3 className="card__title">Doctors</h3>
              <p className="card__body">234</p>
            </div>
          </div>
          <div className="govuk-grid-column-one-third">
            <div className="card">
              <h3 className="card__title">Patients</h3>
              <p className="card__body">234</p>
            </div>
          </div>
          <div className="govuk-grid-column-one-third">
            <div className="card">
              <h3 className="card__title">Appointments</h3>
              <p className="card__body">234</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
