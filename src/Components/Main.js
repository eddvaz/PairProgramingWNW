import React from "react";
import * as S from "../Styles/styledMain"

import cake from "../img/bolodemorango.png"
import pizza from "../img/pizza.png"
import smoothie from "../img/batida-de-amendoim.png"

const Main = () => {
return(
    <main>
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
        <S.conatinerAbout>
            <S.DivImgAbout></S.DivImgAbout>
            <S.DivTextAbout>
                <S.DivAbout>
                    <h2>ABOUT</h2>
                    <div></div>
                </S.DivAbout>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
            </S.DivTextAbout>
        </S.conatinerAbout>
        <S.containersubcribe>
            <h2>SUBSCRIBE</h2>
            <p>Sign up for newsletter</p>
            <S.subscribeInput placeholder="Your Email" />
            <S.subscribebutton>SUBMIT</S.subscribebutton>
        </S.containersubcribe>        
    </main>
)
}

export default Main;