export type EventsData = typeof eventsData;

export const eventsData = {
  schedule: [
    {
      name: 'Information Desk',
      icon: '/icons/brain.png',
      times: [
        {
          startTime: '09:00AM',
          endTime: '05:00PM',
        },
      ],
    },
    {
      name: 'Activity Display',
      icon: '/icons/atom.png',
      times: [
        {
          startTime: '10:00AM',
          endTime: '05.00PM',
        },
      ],
    },
    {
      name: 'Address by Director of MIT',
      location: 'AB5 Auditorium',
      icon: '/icons/mic.png',
      times: [
        {
          startTime: '10:30AM',
          endTime: '11:00AM',
        },
        {
          startTime: '11:30AM',
          endTime: '12:00PM',
        },
      ],
    },
    {
      name: 'Cultural Program',
      icon: '/icons/cheer.png',
      times: [
        {
          startTime: '12:00PM',
          endTime: '12:30PM',
        },
      ],
    },
    {
      name: 'Lunch Break',
      icon: '/icons/food.png',
      times: [
        {
          startTime: '12:30PM',
          endTime: null,
        },
      ],
    },
  ],
  activities: [
    {
      department: 'Research Committee and Workshop Practice',
      location: 'AB4-203',
      checked: false,
      icon: '/icons/atom.png',
      events: [
        {
          name: 'Student Research Activity (and Others)',
          checked: false,
        },
      ],
    },
    {
      department: 'Office of International Relations',
      location: 'AB4-204',
      checked: false,
      icon: '/icons/globe.png',
      events: [
        {
          name: 'Highlighting Global Engagement, Collaborations, and Programs',
          checked: false,
        },
        {
          name: 'Educating Parents on Student Exchange Programs, IAESTE, and Other Global Prospects',
          checked: false,
        },
        {
          name: 'Addressing Parent Queries on International Mobility Options',
          checked: false,
        },
      ],
    },
    {
      department: 'Office of Corporate Engagement and Placements',
      location: 'AB5 Ground Floor, Placement Cell',
      checked: false,
      icon: '/icons/briefcase.png',
      events: [
        {
          name: 'Placement Information Desk',
          checked: false,
        },
      ],
    },
    {
      department:
        'Bioinspired Design and Optimization Centre (BIODOC) & BIOTECH',
      location: 'AB4-205',
      checked: false,
      icon: '/icons/dna.png',
      events: [
        {
          name: 'BIOTECHNOLOGY Research Display',
          checked: false,
        },
        {
          name: 'Funded Project Details',
          checked: false,
        },
        {
          name: 'Major Projects Carried Out by Student Teams',
          checked: false,
        },
        {
          name: 'International Collaborations',
          checked: false,
        },
        {
          name: 'Patents/Copyrights',
          checked: false,
        },
      ],
    },
    {
      department: 'Electronics and Communication Engineering',
      location: 'AB4-206',
      checked: false,
      icon: '/icons/chip.png',
      events: [
        {
          name: 'Briefing Course Structure 2025',
          checked: false,
        },
        {
          name: 'Highlighting Department Activities',
          checked: false,
        },
        {
          name: 'Department Lab Tour',
          checked: false,
        },
        {
          name: 'Exhibiting Department Achievements in Microsoft Placement',
          checked: false,
        },
        {
          name: 'Featuring Final Year ECE Student: Overall Topper and Institute Gold Medal Nominee',
          checked: false,
        },
        {
          name: 'Placement Average Salary in ECE',
          checked: false,
        },
      ],
    },
    {
      department: 'Information Technology',
      location: 'AB5-105',
      checked: false,
      icon: '/icons/computer.png',
      events: [
        {
          name: 'Briefing Course Structure 2025',
          checked: false,
        },
        {
          name: 'Highlighting Department Activities',
          checked: false,
        },
      ],
    },
    {
      department: 'Student Welfare',
      location: 'AB5 Auditorium',
      note: 'Events till 12.30PM only.',
      checked: false,
      icon: '/icons/students.png',
      events: [
        {
          name: 'Showcasing Student Projects',
          checked: false,
        },
        {
          name: 'Eastern Vocal Performance',
          checked: false,
        },
        {
          name: 'Solo Dance',
          checked: false,
        },
        {
          name: 'Group Dance',
          checked: false,
        },
      ],
    },
    {
      department: 'Computer Science and Engineering',
      location: 'AB5-104',
      checked: false,
      icon: '/icons/code.png',
      events: [
        {
          name: 'Briefing Course Structure 2025',
          checked: false,
        },
        {
          name: 'Highlighting Department Activities',
          checked: false,
        },
      ],
    },
    {
      department: 'Computer Science and Engineering (Lab Showcase)',
      location: 'As mentioned below',
      checked: false,
      icon: '/icons/code.png',
      events: [
        {
          name: 'NVIDIA GPU Lab Showcase (AB4-411)',
          checked: false,
        },
        {
          name: 'Apple Lab Showcase (AB5-303)',
          checked: false,
        },
      ],
    },
    {
      department: 'Computer Science and Engineering (Project Demo)',
      location: 'AB5-102',
      checked: false,
      icon: '/icons/code.png',
      events: [
        {
          name: 'AR/VR Game Development',
          checked: false,
        },
        {
          name: 'Multimodal Intelligent Knowledge Utility (MIKU)',
          checked: false,
        },
      ],
    },
    {
      department: 'Centre of Excellence in Autonomous Mobility',
      location: 'AB5 Ground Floor, Decibel Lab',
      checked: false,
      icon: '/icons/car.png',
      events: [
        {
          name: 'Autonomous Buggy Ride',
          checked: false,
        },
        {
          name: 'Autonomous Lab Tour & Presentation',
          checked: false,
        },
        {
          name: 'Lab Activities in Autonomous Lab',
          checked: false,
        },
      ],
    },
    {
      department: 'Student Projects',
      location: 'AB5-106/107',
      checked: false,
      icon: '/icons/car.png',
      events: [
        {
          name: 'IEEE CIS',
          checked: false,
        },
        {
          name: 'ElectroVista',
          checked: false,
        },
        {
          name: 'RADAR',
          checked: false,
        },
      ],
    },
  ],
};
