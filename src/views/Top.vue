
<template>
  <body>
    <nav>
      <ul>
        <li><router-link to="/" style="text-decoration: none; color: inherit;">Home</router-link></li>
        <li><router-link to="/about" style="text-decoration: none; color: inherit;">About</router-link></li>
        <li><router-link to="/contact" style="text-decoration: none; color: inherit;">Contact</router-link></li>
        <li><router-link to="/top" style="text-decoration: none; color: inherit;">Top</router-link></li>
        <li><router-link to="/hello" style="text-decoration: none; color: inherit;">Hello</router-link></li>
        <li><router-link to="/goodbye" style="text-decoration: none; color: inherit;">Goodbye</router-link></li>
        <li><router-link to="/files" style="text-decoration: none; color: inherit;">404</router-link></li>
        <li><router-link to="/500" style="text-decoration: none; color: inherit;">500</router-link></li>
      </ul>
    </nav>
    <main>
      <h1>{{ title }}</h1>
      <button @click="changeTitle">Korean Lessons</button>
      <router-view></router-view>
      <container>
      <card-component class="card">
        <h1 slot="header">Wednesday January 12th 2022</h1>
          <div class="word">
            <div class="english">tooth</div>
            <div class="korean">오이</div>
            <div class="hear">
            <button class="read-button" @click="readKoreanWord">Speak</button>
            <div class="pronunciation">[ee]</div>
            </div>
          </div>
          <div class="word">
            <div class="english">cucumber</div>
            <div class="korean">오이</div>
            <div class="hear">
            <button class="read-button" @click="readKoreanWord">Speak</button>
            <div class="pronunciation">[o][ee]</div>
            </div>
          </div>
      </card-component>
        <card-component class="card">
        <h1 slot="header">Wednesday January 19th 2022</h1>
        <p slot="body">Body</p>
      </card-component>
        <card-component class="card">
        <h1 slot="header">Wednesday January 29th 2022</h1>
        <p slot="body">Body</p>
      </card-component>
</container>
    </main>
<!-- add an image -->
    <img src="https://www.90daykorean.com/wp-content/uploads/2014/10/Vowels-Hangeul-Keyboard-min.png" alt="">



    
  </body>
</template>

<script>
export default {
  data() {
    return {
    items: [
      { id: "tooth", text: "오이" },
      { id: "cucumber", text: "오이" },
      { id: "fox", text: "오이" }
    ]
  }
  },
  methods: {
    changeTitle() {
      this.title = 'Goodbye'
    },
    readKoreanWord() {
    var msg = new SpeechSynthesisUtterance();
    //msg.text = '이';
    //copilot define msg.text as the value of the div class=korean
    //make the msg.text as the value of the div class=korean
    msg.text = document.querySelector('.korean').textContent;


    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
  }
  }
//make a button to read aloud text to speech korean word

}
</script>

<style>
body {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

li{
  background-color: pink;
  color: white;
  border-radius: 1px;
  padding: 10px;
  text-decoration: none;
}
a router-link {
  color: white;
  text-decoration: none;
}
container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
card-component {
  background-color: #f5f5f5;

}
.card{
  background: #fff;
  color: #333;
  font-weight: 100;
  font-family: "Proxima Nova";
  text-align: center;
  padding: 3rem;
  width: 30%;
  margin: 50px;
  border-radius: 2rem;
  box-shadow: 0 8px 96px pink;
}

.card p{
  line-height: 1;
  margin: 0;
}

.card .fa-heart{
  color: hotpink;
}

.card .fa-bolt{
  color: gold;
}
h1 {
  font-size: 3.5em;
  color: #c6a0be;

}
.english{
  font-size: 2.5em;
  color: hotpink;
  font-weight: bold;
}
.korean{
  font-size: 2.9em;
  color: hotpink;
  font-weight: bold;
}

.hear{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.pronunciation{
  font-size: 2em;
  color: hotpink;
  font-weight: bold;
}
.read-button{
  background-color: #9dc9c1;
  color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  font-size: 1.5em;
}

</style>