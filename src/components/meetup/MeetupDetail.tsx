import { Meetup } from '@models/meetup';

type MeetupDetailProps = Meetup;

const MeetupDetail = ({
  title,
  description,
  address,
  image,
}: MeetupDetailProps) => {
  return (
    <section className='meetup-detail'>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
