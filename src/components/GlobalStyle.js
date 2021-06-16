import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`
    :root{
        --bgcolor--:${(props)=>props.colors.bgcolor};
        --bdcolor--:${(props)=>props.colors.bdcolor};
        --boxcolor--:${(props)=>props.colors.boxcolor};
        --boxshcolor--:${(props)=>props.colors.boxshcolor};
        --txtcolor--:${(props)=>props.colors.txtcolor};
        --winbg--:${(props)=>props.colors.winbg};
        --secondarytext--${(props)=>props.colors.secondarytext};
        --acolor--:${(props)=>props.colors.acolor}
    }
    hr{
        border-top:none;
        border-bottom:1px solid var(--bdcolor--);
    }
    a{
        color:var(--acolor--);
        text-decoration:none;
    }
    li,p{
        color:var(--secondarytext--);
        font-size:16px;
        font-family:'helvetica'
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
        height: 74.6%;
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
        height: 30%;
        width: 90%;
        background-color: var(--boxcolor--);
        border:1px solid var(--acolor--);
        box-shadow: 30px 30px 0px  var(--boxshcolor--);
    }

    .home2{
        height:60vh;
        width:100%;
        background-color:var(--winbg--);
        display:flex;
        justify-content:center;
    }
    .home2-left{
        margin-top:1%;
        width:40%;
    }
    .home2-right{
        width:40%;
    }
    .home2-left-skills{
        display:flex;
        align-items:center;
        justify-content:space-around;
        width:100%;
        height:30%;
        background-color:var(--boxshcolor--);
    }
    .ul{
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:start;
        height:fit-content;
    }
    li{
        list-style:none;
    }
    .home2-right{
        margin-top:0%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .home2-right-code{
        background-color:var(--bgcolor--);
        height:50%;
        width:80%;
        border-radius:5px;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    code{
        align-items:center;
        font-size:17px;
        color:var(--acolor--);
    }
    .home2-right-social{
        height:30%;
    }


    @media only screen and (max-width:768px) {
        .home1{
            height: 120vh;
        }
        .home1-window{
            height: 74%;

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
        .home2{
            height:fit-content;
            width:100%;
            flex-direction:column;
            align-items:center;
            justify-content:space-evenly;
        }
        .home2-left{
            height:fit-content;
            width:97%
        }
        .home2-left-skills{
            padding:10px 0px;
            height:fit-content;
        }
        .home2-right{
            margin-top:2%;
            height:fit-content;
            width:97%;
        }
        .home2-right-code{
            padding:10px 0px;
            width:100%;
        }

    }
    `