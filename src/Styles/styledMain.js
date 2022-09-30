import styled from "styled-components";

export const containerRecipes = styled.div`
    display: flex;
    background-color: #F2F4F1;
    text-align: center;
    justify-content: center;
`

export const DivTextoRecipes = styled.div `
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;

        div{
        border-bottom: 5px solid black;       
        width:80px;
        height: 8px;
        text-align: center;
        margin-top: 15px;
        }

        h2{
            font-size: 2rem;
            text-align: center; 
        }
`

export const containerCards = styled.div`
    margin-top: 10vh;
    display: flex;
    justify-content:  space-evenly;
    width: 90vw;
`

export const Card = styled.div`
    

        img{
            width: 20vw;
            height: 25vh;
        }
`

export const H3Recipes = styled.div`
    background-color: white;
    height: 20vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;

        
        div{
            background-color: #373737;
            width: 4vw;
            height: 2vh;
            text-align: center;
            margin-top: 9vh;
            border-radius: 10px;
            margin-bottom: 20.5px;
        }

        h3{
            width: 20vw;
            height: 25vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
`