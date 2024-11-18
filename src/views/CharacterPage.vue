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
        <p>oups...</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCharacters } from "@/services/characterService";

export default defineComponent({
    name: "CharacterPage",
    setup() {
        const route = useRoute();
        const characterId = route.params.id as number;

        const character = ref<any>(null);

        onMounted(async () => {
            try {
                const characters = await getCharacters();
                character.value = characters.find(
                    (char: number) => char.id === characterId
                );
            } catch (error) {
                console.error("Error loading characters:", error);
            }
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
