<template>
    <body>
        <main>
            <div class="card">
                <h1 slot="header" class="title-header">Numbers</h1>
                <div class="word">
                    <div v-for="number in numbers" :key="number.id">
                        <div class="english">{{ number.id }}</div>
                        <div
                            class="hear"
                            v-for="value in number.values"
                            :key="value.values"
                            v-on:click="readAloud(value.korean)"
                        >
                            <button class="read-button korean">
                                {{ value.korean }}
                            </button>
                            <div class="pronunciation">
                                {{ value.romance }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- use the imported card component -->
            <CardComponent :number="phrases" />
        </main>
    </body>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import CardComponent from "../components/CardComponent.vue";

export default {
    name: "Numbers",
    components: {
        CardComponent,
    },

    data() {
        return {
            numbers: [
                {
                    id: "1",
                    values: [
                        {
                            korean: "하나",
                            romance: "Hana",
                        },
                    ],
                },
                {
                    id: "2",
                    values: [
                        {
                            korean: "둘",
                            romance: "Bul",
                        },
                    ],
                },
                {
                    id: "3",
                    values: [
                        {
                            korean: "셋",
                            romance: "Set",
                        },
                    ],
                },
                {
                    id: "4",
                    values: [
                        {
                            korean: "넷",
                            romance: "Net",
                        },
                    ],
                },
                {
                    id: "5",
                    values: [
                        {
                            korean: "다섯",
                            romance: "DaSeot",
                        },
                    ],
                },
                {
                    id: "6",
                    values: [
                        {
                            korean: "여섯",
                            romance: "YeoSeot",
                        },
                    ],
                },
                {
                    id: "7",
                    values: [
                        {
                            korean: "일곱",
                            romance: "Ilgeob",
                        },
                    ],
                },
                {
                    id: "8",
                    values: [
                        {
                            korean: "여덟",
                            romance: "Yeol Deol",
                        },
                    ],
                },
                {
                    id: "9",
                    values: [
                        {
                            korean: "아홉",
                            romance: "Ahop",
                        },
                    ],
                },
                {
                    id: "10",
                    values: [
                        {
                            korean: "열",
                            romance: "Yeol",
                        },
                    ],
                },
                {
                    id: "11",
                    values: [
                        {
                            korean: "열한",
                            romance: "Yeol Hana",
                        },
                    ],
                },
                {
                    id: "12",
                    values: [
                        {
                            korean: "열두",
                            romance: "Yeol Bul",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        isMobile() {
            return true;
            /* return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );*/
        },

        readAloud(word) {
            let msg = new SpeechSynthesisUtterance();
            msg.text = word;
            msg.lang = "ko-KR";
            console.log(msg);
            speechSynthesis.speak(msg);
        },
    },
};
</script>

<style>
ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

li {
    color: white;
    border-radius: 1px;
    padding: 10px;
    text-decoration: none;
}
a router-link {
    color: white;
    text-decoration: none;
}
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.div-top {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
/*div {
  /*background: #fff;

}*/
.top-card {
    /*background: #fff;*/
    color: #333;
    font-weight: 100;
    text-align: center;
    width: 80%;
    border-radius: 2rem;
    box-shadow: 0 8px 96px rgb(209, 198, 198);
}

.card {
    /*background: #fff;*/
    color: #333;
    font-weight: 100;
    text-align: center;
    border-radius: 2rem;
    margin: 1px;
    box-shadow: 0 8px 96px rgb(243, 236, 236);
    border: 5px solid #8a9dc1;
}

.card p {
    line-height: 1;
    margin: 0;
}

.card .fa-heart {
    color: hotpink;
}

.card .fa-bolt {
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
.english {
    font-size: 1.9em;
    color: #e77294;
    font-weight: bold;
}
.korean {
    font-size: 2.5em;
    color: #7aaac5;
    font-weight: bold;
}

.hear {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.pronunciation {
    font-size: 1.2em;
    color: #7aaac5;
    font-weight: bold;
}
.read-button {
    background-color: #9dc9c1;
    color: white;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    border: 2px solid #73bbae;
}
.read-button:hover {
    background-color: #c6a0be;
    border-radius: 10px;
}

.read {
    background-color: #9dc9c1;
    color: white;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    font-size: 1.5em;
}

.content-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 1em;
    min-width: 300px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
    background-color: #c6a0be;
    /*color: #ffffff;*/
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
