<template>
<div id="app">

  <h1>Quizard.</h1>
 
  <div id="box" class="container">

    <!-- if quiz is in process display question -->
    <div v-if="quizInProcess === true">
      <div v-if="pos < questions.length">
        <form class="answer_form">
          <h3>Question {{pos+1}}</h3>
          <hr>
          <span>{{ questions[pos].text }}</span>
          <div
            v-for="answer in questions[pos].answers"
            :index="questions[pos].key"
            :key="answer">
            <button @click="nextQuestion(answer)" class="next_button">{{answer}}</button>
          </div>
        </form> 
      </div>
      <!-- show results -->
      <div v-else class="container">
        <h2>Your Answers</h2>
        <ul v-for="(k, index) in results" :key="k" class="answer_form">
          <hr>
          <h3>Question {{index+1}}</h3>
          <span>{{questions[index].text}}</span>
          <br>
          <div v-for="answer in questions[index].answers"
            :index="questions[index].key"
            :key="answer">
            <button v-if="answer === k" class="selected_button" disabled>{{answer}}</button>
            <button v-else class="next_button" disabled>{{answer}}</button>
          </div>
        </ul>
      </div> 
    </div>
 

    <!-- if quiz is not in process display instruction and prompt user to start the quiz -->
    <div v-else>
      <form>
        <h2>Untitled Quiz</h2>
        <hr>
        <h3>Instructions</h3>
        <span>Once you begin the quiz, you must answer all questions. 
          You cannot revisit a question after you have answered it and 
          you cannot skip any of the questions.</span><br>
        <button @click="takeQuiz" class="begin_button">Begin</button>
      </form>
    </div> 

  </div> 
</div> 
    
</template>



<script>
export default {
  name: 'app',
  props: {
    questions: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      results: [],
      pos: 0,
      quizInProcess: false,
    };
  },
  methods: {
    nextQuestion (answer) {
      this.results.push(answer);
      if ( this.pos < this.questions.length) {
        this.pos++;
      }
    },
    takeQuiz() {
      this.quizInProcess = true;
    }
  }
};
</script>

<style scoped>
#app {
  background-color: #D2B3A2;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  color: #F5F5F5;
  font-size: 3em;
  font-weight: bold;
}
h2 {
  color: #616161;
  font-size: 2em;
  font-weight: bold;
}
div > h2 {
  margin-left: 1em;
}
h3 {
  color: #777777;
  font-size: 1.75em;
}
span {
  color: #616161;
}

.begin_button {
  background-color: #333333;
  color: #F5F5F5;
  font-weight: bold;
  border-radius: 10px;
  width: 5em;
  margin-left: 75%;
  margin-top: 40px;

  padding-top: 3px;
  padding-bottom: 3px;
}
.next_button {
  background-color: #FFFFFF;
  color: #616161;
  border-width: 1px;
  width: 50%;
  margin-top: 20px;

  padding-top: 4px;
  padding-bottom: 4px;
}
form .next_button:hover {
  background-color: #333333;
  color: #F5F5F5;
}
.selected_button {
  background-color: #333333;
  color: #F5F5F5;
  border-width: 1px;
  width: 50%;
  margin-top: 20px;

  padding-top: 4px;
  padding-bottom: 4px;
}
.answer_form {
  text-align: center;
}

#box {
  background-color: #F8F8F8;
  margin-left: 10vw;
  margin-top: 2em;
  margin-bottom: 3em;
  width: 80vw;

  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}

@media only screen and (min-width: 768px) {
    html {
      font-size: 18px;
    }
    h1 {
        font-size: 7em;
    }
    #box {
      margin-left: 30vw;
      margin-top: 4em;
      width: 40vw;
    }
    .begin_button {
      margin-left: 85%;
    }

  }




</style>
