import React from "react";
import "./Card.css";
import styles from './Card.module.css'

function Card() {
	return (
		<div>
			<h2>Hello</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Libero, eveniet quos? Aut fuga rem deleniti. Ipsa esse facilis
				incidunt eos?
			</p>
			<p className={styles.txt}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Libero, eveniet quos? Aut fuga rem deleniti. Ipsa esse facilis
				incidunt eos?
			</p>
		</div>
	);
}
export default Card;
