import { createContext, ReactNode, useContext, useState } from "react";

type DiceContextProviderProps = {
  children: ReactNode
};

type DiceContextType = {
  userName: string,
  setUserName: (s: string) => void
  diceNumber: number,
  setDiceNumber: (n: number) => void,
  diceHistory: any,
  setDiceHistory: (s: string[]) => void,
  selectedDice: number,
  setSelectedDice: (s: number) => void
};

export const DiceContext = createContext<DiceContextType>({
  userName: "",
  setUserName: () => { },
  diceNumber: 0,
  setDiceNumber: () => { },
  diceHistory: [],
  setDiceHistory: () => { },
  selectedDice: 0,
  setSelectedDice: () => { }
});

export const useDiceContext = () => useContext(DiceContext);

export const DiceContextProvider = ({ children }: DiceContextProviderProps) => {

  const [userName, setUserName] = useState<string>("");
  const [diceNumber, setDiceNumber] = useState<number>(0);
  const [diceHistory, setDiceHistory] = useState<any[]>([]);
  const [selectedDice, setSelectedDice] = useState<number>(0);

  return (
    <DiceContext.Provider
      value={{
        userName,
        setUserName,
        diceNumber,
        setDiceNumber,
        diceHistory,
        setDiceHistory,
        selectedDice,
        setSelectedDice
      }}
    >
      {children}
    </DiceContext.Provider>
  )
};