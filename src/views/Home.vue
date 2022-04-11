<template>
    <body>
        <div class="flex xs12">
            <div class="card" style="height: auto">
                <div class="container fluid">
                    <div class="layout">
                        <div class="flex pa-3">
                            <div style="display: flex; justify-content:center " >
                                <h1 class="title-header">ihaehada</h1>
                                <img
                                    src="https://res.cloudinary.com/storagemanagementcontainer/image/upload/c_scale,w_93/v1649712911/ihaehada/koreandiscordimg_kzqd6h.png"
                                    alt="logo"
                                    class="logo"
                                />
                            </div>
                            <p class="py-1">
                                learn korean language app browse the ihaehada
                                collection of words and phrases
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <h1 slot="header" class="title-header">
                Greetings
                <button slot="button" class="read-button">
                    <img
                        src="https://icons.veryicon.com/png/o/miscellaneous/vue3-ebook/speak-5.png"
                        alt="speak-icon"
                        style="height: 30px; font-size: 0.5rem"
                    />
                </button>
            </h1>
            <div class="word">
                <div v-for="phrase in phrases.slice(0, 9)" :key="phrase.id">
                    <div class="english">{{ phrase.id }}</div>
                    <div
                        class="hear"
                        v-for="value in phrase.values"
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
        <CardComponent :item="phrases" />
    </body>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import CardComponent from "../components/CardComponent.vue";

export default {
    name: "Home",
    components: {
        CardComponent,
    },

    data() {
        return {
            phrases: [
                //week1 : hello, to be, nice to meet you
                {
                    id: "hello",
                    values: [
                        {
                            korean: "안녕하세요",
                            romance: "ahn-nyeong-ha-se-yo?",
                        },
                    ],
                },
                {
                    id: "to be; is; I am",
                    values: [
                        {
                            korean: "저는말리입니다",
                            romance: "jeo-neun(molly)imnida",
                        },
                    ],
                },
                {
                    id: "nice to meet you",
                    values: [
                        { korean: "반갑습니다", romance: "ban-gap-seum-nida" },
                    ],
                },
                //week2 : teacher (seon-saeng-nim), yes(ne), in peace (an-nyeong-hi), please(stay) (gye-se-yo), please go (ga-se-yo), next week (da-euym-ju-e), to meet (man-na-yo), again (do do)
                {
                    id: "teacher",
                    values: [
                        {
                            korean: "선생님",
                            romance: "seon-saeong-nim",
                        },
                    ],
                },
                {
                    id: "yes",
                    values: [
                        {
                            korean: "네",
                            romance: "ne",
                        },
                    ],
                },
                {
                    id: "in peace",
                    values: [
                        {
                            korean: "안녕하",
                            romance: "ahn-nyeong-ha",
                        },
                    ],
                },
                {
                    id: "stay",
                    values: [
                        {
                            korean: "ㄱㅕㅣㄱㅔㅣ",
                            romance: "gye-se-yo",
                        },
                    ],
                },
                {
                    id: "go",
                    values: [
                        {
                            korean: "가",
                            romance: "ga-se-yo",
                        },
                    ],
                },
                {
                    id: "next week",
                    values: [
                        {
                            korean: "다음주어ㅣ",
                            romance: "da-euym-ju-e",
                        },
                    ],
                },
                {
                    id: "to meet",
                    values: [
                        {
                            korean: "만나요",
                            romance: "man-na-yo",
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

<style></style>
