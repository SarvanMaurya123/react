import React from 'react';
import { ChevronRight, Calendar } from 'lucide-react';

const ProjectCard = ({ project }) => (
    <div className={`flex border rounded-lg p-4 ${project.isActive ? 'border-blue-500' : 'border-gray-200'}`}>
        <div className="flex-1 border-r-2 mr-2 justify-between">
            <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center">
                    <span className="text-xs font-medium">{project.icon}</span>
                </div>
                <div>
                    <p className="text-xs text-gray-500">{project.id}</p>
                    <h3 className="font-semibold">{project.name}</h3>
                </div>
            </div>
            <div className='flex gap-10'>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Created {project.createdDate}</span>
                </div>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${project.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                    {project.priority === 'Medium' ? '↑' : '↓'} {project.priority}
                </div>
            </div>
        </div>
        <div className="flex-1">
            <h4 className="font-semibold mb-2">Project Data</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                    <p className="text-sm font-medium">{project.allTasks}</p>
                    <p className="text-xs text-gray-500">All tasks</p>
                </div>
                <div>
                    <p className="text-sm font-medium">{project.activeTasks}</p>
                    <p className="text-xs text-gray-500">Active tasks</p>
                </div>
                <div>
                    <div className="flex justify-center -space-x-1">
                        {project.assignees.map((assignee, index) => (
                            <img
                                key={index}
                                className="w-6 h-6 rounded-full border-2 border-white"
                                src={`/profile.png`}
                                alt={`Assignee ${index + 1}`}
                            />
                        ))}
                    </div>
                    <p className="text-xs text-gray-500">Assignees</p>
                </div>
            </div>
        </div>
    </div>
);

const ProjectsList = () => {
    const projects = [
        {
            id: 'PN0001265',
            name: 'Medical App (iOS native)',
            icon: 'MA',
            createdDate: 'Sep 12, 2020',
            priority: 'Medium',
            allTasks: 34,
            activeTasks: 13,
            assignees: ['U1', 'U2', 'U3'],
            isActive: true
        },
        {
            id: 'PN0001221',
            name: 'Food Delivery Service',
            icon: 'FD',
            createdDate: 'Sep 10, 2020',
            priority: 'Medium',
            allTasks: 50,
            activeTasks: 24,
            assignees: ['U1', 'U2', 'U3']
        },
        {
            id: 'PN0001220',
            name: 'Food Delivery Service',
            icon: 'FD',
            createdDate: 'May 28, 2020',
            priority: 'Low',
            allTasks: 23,
            activeTasks: 20,
            assignees: ['U1', 'U2', 'U3', 'NK']
        }
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Projects</h2>
                <a href="#" className="text-blue-600 flex items-center text-sm">
                    View all <ChevronRight className="w-4 h-4 ml-1" />
                </a>
            </div>
            <div className="space-y-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            {/* Naveen Kumar highlight */}
            {/* <div className="mt-4 bg-purple-100 text-purple-800 px-3 py-1 rounded-full inline-flex items-center text-sm">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Naveen kumar
            </div> */}
        </div>
    );
};

export default ProjectsList;