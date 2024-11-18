<template>
    <Banner />
    <div class="main-container">
        <h2>Bluey Characters</h2>
        <div class="characters-grid">
            <CharacterCard
                v-for="character in characters"
                :key="character.id"
                :character="character"
            />
        </div>
    </div>
    <Navbar @open-drawer="openDrawer" />
    <Drawer :isOpen="isDrawerOpen" @close="toggleDrawer" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CharacterCard from "../components/CharacterCard.vue";
import Banner from "../components/Banner.vue";
import Drawer from "../components/Drawer.vue";
import Navbar from "../components/Navbar.vue";

export default defineComponent({
    name: "Home",
    components: {
        CharacterCard,
        Banner,
        Drawer,
        Navbar,
    },
    data() {
        return {
            characters: [],
            isDrawerOpen: false,
        };
    },
    created() {
        this.loadCharacters();
    },
    methods: {
        loadCharacters() {
            fetch("../../public/characters.json")
                .then((response) => response.json())
                .then((data) => {
                    this.characters = data;
                })
                .catch((error) =>
                    console.error("Error loading characters:", error)
                );
        },
        toggleDrawer() {
            console.log("Toggling drawer");
            this.isDrawerOpen = !this.isDrawerOpen;
            console.log("isDrawerOpen:", this.isDrawerOpen);
        },
        openDrawer() {
            console.log("openDrawer method triggered");
            this.isDrawerOpen = true;
            console.log("isDrawerOpen after opening:", this.isDrawerOpen);
        },
    },
});
</script>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    font-weight: bold;
    font-size: 32px;
    font-family: "Outfit", sans-serif;
    color: #5a5a87;
    padding: 2rem;
}

.characters-grid {
    font-family: "Outfit", sans-serif;
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: 100%;
    height: 100%;
    justify-content: space-between;
    margin-bottom: 2rem;
}
</style>
