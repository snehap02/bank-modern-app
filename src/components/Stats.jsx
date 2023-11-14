import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <>
      <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat) => (
          <div key={stat.id} className={`flex-1 flex justify-start flex-row items-center m-3`}>
            <h4 className='font-poppins font-semibold xs:text-[40px] text-white xs:leading-[53px] leading-[43px] text-[30px]'>{stat.value}</h4>
            <p className='font-poppins font-normal xs:text-[20px] xs:leading-[26px] leading-[21px] text-[15px] text-gradient uppercase'>{stat.title}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default Stats