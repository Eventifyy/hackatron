'use client';

import { motion } from 'framer-motion';

// import styles from '../styles';
import styles from '../styles/style';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
// import { InsightCard, TitleText, TypingText } from '../components';
import { TypingText, TitleText } from './CustomTexts';
import InsightCard from './InsightsCard';

const Insights = () => {
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
      <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
    )
}


export default Insights;
