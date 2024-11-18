<template>
    <div class="card">
        <div class="img-txt" @click="goToCharacterPage">
            <img
                :src="props.character.image"
                alt="Character Image"
                class="card-image"
            />
            <div class="card-body">
                <h3>
                    {{ props.character.name }}
                    <span v-if="props.character.last_name">
                        {{ props.character.last_name }}
                    </span>
                </h3>
                <p
                    :class="[
                        props.character.breed === 'Blue Heeler'
                            ? 'txt-blue'
                            : 'txt-orange',
                    ]"
                >
                    <strong>Breed:</strong> {{ props.character.breed }}
                </p>

                <p class="catchphrase">“ {{ props.character.catchphrase }} ”</p>
            </div>
        </div>
        <button class="icon-button" @click="toggleHeart">
            <font-awesome-icon :icon="[isHeartFull ? 'fas' : 'far', 'heart']" />
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    character: {
        type: Object,
        required: true,
    },
    isFavorite: {
        type: Boolean,
        required: true,
    },
    toggleFavorite: {
        type: Function,
        required: true,
    },
});

const emit = defineEmits(["go-to-character"]); //permet d'envoyer un event à Home

const goToCharacterPage = () => {
    emit("go-to-character", props.character); // emet l'event "go-to-character" avec les données du personnage en argument
    // dans Home.vue, l'event est capté pour changer la page grace à router.push
};

const isHeartFull = ref(props.isFavorite);

const toggleHeart = () => {
    isHeartFull.value = !isHeartFull.value;
    props.toggleFavorite(props.character, isHeartFull.value);
};
</script>

<style scoped lang="scss">
.card {
    color: rgb(95, 94, 91);
    width: 280px;
    transition: transform 0.3s;
    transition: ease-in-out;
    border-radius: 25px;
    padding: 2rem;
    text-align: left;
    background-color: #f9f9f9;

    border: rgb(222, 219, 207) solid 2px;
    .icon-button {
        background: rgb(255, 136, 0);
        border: none;
        width: 32px;
        color: white;
        height: 32px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 18px;

        &:hover {
            background: rgb(255, 115, 0);
        }
    }
    .img-txt {
        cursor: pointer;
    }
    .card-image {
        width: 100%;
        height: 210px;
        object-fit: cover;
        object-position: top;
        border-radius: 100px;
        background-color: #9ee4ff;
    }
    .catchphrase {
        padding-top: 0.5rem;
        line-height: 16px;
    }
    .big {
        font-weight: bolder;
        font-size: 24px;
    }
}

button {
    background: rgb(255, 136, 0);
    border: none;
    width: 32px;
    color: white;
    height: 32px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
}
.card:hover {
    border: #bbecff solid 2px;
}

h3,
span {
    font-family: "Chewy", serif;
    font-size: 21px;
    font-weight: bolder;
}
.txt-blue {
    color: rgb(81, 145, 255);
}
.txt-orange {
    color: rgb(255, 134, 47);
}
.card-body {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    justify-content: flex-start;
    height: 170px;
}
</style>
