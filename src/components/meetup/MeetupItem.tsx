import Card from '@components/ui/Card';
import { Meetup } from '@models/meetup';

type MeetupItemProps = Meetup;

const MeetupItem = ({ title, address, image }: MeetupItemProps) => {
  return (
    <li className='meetup-item'>
      <Card>
        <div className='meetup-item__image'>
          <img src={image} alt={title} />
        </div>
        <div className='meetup-item__content'>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className='meetup-item__actions'>
          <button>Show Detail</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
