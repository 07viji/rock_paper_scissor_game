let first=confirm("Shall we play rock,paper or scissors?");
if(first){
    //game play start
    let  user_val=prompt("Please enter rock,paper or scissors");
    //user give their choice
    if(user_val){
        let myval=user_val.trim().toLowerCase();
        if(
            myval==="rock"||
            myval==="paper"||
            myval==="scissors"
        ){
            let computer_val=Math.floor(Math.random()*3+1);
            let computer_choice=
                computer_val===1
                ?"rock"
                :computer_val===2
                ?"paper"
                :"scissors";
            let final_result=
                user_val===computer_choice
                 ?"Tie Game!"
                 :user_val==="rock" && computer_choice==="paper"
                 ?`user_val:${user_val}\ncomputer_choice:${computer_choice}\nComputer Wins!!`
                 :user_val==="paper"&& computer_choice==="scissors"
                 ?`user_val:${user_val}\ncomputer_choice:${computer_choice}\nComputer Wins!!`
                 :user_val==="scissor"&&computer_choice==="rock"
                 ?`user_val:${user_val}\ncomputer_choice:${computer_choice}\nComputer Wins!!`
                 :`user_val:${user_val}\ncomputer_choice:${computer_choice}\nUser Wins!!!`;
            alert(final_result);
            let playagain=confirm("Do u wish to play again?");
            playagain ?location.reload():"OK,Thanks for playing";
      }else{
        alert("you didn't enter Rock either Paper or Scissor");
      }
    }
      else{
        alert("I think you changed your mind,maybe you play next time");
      }
    }else{
        alert("ok,maybe next time you play.");
    }
    
