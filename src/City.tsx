import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {BanknotsType, MoneyType} from "./App";
import styled, {css} from "styled-components";

type CityPropsType = {
    data: MoneyType[] //встречаем денюжки

}

export const City = (props: CityPropsType) => {

    // пока это пропускам
    const mappedMoney = props.data.map((el: MoneyType, index) => {
        return (
            <CurrentBankomat
                key={index}
                money={el}
            />
        )
    })

    // const mappedMoney = props.data.map(el => {
    //     return (
    //         <ul>
    //             <li>{el.banknotes}</li>
    //             <li>{el.value}</li>
    //             <li>{el.number}</li>
    //         </ul>
    //     )
    // })
    return (
        <Wrapper>
            {mappedMoney}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`


//1
// Вроде все норм, но нужно причесать код. Давайте создадим const mappedMoney = props.data.map(el=>el...)
// Т.е. нам нужно вынести map из вертски, оставив в верстке только mappedMoney

//2
// Отлично, но теперь давайте совсем все сделаем по красоте. Вынесем верстку в отдельную компоненту и ее замапим!
// Ну и наконец давайте версточку натянем, для этого будем использовать StyledComponents
// yarn add styled-components
// yarn add @types/styled-components

//3
// Вроде все норм, ну точнее почти норм- дублирование-это грех. Хотелось бы от него избавиться.
// И StyledComponents нам в этом отлично поможет, ведь он может принимать пропсы!
// Как это сделать в документашке