import { NextPage } from 'next';
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

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
