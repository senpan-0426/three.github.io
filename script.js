const question = [
    ["代表というあだ名をつけたのは誰？"],
    ["代表の兄弟構成は次のうちどれ？"],
    ["代表計算は次のうちどれ？"],
    ["代表は剣道何段でしょう？"],
    ["代表は飴を噛んださい何とと言ったでしょう？"],
    ["代表の誕生日はいつでしょう？"],
    ["代表の親衛隊の人数は？"],
    ["代表の旧出席番号はどれ？"],
    ["代表が動画で踊っていた場所はどこでしょう？"],
    ["代表の家にはトイレは何個あるでしょう？"],
    ["代表の身長と体重は？"],
    ["代表の得意教科は？"],
    ["代表の中学時代に振られた場所は？"],
    ["代表が中学時代告白前にやらかしたことは？"],
    ["代表の仮免のテストの点数は？"]
]

const choice = [
    [
        ["川崎"],
        ["川村"],
        ["りんのすけ"],
        ["自分でつけた"]
    ],
    [
        ["兄＆弟"],
        ["姉＆兄"],
        ["いない"],
        ["弟＆妹"]
    ],
    [
        ["x^n + y^n = z^n"],
        ["e^i^π + 1 = 0"],
        ["E = mc^2"],
        ["3 + 6 = 11"]
    ],
    [
        ["２段"],
        ["２級"],
        ["３段"],
        ["３級"]
    ],
    [
        ["しゃらくせー"],
        ["またつまらぬものを噛んでしまった"],
        ["かったぁ///"],
        ["おいしい"]
    ],
    [
        ["１０月２５日"],
        ["１月１３日"],
        ["６月１０日"],
        ["１２月３１日"]
    ],
    [
        ["０人"],
        ["１００人"],
        ["３人"],
        ["２人"]
    ],
    
]

let Phase = 0;

let Title        = document.getElementById("Title");
let startBtn     = document.getElementById("startBtn");

let Question     = document.getElementById("Question");
let questionNum  = document.getElementById("questionNum");
let questionText = document.getElementById("questionText");
let questionBtn1 = document.getElementById("questionBtn1");
let questionBtn2 = document.getElementById("questionBtn2");
let questionBtn3 = document.getElementById("questionBtn3");
let questionBtn4 = document.getElementById("questionBtn4");

const questionBtnArray = [questionBtn1,questionBtn2,questionBtn3,questionBtn4];
const answerArray = [2,1]
const randomQuestion = [];

startBtn.addEventListener("click",function(){Phase = 1;});

let answer = 0;

function Timer() {

    Title.style.display    = "none";
    Question.style.display = "none";

    switch(Phase){
        case 0 :
            Title.style.display = "block"
        break;
        case 1 :
        case 2 :
            Question.style.display = "block";
        break;
    }

    answer = answerArray[Phase - 1]
    questionNum.innerHTML = "問" + Phase
    questionText.innerHTML = question[Phase - 1];
}

setInterval(Timer,33)



for(let i = 0; i < questionBtnArray.length; i++){
    questionBtnArray[i].addEventListener("click",function(){
    
        if( i + 1 == answer){
            console.log("fffff")
        }else{
            console.log("hazure")
        }
        Phase++

    });
}
