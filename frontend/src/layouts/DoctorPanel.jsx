import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import doctorRoutes from '../_data/doctorRoutes.json';

export default function DoctorPanel() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <Container>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} title={"Doctor Panel"} data={doctorRoutes} />
            <div className='content'>
                <Header sideBar={() => setIsSidebarOpen(prev => !prev)} />
                <div className="main-wrapper govuk-width-container">
                    <Outlet />
                </div>
            </div>
        </Container>
    );
}