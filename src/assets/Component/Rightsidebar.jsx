import React from 'react';
import { ChevronRight, Clock, Cloud, Paperclip } from 'lucide-react';

const NearestEvents = ({ events }) => (
    <div className='border-[1px] p-4 rounded-2xl mb-7 bg-white'>
        <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Nearest Events</h2>
                <a href="#" className="text-blue-600 text-sm flex items-center">
                    View all <ChevronRight className="w-4 h-4 ml-1" />
                </a>
            </div>
            <div className="space-y-4">
                {events.map((event, index) => (
                    <div key={index} className="flex items-start">
                        <div className={`w-1 h-full ${event.color} mr-3 rounded-full flex-shrink-0`}></div>
                        <div className="flex-grow">
                            <p className="font-medium">{event.title}</p>
                            <p className="text-sm text-gray-500">{event.time}</p>
                        </div>
                        <div className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-1 flex items-center gap-1">< Clock size={`20px`} />4h</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ActivityStream = ({ activities }) => (
    <div className='border-[1px] p-4 rounded-2xl bg-white'>
        <h2 className="text-lg font-semibold mb-4 ">Activity Stream</h2>
        <div className="space-y-4">
            {activities.map((activity, index) => (
                <div key={index} className="flex items-start">
                    <img src="./profile.png" alt={activity.name} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <p className="font-medium">{activity.name}</p>
                        <p className="text-sm text-gray-500 mb-7">{activity.role}</p>

                        <div className="flex items-center mt-1 text-sm text-gray-700 bg-customblue p-4 rounded-3xl">
                            <Cloud className="w-4 h-4 mr-2 text-blue-500 " size={`12px`} />
                            {activity.action}
                        </div>
                        {index === 0 && (
                            <div className="flex items-center mt-1 text-sm text-gray-700 mt-4 mb-4 bg-customblue p-4 rounded-3xl">
                                <Paperclip className="w-4 h-4 mr-2 text-purple-500" />
                                Attached files to the task
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
        <a href="#" className="text-blue-600 text-sm flex items-center mt-4">
            View more <ChevronRight className="w-4 h-4 ml-1" />
        </a>
    </div>
);

const RightSidebar = () => {
    const events = [
        { title: 'Presentation of the new department', time: 'Today | 3:00 PM', color: 'bg-yellow-400' },
        { title: "Anna's Birthday", time: 'Today | 6:00 PM', color: 'bg-green-400' },
        { title: "Ray's Birthday", time: 'Tomorrow | 2:00 PM', color: 'bg-green-400' },
    ];


    const activities = [
        { name: 'Oscar Holloway', role: 'UI/UX Designer', action: 'Updated the status of Mind Map task to In Progress' },
        { name: 'Emily Tyler', role: 'Copywriter', action: 'Updated the status of Mind Map task to In Progress' },
    ];

    return (
        <div className="w-76 bg-customblue p-6 h-screen overflow-y-auto mb-3">
            <NearestEvents events={events} />
            <ActivityStream activities={activities} />
        </div>
    );
};

export default RightSidebar;
