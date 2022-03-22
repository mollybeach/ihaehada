<template>
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
      
    
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        items: Array,

    },
    data() {
        return {
            db: null,
            messages: [],
            form_message: "",
            detacher: null,
        }
    },
    readAloud(word) {
      let msg = new SpeechSynthesisUtterance();
      msg.text = word;
      msg.lang = 'ko-KR';
      console.log(msg);
      speechSynthesis.speak(msg);
    },
    

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