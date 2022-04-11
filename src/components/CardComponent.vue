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

</style>