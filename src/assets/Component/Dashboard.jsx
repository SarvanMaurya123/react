import React from 'react';
import { Bell, ChevronDown, Search, ChevronRight } from 'lucide-react';
import Sidebar from './Sidebar';
import DateRangePicker from './Cal';
import RightSidebar from './Rightsidebar';
import ProjectsList from './ProjectsList';

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-customblue">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-white p-6 hidden md:block">
                <div className="flex items-center">
                    <img src='./Companyslogo.png' alt='img' className='mt-5 mb-5' />
                </div>
                <Sidebar />
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto h-full p-4 md:p-6">
                {/* Top bar */}
                <header className="bg-white shadow-sm p-4 flex justify-between items-center mb-4">
                    <div className="flex items-center w-full max-w-xl">
                        <Search className="w-5 h-5 text-gray-400 mr-2" />
                        <input type="text" placeholder="Search" className="w-full bg-transparent outline-none" />
                    </div>
                    <div className="flex items-center">
                        <Bell className="w-5 h-5 text-gray-600 mr-4" />
                        <img src="./profile.png" alt="User" className="w-8 h-8 rounded-full mr-2" />
                        <span className="mr-1">Evan Yates</span>
                        <ChevronDown className="w-4 h-4 text-gray-600" />
                    </div>
                </header>

                {/* Dashboard content */}
                <div className="space-y-6">
                    <p className='text-sm'>Welcome back, Evan!</p>
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-bold mt-3 mb-3">Dashboard</h1>
                        <div className="text-sm text-gray-600"><DateRangePicker /></div>
                    </div>

                    {/* Workload section */}
                    <div className="bg-white rounded-lg shadow mb-6">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-lg font-semibold">Workload</h2>
                            <a href="#" className="text-blue-600 text-sm flex items-center">
                                View all <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { name: 'Steven Stone', role: 'UX/UI Designer' },
                                { name: 'Randy Delgado', role: 'UX/UI Designer' },
                                { name: 'Emily Tyler', role: 'Copywriter' },
                                { name: 'Louis Castro', role: 'Copywriter' },
                                { name: 'Randy Delgado', role: 'UX/UI Designer' },
                                { name: 'Emily Tyler', role: 'Copywriter' },
                                { name: 'Steven Stone', role: 'UX/UI Designer' },
                                { name: 'Emily Tyler', role: 'Copywriter' },
                                // Add more employees as needed
                            ].map((employee) => (
                                <div key={employee.name} className="text-center border pb-7 pt-7 bg-customblue rounded-2xl">
                                    <img src="./profile.png" alt={employee.name} className="w-16 h-16 rounded-full mx-auto mb-2 border-[2px] border-blue-400" />
                                    <div className="font-medium">{employee.name}</div>
                                    <div className="text-sm text-gray-600">{employee.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects section */}
                    <div className="bg-white rounded-lg shadow">

                        <ProjectsList />
                    </div>
                </div>
            </main>

            {/* Right sidebar */}
            <aside className="w-[400px] bg-customblue p-6 hidden lg:block">
                <RightSidebar />
            </aside>
        </div>
    );
};

export default Dashboard;
