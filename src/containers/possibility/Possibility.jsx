import React from 'react';
import possibilityImage from '../../assets/possibilitys.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
     
      <h1 className="gradient__text">Make the right choice <br /> even if it calls for sacrifice</h1>
      <p>Valorant is a 5v5 first-person shooting game. It is developed by Riot Games, the developers of the league of legends. It is the first FPS game developed by the company. The rule of the game is to destroy a gang of five agents, the opponent team. There will be two teams of five players each and once the five players of a team are dead, the game is over.</p>
     
    </div>
  </div>
);

export default Possibility;