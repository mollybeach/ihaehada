
<template>
  <body>
    <nav>
      <ul>
        <li><router-link to="/"></router-link></li> 
      </ul>
    </nav>
    <main>
      <h1>{{ title }}</h1>
      <div class="div-top">
      <router-view></router-view>
      <card-component class="top-card">
      <h1 slot="header">Korean Lessons
        <button slot="button" class="read-button">
        <img src="https://icons.veryicon.com/png/o/miscellaneous/vue3-ebook/speak-5.png" alt="speak-icon" style="height: 30px; font-size:0.5rem">
      </button>
      </h1>
      <div class="word">
      <div  v-for="item in items.slice(0,3)" :key=item.id > 
      <div class="english">{{item.id}}</div>
      <div class="hear" v-for="value in item.values" :key=value.values v-on:click="readAloud(value.korean)">
          <button class="read-button korean">{{value.korean}}</button>
          <div class="pronunciation">{{value.romance}}</div>
          </div>
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
   <tr class="active-row" >
     <tr  class="active-row" v-for="vowel in vowels" :key=vowel.id  > 
       <td class="pronunciation">{{vowel.id}}</td>
        <td  ><button class="read-button korean" v-on:click="readAloud(vowel.text)" >{{vowel.text}}</button></td>
     </tr>
</table>
<card-component class="card">
      <h1 slot="header">Wednesday January 12th 2022</h1>
      <div class="word">
      <div  v-for="item in items.slice(3,11)" :key=item.id > 
      <div class="english">{{item.id}}</div>
      <div class="hear" v-for="value in item.values" :key=value.values v-on:click="readAloud(value.korean)">
          <button class="read-button korean">{{value.korean}}</button>
          <div class="pronunciation">{{value.romance}}</div>
          </div>
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
    </body>
</template>

<script>
export default {
  data() {
    return {
    items: [
      //greetings
      { id: "hello", values: [{  
                                  korean: "안녕하세요",
                                  romance: "ahn-nyeong-ha-se-yo?"
                              }] 
            },
      { id: "to be; is; I am", values: [{  
                                  korean: "저는말리입니다",
                                  romance: "jeo-neun(molly)imnida"
                              }] 
            },
      { id: "nice to meet you", values: [{  korean: "반갑습니다",
                                  romance: "ban-gap-seum-nida"
                              }] 
            },
      //day 1
      { id: "tooth", values: [{  
                                  korean: "이",
                                  romance: "ee"
                              }] 
            },
      { id: "cucumber", values: [{  
                                  korean: "오이",
                                  romance: "oh-ee"
                                  }]
            },
      { id: "child", values: [{  
                                  korean: "아이",
                                  romance: "ah-ee"
                              }] 
            },
      { id: "reason", values: [{  korean: "이유",
                                  romance: "ee-yoo"
                              }] 
            },
      { id: "milk", values: [{  
                                  korean: "우유",
                                  romance: "oh-yoo"
                              }]
            },
      { id: "fox", values: [{  
                                  korean: "여우",
                                  romance: "yuh-ooh"
                            }] 
            },
      { id: "yo-yo", values: [{  
                                  korean: "요요",
                                  romance: "yo-yo"
                              }] 
            },
      //day2
            { id: "teacher", values: [{  
                                  korean: "선생님",
                                  romance: "seon-saeong-nim?"
                              }] 
            },
            //teacher, yes , in peace, please stay, please go, next week
            { id: "yes", values : [{
                                  korean: "네",
                                  romance: "ne"
                            }]
            },
            { id: "in peace", values : [{
                                  korean: "평화로운",
                                  romance: "pyun-ha-ro-neun"
                            }]
            },
            { id: "please stay", values : [{
                                  korean: "잠시만요",
                                  romance: "jim-sim"
                            }]
            },
            { id: "please go", values : [{
                                  korean: "잠시만요",
                                  romance: "jim-sim"
                            }]
            },
            { id: "next week", values : [{
                                  korean: "다음주",
                                  romance: "da-eum-ju-e"
                            }]
            },
                        { id: "again", values : [{
                                  korean: "ㅇ",
                                  romance: "Do Do"
                            }]
            }
      

    ],
    vowels: [
      { id: "ah", text: "ㅏ" },
      { id: "yah", text: "ㅑ" },
      { id: "uh", text: "ㅓ" },
      { id: "yuh", text: "ㅕ" },
      { id: "o", text: "ㅗ" },
      { id: "yo", text: "ㅛ" },
      { id: "oo", text: "ㅜ" },
      { id: "yoo", text: "ㅠ" },
      { id: "eu", text: "ㅡ" },
      { id: "ee", text: "ㅣ" }
    ]  
  }
  },
  methods: {
    changeTitle() {
      this.title = 'Goodbye'
    },
    //write the method for readAloud() speechSynthesis.speak(utterance) in korean the word that is passed as
    readAloud(word) {
      let msg = new SpeechSynthesisUtterance();
      msg.text = word;
      msg.lang = 'ko-KR';
      speechSynthesis.speak(msg);
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
  padding: 20px 0px 20px 0px;

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
  border: 2px solid #73bbae;
}
.read-button:hover{
  background-color: #c6a0be;
  border-radius: 10px;

}


.read{
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