import React from 'react';
import {
    LayoutDashboard,
    FolderKanban,
    Calendar,
    Palmtree,
    Users,
    MessageSquare,
    HelpCircle,
    LogOut
} from 'lucide-react';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', isActive: true },
    { icon: FolderKanban, label: 'Projects' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Palmtree, label: 'Vacations' },
    { icon: Users, label: 'Employees' },
    { icon: MessageSquare, label: 'Messenger' },
    { icon: HelpCircle, label: 'Info Portal' },
];

const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen w-[230] bg-white border-r">
            <div className="p-4">
                <h1 className="text-xl font-semibold mb-6">Dashboard</h1>
                <nav className="space-y-1">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${item.isActive
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            {React.createElement(item.icon, { className: "mr-3 h-5 w-5" })}
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="mt-auto p-4">
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="relative w-32 h-32 mx-auto mb-2">
                        <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                        <div className="absolute inset-4 bg-blue-200 rounded-full"></div>
                        <img
                            src="./illustration.png"
                            alt="Support"
                            className="absolute inset-0 m-auto w-20 h-20"
                        />
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200">
                        Support
                    </button>
                </div>
                <button className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md w-full">
                    <LogOut className="mr-3 h-5 w-5" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;