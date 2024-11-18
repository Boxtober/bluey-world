<template>
    <Banner />
    <div class="main-container">
        <h2>Bluey Characters</h2>
        <Dropdown :characters="characters" @filter-breed="filterByBreed" />
        <div class="characters-grid">
            <CharacterCard
                v-for="character in filteredCharacters"
                :key="character.id"
                :character="character"
                :isFavorite="isFavorite(character)"
                :toggleFavorite="toggleFavorite"
                @go-to-character="goToCharacterPage"
            />
        </div>
    </div>
    <Navbar @open-drawer="openDrawer" />
    <Drawer
        :isOpen="isDrawerOpen"
        @close="toggleDrawer"
        :favorites="favorites"
        @go-to-character="goToCharacterPage"
    />

    <img src="../assets/footer-leaf.png" alt="" class="footer" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import CharacterCard from "../components/CharacterCard.vue";
import Banner from "../components/Banner.vue";
import Drawer from "../components/Drawer.vue";
import Navbar from "../components/Navbar.vue";
import Dropdown from "../components/Dropdown.vue";

const characters = ref([]); //valeur réactive, vue mettra à jour l'UI à chaque fois que cette valeur change
const favorites = ref([]);
const selectedBreed = ref("");
const isDrawerOpen = ref(false);
const router = useRouter();

const loadCharacters = () => {
    fetch("../../public/characters.json")
        .then((response) => response.json())
        .then((data) => {
            characters.value = data;
        })
        .catch((error) => console.error("Error loading characters:", error));
};

// execute du code après que le composant a été ajouté au DOM
onMounted(loadCharacters);

// Computed calcule le résultat une seule fois et le mémorise.
// Recalcule uniquement si characters.value ou selectedBreed.value change
const filteredCharacters = computed(() => {
    return selectedBreed.value
        ? characters.value.filter(
              (character) => character.breed === selectedBreed.value
          )
        : characters.value;
});

const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
};

const openDrawer = () => {
    isDrawerOpen.value = true;
};

const toggleFavorite = (character, isFavorite) => {
    if (isFavorite) {
        favorites.value.push(character);
    } else {
        favorites.value = favorites.value.filter(
            (fav) => fav.id !== character.id
        );
    }
};

const isFavorite = (character) => {
    return favorites.value.some((fav) => fav.id === character.id);
};

const goToCharacterPage = (character) => {
    router.push({
        name: "CharacterPage",
        params: { id: character.id },
    });
};

const filterByBreed = (breed) => {
    selectedBreed.value = breed;
};
</script>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

h2 {
    font-weight: bold;
    font-size: 32px;
    font-family: "Chewy", sans-serif;
    color: #5a5a87;
    padding: 2rem;
}
.footer {
    position: fixed;
    bottom: 0;
    /* width: auto;
    height: 98px; */
    width: 100%;
    height: auto;
}
.characters-grid {
    font-family: "Outfit", sans-serif;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    height: 100%;
    justify-content: space-between;
    margin-bottom: 8rem;
    gap: 1rem;
}

@media (max-width: 1024px) {
    .characters-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .characters-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .characters-grid {
        grid-template-columns: 1fr;
    }
}
</style>
