import React from 'react'
import styles from "@/styles/Home.module.css";
import { Staking } from './staking';
import { StakingData } from './stakingData';

export const Main = () => {
  return (
    <section className={styles.container}>
      <Staking/>
      <StakingData/>
    </section>
  )
}
