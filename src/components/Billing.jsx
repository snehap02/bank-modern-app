import React from 'react';
import styles, {layout} from '../style';
import {apple, bill, google} from '../assets';

const Billing = () => {
  return (
    <>
      <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={bill} alt='bill' className='w-[100%] h-[100%] relative z-[5]'/>

          {/* In XML, <div /> would be a self-closing div, but not in HTML. */}
          <div className='absolute z-[-3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
          <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={apple} alt='apply store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>

            <img src={google} alt='gpogle store' className='w-[128px] h-[42px] object-contain cursor-pointer'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Billing