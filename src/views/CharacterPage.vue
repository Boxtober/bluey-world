<template>
    <div class="character-detail" v-if="character">
        <h1>{{ character.name }}</h1>
        <img
            :src="character.image"
            alt="Character Image"
            class="detail-image"
        />
        <p><strong>Age:</strong> {{ character.age }}</p>
        <p
            :class="[
                character.breed === 'Blue Heeler' ? 'txt-blue' : 'txt-orange',
            ]"
        >
            <strong>Breed:</strong> {{ character.breed }}
        </p>
        <p><strong>Description:</strong> {{ character.description }}</p>
    </div>
    <div v-else>
        <p>Oups... Aucun personnage trouvé.</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import charactersData from "../../public/characters.json";

export default defineComponent({
    name: "CharacterPage",
    setup() {
        const route = useRoute();
        const characterId = parseInt(route.params.id as string, 10);
        const character = ref<any>(null);

        const getCharacters = async () => {
            return charactersData;
        };

        onMounted(async () => {
            const characters = await getCharacters();
            character.value = characters.find(
                (char: any) => parseInt(char.id, 10) === characterId
            );
        });

        return { character };
    },
});
</script>

<style scoped>
h1 {
    font-family: "Chewy", serif;
    color: rgb(255, 134, 47);
    padding: 0.5rem;
}
.character-detail {
    font-family: "Outfit", serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: 10rem;
    margin-bottom: 2rem;
    padding: 2rem;
    max-width: 50vh;
    background-color: white;
    border-radius: 2rem;
}

.detail-image {
    width: 300px;
    height: 100%;
    object-fit: cover;
}

.txt-blue {
    color: rgb(81, 145, 255);
}
.txt-orange {
    color: rgb(255, 134, 47);
}
</style>
