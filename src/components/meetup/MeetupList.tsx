import { Meetup } from '@models/meetup';
import MeetupItem from './MeetupItem';

type MeetupListProps = {
  meetups: Meetup[];
};

const MeetupList = ({ meetups }: MeetupListProps) => {
  return (
    <ul className='meetup-list'>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
