import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import MeetupList from '@components/meetup/MeetupList';
import { DUMMY_MEETUPS } from '@fixtures/meetups';
import { Meetup } from '@models/meetup';

const HomePage: NextPage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
