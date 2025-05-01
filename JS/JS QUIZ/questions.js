//********************** QUIZ QUESTIONS *************************//
function calculateScore()
{
    var answer1 = document.form1.op1.value; //the variable answer1 gets the value from insed the form1 and the element i.e. the option chosen by the user
    var answer2 = document.form1.op2.value;
    var answer3 = document.form1.op3.value;
    var answer4 = document.form1.op4.value;
    var answer5 = document.form1.op5.value;
    var name = document.getElementById("username").value; //the variable name gets the value from ID username
    var score=0;

    //See if the user has missed any answer the warning message will appear in the modal section with id message    
    if (answer1 == ""){document.getElementById("message").innerHTML = "Question 1 is missing";}
    else if (answer2 == ""){document.getElementById("message").innerHTML = "Question 2 is missing";}
    else if (answer3 == ""){document.getElementById("message").innerHTML = "Question 3 is missing";}
    else if (answer4 == ""){document.getElementById("message").innerHTML = "Question 4 is missing";}
    else if (answer5 == ""){document.getElementById("message").innerHTML = "Question 5 is missing";}
        //calculate the score for each values and continue adding the score 
        //for question 1
    else{
        if(answer1 == " Disagree") { score=1;}
        if(answer1 == " Neutral"){ score=2;} 
        if(answer1 == " Agree") { score=3; }
        if(answer1 == " Strongly Agree") { score= 4;}
        if(answer1 == " Strongly Disagree") { score=0; }
            //for question 2
        if(answer2 == " Disagree"){ score+=1;}
        if(answer2 == " Neutral") { score+=2; }
        if(answer2 == " Agree") { score+=3;  }
        if(answer2 == " Strongly Agree") { score+= 4; }
            //for question 3
        if(answer3 == " Disagree"){ score+=1;}
        if(answer3 == " Neutral") { score+=2; }
        if(answer3 == " Agree") { score+=3;  }
        if(answer3 == " Strongly Agree") { score+= 4; }
        
        //for question 4
        if(answer4 == " Disagree"){ score+=1;}
        if(answer4 == " Neutral") { score+=2; }
        if(answer4 == " Agree") { score+=3;  }
        if(answer4 == " Strongly Agree") { score+= 4; } 
    
        //for question 5
        if(answer5 == " Disagree"){ score+=1;}
        if(answer5 == " Neutral") { score+=2; }
        if(answer5 == " Agree") { score+=3;  }
        if(answer5 == " Strongly Agree") { score+= 4; }

        //array for the range with the variable position 0 for Excellent and 4 for very poor
        var remarks = ["Excellent", "Good", "Average", "Poor", "Very poor"]; //
        //array of images for a range of images in the same order 
        var images = ["img/excellent.gif", "img/good.gif", "img/average.gif", "img/poor.gif", "img/vpoor.gif"]
        var range;
        if(score<="20" && score>="16") { range = 0;}
        if(score<="15" && score>="12") { range = 1;}
        if(score<="11" && score>="10") { range = 2;}
        if(score<="9" && score>="6") { range = 3;}
        if(score<="5") { range = 4;}

        //The modal with the result
        document.getElementById("message").innerHTML = remarks[range];
        document.getElementById("result").innerHTML = "Hi " + name +" Your score is: "+ score;
        document.getElementById("img").src = images[range];
        }
}