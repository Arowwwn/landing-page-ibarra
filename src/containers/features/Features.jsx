import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Controllers',
    text: 'Controllers are experts at controlling the battlefield by the use of smoke screens. Their abilities disrupt their opponents’ sightlines whilst providing cover for teammates as they take control of an area',
  },
  {
    title: 'Duelists',
    text: 'Duelists are the offensive experts in VALORANT with abilities that allow them to be aggressive and self-sufficient when creating opportunities to engage with opponents',
  },
  {
    title: 'Initiators',
    text: 'Initiators excel at gathering information and controlling the movements of opponents through the use of their abilities',
  },
  {
    title: 'Sentinels',
    text: 'Sentinels are defensive experts that have abilities that manipulate the battlefield, lock-down areas of contention and provide utility such as healing..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;