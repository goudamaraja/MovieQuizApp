import React from 'react';
import logo from './svg/logo.svg';
import './App.css';
import { StyleSheet, Text, View} from 'react-native'
import banner from './svg/banner.jpg';
import { MovieDb } from './movies/MovieDb.js';
import ReactDOM from 'react-dom';

class App extends React.Component {
    movieDb = new MovieDb();

    constructor(props) {
        super(props);
                this.movieDb.GetMovies();
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
                <h3>When does {this.movieDb.Movies[4].name} has been released ?</h3>
                <div class="tile_div">
                    <button>{this.movieDb.Movies[4].year}</button>
                    <button>{this.movieDb.Movies[6].year}</button>
                    <button class="last">{this.movieDb.Movies[11].year}</button>
                    <div class="clear"></div>
                </div>
                <h3>When does {this.movieDb.Movies[6].name} has been released ?</h3>
                <div class="tile_div">
                    <button>{this.movieDb.Movies[1].year}</button>
                    <button>{this.movieDb.Movies[6].year}</button>
                    <button class="last">{this.movieDb.Movies[9].year}</button>
                    <div class="clear"></div>
                </div>
                <h3>When does {this.movieDb.Movies[11].name} has been released ?</h3>
                <div class="tile_div">
                    <button>{this.movieDb.Movies[9].year}</button>
                    <button>{this.movieDb.Movies[11].year}</button>
                    <button class="last">{this.movieDb.Movies[5].year}</button>
                    <div class="clear"></div>
                </div>
                <h3>When does {this.movieDb.Movies[8].name} has been released ?</h3>
                <div class="tile_div">
                    <button>{this.movieDb.Movies[8].year}</button>
                    <button>{this.movieDb.Movies[9].year}</button>
                    <button class="last">{this.movieDb.Movies[10].year}</button>
                    <div class="clear"></div>
                </div>
                <h3>When does {this.movieDb.Movies[14].name} has been released ?</h3>
                <div class="tile_div">
                    <button>{this.movieDb.Movies[15].year}</button>
                    <button>{this.movieDb.Movies[14].year}</button>
                    <button class="last">{this.movieDb.Movies[10].year}</button>
                    <div class="clear"></div>
                </div>
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