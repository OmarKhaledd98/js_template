class Settings {
    constructor (){
    this.settingDom    = document.querySelector(".settings");
    this.quizDom       = document.querySelector(".quiz");
    this.categoryDom   = document.querySelector("#category");
    this.nQuestionsDom = document.querySelector("#nQuestions");
    this.starBtnDom    = document.querySelector("#startbtn");
    this.difficultyDom = [ 
        document.querySelector("#easy"),
        document.querySelector("#meduim"),
        document.querySelector("#hard"),
    
    ];
    this.starBtnDom.addEventListener("click", this.startQuizApp);
    }
    startQuizApp = () => {
        console.log("app started");
    }
}

export default Settings;


// https://opentdb.com/api.php?amount=5&category=9&difficulty=easy  genral
// https://opentdb.com/api.php?amount=5&category=21&difficulty=medium  sport
// https://opentdb.com/api.php?amount=5&category=23&difficulty=medium  history
