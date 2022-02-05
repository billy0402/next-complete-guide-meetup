import { NextPage } from 'next';

import MeetupDetail from '@components/meetup/MeetupDetail';
import { DUMMY_MEETUPS } from '@fixtures/meetups';

const MeetupDetailPage: NextPage = () => {
  const meetup = DUMMY_MEETUPS[0];

  return <MeetupDetail {...meetup} />;
};

export default MeetupDetailPage;
