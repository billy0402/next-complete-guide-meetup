import type { GetStaticProps, NextPage } from 'next';

import MeetupList from '@components/meetup/MeetupList';
import { DUMMY_MEETUPS } from '@fixtures/meetups';
import { Meetup } from '@models/meetup';

type HomePageProps = {
  meetups: Meetup[];
};

const HomePage: NextPage<HomePageProps> = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps: GetStaticProps = async () => {
  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
};

export default HomePage;
