import Layout from '../components/myLayout';

const Home = () => (
  <Layout Page={'Home'}>
    <div>
      <h1>Our Next Event</h1>
      <h2>Practical UX: How to Design Business Strategy Playbooks</h2>
      <p>Februay 20th 2020</p>
      <p>11:00AM - 2:00PM</p>
      <button>RSVP</button>
      <button>INFO</button>
      <h2>Summary</h2>
      <p>
        Summary: Welcome the Feb 2020 Meetup for the Las Vegas UX/UI group! We
        had a great event in January and received some great feedback for this
        month's event. This month, Jonathan will be giving a presentation on
        Practical UX and how to design business strategy playbooks that you can
        help implement by yourself or with a team.
      </p>
      <h2>Location</h2>
      <p>401 S. 4th St Ste. 155 Las Vegas, NV 89101</p>
    </div>
    <style jsx>{`
      .home {
        width: 100%;
        color: #333;
      }
      .headline {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 28px;
        text-align: left;
      }
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </Layout>
);

export default Home;
