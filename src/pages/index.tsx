import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import MeetupList from '@components/meetup/MeetupList';
import { readMeetups } from '@helpers/db';
import { Meetup } from '@models/meetup';

type HomePageProps = {
  meetups: Meetup[];
};

const HomePage: NextPage<HomePageProps> = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // fetch data from an API
  const meetups = await await readMeetups();

  return {
    props: {
      meetups,
    },
    revalidate: 1,
  };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { req, res } = context;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;
