import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AdminPanel from './layouts/AdminPanel';
import AdminPage from './pages/AdminPage';
import DoctorPanel from './layouts/DoctorPanel';
import DoctorPage from './pages/DoctorPage';
import Appointments from './pages/Appointments';
import PatientsPage from './pages/PatientsPage';
import Doctors from './pages/Doctors';
import AddPatient from './pages/AddPatient';

const App = () => {
	// return routes;
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} index />
				<Route path='/admin' element={<AdminPanel />}>
					<Route element={<AdminPage />} index />
					<Route path='appointments' element={<Appointments />} />
					<Route path='doctors' element={<Doctors />} />
				</Route>
				<Route path='/doctor' element={<DoctorPanel />}>
					<Route element={<DoctorPage />} index />
					<Route path='appointments' element={<Appointments />} />
					<Route path='patients' element={<PatientsPage />} />
					<Route path='add-patient' element={<AddPatient />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;

