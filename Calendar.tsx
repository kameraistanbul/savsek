
import React, { useMemo } from 'react';
import CalendarDay from './CalendarDay';
import { leaveData, publicHolidays } from '../constants';
import type { LeaveEntry, PublicHoliday } from '../types';

interface CalendarProps {
    currentDate: Date;
    onSetToday: () => void;
    onPrevMonth: () => void;
    onNextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarProps> = ({ currentDate, onSetToday, onPrevMonth, onNextMonth }) => {
    const monthName = currentDate.toLocaleString('tr-TR', { month: 'long' });
    const year = currentDate.getFullYear();

    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">{`${monthName} ${year}`}</h2>
            <div className="flex items-center space-x-2">
                <button
                    onClick={onSetToday}
                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Bugün
                </button>
                <button
                    onClick={onPrevMonth}
                    className="p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button
                    onClick={onNextMonth}
                    className="p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
    );
};


const Calendar: React.FC<CalendarProps> = ({ currentDate, onSetToday, onPrevMonth, onNextMonth }) => {

    const leavesByDate = useMemo(() => {
        const map = new Map<string, LeaveEntry[]>();
        leaveData.forEach(leave => {
            const date = leave.date;
            if (!map.has(date)) {
                map.set(date, []);
            }
            map.get(date)!.push(leave);
        });
        return map;
    }, []);

    const holidaysByDate = useMemo(() => {
        const map = new Map<string, PublicHoliday>();
        publicHolidays.forEach(holiday => {
            map.set(holiday.date, holiday);
        });
        return map;
    }, []);

    const days = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        const daysInMonth = [];
        const startDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // Monday is 0
        const endDayOfWeek = (lastDayOfMonth.getDay() + 6) % 7; // Monday is 0

        // Days from previous month
        for (let i = startDayOfWeek; i > 0; i--) {
            const date = new Date(year, month, 1 - i);
            daysInMonth.push({ date, isCurrentMonth: false });
        }

        // Days of current month
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const date = new Date(year, month, i);
            daysInMonth.push({ date, isCurrentMonth: true });
        }

        // Days from next month
        for (let i = 1; i < 7 - endDayOfWeek; i++) {
            const date = new Date(year, month + 1, i);
            daysInMonth.push({ date, isCurrentMonth: false });
        }
        
        return daysInMonth;
    }, [currentDate]);

    const weekDays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <CalendarHeader 
                currentDate={currentDate}
                onSetToday={onSetToday}
                onPrevMonth={onPrevMonth}
                onNextMonth={onNextMonth}
            />
            <div className="grid grid-cols-7 gap-px">
                {weekDays.map(day => (
                    <div key={day} className="text-center font-semibold text-sm text-gray-500 py-2">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                 {days.map(({ date, isCurrentMonth }, index) => {
                    const dateString = date.toISOString().split('T')[0];
                    return (
                        <CalendarDay
                            key={index}
                            date={date}
                            isCurrentMonth={isCurrentMonth}
                            isToday={date.getTime() === today.getTime()}
                            leaves={leavesByDate.get(dateString) || []}
                            holiday={holidaysByDate.get(dateString)}
                        />
                    );
                })}
            </div>
             <div className="mt-6 flex flex-wrap gap-4 items-center">
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-100 border border-red-300 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-600">Resmi Tatil</span>
                </div>
                 <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-600">İzinli Personel</span>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
