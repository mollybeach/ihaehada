<template>
    <body>
        <main app="">
            <span
                >
                <div class="flex xs12">
                    <div class="card" style="height: auto">
                        <div class="container fluid">
                            <div class="layout">
                                <div class="flex pa-3">
                                    <h1 class="title-header">Hangul</h1>
                                    <p class="py-1">
                                        Click on the arrows to browse through
                                        the ihaehada collection. Alphabetic writing system
                                        The Korean alphabet, known natively as Hangul in South Korea a
                                        nd Chosŏn'gŭl in North Korea, is a writing system for the Korean language 
                                        first created in 1443 CE by King Sejong the Great. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="layout row mb-3">
                    <div class="flex text-xs-center xs12">
                        <div class="" style="height: auto">
                            <div class="layout">
                                <div class="flex">
                                    <div
                                        class=" card--flat"
                                        style="height: auto"
                                    >
                                        <div
                                            class="container fluid grid-list-md"
                                        >
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
                                                    <h1>In the beginning</h1>
                                                    <!---->
                                                    <!---->
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
                                                                style="display:flex"
                                                            >keyboard_arrow_right</i>
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
                                                                style="display:flex"
                                                            >keyboard_double_arrow_right</i>
                                                    </div>
                                                </button>
                                            </div>
                                            <div
                                                class="layout row justify-center align-center mt-0 mb-0"
                                            >
                                                <div
                                                    class="menu"
                                                    style="display: block"
                                                >
                                                    <div
                                                        class="menu__activator"
                                                    >
                                                        <div
                                                            class="input-group input-group--dirty input-group--prepend-icon input-group--text-field primary--text"
                                                        >
                                                            <label
                                                                >Go to
                                                                date...</label
                                                            >
                                                            <div
                                                                class="input-group__input"
                                                            >
                                                                <i
                                                                    aria-hidden="true"
                                                                    class="icon material-icons input-group__prepend-icon"
                                                                    >event</i
                                                                ><input
                                                                    tabindex="0"
                                                                    aria-label="Go to date..."
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div
                                                                class="input-group__details"
                                                            >
                                                                <!---->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="layout row wrap">
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/0"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                            <!--   Painting #0-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <div
                                                                class="container"
                                                            >
                                                                <table
                                                                    class="content-table"
                                                                >
                                                                    <caption>
                                                                        Vowels
                                                                    </caption>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                Romanized
                                                                            </th>
                                                                            <th>
                                                                                Korean
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tr
                                                                        class="active-row"
                                                                    ></tr>
                                                                    <tr
                                                                        class="active-row"
                                                                        v-for="vowel in vowels"
                                                                        :key="
                                                                            vowel.id"
                                                                    >
                                                                        <td
                                                                            class="pronunciation"
                                                                        >
                                                                            {{
                                                                                vowel.id
                                                                            }}
                                                                        </td>
                                                                        <td>
                                                                            <button
                                                                                class="read-button korean"
                                                                                v-on:click="readAloud(vowel.text)"
                                                                            >
                                                                                {{
                                                                                    vowel.text
                                                                                }}
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/1"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                                <!--   Painting #1-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        <div class="container">
                                                            <table class="content-table">
                                                                <caption>
                                                                    Basic Consonants
                                                                </caption>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Romanized</th>
                                                                        <th>Korean</th>
                                                                    </tr>
                                                                </thead>
                                                                <tr class="active-row"></tr>
                                                                <tr
                                                                    class="active-row"
                                                                    v-for="basic_consonant in basic_consonants"
                                                                    :key="basic_consonant.id"
                                                                >
                                                                    <td class="pronunciation">{{ basic_consonant.id }}</td>
                                                                    <td>
                                                                        <button
                                                                            class="read-button korean"
                                                                            v-on:click="readAloud(basic_consonant.text)"
                                                                        >
                                                                            {{ basic_consonant.text }}
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/2"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                                <!--   Painting #2-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <div class="container">
                                                                <table class="content-table">
                                                                    <caption>
                                                                        Compound Vowels
                                                                    </caption>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Romanized</th>
                                                                            <th>Korean</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tr class="active-row"></tr>
                                                                    <tr
                                                                        class="active-row"
                                                                        v-for="compound_vowel in compound_vowels"
                                                                        :key="compound_vowel.id"
                                                                    >
                                                                        <td class="pronunciation">{{ compound_vowel.id }}</td>
                                                                        <td>
                                                                            <button
                                                                                class="read-button korean"
                                                                                v-on:click="readAloud(compound_vowel.text)"
                                                                            >
                                                                                {{ compound_vowel.text }}
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/3"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                                <!--   Painting #3-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                                        <div class="container">
                                                            <table class="content-table">
                                                                <caption>
                                                                    Tense Consonants
                                                                </caption>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Romanized</th>
                                                                        <th>Korean</th>
                                                                    </tr>
                                                                </thead>
                                                                <tr class="active-row"></tr>
                                                                <tr
                                                                    class="active-row"
                                                                    v-for="tense_consonant in tense_consonants"
                                                                    :key="tense_consonant.id"
                                                                >
                                                                    <td class="pronunciation">{{ tense_consonant.id }}</td>
                                                                    <td>
                                                                        <button
                                                                            class="read-button korean"
                                                                            v-on:click="readAloud(tense_consonant.text)"
                                                                        >
                                                                            {{ tense_consonant.text }}
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/4"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                                <!--   Painting #4-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        <div class="container">
                                                        <table class="content-table">
                                                        <caption>
                                                            Aspirated Consonants
                                                        </caption>
                                                        <thead>
                                                            <tr>
                                                                <th>Romanized</th>
                                                                <th>Korean</th>
                                                            </tr>
                                                        </thead>
                                                        <tr class="active-row"></tr>
                                                        <tr
                                                            class="active-row"
                                                            v-for="aspirated_consonant in aspirated_consonants"
                                                            :key="aspirated_consonant.id"
                                                        >
                                                            <td class="pronunciation">
                                                                {{ aspirated_consonant.id }}
                                                            </td>
                                                            <td>
                                                                <button
                                                                    class="read-button korean"
                                                                    v-on:click="readAloud(aspirated_consonant.text)"
                                                                >
                                                                    {{ aspirated_consonant.text }}
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/5"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                                <!--   Painting #5-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <div class="container">
                                                                <table class="content-table">
                                                                    <caption>
                                                                        Compound Vowels
                                                                    </caption>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Romanized</th>
                                                                            <th>Korean</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tr class="active-row"></tr>
                                                                    <tr
                                                                        class="active-row"
                                                                        v-for="compound_vowel in compound_vowels.slice(0, 1)"
                                                                        :key="compound_vowel.id"
                                                                    >
                                                                        <td class="pronunciation">{{ compound_vowel.id }}</td>
                                                                        <td>
                                                                            <button
                                                                                class="read-button korean"
                                                                                v-on:click="readAloud(compound_vowel.text)"
                                                                            >
                                                                                {{ compound_vowel.text }}
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="layout row">
                    <div class="flex text-xs-center xs12">
                        <div class="card" style="height: auto">
                            <div class="layout">
                                <div class="flex">
                                    <div
                                        class="card card--flat"
                                        style="height: auto"
                                    >
                                        <div
                                            class="container fluid grid-list-md"
                                        >
                                            <div
                                                class="layout row justify-center align-center mt-2 mb-2"
                                            >
                                                 <button
                                                    type="button"
                                                    class="btn btn--floating btn--small theme--dark cyanBlue lighten-1"
                                                    mt-4=""
                                                >
                                                    <div class="btn__content">
                                                      <i
                                                            aria-hidden="true"
                                                                class="icon theme--dark fas fa-angle-right material-icons"
                                                                style="display:flex"
                                                            >keyboard_arrow_right</i>
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
                                                                style="display:flex"
                                                            >keyboard_double_arrow_right</i>
                                                    </div>
                                                </button>
                                                <div
                                                    align-center=""
                                                    class="card__title"
                                                >
                                                    <!---->
                                                    <h1>Latest</h1>
                                                    <!---->
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
                                                                style="display:flex"
                                                            >keyboard_arrow_right
                                                        </i>
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
                                                                style="display:flex"
                                                            >keyboard_double_arrow_right</i>
                                                    </div>
                                                </button>
                                            </div>
                                            <div
                                                class="layout row justify-center align-center mt-0 mb-0"
                                            >
                                                <div
                                                    class="menu"
                                                    style="display: block"
                                                >
                                                    <div
                                                        class="menu__activator"
                                                    >
                                                        <div
                                                            class="input-group input-group--dirty input-group--prepend-icon input-group--text-field primary--text"
                                                        >
                                                            <label
                                                                >Go to
                                                                date...</label
                                                            >
                                                            <div
                                                                class="input-group__input"
                                                            >
                                                                <i
                                                                    aria-hidden="true"
                                                                    class="icon material-icons input-group__prepend-icon"
                                                                    >event</i
                                                                ><input
                                                                    tabindex="0"
                                                                    aria-label="Go to date..."
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div
                                                                class="input-group__details"
                                                            >
                                                                <!---->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="layout row wrap">
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/9889"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                                <!-- Painting #6-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div></div>
                                                </div>
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/9890"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                                <!-- Painting #7-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/9891"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                            <!-- Painting #8-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        </div>
                                                </div>
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/9892"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                            <!-- Painting #9-->
                                                            </h5> 
                                                            >
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    ></div>
                                                </div>
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        href="https://www.CryptoArte.io/paintings/9893"
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                            <!-- Painting #10-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex xs12 sm6 md4 lg4 xl4"
                                                >
                                                    <div
                                                        class="ma-2 pa-3 pt-0 card card--hover"
                                                        style="height: auto"
                                                        ><div
                                                            class="card__text"
                                                        >
                                                            <h5
                                                                class="headline ma-0"
                                                            >
                                                            <!-- Painting #11-->
                                                            </h5>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <!----></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div
            ></span>
        </main>
        <footer class="footer" style="height: auto">
            <div class="layout row wrap justify-center cyanBlue lighten-1">
                <div
                    class="cyanBlue lighten-1 text-xs-center card card--flat card--tile"
                    style="height: auto"
                >
                    <div class="card__text">
                        <div
                            href="https://twitter.com/CryptoArte"
                            target="_blank"
                            class="mx-3 white--text btn btn--icon"
                            ><div class="btn__content">
                                <i
                                    aria-hidden="true"
                                    class="icon theme--dark fab fa-twitter"
                                    style="font-size: 24px"
                                ></i></div
                        ></div>
                        <span
                            ><div
                                href="mailto:hello@CryptoArte.io"
                                target="_blank"
                                class="mx-3 white--text btn btn--icon"
                                ><div class="btn__content">
                                    <i
                                        aria-hidden="true"
                                        class="icon theme--dark fas fa-envelope"
                                        style="font-size: 24px"
                                    ></i></div></div>
                        ></span>
                    </div>
                    <!---->
                    <div class="card__text white--text pt-0">
                        ©2021 — <strong>ihaehada, LLC</strong> -
                        <div href="/terms" class="white--text pt-0"
                            >Terms &amp; Conditions</div
                        >
                    </div>
                </div>
            </div>
        </footer>
        <!-- <script
        type="text/javascript"
        src="/static/js/manifest.5f946d972125a67eabf1.js"
    ></script>
    <script
        type="text/javascript"
        src="/static/js/vendor.e47676f654e7bc42a06c.js"
    ></script>
    <script
        type="text/javascript"
        src="/static/js/app.020921c3752b3f33b6dd.js"
    ></script>-->
        <iframe
            frameborder="0"
            allowtransparency="true"
            src="https://checkout.stripe.com/v3/JdhudoUwvSFS85kPDZEQ.html?distinct_id=a7fb34eb-be29-492c-84d1-59aef3884e89"
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
        ></iframe>
    </body>
</template>

<script>
/* eslint-disable vue/no-unused-components */
export default {
    name: "Hangul",
    data() {
        return {
            info: [
                { id: "0", text: "John" },
                { id: "1", text: "Mary" },
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
                { id: "ee", text: "ㅣ" },
            ],
            basic_consonants: [
                { id: "b", text: "ㅂ" },
                { id: "d", text: "ㄷ" },
                { id: "j", text: "ㅈ" },
                { id: "g", text: "ㄱ" },
                { id: "s", text: "ㅅ" },
                { id: "n", text: "ㄴ" },
                { id: "m", text: "ㅁ" },
                { id: "r", text: "ㄹ" },
                { id: "h", text: "ㅎ" },
                { id: "ng", text: "ㅇ" },
            ],
            tense_consonants: [
                { id: "tt", text: "ㄸ" },
                { id: "pp", text: "ㅃ" },
                { id: "kk", text: "ㄲ" },
                { id: "jj", text: "ㅉ" },
                { id: "ss", text: "ㅆ" },
            ],
            aspirated_consonants: [
                { id: "p", text: "ㅍ" },
                { id: "t", text: "ㅌ" },
                { id: "k", text: "ㅋ" },
                { id: "ch", text: "ㅊ" },
            ],
            compound_vowels: [
                { id: "e", text: "ㅔ" },
                { id: "ye", text: "ㅖ" },
                { id: "ae", text: "ㅐ" },
                { id: "yae", text: "ㅒ" },
                { id: "wa", text: "ㅘ" },
                { id: "we", text: "ㅚ" },
                { id: "wae", text: "ㅙ" },
                { id: "wuh:", text: "ㅝ" },
                { id: "wi", text: "ㅞ" },
                { id: "we", text: "ㅟㅣ" },
                { id: "eui", text: "ㅢ" },
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
