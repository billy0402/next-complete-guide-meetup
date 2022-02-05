import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import MeetupDetail from '@components/meetup/MeetupDetail';
import { DUMMY_MEETUPS } from '@fixtures/meetups';
import { Meetup } from '@models/meetup';

type MeetupDetailPageProps = {
  meetup: Meetup;
};

const MeetupDetailPage: NextPage<MeetupDetailPageProps> = ({ meetup }) => {
  return <MeetupDetail {...meetup} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params?.meetupId;
  console.log(meetupId);

  // fetch data from a single meetup

  return {
    props: {
      meetup: { ...DUMMY_MEETUPS[0], id: meetupId },
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
    fallback: false,
  };
};

export default MeetupDetailPage;
