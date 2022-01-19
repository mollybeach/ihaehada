
<template>
  <body>
    <nav>
      <ul>
        <li><router-link to="/"></router-link></li>

      </ul>
    </nav>
    <main>
      <h1>{{ title }}</h1>
      <router-view></router-view>
      <div class="div-top">
            <card-component class="top-card">
        <h1 slot="header">Korean Lessons</h1>
          <div class="word">
            <div class="english">hello</div>
            <div class="korean korean8">안녕하세요</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord8">Speak</button>
              <div class="pronunciation">[an-nyeong-ha-se-yo?]</div>
            </div>
          </div>
          <div class="word">
            <div class="english">I</div>
            <div class="korean korean9">저는</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord9">Speak</button>
              <div class="pronunciation">[jeo-neun?]</div>
            </div>
          </div>
            <div class="word">
            <div class="english">to be; is; I am</div>
            <div class="korean korean10">  저는말리입니다</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord10">Speak</button>
              <div class="pronunciation">[jeo-neun(molly)imnida ]</div>
            </div>
          </div>
            <div class="word">
            <div class="english">nice to meet you</div>
            <div class="korean korean11">반갑습니다</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord11">Speak</button>
              <div class="pronunciation">[ban-gap-seum-nida]</div>
            </div>
          </div>
            </card-component>
            
      </div>
      <container>

<table class="content-table">
  <caption>Vowels</caption>
  <thead>
    <tr>
          <th>Romanized </th>
          <th>Korean</th>
    </tr>
  </thead>
  <tbody>
    <tr class="active-row">
      <td>[ah]</td>
      <td><button class="read-button vowel1" @click="readKoreanVowel1">ㅏ</button></td>
    </tr>
    <tr class="active-row">
      <td>[yah]</td>
      <td><button class="read-button vowel2" @click="readKoreanVowel2">ㅑ</button></td>
    </tr>
    <tr class="active-row">
      <td>[uh]</td>
      <td><button class="read-button vowel3" @click="readKoreanVowel3">ㅓ</button></td>
    </tr>
    <tr class="active-row">
      <td>[yuh]</td>
      <td><button class="read-button vowel4" @click="readKoreanVowel4">ㅕ</button></td>
    </tr>
    <tr class="active-row">
      <td>[o]</td>
      <td><button class="read-button vowel5" @click="readKoreanVowel5">ㅗ</button></td>
    </tr>
    <tr class="active-row">
      <td>[yo]</td>
      <td><button class="read-button vowel6" @click="readKoreanVowel6">ㅛ</button></td>
    </tr>
    <tr class="active-row">
      <td>[oo]</td>
      <td><button class="read-button vowel7" @click="readKoreanVowel7">ㅜ</button></td>
    </tr>
    <tr class="active-row">
      <td>[yoo]</td>
      <td><button class="read-button vowel8" @click="readKoreanVowel8">ㅠ</button></td>
    </tr>
    <tr class="active-row">
      <td>[eu]</td>
      <td><button class="read-button vowel9" @click="readKoreanVowel9">ㅡ</button></td>
    </tr>
    <tr class="active-row">
      <td>[ee]</td>
      <td><button class="read-button vowel10" @click="readKoreanVowel10">ㅣ</button></td>
    </tr>

  </tbody>
</table>

      <card-component class="card">
        <h1 slot="header">Wednesday January 12th 2022</h1>
          <div class="word">
            <div class="english">tooth</div>
            <div class="korean korean1">이</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord1">Speak</button>
              <div class="pronunciation">[ee]</div>
            </div>
          </div>
          <div class="word">
            <div class="english">cucumber</div>
            <div class="korean korean2">오이</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord2">Speak</button>
              <div class="pronunciation">[o][ee]</div>
            </div>
          </div>
          <div class="word">
            <div class="english">child</div>
            <div class="korean korean3">아이</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord3">Speak</button>
              <div class="pronunciation">[ah][ee]</div>
            </div>
          </div>
          <div class="word">
            <div class="english">reason</div>
            <div class="korean korean4">이유</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord4">Speak</button>
              <div class="pronunciation">[ee][yoo]</div>
            </div>
          </div>
            <div class="word">
            <div class="english">milk</div>
            <div class="korean korean5">우유</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord5">Speak</button>
              <div class="pronunciation">[oo][yoo]</div>
            </div>
          </div>
            <div class="word">
            <div class="english">fox</div>
            <div class="korean korean6">여우</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord6">Speak</button>
              <div class="pronunciation">[yuh][oo]</div>
            </div>
          </div>
            <div class="word">
            <div class="english">yo-yo</div>
            <div class="korean korean7">요요</div>
            <div class="hear">
              <button class="read-button" @click="readKoreanWord7">Speak</button>
              <div class="pronunciation">[yo][yo]</div>
            </div>
          </div>
      </card-component>
        <card-component class="card">
        <h1 slot="header">Wednesday January 19th 2022</h1>
      </card-component>
        <card-component class="card">
        <h1 slot="header">Wednesday January 25th 2022</h1>
      </card-component>
</container>
    </main>
<!-- add an image -->




    
  </body>
</template>

<script>
export default {
  data() {
    return {
    items: [
      { id: "tooth", text: "이" },
      { id: "cucumber", text: "오이" },
      { id: "child", text: "오이" },
      { id: "fox", text: "오이" }
    ]
  }
  },
  methods: {
    changeTitle() {
      this.title = 'Goodbye'
    },
    readKoreanWord1() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean1').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
  },
    readKoreanWord2() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean2').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
  },
      readKoreanWord3() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean3').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
  },
    readKoreanWord4() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean4').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
  },
    readKoreanWord5() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean5').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
  },
    readKoreanWord6() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean6').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
  },
    readKoreanWord7() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean7').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanWord8() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean8').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanWord9() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean9').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
      },
    readKoreanWord10() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean10').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
  },
    readKoreanWord11() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.korean11').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanVowel1() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.vowel1').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
  },
    readKoreanVowel2() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.vowel2').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanVowel3() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.vowel3').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanVowel4() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.vowel4').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanVowel5() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.vowel5').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanVowel6() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.vowel6').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanVowel7() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.vowel7').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanVowel8() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.vowel8').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanVowel9() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.vowel9').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },
    readKoreanVowel10() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.vowel10').textContent;
    msg.lang = 'ko-KR';
    window.speechSynthesis.speak(msg);
    },

    
  
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
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.div-top{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
card-component {
  background-color: #f5f5f5;

}
.top-card{
  background: #fff;
  color: #333;
  font-weight: 100;
  font-family: "Proxima Nova";
  text-align: center;
  width: 80%;
  border-radius: 2rem;
  box-shadow: 0 8px 96px pink;

}

.card{
  background: #fff;
  color: #333;
  font-weight: 100;
  font-family: "Proxima Nova";
  text-align: center;
  padding: 3rem;
  border-radius: 2rem;
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
  font-size: 2.5em;
  color: #c6a0be;
}
caption {
  font-size: 3.5em;
  color: #c6a0be;
}
.english{
  font-size: 1.9em;
  color: hotpink;
  font-weight: bold;
}
.korean{
  font-size: 2.5em;
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
  font-size: 1.2em;
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
* {
  font-family: sans-serif; /* Change your font family */
}

.content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
  background-color: #c6a0be;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #c6a0be;
}

.content-table tbody tr.active-row {
  font-weight: bold;
  color: #c6a0be;
}

</style>