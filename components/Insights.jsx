'use client';

import { motion } from 'framer-motion';
import styles from '../styles/style';
import { staggerContainer } from '../utils/motion';
import { TypingText, TitleText } from './CustomTexts';
import InsightCard from './InsightsCard';

const Insights = (props) => {
    return(

  <section className={`sm:p-16 xs:p-8 px-10 py-12 relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about events</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
          <InsightCard 
          key={props.key}
          price={props.price}
          name={props.name}
          cover={props.cover}
          date={props.date}
          venue={props.venue}
          theme={props.theme}
          tokenId={props.supply}
          supply={props.supply}
          remaining={props.remaining}
          host={props.host}
          buyLink={props.buyLink}
          />
      </div>
    </motion.div>
  </section>

  
    )
}


export default Insights;
