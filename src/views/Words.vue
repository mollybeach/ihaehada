<template>
    <body>
        <main app="">
            <div class="layout row wrap mb-3">
                <div class="flex xs12">
                    <div class="card" style="height: auto">
                        <div class="container fluid">
                            <div class="layout">
                                <div class="flex pa-3">
                                    <h1 class="title-header">
                                        Korean Words of the Week
                                    </h1>
                                    <h2>In chronological order</h2>
                                    <p>(oldest to newest)</p>
                                    <p>
                                        Click on a card button to hear the word
                                        spoken aloud more about it. English word
                                        aboue. Latin desciption of the sound is
                                        to the right
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex text-xs-center xs12">
                    <div class="" style="height: auto">
                        <div class="layout row wrap">
                            <div class="flex text-xs-center xs12">
                                <div class="" style="height: auto">
                                    <div class="container fluid grid-list-md">
                                        <div
                                            class="layout row justify-center align-center mt-2 mb-2"
                                        >
                                            <button
                                                disabled="disabled"
                                                type="button"
                                                class="btn btn--disabled btn--floating btn--small theme--dark cyanBlue lighten-1"
                                            >
                                                <div class="btn__content">
                                                    <i
                                                        aria-hidden="true"
                                                        class="icon theme--dark fas fa-angle-double-left"
                                                    ></i>
                                                </div>
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn--floating btn--small theme--dark cyanBlue lighten-1"
                                                mt-4=""
                                            >
                                                <div class="btn__content">
                                                    <i
                                                        aria-hidden="true"
                                                        class="icon theme--dark fas fa-angle-right material-icons"
                                                        style="display: flex"
                                                        >keyboard_arrow_right</i
                                                    >
                                                </div>
                                            </button>
                                            <div
                                                align-center=""
                                                class="card__title"
                                            >
                                                <h1>1 - 9</h1>
                                            </div>
                                            <button
                                                type="button"
                                                class="btn btn--floating btn--small theme--dark cyanBlue lighten-1"
                                                mt-4=""
                                            >
                                                <div class="btn__content">
                                                    <i
                                                        aria-hidden="true"
                                                        class="icon theme--dark fas fa-angle-right material-icons"
                                                        style="display: flex"
                                                        >keyboard_arrow_right</i
                                                    >
                                                </div>
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn--floating btn--small theme--dark cyanBlue lighten-1"
                                                mt-4=""
                                            >
                                                <div class="btn__content">
                                                    <i
                                                        aria-hidden="true"
                                                        class="icon theme--dark fas fa-angle-right material-icons"
                                                        style="display: flex"
                                                        >keyboard_double_arrow_right</i
                                                    >
                                                </div>
                                            </button>
                                        </div>

                                        <div class="layout row wrap">
                                            <div
                                                class="flex xs12 sm6 md4 lg4 xl4"
                                            >
                                                <div
                                                    class="ma-2 pa-3 pt-0 card--hover"
                                                    style="height: auto"
                                                >
                                                    <!--  <h5 Miner #1</h5>-->
                                                    <div class="card">
                                                        <h1 slot="header">
                                                            Wednesday January
                                                            12th 2022
                                                        </h1>
                                                        <div class="word">
                                                            <div
                                                                v-for="item in items.slice(
                                                                    0,
                                                                    7
                                                                )"
                                                                :key="item.id"
                                                            >
                                                                <div
                                                                    class="english"
                                                                >
                                                                    {{
                                                                        item.id
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="hear"
                                                                    v-for="value in item.values"
                                                                    :key="
                                                                        value.values
                                                                    "
                                                                    v-on:click="
                                                                        readAloud(
                                                                            value.korean
                                                                        )
                                                                    "
                                                                >
                                                                    <button
                                                                        class="read-button korean"
                                                                    >
                                                                        {{
                                                                            value.korean
                                                                        }}
                                                                    </button>
                                                                    <div
                                                                        class="pronunciation"
                                                                    >
                                                                        {{
                                                                            value.romance
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--  Miner # 1-->
                                            <div
                                                class="flex xs12 sm6 md4 lg4 xl4"
                                            >
                                                <div
                                                    class="ma-2 pa-3 pt-0 card--hover"
                                                    style="height: auto"
                                                >
                                                    <div class="card">
                                                        <h1 slot="header">
                                                            Wednesday January
                                                            19th 2022
                                                        </h1>
                                                        <div class="word">
                                                            <div
                                                                v-for="item in items.slice(
                                                                    7,
                                                                    21
                                                                )"
                                                                :key="item.id"
                                                            >
                                                                <div
                                                                    class="english"
                                                                >
                                                                    {{
                                                                        item.id
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="hear"
                                                                    v-for="value in item.values"
                                                                    :key="
                                                                        value.values
                                                                    "
                                                                    v-on:click="
                                                                        readAloud(
                                                                            value.korean
                                                                        )
                                                                    "
                                                                >
                                                                    <button
                                                                        class="read-button korean"
                                                                    >
                                                                        {{
                                                                            value.korean
                                                                        }}
                                                                    </button>
                                                                    <div
                                                                        class="pronunciation"
                                                                    >
                                                                        {{
                                                                            value.romance
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="flex xs12 sm6 md4 lg4 xl4"
                                            >
                                                <div
                                                    class="ma-2 pa-3 pt-0 card--hover"
                                                    style="height: auto"
                                                >
                                                    <!--  <h5 Miner #1</h5>-->
                                                    <div class="card">
                                                        <h1 slot="header">
                                                            Wednesday January
                                                            12th 2022
                                                        </h1>
                                                        <div class="word">
                                                            <div
                                                                v-for="item in items.slice(
                                                                    0,
                                                                    7
                                                                )"
                                                                :key="item.id"
                                                            >
                                                                <div
                                                                    class="english"
                                                                >
                                                                    {{
                                                                        item.id
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="hear"
                                                                    v-for="value in item.values"
                                                                    :key="
                                                                        value.values
                                                                    "
                                                                    v-on:click="
                                                                        readAloud(
                                                                            value.korean
                                                                        )
                                                                    "
                                                                >
                                                                    <button
                                                                        class="read-button korean"
                                                                    >
                                                                        {{
                                                                            value.korean
                                                                        }}
                                                                    </button>
                                                                    <div
                                                                        class="pronunciation"
                                                                    >
                                                                        {{
                                                                            value.romance
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="flex xs12 sm6 md4 lg4 xl4"
                                            >
                                                <div
                                                    class="ma-2 pa-3 pt-0 card--hover"
                                                    style="height: auto"
                                                >
                                                    <!-- Miner #4-->
                                                    <div class="card">
                                                        <h1 slot="header">
                                                            Wednesday January
                                                            26th 2022
                                                        </h1>
                                                        <div class="word">
                                                            <div
                                                                v-for="item in items.slice(
                                                                    21,
                                                                    35
                                                                )"
                                                                :key="item.id"
                                                            >
                                                                <div
                                                                    class="english"
                                                                >
                                                                    {{
                                                                        item.id
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="hear"
                                                                    v-for="value in item.values"
                                                                    :key="
                                                                        value.values
                                                                    "
                                                                    v-on:click="
                                                                        readAloud(
                                                                            value.korean
                                                                        )
                                                                    "
                                                                >
                                                                    <button
                                                                        class="read-button korean"
                                                                    >
                                                                        {{
                                                                            value.korean
                                                                        }}
                                                                    </button>
                                                                    <div
                                                                        class="pronunciation"
                                                                    >
                                                                        {{
                                                                            value.romance
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="flex xs12 sm6 md4 lg4 xl4"
                                            >
                                                <div
                                                    class="ma-2 pa-3 pt-0 card--hover"
                                                    style="height: auto"
                                                >
                                                    <!-- Miner #4-->
                                                    <div class="card">
                                                        <h1 slot="header">
                                                            Wednesday Feb 2nd
                                                            2022
                                                        </h1>
                                                        <div class="word">
                                                            <div
                                                                v-for="item in items.slice(
                                                                    35,
                                                                    48
                                                                )"
                                                                :key="item.id"
                                                            >
                                                                <div
                                                                    class="english"
                                                                >
                                                                    {{
                                                                        item.id
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="hear"
                                                                    v-for="value in item.values"
                                                                    :key="
                                                                        value.values
                                                                    "
                                                                    v-on:click="
                                                                        readAloud(
                                                                            value.korean
                                                                        )
                                                                    "
                                                                >
                                                                    <button
                                                                        class="read-button korean"
                                                                    >
                                                                        {{
                                                                            value.korean
                                                                        }}
                                                                    </button>
                                                                    <div
                                                                        class="pronunciation"
                                                                    >
                                                                        {{
                                                                            value.romance
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                class="flex xs12 sm6 md4 lg4 xl4"
                                            >
                                                <div
                                                    class="ma-2 pa-3 pt-0 card--hover"
                                                    style="height: auto"
                                                >
                                                    <!--  <h5 Miner #1</h5>-->

                                                    <div class="card">
                                                        <h1 slot="header">
                                                            Wednesday Feb 9th
                                                            2022
                                                        </h1>
                                                        <div class="word">
                                                            <div
                                                                v-for="item in items.slice(
                                                                    48,
                                                                    62
                                                                )"
                                                                :key="item.id"
                                                            >
                                                                <div
                                                                    class="english"
                                                                >
                                                                    {{
                                                                        item.id
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="hear"
                                                                    v-for="value in item.values"
                                                                    :key="
                                                                        value.values
                                                                    "
                                                                    v-on:click="
                                                                        readAloud(
                                                                            value.korean
                                                                        )
                                                                    "
                                                                >
                                                                    <button
                                                                        class="read-button korean"
                                                                    >
                                                                        {{
                                                                            value.korean
                                                                        }}
                                                                    </button>
                                                                    <div
                                                                        class="pronunciation"
                                                                    >
                                                                        {{
                                                                            value.romance
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                class="flex xs12 sm6 md4 lg4 xl4"
                                            >
                                                <div
                                                    class="ma-2 pa-3 pt-0 card--hover"
                                                    style="height: auto"
                                                >
                                                    <!--  <h5 Miner #1</h5>-->
                                                    <div class="card">
                                                        <h1 slot="header">
                                                            Wednesday Feb 16th
                                                            2022
                                                        </h1>
                                                        <div class="word">
                                                            <div
                                                                v-for="item in items.slice(
                                                                    62,
                                                                    82
                                                                )"
                                                                :key="item.id"
                                                            >
                                                                <div
                                                                    class="english"
                                                                >
                                                                    {{
                                                                        item.id
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="hear"
                                                                    v-for="value in item.values"
                                                                    :key="
                                                                        value.values
                                                                    "
                                                                    v-on:click="
                                                                        readAloud(
                                                                            value.korean
                                                                        )
                                                                    "
                                                                >
                                                                    <button
                                                                        class="read-button korean"
                                                                    >
                                                                        {{
                                                                            value.korean
                                                                        }}
                                                                    </button>
                                                                    <div
                                                                        class="pronunciation"
                                                                    >
                                                                        {{
                                                                            value.romance
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="flex xs12 sm6 md4 lg4 xl4"
                                            >
                                                <div
                                                    class="ma-2 pa-3 pt-0 card--hover"
                                                    style="height: auto"
                                                >
                                                    <!--  <h5 Miner #1</h5>-->

                                                    <div class="card">
                                                        <h1 slot="header">
                                                            Wednesday Feb 23rd
                                                            2022
                                                        </h1>
                                                        <div class="word">
                                                            <div
                                                                v-for="item in items.slice(
                                                                    82,
                                                                    89
                                                                )"
                                                                :key="item.id"
                                                            >
                                                                <div
                                                                    class="english"
                                                                >
                                                                    {{
                                                                        item.id
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="hear"
                                                                    v-for="value in item.values"
                                                                    :key="
                                                                        value.values
                                                                    "
                                                                    v-on:click="
                                                                        readAloud(
                                                                            value.korean
                                                                        )
                                                                    "
                                                                >
                                                                    <button
                                                                        class="read-button korean"
                                                                    >
                                                                        {{
                                                                            value.korean
                                                                        }}
                                                                    </button>
                                                                    <div
                                                                        class="pronunciation"
                                                                    >
                                                                        {{
                                                                            value.romance
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="flex xs12 sm6 md4 lg4 xl4"
                                            >
                                                <div
                                                    class="ma-2 pa-3 pt-0 card--hover"
                                                    style="height: auto"
                                                >
                                                    <!--  <h5 Miner #1</h5>---->

                                                    <div class="card">
                                                        <h1 slot="header">
                                                            Wednesday March 2nd
                                                            2022
                                                        </h1>
                                                        <div class="word">
                                                            <div
                                                                v-for="item in items.slice(
                                                                    89,
                                                                    97
                                                                )"
                                                                :key="item.id"
                                                            >
                                                                <div
                                                                    class="english"
                                                                >
                                                                    {{
                                                                        item.id
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="hear"
                                                                    v-for="value in item.values"
                                                                    :key="
                                                                        value.values
                                                                    "
                                                                    v-on:click="
                                                                        readAloud(
                                                                            value.korean
                                                                        )
                                                                    "
                                                                >
                                                                    <button
                                                                        class="read-button korean"
                                                                    >
                                                                        {{
                                                                            value.korean
                                                                        }}
                                                                    </button>
                                                                    <div
                                                                        class="pronunciation"
                                                                    >
                                                                        {{
                                                                            value.romance
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="layout row justify-center align-center mt-2 mb-2"
                                        >
                                            <button
                                                disabled="disabled"
                                                type="button"
                                                class="btn btn--disabled btn--floating btn--small theme--dark cyanBlue lighten-1"
                                            >
                                                <div class="btn__content">
                                                    <i
                                                        aria-hidden="true"
                                                        class="icon theme--dark fas fa-angle-double-left"
                                                    ></i>
                                                </div>
                                            </button>
                                            <button
                                                disabled="disabled"
                                                type="button"
                                                class="btn btn--disabled btn--floating btn--small theme--dark cyanBlue lighten-1"
                                            >
                                                <div class="btn__content">
                                                    <i
                                                        aria-hidden="true"
                                                        class="icon theme--dark fas fa-angle-left"
                                                    ></i>
                                                </div>
                                            </button>
                                            <div
                                                align-center=""
                                                class="card__title"
                                            >
                                                <h1>1 - 9</h1>
                                            </div>
                                            <button
                                                type="button"
                                                class="btn btn--floating btn--small theme--dark cyanBlue lighten-1"
                                                mt-4=""
                                            >
                                                <div class="btn__content">
                                                    <i
                                                        aria-hidden="true"
                                                        class="icon theme--dark fas fa-angle-right"
                                                    ></i>
                                                </div>
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn--floating btn--small theme--dark cyanBlue lighten-1"
                                                mt-4=""
                                            >
                                                <div class="btn__content">
                                                    <i
                                                        aria-hidden="true"
                                                        class="icon theme--dark fas fa-angle-double-right"
                                                    ></i>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- <script type="text/javascript" src="/static/js/manifest.5f946d972125a67eabf1.js"></script>
                <script type="text/javascript" src="/static/js/vendor.e47676f654e7bc42a06c.js"></script>
                <script type="text/javascript" src="/static/js/app.020921c3752b3f33b6dd.js"></script>-->
        <iframe
            frameborder="0"
            allowtransparency="true"
            src="https://checkout.stripe.com/v3/JdhudoUwvSFS85kPDZEQ.html?distinct_id=6fc92829-18d9-1742-7119-7e180b6b2dbe"
            name="stripe_checkout_app"
            class="stripe_checkout_app"
            style="
                z-index: 2147483647;
                display: none;
                background: rgba(0, 0, 0, 0.004);
                border: 0px none transparent;
                overflow: hidden auto;
                visibility: visible;
                margin: 0px;
                padding: 0px;
                -webkit-tap-highlight-color: transparent;
                position: fixed;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
            "
        >
        </iframe>
    </body>
</template>

<script>
/* eslint-disable vue/no-unused-components */
export default {
    name: "Words",
    data() {
        return {
            info: [
                { id: "0", text: "John" },
                { id: "1", text: "Mary" },
            ],
            items: [
                //week 1 : tooth, cucumber, child, reason, milk, fox, yo-yo
                {
                    id: "tooth",
                    values: [
                        {
                            korean: "이",
                            romance: "ee",
                        },
                    ],
                },
                {
                    id: "cucumber",
                    values: [
                        {
                            korean: "오이",
                            romance: "oh-ee",
                        },
                    ],
                },
                {
                    id: "child",
                    values: [
                        {
                            korean: "아이",
                            romance: "ah-ee",
                        },
                    ],
                },
                {
                    id: "reason",
                    values: [{ korean: "이유", romance: "ee-yoo" }],
                },
                {
                    id: "milk",
                    values: [
                        {
                            korean: "우유",
                            romance: "oh-yoo",
                        },
                    ],
                },
                {
                    id: "fox",
                    values: [
                        {
                            korean: "여우",
                            romance: "yuh-ooh",
                        },
                    ],
                },
                {
                    id: "yo-yo",
                    values: [
                        {
                            korean: "요요",
                            romance: "yo-yo",
                        },
                    ],
                },
                //week2 : tree, too(much), duck, us/we, country, no, elder sister(male speaker), mother, to buy, to drink, afternoon, one, maybe, head
                {
                    id: "tree",
                    values: [
                        {
                            korean: "나무",
                            romance: "nah-mooh",
                        },
                    ],
                },
                {
                    id: "too(much)",
                    values: [
                        {
                            korean: "너무",
                            romance: "nuh-mooh",
                        },
                    ],
                },
                {
                    id: "duck",
                    values: [
                        {
                            korean: "오리",
                            romance: "oh-ree",
                        },
                    ],
                },
                {
                    id: "us/we",
                    values: [
                        {
                            korean: "우리",
                            romance: "ooh-ree",
                        },
                    ],
                },
                {
                    id: "country",
                    values: [
                        {
                            korean: "나라",
                            romance: "nah-rah",
                        },
                    ],
                },
                {
                    id: "no",
                    values: [
                        {
                            korean: "아니오",
                            romance: "ah-nee-oh",
                        },
                    ],
                },
                {
                    id: "elder sister",
                    values: [
                        {
                            korean: "누나",
                            romance: "nooh-nah",
                        },
                    ],
                },
                {
                    id: "mother",
                    values: [
                        {
                            korean: "어머니",
                            romance: "uh-muh-nee",
                        },
                    ],
                },
                {
                    id: "to buy",
                    values: [
                        {
                            korean: "사요",
                            romance: "sah-yoh",
                        },
                    ],
                },
                {
                    id: "to drink",
                    values: [
                        {
                            korean: "마ㅈㅕ요",
                            romance: "mah-syuh-yoh",
                        },
                    ],
                },
                {
                    id: "afternoon",
                    values: [
                        {
                            korean: "오후",
                            romance: "oh-hooh",
                        },
                    ],
                },
                {
                    id: "one",
                    values: [
                        {
                            korean: "하나",
                            romance: "hah-nah",
                        },
                    ],
                },
                {
                    id: "maybe",
                    values: [
                        {
                            korean: "아마",
                            romance: "ah-mah",
                        },
                    ],
                },
                {
                    id: "head",
                    values: [
                        {
                            korean: "머리",
                            romance: "muh-ree",
                        },
                    ],
                },
                //week3 : father, shoes, hat, spoon and chopsticks, to be painful , to teach, to wait, train, stamps, grapes, to go, to sleep, to ride, meat: fish
                {
                    id: "father",
                    values: [
                        {
                            korean: "아버지",
                            romance: "ah-bah-jee",
                        },
                    ],
                },
                {
                    id: "shoes",
                    values: [
                        {
                            korean: "구두",
                            romance: "gooh-dooh",
                        },
                    ],
                },
                {
                    id: "hat",
                    values: [
                        {
                            korean: "모자",
                            romance: "moh-jah",
                        },
                    ],
                },
                {
                    id: "spoon and chopsticks",
                    values: [
                        {
                            korean: "수저",
                            romance: "sooh-juh",
                        },
                    ],
                },
                {
                    id: "to be painful",
                    values: [
                        {
                            korean: "아파요",
                            romance: "ah-pah-yoh",
                        },
                    ],
                },
                {
                    id: "to teach",
                    values: [
                        {
                            korean: "가르치요",
                            romance: "gah-reu-chyuh-yoh",
                        },
                    ],
                },
                {
                    id: "to wait",
                    values: [
                        {
                            korean: "기다리요",
                            romance: "gee-dah-ree-yoh",
                        },
                    ],
                },
                {
                    id: "train",
                    values: [
                        {
                            korean: "가차",
                            romance: "gah-chah",
                        },
                    ],
                },
                {
                    id: "stamps",
                    values: [
                        {
                            korean: "우표",
                            romance: "ooh-pyoh",
                        },
                    ],
                },
                {
                    id: "grapes",
                    values: [
                        {
                            korean: "포도",
                            romance: "poh-doh",
                        },
                    ],
                },
                {
                    id: "to go",
                    values: [
                        {
                            korean: "가요",
                            romance: "gah-yoh",
                        },
                    ],
                },
                {
                    id: "to sleep",
                    values: [
                        {
                            korean: "자요",
                            romance: "jah-yoh",
                        },
                    ],
                },
                {
                    id: "to ride",
                    values: [
                        {
                            korean: "타요",
                            romance: "tah-yoh",
                        },
                    ],
                },
                {
                    id: "meat: fish",
                    values: [
                        {
                            korean: "고기",
                            romance: "goh-gee",
                        },
                    ],
                },
                //week 4: hand, door, money, island, night, sleep, water, firelight , star, work, zero, room, ball
                {
                    id: "hand",
                    values: [
                        {
                            korean: "손",
                            romance: "sohn",
                        },
                    ],
                },
                {
                    id: "door",
                    values: [
                        {
                            korean: "문",
                            romance: "moohn",
                        },
                    ],
                },
                {
                    id: "money",
                    values: [
                        {
                            korean: "돈",
                            romance: "dohn",
                        },
                    ],
                },
                {
                    id: "island",
                    values: [
                        {
                            korean: "섬",
                            romance: "suh-m",
                        },
                    ],
                },
                {
                    id: "night",
                    values: [
                        {
                            korean: "밤",
                            romance: "bah-m",
                        },
                    ],
                },
                {
                    id: "sleep",
                    values: [
                        {
                            korean: "잠",
                            romance: "jah-m",
                        },
                    ],
                },
                {
                    id: "water",
                    values: [
                        {
                            korean: "물",
                            romance: "mooh-l",
                        },
                    ],
                },
                {
                    id: "firelight",
                    values: [
                        {
                            korean: "불",
                            romance: "booh-l",
                        },
                    ],
                },
                {
                    id: "star",
                    values: [
                        {
                            korean: "별",
                            romance: "byuh-l",
                        },
                    ],
                },
                {
                    id: "work",
                    values: [
                        {
                            korean: "일",
                            romance: "ng-ee-l",
                        },
                    ],
                },
                {
                    id: "zero",
                    values: [
                        {
                            korean: "영",
                            romance: "yuhng",
                        },
                    ],
                },
                {
                    id: "room",
                    values: [
                        {
                            korean: "방",
                            romance: "bah-ng",
                        },
                    ],
                },
                {
                    id: "ball",
                    values: [
                        {
                            korean: "공",
                            romance: "goh-ng",
                        },
                    ],
                },
                //week 5:
                //english : axe, rabbit , elder brother, little child, to be salty, to be busy, elephant, korean wrestling, Mr., honey, daughter, bread, rice, steamed

                {
                    id: "Mr.",
                    values: [
                        {
                            korean: "아저씨",
                            romance: "ah-juh-ssee",
                        },
                    ],
                },
                {
                    id: "to be busy",
                    values: [
                        {
                            korean: "바빠요",
                            romance: "bah-ppah-yoh",
                        },
                    ],
                },
                {
                    id: "bread",
                    values: [
                        {
                            korean: "빵",
                            romance: "pp-ah-ng",
                        },
                    ],
                },
                {
                    id: "axe",
                    values: [
                        {
                            korean: "도끼",
                            romance: "doh-kkee",
                        },
                    ],
                },
                {
                    id: "rabbit",
                    values: [
                        {
                            korean: "토끼",
                            romance: "toh-kkee",
                        },
                    ],
                },
                {
                    id: "daughter",
                    values: [
                        {
                            korean: "딸",
                            romance: "tt-ah-l",
                        },
                    ],
                },
                {
                    id: "little child",
                    values: [
                        {
                            korean: "꼬마",
                            romance: "kkoh-mah",
                        },
                    ],
                },
                {
                    id: "elephant",
                    values: [
                        {
                            korean: "코끼리",
                            romance: "koh-kkee-lee",
                        },
                    ],
                },
                {
                    id: "honey",
                    values: [
                        {
                            korean: "꿀",
                            romance: "kk-ooh-l",
                        },
                    ],
                },

                {
                    id: "to be salty",
                    values: [
                        {
                            korean: "짜요",
                            romance: "jjah-yoh",
                        },
                    ],
                },
                {
                    id: "steamed",
                    values: [
                        {
                            korean: "찜",
                            romance: "jj-ee-m",
                        },
                    ],
                },
                {
                    id: "elder brother",
                    values: [
                        {
                            korean: "오빠",
                            romance: "oh-ppah",
                        },
                    ],
                },
                {
                    id: "korean wrestling",
                    values: [
                        {
                            korean: "씨름",
                            romance: "ssee-leum",
                        },
                    ],
                },
                {
                    id: "rice",
                    values: [
                        {
                            korean: "쌀",
                            romance: "ss-ah-l",
                        },
                    ],
                },
                //week6 english: medicine, kitchen, outside, rice cake, soup, cooked rice meal, front, home, next to , cup, soon, end, clothes, went, day, face, to be good, taste, flower, red bean
                // romance: yah-g, uh-g bah-g, ttuh-g, guh-g, bah-b, ah-b, jee-b, yuh-b, kkuh-b, noh-d, kkeu-d, oh-d, gah-d, nah-d, nah-d, joh-d, mah-d, kkoh-d, ppah-d
                {
                    id: "medicine",
                    values: [
                        {
                            korean: "약",
                            romance: "yug",
                        },
                    ],
                },
                {
                    id: "kitchen",
                    values: [
                        {
                            korean: "억",
                            romance: "yag",
                        },
                    ],
                },
                {
                    id: "outside",
                    values: [
                        {
                            korean: "밖",
                            romance: "bah-g",
                        },
                    ],
                },
                {
                    id: "rice cake",
                    values: [
                        {
                            korean: "떡",
                            romance: "ttuh-g",
                        },
                    ],
                },
                {
                    id: "soup",
                    values: [
                        {
                            korean: "국",
                            romance: "guh-g",
                        },
                    ],
                },
                {
                    id: "cooked rice meal",
                    values: [
                        {
                            korean: "밥",
                            romance: "bah-b",
                        },
                    ],
                },
                {
                    id: "front",
                    values: [
                        {
                            korean: "앞",
                            romance: "ah-b",
                        },
                    ],
                },
                {
                    id: "home",
                    values: [
                        {
                            korean: "집",
                            romance: "jee-b",
                        },
                    ],
                },
                {
                    id: "next to",
                    values: [
                        {
                            korean: "옆",
                            romance: "yuh-b",
                        },
                    ],
                },
                {
                    id: "cup",
                    values: [
                        {
                            korean: "컵",
                            romance: "kkuh-b",
                        },
                    ],
                },
                {
                    id: "soon",
                    values: [
                        {
                            korean: "곧",
                            romance: "noh-d",
                        },
                    ],
                },
                {
                    id: "end",
                    values: [
                        {
                            korean: "끝",
                            romance: "kkeu-d",
                        },
                    ],
                },
                {
                    id: "clothes",
                    values: [
                        {
                            korean: "옷",
                            romance: "oh-d",
                        },
                    ],
                },
                {
                    id: "went",
                    values: [
                        {
                            korean: "갔",
                            romance: "gah-d",
                        },
                    ],
                },
                {
                    id: "day",
                    values: [
                        {
                            korean: "낫",
                            romance: "nah-d",
                        },
                    ],
                },
                {
                    id: "face",
                    values: [
                        {
                            korean: "낯",
                            romance: "nah-d",
                        },
                    ],
                },
                {
                    id: "to be good",
                    values: [
                        {
                            korean: "좋",
                            romance: "joh-d",
                        },
                    ],
                },
                {
                    id: "taste",
                    values: [
                        {
                            korean: "밋",
                            romance: "mah-d",
                        },
                    ],
                },
                {
                    id: "flower",
                    values: [
                        {
                            korean: "꽃",
                            romance: "kkoh-d",
                        },
                    ],
                },
                {
                    id: "red bean",
                    values: [
                        {
                            korean: "팥",
                            romance: "ppah-d",
                        },
                    ],
                },
                //week 7: english, rice,  soup, herb dish,  seed dish, kimchi, chopsticks,spoon
                //romance: bab, goug, namul, ssigae, gimchi, jusgalan, seudgalag,
                //korean: 밥, 국, 니물, 써개,  김치,것가락, 술가릭,
                {
                    id: "rice",
                    values: [
                        {
                            korean: "밥",
                            romance: "bab",
                        },
                    ],
                },
                {
                    id: "soup",
                    values: [
                        {
                            korean: "국",
                            romance: "goug",
                        },
                    ],
                },
                {
                    id: "herb dish",
                    values: [
                        {
                            korean: "나물",
                            romance: "namul",
                        },
                    ],
                },
                {
                    id: "seed dish",
                    values: [
                        {
                            korean: "써개",
                            romance: "ssigae",
                        },
                    ],
                },
                {
                    id: "kimchi",
                    values: [
                        {
                            korean: "김치",
                            romance: "gimchi",
                        },
                    ],
                },
                {
                    id: "chopsticks",
                    values: [
                        {
                            korean: "것가락",
                            romance: "Gus-Galeeg",
                        },
                    ],
                },
                {
                    id: "spoon",
                    values: [
                        {
                            korean: "술가릭",
                            romance: "Seul-Galeegg",
                        },
                    ],
                },
                /* week 8:
    english: What is this thing?, rice is this, soup is this, herb dish is this, seed dish is this, kimchi is this, chopsticks is this, spoon is this,
    romance: ige mwoeyo, bab ieyo, goug ieyo, namul ieyo, ssigae ieyo, gimchi ieyo, jusgalan ieyo, seudgalag ieyo,
    korean: 이거 뭐예요?, 밥 에요, 국 에요, 니물 에요, 써개 에요, 김치 에요, 것가락 에요, 술가릭 에요,
    */
                {
                    id: "What is this thing?",
                    values: [
                        {
                            korean: "이게 뭐예요?",
                            romance: "iguhe mwoeyo",
                        },
                    ],
                },
                {
                    id: "rice is this",
                    values: [
                        {
                            korean: "밥 에요",
                            romance: "bab ieyo",
                        },
                    ],
                },
                {
                    id: "soup is this",
                    values: [
                        {
                            korean: "국 에요",
                            romance: "goug ieyo",
                        },
                    ],
                },
                {
                    id: "herb dish is this",
                    values: [
                        {
                            korean: "나물 에요",
                            romance: "namul ieyo",
                        },
                    ],
                },
                {
                    id: "seed dish is this",
                    values: [
                        {
                            korean: "써개 에요",
                            romance: "ssugae ieyo",
                        },
                    ],
                },
                {
                    id: "kimchi is this",
                    values: [
                        {
                            korean: "김치 에요",
                            romance: "Gimchi ieyo",
                        },
                    ],
                },
                {
                    id: "chopsticks is this",
                    values: [
                        {
                            korean: "것가락 에요",
                            romance: "Gus-Galeeg ieyo",
                        },
                    ],
                },
                {
                    id: "spoon is this",
                    values: [
                        {
                            korean: "술가릭 에요",
                            romance: "Seul-Galeeg ieyo",
                        },
                    ],
                },
                /*Week 19: to be pretty, the best, restroom , bathroom,, teacher, doctor ,husband , korean, english,, american, vietnamese, japanese, student, pencil, desk, chair, table,  book, grandmother, grandfather, */
                {
                    id: "to be pretty",
                    values: [
                        {
                            korean: "아름답다",
                            romance: "arum-dada",
                        },
                    ]
                },
                { 
                    id: "the best",
                    values: [
                        {
                            korean: "최고",
                            romance: "chog-dae",
                        },
                    ]

                }

                
            ],
        };
    },

    methods: {
        isMobile() {
            return true;
            /* return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
    )     ;*/
        },

        readAloud(word) {
            let msg = new SpeechSynthesisUtterance();
            msg.text = word;
            msg.lang = "ko-KR";
            console.log(msg);
            speechSynthesis.speak(msg);
        },
    },
    mounted() {
        let recaptchaScript = document.createElement("script");
        recaptchaScript.setAttribute(
            "src",
            "https://www.google.com/recaptcha/api.js"
        );
        document.head.appendChild(recaptchaScript);
    },
};
</script>

<style></style>
