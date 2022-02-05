import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewMeetupForm from '@components/meetup/NewMeetupForm';
import { MeetupCreate } from '@models/meetup';

const NewMeetupPage: NextPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetup: MeetupCreate) => {
    const response = await fetch('/api/meetup', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(meetup),
    });
    const data = await response.json();
    console.log(data);
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
