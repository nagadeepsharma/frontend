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
        --acolor--:${(props)=>props.colors.acolor};
        --btncolor--:${(props)=>props.colors.btncolor};
    }
    html{
        scroll-behavior:smooth;
    }
    .left-bars{
        width:250px;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
    }
    .switch{
        display:flex;
        background-color:var(--winbg--);
        justify-content:space-between;
        width: 30%;
        height: 25px;
        border-radius: 50px;
        margin:10px 0px;
        border:1px solid var(--acolor--);
        padding:0px 2px;
    }
    .checkbox{
        visibility: hidden;
    }
    .checkbox:checked+label{
        transition: .4s;
        transform: translateX(52px);
    }
    label{
        margin-top:0.8px;
        margin-left:-102px;
        width: 23px;
        height: 23px;
        transition: .4s;
        border-radius: 50px;
        cursor: pointer;
        background-color: var(--btncolor--);
        
    }
    hr{
        border-top:none;
        border-bottom:1px solid var(--bdcolor--);
    }
    a{
        color:var(--acolor--);
        text-decoration:none;
        font-family:'helvetica';
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
        padding-top:5px;
        background-color:var(--bgcolor--);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;    
        height: 73.8%;
        width: 100%;
        border:1px solid var(--bdcolor--);
        box-shadow: 0px 0px 1px rgb(124, 116, 116);
    }
    .window-header{
        // border-top-left-radius: 10px;
        // border-top-right-radius: 10px;
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
    .window-header-contact a{
        color:var(--txtcolor--);
        
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
        transition:0.5s;
        height:63vh;
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

    .home3{
        display:flex;
        flex-direction:column;
        height:fit-content;
        width:100%;
        background-color:var(--bgcolor--);
        align-items:center;
        justify-content:center;
    }
    .home3-featured{
        padding:20px 0px;
        height:100%;
        width:70%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;

    }
    .post-tags{
        display:flex;
        justify-content:space-evenly;
        flex-wrap:wrap;
    }
    .post-tags>p{
        font-size:13px;
        border-radius:1px;
        padding:3px 10px;
        background-color:var(--bgcolor--);
    }
    .home3-featured>img{
        height:100%;
        width:50%;
        border:1px solid var(--bdcolor--);
    }
    .img-details{
        padding:0px 15px;
    }
    .img-details>a>button{
        width:250px;
        height:30px;
        background-color:var(--btncolor--);
        border:none;
        color:#f4f4f4;
        transition:0.3s;
        cursor:pointer;
        :hover{
            opacity:0.8;
        }
    }

    .home4{
        background-color:var(--winbg--);
        height:fit-content;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .home4-title{
        height:20%;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:var(--winbg--);
    }
    .home4-projects{
        height:80%;
        width:100%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        margin-bottom:0px;
        flex-wrap:wrap;
        padding-bottom:10px;
    }
    .home4-post{
        margin:15px 15px;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        border:1px solid var(--bdcolor--);
        width:20%;
        height:fit-content;
        box-shadow: -2px 7px 10px -9px rgb(0 0 0 / 75%);
    }
    .post-img{
        height:100%;
        width:100%;
        border-bottom:1px solid var(--bdcolor--);
    }
    .post-img>img{
        height:150px;
        width:100%;
    }
    .post-details{
        margin-left:7px;
        margin-bottom:6px;
    }
    .home5{
        height:45vh;
        width:100%;
        background-color:var(--bgcolor--);
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .home5-content>h1>span{
        font-size:50px;
    }
    .home5-content{
        display:flex;
        padding:10px 10px;
        width:40%;
        align-items:center;
        justify-content:space-evenly;
    }
    .home5-content>button{
        height:30%;
        width:50%;
        border:none;
        background-color:var(--btncolor--);
        color:#f4f4f4;
        cursor:pointer;
        font-size:16px;
    }
    .home6{
        height:fit-content;
        background-color:var(--winbg--);
    }
    .home6-title{
        height:15%;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:var(--winbg--);
        margin-bottom:1%;
    }
    .home6-contact{
        height:85%;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:center;
        padding-bottom:5px;
    }
    .inputs{
        background-color:var(--bgcolor--);
        border:1px solid var(--bdcolor--);
        border-radius:5px;
        width:40%;
        padding:10px 15px;
        height:fit-content;
    }
    input[type="text"]{
        width:99%;
        height:32px;
        border:1px solid var(--bdcolor--);
        border-radius:5px;
    }
    textarea{
        border:1px solid var(--bdcolor--);
        border-radius:5px;
        height:100px;
        width:99%;
    }
    .inputs>button{
        width:99%;
        height:34px;
        border:none;
        background-color:var(--btncolor--);
        color:#f4f4f4;
        cursor:pointer;
    }
    body{
        background-color:var(--winbg--);
    }
    .blogs{
        background-color:var(--winbg--);
        height:fit-content;
    }
    .blog-section{
        padding:5px 5px;
        height:fit-content;
        display:flex;
        flex-wrap:wrap;
        wdith:100%;
    }
    .blogs-blog{
        height:fit-content;
        width:22%;
        margin:5px 5px;
        padding:5px 10px;
        border:1px solid var(--bdcolor--);
        background-color:var(--bgcolor--);
    }
    .detail{
        width:100%;
        height:fit-content;
        overflow:hidden;
    }
    .particular{
        width:100%;
        height:fit-content;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .blog-content{
        width:60%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:start;
        height:fit-content;
    }
    .blog-content>p{
        display:flex;
        flex-direction:column;
    }
    .blog-content>div{
        width:100% !important;
    }
    .blog-content>div>pre{
        overflow:auto;
    }
    .blog-content>p>img{
        width:100% !important;
        height:50% !important;
    }

    @media only screen and (max-width:768px) {
        .detail{
            width:100%;
            height:fit-content;
            overflow:hidden;
        }
        .particular{
            width:95%;
            height:fit-content;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        .blog-content{
            width:90%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:flex-start;
            height:fit-content;
        }
        .blog-content>p{
            display:flex;
            flex-direction:column;
            font-size:13px;
        }
        .blog-content>h1{

            font-size:15px;
        }
        .blog-content>div{
            display:flex;
            flex-direction:column;
            background-color:var(--bgcolor--) !important;
            width:100% !important;
            align-items:start;
        }
        .blog-content>div>pre{
            overflow:auto;
        }

        .blog-content>p>img{
            width:100% !important;
            height:50% !important;
        }
        .home1{
            height: 120vh;
        }
        .home1-wrap{
            width:90%;
        }
        .home1-window{
            height: 74.1%;

        }
        .window-header-icons{
            width: 25%;
        }
        .window-body{
            overflow:hidden;
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
        .home3{
            height:fit-content;
        }
        .home3-featured{
            width:90%;
            margin-top:3%;
            flex-direction:column;
        }
        .home3-featured>img{
            width:100%;
        }
        .img-details{
            width:100%;
        }
        .img-details>a>button{
            margin-bottom:5%;
        }

        .home4-projects{
            flex-direction:column;
        }
        .home4-post{
            width:80%;
            height:90%;
        }
        .inputs{
            width:90%;
        }
        .home5-content{
            width:80%;
            height:60%;
            flex-direction:column;
        }
        .switch{
            display:flex;
            align-items:center;
            overflow:hidden;
            padding-left: 4px;
            padding-right: 1px;
            height:30px;
        }
        label{
            height:25px;
            width:25px;
        }
        .checkbox:checked+label{
            transition: .4s;
            transform: translateX(49px);
            overflow:hidden;
        }
        .blog-section{
            flex-direction:column;
        }
        .blogs-blog{
            width:fit-content;
        }

    }
    `