<template>
  <body>
    <main>
      <div class="div-top">
        <div class="top-card">
          <h1 slot="header">
            Korean Lessons
            <button slot="button" class="read-button">
              <img src="https://icons.veryicon.com/png/o/miscellaneous/vue3-ebook/speak-5.png" alt="speak-icon" style="height: 30px; font-size: 0.5rem" />
            </button>
          </h1>
          <div class="word">
            <div v-for="phrase in phrases.slice(0,9)" :key="phrase.id">
              <div class="english">{{phrase.id}}</div>
              <div class="hear" v-for="value in phrase.values" :key="value.values" v-on:click="readAloud(value.korean)">
                <button class="read-button korean">{{value.korean}}</button>
                <div class="pronunciation">{{value.romance}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <table class="content-table">
          <caption> Vowels</caption>
          <thead>
            <tr>
              <th>Romanized</th>
              <th>Korean</th>
            </tr>
          </thead>
          <tr class="active-row"></tr>
          <tr class="active-row" v-for="vowel in vowels" :key="vowel.id">
            <td class="pronunciation">{{vowel.id}}</td>
            <td>
              <button class="read-button korean" v-on:click="readAloud(vowel.text)"> {{vowel.text}}</button>
            </td>
          </tr>
          
        </table>
      </div>
            <div class="container">
        <table class="content-table">
          <caption> Consonants</caption>
          <thead>
            <tr>
              <th>Romanized</th>
              <th>Korean</th>
            </tr>
          </thead>
          <tr class="active-row"></tr>
          <tr class="active-row" v-for="consonant in consonants" :key="consonant.id">
            <td class="pronunciation">{{consonant.id}}</td>
            <td>
              <button class="read-button korean" v-on:click="readAloud(consonant.text)"> {{consonant.text}}</button>
            </td>
          </tr>
          
        </table>
      </div>
        <div class="card">
          <h1 slot="header">Wednesday January 12th 2022</h1>
          <div class="word">
            <div v-for="item in items.slice(0,7)" :key="item.id">
              <div class="english">{{item.id}}</div>
              <div class="hear" v-for="value in item.values" :key="value.values" v-on:click="readAloud(value.korean)">
                <button class="read-button korean">{{value.korean}}</button>
                <div class="pronunciation">{{value.romance}}</div>
              </div>
            </div>
          </div>
      
        <div class="card">
          <h1 slot="header">Wednesday January 19th 2022</h1>
          <div class="word">
            <div v-for="item in items.slice(7,21)" :key="item.id">
              <div class="english">{{item.id}}</div>
              <div class="hear" v-for="value in item.values" :key="value.values" v-on:click="readAloud(value.korean)">
                <button class="read-button korean">{{value.korean}}</button>
                <div class="pronunciation">{{value.romance}}</div>
              </div>
            </div>
          </div>
        </div>


        <div class="card">
          <h1 slot="header">Wednesday January 26th 2022</h1>
          <div class="word">
            <div v-for="item in items.slice(21,35)" :key="item.id">
              <div class="english">{{item.id}}</div>
              <div class="hear" v-for="value in item.values" :key="value.values" v-on:click="readAloud(value.korean)">
                <button class="read-button korean">{{value.korean}}</button>
                <div class="pronunciation">{{value.romance}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h1 slot="header">Wednesday Feb 2nd 2022</h1>
          <div class="word">
            <div v-for="item in items.slice(35,37)" :key="item.id">
              <div class="english">{{item.id}}</div>
              <div class="hear" v-for="value in item.values" :key="value.values" v-on:click="readAloud(value.korean)">
                <button class="read-button korean">{{value.korean}}</button>
                <div class="pronunciation">{{value.romance}}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  </body>
</template>


<script>
export default {

  data() {
    return {
      phrases: [
      //week1 : hello, to be, nice to meet you
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
      //week2 : teacher (seon-saeng-nim), yes(ne), in peace (an-nyeong-hi), please(stay) (gye-se-yo), please go (ga-se-yo), next week (da-euym-ju-e), to meet (man-na-yo), again (do do)
      { id: "teacher", values: [{  
                                  korean: "선생님",
                                  romance: "seon-saeong-nim"
                              }] 
    },
    { id: "yes", values : [{
                                  korean: "네",
                                  romance: "ne"
                            }]
    },
    {id: "in peace", values: [{  
                                  korean: "안녕하",
                                  romance: "ahn-nyeong-ha"
                              }]
    },
    { id: "stay", values: [{  
                                  korean: "ㄱㅕㅣㄱㅔㅣ",
                                  romance: "gye-se-yo"
                              }]
    },
    { id: "go", values: [{  
                                  korean: "가",
                                  romance: "ga-se-yo"
                              }]
    },
    { id: "next week", values: [{  
                                  korean: "다음주어ㅣ",
                                  romance: "da-euym-ju-e"
                              }]
    },
    { id: "to meet", values: [{  
                                  korean: "만나요",
                                  romance: "man-na-yo"
                              }]
    }],
    items: [
      //week 1 : tooth, cucumber, child, reason, milk, fox, yo-yo
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
      //week2 : tree, too(much), duck, us/we, country, no, elder sister(male speaker), mother, to buy, to drink, afternoon, one, maybe, head
      {id : "tree", values:[{
                                korean:"나무",
                                romance:"nah-mooh"
                            }],
      
      },
      {id : "too(much)", values:[{
                                korean:"너무",
                                romance:"nuh-mooh"
                            }],
      
      },
      {id : "duck", values:[{
                                korean:"오리",
                                romance:"oh-ree"
                            }],
      
      },
      {id : "us/we", values:[{
                                korean:"우리",
                                romance:"ooh-ree"
                            }],
      
      },
      {id : "country", values:[{
                                korean:"나라",
                                romance:"nah-rah"
                            }],
      
      },
      {id : "no", values:[{
                                korean:"아니오",
                                romance:"ah-nee-oh"
                            }],
      
      },
      {id : "elder sister", values:[{
                                korean:"누나",
                                romance:"nooh-nah"
                            }],
      
      },
      {id : "mother", values:[{
                                korean:"어머니",
                                romance:"uh-muh-nee"
                            }],
      
      },
      {id : "to buy", values:[{
                                korean:"사요",
                                romance:"sah-yoh"
                            }],
      },
      {id : "to drink", values:[{
                                korean:"마ㅈㅕ요",
                                romance:"mah-syuh-yoh"
                            }],
      },
      {id : "afternoon", values:[{
                                korean:"오후",
                                romance:"oh-hooh"
                            }],
      },
      {id : "one", values:[{
                                korean:"하나",
                                romance:"hah-nah"
                            }],
      },
      {id : "maybe", values:[{
                                korean:"아마",
                                romance:"ah-mah"
                            }],
      },
      {id : "head", values:[{
                                korean:"머리",
                                romance:"muh-ree"
                            }],
      }
      //week3 : father, shoes, hat, spoon and chopsticks, to be painful , to teach, to wait, train, stamps, grapes, to go, to sleep, to ride, meat: fish
      ,
      {id : "father", values:[{
                                korean:"아버지",
                                romance:"ah-bah-jee"
                            }],
      
      },
      {id : "shoes", values:[{
                                korean:"구두",
                                romance:"gooh-dooh"
                            }],
      },
      {id : "hat", values:[{
                                korean:"모자",
                                romance:"moh-jah"
                          }],
      },
      {id : "spoon and chopsticks", values:[{
                                korean:"수저",
                                romance:"sooh-juh"
                          }],
      },
      {id : "to be painful", values:[{
                                korean:"아파요",
                                romance:"ah-pah-yoh"
                          }],
      },
      {id : "to teach", values:[{
                                korean:"가르치요",
                                romance:"gah-reu-chyuh-yoh"
                          }],
      },
      {id : "to wait", values:[{
                                korean:"기다리요",
                                romance:"gee-dah-ree-yoh"
                          }],
      },
      {id : "train", values:[{
                                korean:"가차",
                                romance:"gah-chah"
                            }],
      },
      {id : "stamps", values:[{
                                korean:"우표",
                                romance:"ooh-pyoh"
                            }],
      },
      {id : "grapes", values:[{
                                korean:"포도",
                                romance:"poh-doh"
                            }],
      },
      {id : "to go", values:[{
                                korean:"가요",
                                romance:"gah-yoh"
                            }],
      },
      {id : "to sleep", values:[{
                                korean:"자요",
                                romance:"jah-yoh"
                            }],
      },
      {id : "to ride", values:[{
                                korean:"타요",
                                romance:"tah-yoh"
                            }],
      },
      {id : "meat: fish", values:[{
                                korean:"고기",
                                romance:"goh-gee"
                              }],
      },
      //week 4: hand, door, money, island, night, sleep, water, firelight , star, work, zero, room, ball
      {id : "hand", values:[{
                                korean:"손",
                                romance:"sohn"
                            }],
      },
      {id : "door", values:[{
                                korean:"문",
                                romance:"muhn"
                            }],
      },
      {id : "money", values:[{
                                korean:"돈",
                                romance:"dohn"
                            }],
      },
      {id : "island", values:[{
                                korean:"섬",
                                romance:"suh-m"
                            }],
      },
      {id : "night", values:[{
                                korean:"밤",
                                romance:"bah-m"
                            }],
      },
      {id : "sleep", values:[{
                                korean:"잠",
                                romance:"jah-ma"
                            }],
      },
      {id : "water", values:[{
                                korean:"물",
                                romance:"mooh-l"
                            }],
      },
      {id : "firelight", values:[{
                                korean:"불",
                                romance:"booh-l"
                            }],
      },
      {id : "star", values:[{
                                korean:"별",
                                romance:"byah-l"
                            }],
      },
      {id : "work", values:[{
                                korean:"일",
                                romance:"ng-ee-l"
                            }],
      },
      {id : "zero", values:[{
                                korean:"영",
                                romance:"yuhng"
                            }],
      },
      {id : "room", values:[{
                                korean:"방",
                                romance:"bah-ng"
                            }],
      },
      {id : "ball", values:[{
                                korean:"공",
                                romance:"goh-ng"
                            }],
      },
      

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
    ],
    consonants :[
      {id: "g", text:"ㄱ"},
      {id: "n", text: "ㄴ"},
      {id: "d", text: "ㄷ"},
      {id: "r", text: "ㄹ"},
      {id: "m", text: "ㅁ"},
      {id: "b", text: "ㅂ"},
      {id: "s", text: "ㅅ"},
      {id: "ng", text: "ㅇ"},
      {id: "ch", text: "ㅊ"},
      {id: "k", text: "ㅋ"},
      {id: "t", text: "ㅌ"},
      {id: "p", text: "ㅍ"},
      {id: "h", text: "ㅎ"},
      {id: "j", text: "ㅈ"},
      
  ],
  double_consonants:[
    {id: "gg", text: "ㄲ"},
    {id: "dd", text: "ㄸ"},
    {id: "tt", text: "ㄳ"},
    {id: "pp", text: "ㅃ"},
    {id: "ss", text: "ㅆ"},
    {id: "jj", text: "ㅉ"},
    {id: "bb", text: "ㅍ"},
    {id: "gg", text: "ㅃ"},
  ],
  compound_vowels:[
    {id:"ae", text:"ㅐ"},
    {id:"yae", text:"ㅒ"},
    {id:"e", text:"ㅔ"},
    {id:"ye", text:"ㅖ"},
    {id:"wa", text:"ㅘ"},
    {id:"we", text:"ㅚ"},
    {id:"wae", text:"ㅙ"},
    {id:"wuh:", text:"ㅝ"},
    {id:"wi", text:"ㅞ"},
    {id:"we", text:"ㅟㅣ"},
    {id:"eui", text:"ㅢ"},
  ]}
  },
  methods: {
    isMobile() {
      return true;
      /* return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );*/
    },
    //write a method to refresh the page
    refresh(){
      location.reload();
    },
    readAloud(word) {
      let msg = new SpeechSynthesisUtterance();
      msg.text = word;
      msg.lang = 'ko-KR';
      console.log(msg);
      speechSynthesis.speak(msg);
    },
  }
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
.container{
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
div {
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