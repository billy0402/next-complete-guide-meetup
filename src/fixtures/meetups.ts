import { Meetup } from '@models/meetup';

const DUMMY_MEETUPS: Meetup[] = [
  {
    id: 'm1',
    title: 'A First Meetup',
    description: 'This is a first meetup!',
    address: 'Some address 5, 12345 Some City',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    description: 'This is a second meetup!',
    address: 'Some address 10, 12345 Some City',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  },
];

export { DUMMY_MEETUPS };
