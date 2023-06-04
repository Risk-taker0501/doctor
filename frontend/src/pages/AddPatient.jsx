export default function AddPatient() {
	return (
		<div>
			<fieldset className='govuk-fieldset'>
				<legend className='govuk-fieldset__legend govuk-fieldset__legend--l'>
					<h1 className='govuk-fieldset__heading'>Add New Patient</h1>
				</legend>
				<div className='govuk-form-group'>
					<label className='govuk-label' htmlFor='patient-name'>
						Patient Name
					</label>
					<input className='govuk-input' id='patient-name' name='patient-name' type='text' />
				</div>
				<div className='govuk-form-group'>
					<label className='govuk-label' htmlFor='age'>
						Patient Age
					</label>
					<input className='govuk-input' id='age' name='age' type='number' />
				</div>
				<div className='govuk-form-group'>
					<label className='govuk-label' htmlFor='Diseas'>
						Diseas
					</label>
					<input className='govuk-input' id='Diseas' name='Diseas' type='text' />
				</div>
			</fieldset>
		</div>
	);
}

