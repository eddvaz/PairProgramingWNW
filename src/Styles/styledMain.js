import styled from "styled-components";
import spoon from "../img/Spoon.png"

export const containerRecipes = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
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

        @media(max-width: 720px){
            flex-direction: column;
        }
`

export const Card = styled.div`
        img{
            width: 20vw;
            height: 25vh;
        }


            @media(max-width: 720px){
            flex-direction: column;
                
                img{
                    width: 40vw;
                    height: 20vh;
                }
            
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

        @media(max-width: 720px){
            margin-left: 25vw;
            width: 40vw;

                div{
                    width: 10vw;
                }
        }
`

export const conatinerAbout = styled.div`
    display: flex;
    text-align: center;
    margin-top: 294px;

        @media(max-width: 720px){
            flex-direction: column;
        }

`

export const DivImgAbout = styled.div`
    background-image: url(${spoon});
    background-repeat: no-repeat;
    background-position: center;
    width: auto;
    width: 50%;
    height: 957px;
        
        @media(max-width: 720px){
            height: 700px;
            width: 100%;
            
        }
    
`

export const DivTextAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    margin-top: 10vh;

        p{
            width: 30vw;
            text-align: justify;
            font-size: 20px;
            line-height: 35px;
            flex-wrap: nowrap;

            @media(max-width: 1080px) {
                width: 35vw;
                height: 50vh;
            }
        }

        @media(max-width: 720px){
            width: 100%;
            height: 130vh;

                p{
                    width: 60vw;
                }
        }

        @media(max-width: 500px){
                P{
                    width: 90vw;
                }
        }

`

export const DivAbout = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 94.5px;
    

        div{
            background-color: #373737;
            width: 4vw;
            height: 0.8vh;
            text-align: center;
            margin-top: 2vh;
            margin-left: 30px;
            border-radius: 10px;
            margin-bottom: 20.5px;

                @media(max-width: 720px){
                    width: 10vw;
                }
        }

        h2{
            font-size: 40px;
        }
`

export const containersubcribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #DFE4DE;
  height: 764px;

  h2 {
    font-size: 40px;
    color: #373737;
    margin-bottom: 14px;
  }

  p {
    font-size: 32px;
    letter-spacing: 2px;
    color: #373737;

    @media(max-width:1160px ){
    width: 700px;
    
}
    @media(max-width:720px ){
   width: 300px;
   font-size:16px
    
}
    @media(max-width:520px ){
   width: 330px;
   font-size:16px ;
}
  }
`;

export const subscribeInput = styled.input`
  width: 792px;
  height: 120px;
  margin-top: 40px;
  padding: 50px;
  font-size: 24px;
  border: none;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const subscribebutton = styled.button`
  width: 240px;
  height: 81px;
  border: 6px solid #373737;
  font-family: "DM Sans", sans-serif;
  font-size: 24px;
  letter-spacing: 6.14px;
  margin-top: 40px;
  cursor: pointer;
`;