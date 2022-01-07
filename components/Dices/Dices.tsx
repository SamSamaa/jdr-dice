import styles from './Dices.module.css';
import Button from '../Button/Button';
import { useContext, useEffect } from 'react';
import { DiceContext } from '../../context/DiceContext';

import Image from 'next/image';
import Dice4 from '../../assets/dice4.png';
import Dice6 from '../../assets/dice6.png';
import Dice8 from '../../assets/dice8.png';
import Dice10 from '../../assets/dice10.png';
import Dice12 from '../../assets/dice12.png';
import Dice20 from '../../assets/dice20.png';
import Dice100 from '../../assets/dice100.png';

const Dices = () => {
  const { setDiceHistory, diceNumber, diceHistory, userName, selectedDice } = useContext(DiceContext);


  // const loadHistory = useEffect(() => {
  //   console.log("Diced");
  //   setDiceHistory([...diceHistory, `${userName} a lancé un dés ${selectedDice} et a obtenu -> ${diceNumber} !`])
  // }, [diceNumber])

  return (
    <div>
      Dés tiré: {diceNumber}
      <div>
        <Button faces={4}>
          Dés 4
          <Image src={Dice4} width={50} height={50} />
        </Button>
        <Button faces={6}>
          Dés 6
          <Image src={Dice6} width={50} height={50} />
        </Button>
        <Button faces={8}>
          Dés 8
          <Image src={Dice8} width={50} height={50} />
        </Button>
        <Button faces={10}>
          Dés 10
          <Image src={Dice10} width={50} height={50} />
        </Button>
        <Button faces={12}>
          Dés 12
          <Image src={Dice12} width={50} height={50} />
        </Button>
        <Button faces={20}>
          Dés 20
          <Image src={Dice20} width={50} height={50} />
        </Button>
        <Button faces={100}>
          Dés 100
          <Image src={Dice100} width={50} height={50} />
        </Button>
      </div >
    </div>
  )
}

export default Dices;
