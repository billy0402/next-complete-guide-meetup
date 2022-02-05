import type { NextPage } from 'next';

import MeetupList from '@components/meetup/MeetupList';
import { DUMMY_MEETUPS } from '@fixtures/meetups';

const HomePage: NextPage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
