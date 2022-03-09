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
          <caption> Basic Consonants</caption>
          <thead>
            <tr>
              <th>Romanized</th>
              <th>Korean</th>
            </tr>
          </thead>
          <tr class="active-row"></tr>
          <tr class="active-row" v-for="basic_consonant in basic_consonants" :key="basic_consonant.id">
            <td class="pronunciation">{{basic_consonant.id}}</td>
            <td>
              <button class="read-button korean" v-on:click="readAloud(basic_consonant.text)"> {{basic_consonant.text}}</button>
            </td>
          </tr>          
        </table>
      </div>

<div class="container">
        <table class="content-table">
          <caption> Aspirated Consonants</caption>
          <thead>
            <tr>
              <th>Romanized</th>
              <th>Korean</th>
            </tr>
          </thead>
          <tr class="active-row"></tr>
          <tr class="active-row" v-for="aspirated_consonant in aspirated_consonants" :key="aspirated_consonant.id">
            <td class="pronunciation">{{aspirated_consonant.id}}</td>
            <td>
              <button class="read-button korean" v-on:click="readAloud(aspirated_consonant.text)"> {{aspirated_consonant.text}}</button>
            </td>
          </tr>
        </table>
      </div>

<div class="container">
        <table class="content-table">
          <caption> Tense Consonants</caption>
          <thead>
            <tr>
              <th>Romanized</th>
              <th>Korean</th>
            </tr>
          </thead>
          <tr class="active-row"></tr>
          <tr class="active-row" v-for="tense_consonant in tense_consonants" :key="tense_consonant.id">
            <td class="pronunciation">{{tense_consonant.id}}</td>
            <td>
              <button class="read-button korean" v-on:click="readAloud(tense_consonant.text)"> {{tense_consonant.text}}</button>
            </td>
          </tr>
        </table>
      </div>



      <div class="container">
        <table class="content-table">
          <caption> Compound Vowels</caption>
          <thead>
            <tr>
              <th>Romanized</th>
              <th>Korean</th>
            </tr>
          </thead>
          <tr class="active-row"></tr>
          <tr class="active-row" v-for="compound_vowel in compound_vowels" :key="compound_vowel.id">
            <td class="pronunciation">{{compound_vowel.id}}</td>
            <td>
              <button class="read-button korean" v-on:click="readAloud(compound_vowel.text)"> {{compound_vowel.text}}</button>
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
            <div v-for="item in items.slice(35,48)" :key="item.id">
              <div class="english">{{item.id}}</div>
              <div class="hear" v-for="value in item.values" :key="value.values" v-on:click="readAloud(value.korean)">
                <button class="read-button korean">{{value.korean}}</button>
                <div class="pronunciation">{{value.romance}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h1 slot="header">Wednesday Feb 9th 2022</h1>
          <div class="word">
            <div v-for="item in items.slice(48,62)" :key="item.id">
              <div class="english">{{item.id}}</div>
              <div class="hear" v-for="value in item.values" :key="value.values" v-on:click="readAloud(value.korean)">
                <button class="read-button korean">{{value.korean}}</button>
                <div class="pronunciation">{{value.romance}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h1 slot="header">Wednesday Feb 16th 2022</h1>
          <div class="word">
            <div v-for="item in items.slice(62,82)" :key="item.id">
              <div class="english">{{item.id}}</div>
              <div class="hear" v-for="value in item.values" :key="value.values" v-on:click="readAloud(value.korean)">
                <button class="read-button korean">{{value.korean}}</button>
                <div class="pronunciation">{{value.romance}}</div>
              </div>
            </div>
          </div>
        </div>

                <div class="card">
          <h1 slot="header">Wednesday Feb 23rd 2022</h1>
          <div class="word">
            <div v-for="item in items.slice(82,89)" :key="item.id">
              <div class="english">{{item.id}}</div>
              <div class="hear" v-for="value in item.values" :key="value.values" v-on:click="readAloud(value.korean)">
                <button class="read-button korean">{{value.korean}}</button>
                <div class="pronunciation">{{value.romance}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h1 slot="header">Wednesday March 2nd 2022</h1>
          <div class="word">
            <div v-for="item in items.slice(89,97)" :key="item.id">
              <div class="english">{{item.id}}</div>
              <div class="hear" v-for="value in item.values" :key="value.values" v-on:click="readAloud(value.korean)">
                <button class="read-button korean">{{value.korean}}</button>
                <div class="pronunciation">{{value.romance}}</div>
              </div>
            </div>
          </div>
        </div>

                <div class="card">
          <h1 slot="header">Numbers</h1>
          <div class="word">
            <div v-for="item in items.slice(97,109)" :key="item.id">
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
                                romance:"moohn"
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
                                romance:"jah-m"
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
                                romance:"byuh-l"
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
      //week 5: 
      //english : axe, rabbit , elder brother, little child, to be salty, to be busy, elephant, korean wrestling, Mr., honey, daughter, bread, rice, steamed

      {id : "Mr.", values:[{
                                korean:"아저씨",
                                romance:"ah-juh-ssee"
                            }],
      },
      {id : "to be busy", values:[{
                                korean:"바빠요",
                                romance:"bah-ppah-yoh"
                            }],
      },
      {id : "bread", values:[{
                                korean:"빵",
                                romance:"pp-ah-ng"
                            }],
      },
      {id : "axe", values:[{
                                korean:"도끼",
                                romance:"doh-kkee"
                            }],
      },
      {id : "rabbit", values:[{
                                korean:"토끼",
                                romance:"toh-kkee"
                            }],
      },
      {id : "daughter", values:[{
                                korean:"딸",
                                romance:"tt-ah-l"
                            }],
      },
      {id : "little child", values:[{
                                korean:"꼬마",
                                romance:"kkoh-mah"
                            }],
      },
      {id : "elephant", values:[{
                                korean:"코끼리",
                                romance:"koh-kkee-lee"
                            }],
      },
      {id : "honey", values:[{
                                korean:"꿀",
                                romance:"kk-ooh-l"
                            }],
      },
      
      {id : "to be salty", values:[{
                                korean:"짜요",
                                romance:"jjah-yoh"
                            }],
      },
      {id : "steamed", values:[{
                                korean:"찜",
                                romance:"jj-ee-m"
                            }],
      },
    {id : "elder brother", values:[{
                                korean:"오빠",
                                romance:"oh-ppah"
                            }],
      },
      {id : "korean wrestling", values:[{
                                korean:"씨름",
                                romance:"ssee-leum"
                            }],
      },
      {id : "rice", values:[{
                                korean:"쌀",
                                romance:"ss-ah-l"
                            }],
      },
    //week6 english: medicine, kitchen, outside, rice cake, soup, cooked rice meal, front, home, next to , cup, soon, end, clothes, went, day, face, to be good, taste, flower, red bean
      // romance: yah-g, uh-g bah-g, ttuh-g, guh-g, bah-b, ah-b, jee-b, yuh-b, kkuh-b, noh-d, kkeu-d, oh-d, gah-d, nah-d, nah-d, joh-d, mah-d, kkoh-d, ppah-d
    {id : "medicine", values:[{
                                korean:"약",
                                romance:"yug"
                            }],
    },
    {id : "kitchen", values:[{
                                korean:"약",
                                romance:"yag"
                            }],
    },
    {id : "outside", values:[{
                                korean:"밖",
                                romance:"bah-g"
                              }],
    },
    {id : "rice cake", values:[{
                                korean:"떡",
                                romance:"ttuh-g"
                              }],
    },
    {id : "soup", values:[{
                                korean:"국",
                                romance:"guh-g"
                          }],
    },
    {id : "cooked rice meal", values:[{
                                korean:"밥",
                                romance:"bah-b"
                          }],
    },
    {id : "front", values:[{
                                korean:"앞",
                                romance:"ah-b"
                          }],
    },
    {id : "home", values:[{
                                korean:"집",
                                romance:"jee-b"
                          }],
    },
    {id : "next to", values:[{
                                korean:"옆",
                                romance:"yuh-b"
                          }],
    },
    {id : "cup", values:[{
                                korean:"컵",
                                romance:"kkuh-b"
                          }],
    },
    {id : "soon", values:[{
                                korean:"곧",
                                romance:"noh-d"
                          }],
    },
    {id : "end", values:[{
                                korean:"끝",
                                romance:"kkeu-d"
                          }],
    },
    {id : "clothes", values:[{
                                korean:"옷",
                                romance:"oh-d"
                          }],
    },
    {id : "went", values:[{
                                korean:"갔",
                                romance:"gah-d"
                          }],
    },
    {id : "day", values:[{
                                korean:"갓",
                                romance:"nah-d"
                          }],
    },
    {id : "face", values:[{
                                korean:"갗",
                                romance:"nah-d"
                          }],                   
    },
    {id : "to be good", values:[{
                                korean:"좋",
                                romance:"joh-d"
                          }],
    },
    {id : "taste", values:[{
                                korean:"밋",
                                romance:"mah-d"
                          }],
    },
    {id : "flower", values:[{
                                korean:"꽃",
                                romance:"kkoh-d"
                          }],
    },
    {id : "red bean", values:[{
                                korean:"팥",
                                romance:"ppah-d"
                            }],
    }, 
    //week 7: english, rice,  soup, herb dish,  seed dish, kimchi, chopsticks,spoon
    //romance: bab, goug, namul, ssigae, gimchi, jusgalan, seudgalag,
    //korean: 밥, 국, 니물, 써개,  김치,것가락, 술가릭,
    {id : "rice", values:[{
                                korean:"밥",
                                romance:"bab"
                            }],
    },
    {id : "soup", values:[{
                                korean:"국",
                                romance:"goug"
                            }],
    },
    {id : "herb dish", values:[{
                                korean:"니물",
                                romance:"namul"
                            }],
    },
    {id : "seed dish", values:[{
                                korean:"써개",
                                romance:"ssigae"
                            }],
    },
    {id : "kimchi", values:[{
                                korean:"김치",
                                romance:"gimchi"
                            }],
    },
    {id : "chopsticks", values:[{
                                korean:"것가락",
                                romance:"gusgalan"
                            }],
    },
    {id : "spoon", values:[{
                                korean:"술가릭",
                                romance:"seudgalag"
                            }],
    },
    /* week 8:
    english: What is this thing?, rice is this, soup is this, herb dish is this, seed dish is this, kimchi is this, chopsticks is this, spoon is this,
    romance: ige mwoeyo, bab ieyo, goug ieyo, namul ieyo, ssigae ieyo, gimchi ieyo, jusgalan ieyo, seudgalag ieyo,
    korean: 이거 뭐예요?, 밥 에요, 국 에요, 니물 에요, 써개 에요, 김치 에요, 것가락 에요, 술가릭 에요,
    */
    {id : "What is this thing?", values:[{
                                korean:"이거 뭐예요?",
                                romance:"ige mwoeyo"
                            }],
    },
    {id : "rice is this", values:[{
                                korean:"밥 에요",
                                romance:"bab ieyo"
                            }],
    },
    {id : "soup is this", values:[{
                                korean:"국 에요",
                                romance:"goug ieyo"
                            }],
    },
    {id : "herb dish is this", values:[{
                                korean:"니물 에요",
                                romance:"namul ieyo"
                            }],
    },
    {id : "seed dish is this", values:[{
                                korean:"써개 에요",
                                romance:"ssigae ieyo"
                            }],
    },
    {id : "kimchi is this", values:[{
                                korean:"김치 에요",
                                romance:"gimchi ieyo"
                            }],
    },
    {id : "chopsticks is this", values:[{
                                korean:"것가락 에요",
                                romance:"Gus-Galeeg ieyo"
                            }],
    },
    {id : "spoon is this", values:[{
                                korean:"술가릭 에요",
                                romance:"Seul-Galeeg ieyo"
                            }],
    },
    /*Week 9:
    english:  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    romanace: Hana, Bul, Set, Net,DaSeot, YeoSeot, Ilgeob, YeolDeol, Ahop, Yeol, Yeol Hana, Yeol Bul
    korean: 하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열, 열한, 열두, 열세,

    */
    {id : "1", values:[{
                                korean:"하나",
                                romance:"Hana"
                            }],
    },
    {id : "2", values:[{
                                korean:"둘",
                                romance:"Bul"
                            }],
    },
    {id : "3", values:[{
                                korean:"셋",
                                romance:"Set"
                            }],
    },
    {id : "4", values:[{
                                korean:"넷",
                                romance:"Net"
                            }],
    },
    {id : "5", values:[{
                                korean:"다섯",
                                romance:"DaSeot"
                            }],
    },
    {id : "6", values:[{
                                korean:"여섯",
                                romance:"YeoSeot"
                            }],
    },
    {id : "7", values:[{
                                korean:"일곱",
                                romance:"Ilgeob"
                            }],
    },
    {id : "8", values:[{
                                korean:"여덟",
                                romance:"Yeol Deol"
                            }],
    },
    {id : "9", values:[{
                                korean:"아홉",
                                romance:"Ahop"
                            }],
    },
    {id : "10", values:[{
                                korean:"열",
                                romance:"Yeol"
                            }],
    },
    {id : "11", values:[{
                                korean:"열한",
                                romance:"Yeol Hana"
                            }],
    },
    {id : "12", values:[{
                                korean:"열두",
                                romance:"Yeol Bul"
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
    basic_consonants :[
      {id: "b", text: "ㅂ"},
      {id: "d", text: "ㄷ"},
      {id: "j", text: "ㅈ"},
      {id: "g", text:"ㄱ"},
      {id: "s", text: "ㅅ"},
      {id: "n", text: "ㄴ"},
      {id: "m", text: "ㅁ"},
      {id: "r", text: "ㄹ"},
      {id: "h", text: "ㅎ"},
      {id: "ng", text: "ㅇ"},

  
      
  ],
  tense_consonants:[
    {id: "tt", text:  "ㄸ"},
    {id: "pp", text: "ㅃ"},
    {id: "kk", text: "ㄲ"},
    {id: "jj", text: "ㅉ"},
    {id: "ss", text: "ㅆ"},
  ],
  aspirated_consonants:[
    {id:"p", text:"ㅍ"},
    {id:"t", text:"ㅌ"},
    {id:"k", text:"ㅋ"},
    {id:"ch", text:"ㅊ"}

  ],
  compound_vowels:[
    {id:"e", text:"ㅔ"},
    {id:"ye", text:"ㅖ"},
    {id:"ae", text:"ㅐ"},
    {id:"yae", text:"ㅒ"},
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