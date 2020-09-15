const  db_questions = [
  {
    question : 'Qual a idade de João?',
    a: 19,
    b: 12,
    c: 50,
    d: 20,
    correct: 'd'
  },
  {
    question : 'Quem descobriu o Brasil?',
    a: 'Junior',
    b: 'Luiz',
    c: 'Pedro alvares cabral',
    d: 'João de melo',
    correct: 'c'
  },
  {
    question : 'Qual o país é o mais populoso?',
    a: 'Brasil',
    b: 'Estados Unidos',
    c: 'Canadá',
    d: 'Portugal',
    correct: 'a'
  },
  {
    question : 'Quanto é 1 + 1 ?',
    a: 5,
    b: 2,
    c: 10,
    d: 14,
    correct: 'b'
  },
]

var currentQuestion = 0
var score = 0
var elQuestion = document.getElementById('question')
var labelA = document.getElementById('a_text')
var labelB = document.getElementById('b_text')
var labelC = document.getElementById('c_text')
var labelD = document.getElementById('d_text')
var textNumber = document.getElementById('number_question')
var content = document.getElementById('content')

  loadQuestions = ()=>{
   
    if(db_questions[currentQuestion] != undefined){
      textNumber.innerHTML = `${currentQuestion + 1}° Pergunta`;
      elQuestion.innerHTML = db_questions[currentQuestion].question;
      labelA.innerHTML = db_questions[currentQuestion].a;
      labelB.innerHTML = db_questions[currentQuestion].b;
      labelC.innerHTML = db_questions[currentQuestion].c;
      labelD.innerHTML = db_questions[currentQuestion].d;
      
     
      currentQuestion++
      
    }else{
      
      content.style.display = 'none';
      showScore(score);
    }
 
 
}

loadQuestions();

verifyAnswer = ()=>{
  var answer = null
  var radio = document.getElementsByName('answer')
  
 
    for(let i = 0;i < radio.length;i++){

      if(radio[i].checked){
        answer = radio[i].id;
        radio[i].checked = false
        
      }
  }
  
  if(answer == db_questions[currentQuestion - 1].correct){
    
      score++;
      
  }

  loadQuestions()
  
  
  
 
}

showScore = (score)=>{
  
  if(score >= db_questions.length){
    document.getElementById('score').innerHTML = ` Parabens! Você acertou tudo :)`
  }
  document.getElementById('content_score').style.display = 'block'
  document.getElementById('total_score').innerHTML = ` ${score} / ${db_questions.length}`
}