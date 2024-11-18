<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    character: {
        type: Object,
        required: true,
    },
});

const router = useRouter();

const goToCharacterPage = () => {
    router.push({
        name: "CharacterPage",
        params: { id: props.character.id },
    });
};
</script>

<template>
    <div class="card" @click="goToCharacterPage()">
        <img
            :src="props.character.image"
            alt="Character Image"
            class="card-image"
        />
        <div class="card-body">
            <h3>{{ props.character.name }}</h3>
            <p
                :class="[
                    character.breed === 'Blue Heeler'
                        ? 'txt-blue'
                        : 'txt-orange',
                ]"
            >
                <strong>Breed:</strong> {{ props.character.breed }}
            </p>

            <p class="catchphrase">
                <span class="big">“ </span>{{ props.character.catchphrase
                }}<span class="big"> ”</span>
            </p>

            <button>❤</button>
        </div>
    </div>
</template>

<style scoped>
.card {
    color: rgb(95, 94, 91);
    width: 280px;
    transition: transform 0.3s;
    transition: ease-in-out;
    border-radius: 25px;
    padding: 2rem;
    margin: 10px;
    text-align: left;
    background-color: #f9f9f9;
    cursor: pointer;
    border: rgb(222, 219, 207) solid 2px;
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
.card-image {
    width: 100%;
    height: 210px;
    object-fit: cover;
    object-position: top;
    border-radius: 100px;
    background-color: #9ee4ff;
}
.big {
    font-weight: bolder;
    font-size: 24px;
}

.catchphrase {
    padding-top: 0.5rem;
}
h3 {
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
    margin-top: 10px;
    justify-content: space-between;
    height: 170px;
}
</style>
