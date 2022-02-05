import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import MeetupDetail from '@components/meetup/MeetupDetail';
import { readMeetup, readMeetups } from '@helpers/db';
import { Meetup } from '@models/meetup';

type MeetupDetailPageProps = {
  meetup: Meetup;
};

const MeetupDetailPage: NextPage<MeetupDetailPageProps> = ({ meetup }) => {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name='description' content={meetup.description} />
      </Head>
      <MeetupDetail {...meetup} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch data from a single meetup
  const meetupId = context.params?.meetupId as string;
  const meetup = await await readMeetup(meetupId);

  return {
    props: {
      meetup,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const meetups = await await readMeetups();

  return {
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup.id } })),
    fallback: 'blocking',
  };
};

export default MeetupDetailPage;
