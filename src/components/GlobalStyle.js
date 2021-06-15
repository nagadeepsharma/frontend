import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`
    :root{
        --bgcolor--:${(props)=>props.colors.bgcolor};
        --bdcolor--:${(props)=>props.colors.bdcolor};
        --boxcolor--:${(props)=>props.colors.boxcolor};
        --boxshcolor--:${(props)=>props.colors.boxshcolor};
        --txtcolor--:${(props)=>props.colors.txtcolor};
        --winbg--:${(props)=>props.colors.winbg};
    }
    body{
        color: var(--txtcolor--);
    }
    .home1{
        transition:0.3s;
        height: 95vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color:var(--bgcolor--);
        box-shadow: 0px 0px 0px 1px var(--bdcolor--);
    }
    .home1-wrap{
        height: 100%;
        width: 80%;
    }
    .home1-title{
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        border:none;
    }
    .home1-title>h1{
        font-size:50px
    }
    .home1-window{
        background-color:var(--bgcolor--);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;    
        height: 74.8%;
        width: 100%;
        border:1px solid var(--bdcolor--);
        box-shadow: 0px 0px 1px rgb(124, 116, 116);
    }
    .window-header{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 9%;
        background-color:var(--bgcolor--);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .window-header-icons{
        display: flex;
        justify-content: space-evenly;
        width:7%;
    }
    .window-header-contact{
        margin: 0px 10px;
    }
    .dots{
        height: 15px;
        width: 15px;
        border-radius: 50%;
        box-shadow: 0px 1px 2px grey;
        cursor: pointer;
        margin-left: 5px;
    }
    #red{
        background-color: #fc6058;
    }
    #yellow{
        background-color:#fec02f;
    }
    #green{
        background-color: #2aca3e;
    }
    .window-body{
        transition:0.5s;
        background-color: var(--winbg--);
        height: 91%;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .window-body-left{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .window-body-left-themes{
        width: 50%;
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .theme{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border:2px solid black;
        transition: 0.5s;
    }
    .theme:hover{
        cursor: pointer;
        transform: translateY(-20%);
        box-shadow: 2px 2px 2px var(--bdcolor--);
    }
    #light{
        background-color:white;
    }
    #dark{
        background-color: #192734;
    }
    .window-body-right{
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .window-body-left>img{
        border:2px solid var(--bdcolor--);
        width: 200px;
        height: 200px;
    }
    .window-body-right-box{
        padding: 5px 10px;
        height: 25%;
        width: 100%;
        background-color: var(--boxcolor--);
        border:1px solid #17a2b8;
        box-shadow: 30px 30px 0px  var(--boxshcolor--);
    }

    @media only screen and (max-width:768px) {
        .home1{
            height: 120vh;
        }
        .home1-window{
            height: 75%;

        }
        .window-header-icons{
            width: 25%;
        }
        .window-body{
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }
        .window-body-right{
            width: 80%;
            align-items: center;
            justify-content: center;
        }
        .window-body-right-box{
            width: 100%;
            height: fit-content;
            box-shadow: none;
        }
    }
    `