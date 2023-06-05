import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import adminRoutes from '../_data/adminRoutes.json';

export default function AdminPanel() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <Container>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} title={"Admin Panel"} data={adminRoutes} />
            <div className='content'>
                <Header sideBar={() => setIsSidebarOpen(prev => !prev)} />
                <div className="main-wrapper govuk-width-container">
                    <Outlet />
                    <Text>Doctors</Text>
                </div>
            </div>
        </Container>
    );
}