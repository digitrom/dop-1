import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
    return (
       /* props.money.banknotes === "Dollars"
            ? <BanknotGreen>
                <Name>{props.money.banknotes}</Name>
                <Nominal>{props.money.value}</Nominal>
            </BanknotGreen>
            : <BanknotBlue>
                <Name>{props.money.banknotes}</Name>
                <Nominal>{props.money.value}</Nominal>
            </BanknotBlue>*/

    <BanknotUniversal color={props.money.banknotes === 'Dollars' ? 'greenyellow' : 'steelblue'}>
        <Name>{props.money.banknotes}</Name>
        <Nominal>{props.money.value}</Nominal>
    </BanknotUniversal>
    );
};

const BanknotUniversal = styled.div`
  background-color: ${props => {
 return props.color === 'greenyellow' ? 'greenyellow' : 'steelblue'
}} ;
  width: 300px;
  height: 200px;
  margin: 10px;
`
// const BanknotGreen = styled.div`
//   background-color: greenyellow;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
// const BanknotBlue = styled.div`
//   background-color: steelblue;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`
const Nominal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 70px;
`