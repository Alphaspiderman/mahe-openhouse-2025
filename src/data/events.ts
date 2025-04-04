export type EventsData = typeof eventsData;

export const eventsData = {
  schedule: [
    {
      name: 'Registration',
      icon: '/icons/pen.png',
      times: [
        {
          startTime: '09:00AM',
          endTime: '05:00PM',
        },
      ],
    },
    {
      name: 'Activity Display',
      icon: '/icons/pen.png',
      times: [
        {
          startTime: '10:00AM',
          endTime: '11:30AM',
        },
      ],
    },
    {
      name: 'Address by Director of MIT',
      icon: '/icons/pen.png',
      times: [
        {
          startTime: '11:30AM',
          endTime: '12:00PM',
        },
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
      department: 'Research Committee',
      icon: '/icons/atom.png',
      events: [
        {
          name: 'Student Research Activity (and Others)',
        },
      ],
    },
    {
      department: 'Office of International Relations',
      icon: '/icons/globe.png',
      events: [
        {
          name: 'Highlighting Global Engagement, Collaborations, and Programs',
        },
        {
          name: 'Educating Parents on Student Exchange Programs, IAESTE, and Other Global Prospects',
        },
        {
          name: 'Addressing Parent Queries on International Mobility Options',
        },
      ],
    },
    {
      department: 'Information Technology',
      icon: '/icons/computer.png',
      events: [
        {
          name: 'Briefing Course Structure 2025',
        },
        {
          name: 'Highlighting Department Activities',
        },
      ],
    },
    {
      department: 'Student Welfare',
      icon: '/icons/students.png',
      events: [
        {
          name: 'Showcasing Student Projects',
        },
        {
          name: 'Musical Band Performance',
        },
        {
          name: 'Group Dance',
        },
      ],
    },
    {
      department: 'Computer Science and Engineering',
      icon: '/icons/code.png',
      events: [
        {
          name: 'Project Demo: AR/VR Game Development',
        },
        {
          name: 'Project Demo: Multimodal Intelligent Knowledge Utility (MIKU)',
        },
        {
          name: 'Briefing Course Structure 2025',
        },
        {
          name: 'Highlighting Department Activities',
        },
      ],
    },
    {
      department: 'Bioinspired Design and Optimization Centre (BIODOC)',
      icon: '/icons/dna.png',
      events: [
        {
          name: 'BIOTECHNOLOGY Research Display',
        },
        {
          name: 'Funded Project Details',
        },
        {
          name: 'Major Projects Carried Out by Student Teams',
        },
        {
          name: 'International Collaborations',
        },
        {
          name: 'Patents/Copyrights',
        },
      ],
    },
    {
      department: 'Science and Humanities',
      icon: '/icons/flask.png',
      events: [
        {
          name: 'Physics of Optics',
        },
        {
          name: 'ElectroConnect: Charging the Future',
        },
        {
          name: "CHE-'MISTERY'",
        },
      ],
    },
    {
      department: 'Electronics and Communication Engineering',
      icon: '/icons/chip.png',
      events: [
        {
          name: 'Briefing Course Structure 2025',
        },
        {
          name: 'Highlighting Department Activities',
        },
        {
          name: 'Department Lab Tour',
        },
        {
          name: 'Exhibiting Department Achievements in Microsoft Placement',
        },
        {
          name: 'Featuring Final Year ECE Student: Overall Topper and Institute Gold Medal Nominee',
        },
        {
          name: 'Placement Average Salary in ECE',
        },
      ],
    },
    {
      department: 'Centre of Excellence in Autonomous Mobility',
      icon: '/icons/car.png',
      events: [
        {
          name: 'Autonomous Buggy Ride',
        },
        {
          name: 'Autonomous Lab Tour & Presentation',
        },
        {
          name: 'Lab Activities in Autonomous Lab',
        },
      ],
    },
    {
      department: 'IEEE Student Branch',
      icon: '/icons/ieee.png',
      events: [
        {
          name: 'Project Showcase: Using OpenCV for Interactive Presentation',
        },
        {
          name: 'Project Showcase: AI Optimisation via Reservoir Computing',
        },
        {
          name: 'IEEE Website Display',
        },
      ],
    },
  ],
};
