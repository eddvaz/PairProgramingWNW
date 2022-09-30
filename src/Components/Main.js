import React from "react";
import * as S from "../Styles/styledMain"

import cake from "../img/bolodemorango.png"
import pizza from "../img/pizza.png"
import smoothie from "../img/batida-de-amendoim.png"

const Main = () => {
    return(
        <S.containerRecipes>
            <div>
                <S.DivTextoRecipes>
                    <h2>LATEST RECIPES</h2>
                    <div></div>   
                </S.DivTextoRecipes>
                <S.containerCards>
                    <S.Card>
                        <img src={cake} alt=""/>
                        <S.H3Recipes>
                            <div></div>
                            <h3>Red Velvet Cake</h3>
                        </S.H3Recipes>
                    </S.Card>
                    <S.Card>
                        <img src={pizza} alt=""/>
                        <S.H3Recipes>
                            <div></div>
                            <h3>Margherita Pizza</h3>
                        </S.H3Recipes>

                    </S.Card>
                    <S.Card>
                        <img src={smoothie} alt=""/>
                        <S.H3Recipes>
                            <div></div>
                            <h3>Peanut Smoothie</h3>
                        </S.H3Recipes>
                    </S.Card>
                </S.containerCards>
            </div>
        </S.containerRecipes>
    )
}

export default Main;