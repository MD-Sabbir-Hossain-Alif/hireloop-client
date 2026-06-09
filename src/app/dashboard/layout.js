import DashboardSideBar from '@/components/Dashboard/DashboardSideBar';
import Navbar from '@/components/Header/Navbar';

const layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="flex min-h-screen">
                <DashboardSideBar />
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
};

export default layout;