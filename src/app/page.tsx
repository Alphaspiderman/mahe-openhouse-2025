import { eventsData } from '@/data/events';
import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col space-y-4">
      <Card className="bg-theme-secondary">
        <CardHeader>
          <CardTitle className="text-2xl font-black tracking-tight uppercase">
            Schedule
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          {eventsData.schedule.map((activity) => (
            <div key={activity.name} className="flex space-x-4">
              <div className="relative my-auto h-10 w-10 min-w-[36px] flex-shrink-0">
                <Image
                  src={activity.icon}
                  alt={activity.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xl font-bold uppercase">{activity.name}</p>
                {activity.times.length > 1 ? (
                  <ul className="list-inside list-disc text-lg uppercase">
                    {activity.times.map((time, index) => (
                      <li key={index}>
                        <span className="font-semibold">{time.startTime}</span>{' '}
                        to <span className="font-semibold">{time.endTime}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-lg uppercase">
                    <span className="font-semibold">
                      {activity.times[0].startTime}
                    </span>
                    {activity.times[0].endTime ? ' to ' : ' '}
                    <span className="font-semibold">
                      {activity.times[0].endTime || 'ONWARDS'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="bg-theme-tertiary">
        <CardHeader>
          <CardTitle className="text-2xl font-black tracking-tight uppercase">
            Your Activities
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          {eventsData.activities.map((activity) => (
            <div key={activity.department} className="space-y-1">
              <p className="uppercase">{activity.department}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
