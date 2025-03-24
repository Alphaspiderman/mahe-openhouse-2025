export type EventsData = typeof eventsData;

export const eventsData = {
  registrations: {
    title: 'Registrations Open',
    startTime: '10:00',
    endTime: '13:00',
  },
  campusTour: {
    title: 'Campus Tour',
    startTime: '10:30',
    endTime: '17:00',
  },
  connect: {
    title: 'Connect',
    startTime: '14:00',
    endTime: '15:30',
    location: 'Dr. Ramdas M Pai Convention Centre',
    icon: '/icons/circles.png',
    events: [
      {
        title: 'Welcome to the Multiversity',
        startTime: '14:00',
        endTime: '15:00',
        byline: 'Presentation and Q&A Session by',
        author: 'Divyadarshini K.',
        subtitle: 'Asst. Director Admissions, MAHE Bengaluru',
      },
      {
        title: 'You Belong Here',
        startTime: '15:00',
        endTime: '15:30',
        byline: 'Talk by',
        author: 'Prof. Madhu Veeraraghavan',
        subtitle: 'Pro VC, MAHE Bengaluru',
      },
    ],
  },
  standup: {
    title: 'Standup Comedy by Abhishek Upmanyu',
    location: 'Dr. Ramdas M Pai Convention Centre',
    icon: '/icons/standup.png',
    startTime: '15:45',
    endTime: '16:30',
  },
  foodAndFun: {
    title: 'Food and Fun',
    startTime: '13:00',
    endTime: '14:00',
    events: [
      {
        title: 'Flash Mob',
        icon: '/icons/cheer.png',
        subtitle: 'Student Dance',
      },
      {
        title: 'The Big Gig',
        icon: '/icons/mic.png',
        subtitle: 'Student Band',
      },
      {
        title: 'Food Path',
        icon: '/icons/food.png',
        subtitle: 'Campus Food Stalls',
      },
    ],
  },
};
