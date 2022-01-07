import { useContext } from 'react';
import { DiceContext } from '../../context/DiceContext';
import diceNumberGenerator from '../../utils/diceNumberGenerator';
import styles from './Button.module.css';

const Button = ({ faces, children }: { faces: number, children: React.ReactNode }) => {
  const { setDiceNumber, setSelectedDice } = useContext(DiceContext);
  return (
    <button onClick={() => { setDiceNumber(diceNumberGenerator(faces)); setSelectedDice(faces) }}>{children}</button>
  )
}

export default Button
