import { eventsData } from '@/data/events';
import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export default function Home() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col space-y-4">
      <Card className="bg-theme-secondary border-transparent">
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
                <p className="text-lg font-bold uppercase lg:text-xl">
                  {activity.name}
                </p>
                {activity.times.length > 1 ? (
                  <ul className="list-inside list-disc uppercase lg:text-lg">
                    {activity.times.map((time, index) => (
                      <li key={index}>
                        <span className="font-semibold">{time.startTime}</span>{' '}
                        to <span className="font-semibold">{time.endTime}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="uppercase lg:text-lg">
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
      <Card className="bg-theme-tertiary border-transparent">
        <CardHeader>
          <CardTitle className="text-2xl font-black tracking-tight uppercase">
            Your Activity Checklist
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          {eventsData.activities.map((activity) => (
            <div key={activity.department} className="flex flex-col space-y-2">
              <div className="flex items-start">
                <Checkbox className="peer !mt-1.5 !mr-2.5 data-[state=checked]:bg-white" />
                <p className="text-lg font-bold uppercase peer-data-[state=checked]:line-through peer-data-[state=checked]:opacity-50">
                  {activity.department}
                </p>
              </div>
              <div className="flex flex-col space-y-2 pl-8">
                {activity.events.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <Checkbox className="peer !mt-1.5 !mr-2.5 !size-3 data-[state=checked]:bg-white" />
                    <p className="uppercase peer-data-[state=checked]:line-through peer-data-[state=checked]:opacity-50">
                      {event.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
