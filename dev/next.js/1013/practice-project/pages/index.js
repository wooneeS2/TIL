import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://a.cdn-hotels.com/gdcs/production123/d477/f88c6cdb-3e47-45f5-bfd7-d3775d1f3bcc.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    address: "Some Address5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://newsroom-prd-data.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2018/09/%EC%9D%B8%EA%B5%AC%EC%87%BC%ED%81%AC_%EC%84%9C%EC%9A%B8%EC%9D%B8%EA%B5%AC_3.jpg",
    address: "Some Address5, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
