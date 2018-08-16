import React from 'react';
import logo from './svg/logo.svg';
import './App.css';
import { StyleSheet, Text, View} from 'react-native'
import banner from './svg/banner.jpg';
import { MovieDb } from './movies/MovieDb.js';
import ReactDOM from 'react-dom';
import { Question } from './movies/question.js';
import {Alert} from 'react-alert-template-basic';



class App extends React.Component {
    movieDb = new MovieDb();
    movieQuestions;
    answersList;
    //new
    correctAnswer;
    

    constructor(props) {
        super(props);
        this.movieDb.GetMovies();
        this.state = { random: 0};
    }

    render() {
        return (
            <View>

                <View className="App-header">
                    <img src={logo} className="App-logo" />
                    <Text
                        style={styles.title}>Welcome to Movie Quiz!</Text>
                    <Text
                        style={styles.titleOne}>You will be presented with movie questions.
                  </Text>
                    <Text
                        style={styles.titleTwo}>Can you score 100 ? Please, Go ahead and click Begin button!
                  </Text>
                </View>
                <img style={{ width: 700, height: 220, marginLeft: 290, marginTop: 23 }} src={banner} className="sd" />
                <button style={{ marginLeft: 565, marginTop: 23, background: '#7caeff', padding: 10 }} onClick={() => this.showQuizQuestions()}>Begin</button>
            </View>
        );
    };

    showQuizQuestions() {

        this.movieDb.GetMovies();

        this.movieQuestions = new Array();
        this.answersList = new Array();
       this.correctAnswer = new Array();

        for (i = 0; i < 5; i++)
        {
            let random = Math.floor(Math.random() * this.movieDb.Movies.length);
            question = new Question(this.movieDb.Movies[random]);
            this.movieQuestions.push(question);

            itemList = new Array();
            answer = new Array();
            for (j = 0; j < 3; j++)
            {
                if (j == question.rightAnswer){
                    console.log(question.rightAnswer);
                    itemList.push(question.movie.year);
                    answer.push(question.rightAnswer);
                }
                    
                else
                {
                    year = this.movieDb.Movies[Math.floor(Math.random() * this.movieDb.Movies.length)].year;
                    while (year == question.movie.year) 
                        year = this.movieDb.Movies[Math.floor(Math.random() * this.movieDb.Movies.length)].year;
                    
                        itemList.push(year);
                }
            }
            this.answersList.push(itemList);
            //new
            this.correctAnswer.push(answer);
        }

        //console.log(this.movieQuestions);
        // console.log("PQP");
        // console.log(this.answersList);

        const element = (
            <div class="question">
             <View className="App-header">
            <img src={logo} className="App-logo" />
            <Text
                style={styles.title}>Answer the below questions</Text>
                <Text
                        style={styles.titleOne}>Thank you.
                  </Text>
            </View>
                <h3>When was the movie {this.movieQuestions[0].movie.name} released ?</h3>
                <div class="tile_div">
                    <button onClick={() => this.showQuizAns1(0)}>{this.answersList[0][0]}</button>
                    <button onClick={() => this.showQuizAns1(1)}>{this.answersList[0][1]}</button>
                    <button onClick={() => this.showQuizAns1(2)} class="last">{this.answersList[0][2]}</button>
                    <div class="clear"></div>
                </div>
                <h3>When was the movie {this.movieQuestions[1].movie.name} released ?</h3>
                <div class="tile_div">
                    <button onClick={() => this.showQuizAns2(0)}>{this.answersList[1][0]}</button>
                    <button onClick={() => this.showQuizAns2(1)}>{this.answersList[1][1]}</button>
                    <button onClick={() => this.showQuizAns2(2)} class="last">{this.answersList[1][2]}</button>
                    <div class="clear"></div>
                </div>
                <h3>When was the movie {this.movieQuestions[2].movie.name} released ?</h3>
                <div class="tile_div">
                    <button onClick={() => this.showQuizAns3(0)}>{this.answersList[2][0]}</button>
                    <button onClick={() => this.showQuizAns3(1)}>{this.answersList[2][1]}</button>
                    <button onClick={() => this.showQuizAns3(2)} class="last">{this.answersList[2][2]}</button>
                    <div class="clear"></div>
                </div>
                <h3>When was the movie {this.movieQuestions[3].movie.name} released ?</h3>
                <div class="tile_div">
                    <button onClick={() => this.showQuizAns4(0)}>{this.answersList[3][0]}</button>
                    <button onClick={() => this.showQuizAns4(1)}>{this.answersList[3][1]}</button>
                    <button onClick={() => this.showQuizAns4(2)} class="last">{this.answersList[3][2]}</button>
                    <div class="clear"></div>
                </div>
                <h3>When was the movie {this.movieQuestions[4].movie.name} released ?</h3>
                <div class="tile_div">
                    <button onClick={() => this.showQuizAns5(0)}>{this.answersList[4][0]}</button>
                    <button onClick={() => this.showQuizAns5(1)}>{this.answersList[4][1]}</button>
                    <button onClick={() => this.showQuizAns5(2)} class="last">{this.answersList[4][2]}</button>
                    <div class="clear"></div>
                </div>
                <button style={{marginTop: 40, marginBottom: 40}} onClick={() => this.showQuizQuestions()}>Play Again</button>
            </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
    }

  

    showQuizAns1(ans){
      if(ans == this.correctAnswer[0]){
          this.success();
        }else{
            
        this.Failure();
        }

    }

    showQuizAns2(ans){
        
        if(ans == this.correctAnswer[1]){
            this.success();
        }else{
            this.Failure();
        }

    }

    showQuizAns3(ans){
        
        if(ans == this.correctAnswer[2]){
           this.success();
        }else{
            this.Failure();
        }

    }

    showQuizAns4(ans){
        
        if(ans == this.correctAnswer[3]){
            this.success();
        }else{
            this.Failure();
        }

    }

    showQuizAns5(ans){
        
        if(ans == this.correctAnswer[4]){
            this.success();
        }else{
            this.Failure();
        }

    }

    success(){
        
        const element=(
        <div class = "alert alert-success">
      <strong>You've chosen right answer!</strong> 
      
      <button style={{ marginLeft: 565, marginTop: 23, background: '#7caeff', padding: 10 }} onClick={() => this.showQuizQuestions()}>Back to questions</button>
                </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
       
    }

    Failure(){
        
        const element=(
        <div class = "alert alert-danger">
      <strong>You've chosen wrong answer!</strong> 
      
      <button style={{ marginLeft: 565, marginTop: 23, background: '#7caeff', padding: 10 }} onClick={() => this.showQuizQuestions()}>Back to questions</button>
                </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
       
    }

}

const styles = StyleSheet.create({
 title: {
        padding: 0,
        color: 'white',
        textalign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    titleOne: {
        padding: 10,
        color: 'white',
        textalign: 'center',
        fontSize: 17,
    },
    titleTwo: {
        padding: 7,
        color: 'white',
        textalign: 'center',
        fontSize: 15,
    },

});

export default App;