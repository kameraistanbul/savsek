
import React from 'react';
import type { LeaveEntry, PublicHoliday } from '../types';

interface CalendarDayProps {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    leaves: LeaveEntry[];
    holiday?: PublicHoliday;
}

const nameColors: { [key: string]: string } = {
    'MUHİTTİN': 'bg-red-500',
    'RUŞEN': 'bg-blue-500',
    'NUR': 'bg-green-500',
    'MELİH': 'bg-yellow-500',
    'HALİT': 'bg-indigo-500',
    'DURSUN': 'bg-purple-500',
    'BURAK': 'bg-pink-500',
    'ALİ': 'bg-teal-500',
    'YUNUS': 'bg-orange-500',
};

const CalendarDay: React.FC<CalendarDayProps> = ({ date, isCurrentMonth, isToday, leaves, holiday }) => {
    const dayOfMonth = date.getDate();
    const hasLeaves = leaves.length > 0;

    const dayClasses = [
        'relative p-2 h-32 flex flex-col bg-white overflow-hidden',
        isCurrentMonth ? 'text-gray-800' : 'text-gray-400 bg-gray-50',
        isToday ? 'bg-blue-50 border-2 border-blue-400' : '',
        holiday ? 'bg-red-50' : '',
        hasLeaves && !holiday ? 'bg-blue-50' : '',
    ].join(' ');

    const dateNumberClasses = [
        'text-sm font-semibold',
        isToday ? 'w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white' : '',
        holiday ? 'text-red-600' : ''
    ].join(' ');

    return (
        <div className={dayClasses}>
            <div className="flex justify-between items-center">
                <time dateTime={date.toISOString()} className={dateNumberClasses}>
                    {dayOfMonth}
                </time>
                {holiday && (
                   <div className="hidden sm:block text-xs font-bold text-red-700 truncate" title={holiday.name}>
                        {holiday.name}
                    </div>
                )}
            </div>
            
            <div className="mt-1 flex-grow overflow-y-auto text-xs space-y-1 pr-1">
                {leaves.map((leave, index) => (
                    <div key={index} className="flex items-center group cursor-pointer">
                        <span className={`w-2 h-2 rounded-full mr-2 flex-shrink-0 ${nameColors[leave.name] || 'bg-gray-400'}`}></span>
                        <span className="truncate" title={`${leave.name} - ${leave.type}`}>{leave.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarDay;
