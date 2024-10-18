

    //const question_array_new = new array();
    const question_array = ["What year was the World Economic Forum (WEF) founded?",
     "Who is the founder of the World Economic Forum (WEF)?",
     "Where is the World Economic Forum's annual meeting traditionally held?",
     "What is the primary objective of the World Economic Forum (WEF)?",
     "Which of the following is a key theme of the World Economic Forum's 2023 Annual Meeting?",
     "Which sectors are commonly discussed at the WEF annual meetings?",
     "What type of leaders attend the World Economic Forum?",
     "What initiative did the WEF launch in 2020 to help with the global COVID-19 recovery?",
     "Which organization works closely with the WEF to support global financial stability?",
     "How often does the World Economic Forum hold its Annual Meeting in Davos?"];
//const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const question_answer_correct_anser = [
{"question":"What year was the World Economic Forum (WEF) founded?", "answer":["1971","1985","1990","2000"],"correct_answer":"1971"},
{"question":"Who is the founder of the World Economic Forum (WEF)?", "answer":["Bill Gates","Klaus Schwab","Christine Lagarde","Elon Musk"],"correct_answer":"Klaus Schwab"},
{"question":"Where is the World Economic Forum's annual meeting traditionally held?", "answer":["New York","Geneva","Davos","Paris"],"correct_answer":"Davos"},
{"question":"What is the primary objective of the World Economic Forum (WEF)?", "answer":["Promote environmental awareness","Encourage global economic collaboration","Provide financial aid to developing countries","Regulate global stock markets"],"correct_answer":"Encourage global economic collaboration"},
{"question":"Which of the following is a key theme of the World Economic Forum's 2023 Annual Meeting?", "answer":["Technological innovation","Gender equality","Cooperation in a fragmented world","Digital currencies"],"correct_answer":"Cooperation in a fragmented world"},
{"question":"Which sectors are commonly discussed at the WEF annual meetings?", "answer":["Agriculture and Food","Energy and Environment","Health and Technology","All of the above"],"correct_answer":"All of the above"},
{"question":"What type of leaders attend the World Economic Forum?", "answer":["Government officials","Business executives","Academics and media leaders","All of the above"],"correct_answer":"All of the above"},
{"question":"What initiative did the WEF launch in 2020 to help with the global COVID-19 recovery?", "answer":["The Great Reset","Global Compact","One Health Initiative","Global Future Councils"],"correct_answer":"The Great Reset"},
{"question":"Which organization works closely with the WEF to support global financial stability?", "answer":["World Bank","International Monetary Fund (IMF)","United Nations","G7"],"correct_answer":"International Monetary Fund (IMF)"},
{"question":"How often does the World Economic Forum hold its Annual Meeting in Davos?", "answer":["Every year","Every two years","Every three years","Every five years"],"correct_answer":"Every year"}
];

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) { 
       
            // Generate random number 
            var j = Math.floor(Math.random() * (i + 1));
                       
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
          
        return array;
     }
      
      const questions = document.getElementById("question_data");
      let questionCount = 0;
      let score = 0;
      const user_card = document.getElementById("username");
      const quiz_card = document.getElementById("quiz");
       const playBtn = document.getElementById("start_quiz");
       const nextBtn = document.getElementById("nextBtn");
       const username = document.getElementById("username_data");
       var user_new = document.getElementById("username_new");
        const q_c_no = document.getElementById("q_c_no");
        const total_question = 10;
       
        const an_1 = document.getElementById("a_1");
        const an_2 = document.getElementById("a_2");
        const an_3 = document.getElementById("a_3");
        const an_4 = document.getElementById("a_4");
        const tim_rem = document.getElementById("time_rem");
        const answerButtons = document.getElementsByClassName("answer-text");
        const final_scores = document.getElementById("final_score");
        const review_ans = document.getElementById("review_answer");
        const review_questions = document.getElementById("review");
        const review_answersheet = document.getElementById("review_answersheet");

        let myarrQuestions = [];
        let myarrAnswer = [];
        let myarraMyans = [];
        let myarrCorranser = [];
        
        

        for(let button of answerButtons)
        {
            button.addEventListener("click", function(){
                
                
                myarraMyans.push(button.innerHTML);



                if(button.innerHTML === correct_answers)
                {
                    //alert("Correct");
                   button.classList.add("correct_answer", "disable");
                  
                    score++;
                }
                else{
                    //alert("wrong");
                    for(let btn of answerButtons)
                    {
                        if(btn.innerHTML === correct_answers)
                        btn.classList.add("correct_answer", "disable");
                       
                    }
                    button.classList.add("wrong_answer", "disable");
                    
                    score = score;
                }
                for(let btns of answerButtons){
                    btns.setAttribute("disabled", "true");
                }
                nextBtn.style.display = "block";
                console.log(myarraMyans);
            });
            
        }
        
       

        tim_rem.style.display = "none";
        q_c_no.style.display = "none";
        quiz_card.style.display = "none";
        questions.style.display = "none";
        an_1.style.display = "none";
        an_2.style.display = "none";
        an_3.style.display = "none";
        an_4.style.display = "none";
        nextBtn.style.display = "none";
        final_score.style.display = "none";
        review_answersheet.style.display = "none";

     /***********************************

     Quiz start here

     *************************************/

        nextBtn.addEventListener("click", function(){
           
            nextBtn.style.display = "none";

            questions.style.display = "block";
            an_1.style.display = "inline-block";
            an_2.style.display = "inline-block";
            an_3.style.display = "inline-block";
            an_4.style.display = "inline-block";
           
            tim_rem.style.display = "inline-block";
            
           
            
           
            if(questionCount < total_question){
            for(let i = 0; i < question_answer_correct_anser.length; i++)
            {
                
                if(question_answer_correct_anser[i].question === question_array_new[questionCount])
                {
                    
                    myarrAnswer.push(question_answer_correct_anser[i].answer);
                    myarrQuestions.push(question_array_new[questionCount]);
                    myarrCorranser.push(question_answer_correct_anser[i].correct_answer);
                    
                    questions.textContent = question_array_new[questionCount];
                    answer_nwe = shuffleArray(question_answer_correct_anser[i].answer);
                        an_1.innerHTML = answer_nwe[0];
                        an_2.innerHTML = answer_nwe[1];
                        an_3.innerHTML = answer_nwe[2];
                        an_4.innerHTML = answer_nwe[3];
                    //an_1.innerHTML = question_answer_correct_anser[i].answer[0];
                   // an_2.innerHTML = question_answer_correct_anser[i].answer[1];
                    //an_3.innerHTML = question_answer_correct_anser[i].answer[2];
                    //an_4.innerHTML = question_answer_correct_anser[i].answer[3];
                    correct_answers = question_answer_correct_anser[i].correct_answer;
                }
            }
            questionCount++;
        }
        else{
            quiz_card.style.display = "none";
            nextBtn.style.display = "none";
            tim_rem.style.display = "none";
            q_c_no.style.display = "none";
            final_score.style.display = "block";
            score_data.innerHTML = "Your Scores are " + score;
            document.getElementById("user_data").textContent = "🎉 " + username.value + " You did it! 🎉";
        }
            if(questionCount == 10)
            {
                nextBtn.value="Submit & close";
            }
            
            q_c_no.innerHTML = questionCount + "/" + total_question;
            for(let btns of answerButtons){
                btns.removeAttribute("disabled", "true");
                btns.classList.remove("correct_answer","disable");
                btns.classList.remove("wrong_answer","disable");
            }
            
        });




       playBtn.addEventListener("click", function(){
            var username_data = document.getElementById("username_data").value;
            if(username_data == "")
            {
                alert("Please fill the field");
            }
            else{
                
                    countdown( "tim_rem", 10, 0 );
                
            
            user_new.textContent = username.value;
            user_card.style.display = "none";
            quiz_card.style.display = "block";
            nextBtn.style.display = "none";
            question_array_new = shuffleArray(question_array);
            
            questions.style.display = "block";
                an_1.style.display = "inline-block";
                an_2.style.display = "inline-block";
                an_3.style.display = "inline-block";
                an_4.style.display = "inline-block";
               
                tim_rem.style.display = "inline-block";
            for(let i = 0; i < question_answer_correct_anser.length; i++)
                {
            if(question_answer_correct_anser[i].question === question_array_new[0])
                    {
                        myarrQuestions.push(question_array_new[questionCount]);
                        myarrAnswer.push(question_answer_correct_anser[i].answer);
            
                        myarrCorranser.push(question_answer_correct_anser[i].correct_answer);
                        questions.textContent = question_array_new[questionCount];
                        answer_nwe = shuffleArray(question_answer_correct_anser[i].answer);
                        an_1.innerHTML = answer_nwe[0];
                        an_2.innerHTML = answer_nwe[1];
                        an_3.innerHTML = answer_nwe[2];
                        an_4.innerHTML = answer_nwe[3];
                        //an_1.innerHTML = question_answer_correct_anser[i].answer[0];
                        //an_2.innerHTML = question_answer_correct_anser[i].answer[1];
                        //an_3.innerHTML = question_answer_correct_anser[i].answer[2];
                        //an_4.innerHTML = question_answer_correct_anser[i].answer[3];
                        correct_answers = question_answer_correct_anser[i].correct_answer;
                    }
                }
                questionCount++;  
                q_c_no.style.display = "block";
                q_c_no.innerHTML = questionCount + "/" + total_question; 
            } 
            
       });
     


review_ans.addEventListener("click", function(){
   
    review_answersheet.style.display = "block";
        for(let i = 0; i < myarrQuestions.length; i++)
        {
            const newDiv = document.createElement("div");
            const ansDiv = document.createElement("div");
            
            newDiv.classList.add("card_finla_score");
            ansDiv.classList.add("card_finla_score");
            newDiv.textContent = i + 1 + "  " + myarrQuestions[i];
            ansDiv.textContent = "(A) " + myarrAnswer[i][0] + " (B) " + myarrAnswer[i][1] + " (C) " + myarrAnswer[i][2] + " (D) " + myarrAnswer[i][3] + " ** Correct answer : " + myarrCorranser[i] + " ## My answer : " +  myarraMyans[i] ;
            
            review_answersheet.appendChild(newDiv);
            review_answersheet.appendChild(ansDiv);
        }
        myarrQuestions.length = 0;
        myarrAnswer.length = 0;
        myarrCorranser.length = 0;
        myarraMyans.length = 0;
     });
 
 
 review_questions.addEventListener("click", function(){
    review_answersheet.style.display = "none";
 });

 function getUsername() {
    let userdata = document.getElementById("username_data").value;
    document.getElementById("username_new").innerHTML = userdata;
  }

function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            
            quiz_card.style.display = "none";
            nextBtn.style.display = "none";
            tim_rem.style.display = "none";
            q_c_no.style.display = "none";
            final_score.style.display = "block";
            myarraMyans.push("No answer selected.");
            score_data.innerHTML = "Your Scores are " + score;
            document.getElementById("user_data").textContent = "🎉 " + username.value + " You did it! 🎉";
            
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}




