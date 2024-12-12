import React from 'react';
import CountUp from 'react-countup';
import './Count.css';

const Count = () => {
  return (
    <div className="containers">
      <div className="flexColCenter stat">
        <span>
          <CountUp start={0} end={15} duration={10} />
          <span>K+</span>
        </span>
        <span className='secondaryText'>Lifes Saved</span>
      </div>
      <div className="flexColCenter stat">
        <span>
          <CountUp start={0} end={300} duration={10} />
          <span>+</span>
        </span>
        <span className='secondaryText'>Doctors</span>
      </div>
      <div className="flexColCenter stat">
        <span>
          <CountUp end={25} duration={10}/>
          <span>+</span>
        </span>
        <span className='secondaryText'>Programs</span>
      </div>
      <div className="flexColCenter stat">
        <span>
          <CountUp end={20} duration={10}/>
          <span>K+</span>
        </span>
        <span className='secondaryText'>Interns</span>
      </div>
      <div className="flexColCenter stat">
        <span>
          <CountUp end={350} duration={10}/>
          <span>+</span>
        </span>
        <span className='secondaryText'>Patents</span>
      </div>
      <div className="flexColCenter stat">
        <span>
          <CountUp end={2} />
          <span>K+</span>
        </span>
        <span className='secondaryText'>Publications</span>
      </div>
    </div>
  );
};

export default Count;