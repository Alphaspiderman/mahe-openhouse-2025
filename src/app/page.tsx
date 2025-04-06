import { eventsData } from '@/data/events';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-slate-900">
        <div className="bg-tertiary flex w-full -translate-x-1 -translate-y-1 flex-col space-y-4 p-4">
          <h1 className="text-2xl font-extrabold uppercase">Schedule</h1>
          <div className="flex flex-col space-y-2">
            {eventsData.schedule.map((activity) => (
              <div key={activity.name} className="flex space-x-1">
                <Image
                  src={activity.icon}
                  alt={activity.name}
                  width={36}
                  height={36}
                />
                <div className="space-y-1">
                  <p>{activity.name}</p>
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-slate-900">
        <div className="bg-secondary flex w-full -translate-x-1 -translate-y-1 flex-col space-y-4 p-4">
          <h1 className="text-2xl font-extrabold uppercase">Your Activities</h1>
          <div className="flex flex-col space-y-2">
            {eventsData.activities.map((activity) => (
              <div key={activity.department} className="space-y-1">
                <p className="uppercase">{activity.department}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
