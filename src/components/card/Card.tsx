import React from 'react';
import styles from './card.module.scss';

interface Props {
  children?:  React.ReactNode | React.ReactNode[]
};

const Card = ({ children } : Props ) => (
	<div className={styles['content-block']} >
		<div className={styles.paddings}>
			{children}
		</div>
	</div>
);

export default Card;