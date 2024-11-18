<template>
    <transition name="drawer-transition">
        <div v-show="isOpen" class="drawer">
            <div class="drawer-content">
                <div class="title">
                    <h3>My Favorites</h3>
                    <button class="close-btn" @click="closeDrawer">×</button>
                </div>
                <div class="favorites-list">
                    <div
                        v-for="fav in favorites"
                        :key="fav.id"
                        class="mini-card"
                    >
                        <div class="mini-card-contain">
                            <img
                                :src="fav.image"
                                alt="Favorite Character"
                                class="mini-card-image"
                            />
                            <h4>{{ fav.name }}</h4>
                            <button class="close-btn">×</button>
                        </div>
                        <button
                            class="icon-button"
                            @click="goToCharacterPage(fav)"
                        >
                            <p>Go to {{ fav.name }}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Définir les propriétés du composant
const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
    favorites: {
        type: Array,
        required: true,
    },
});

// Définir les événements à émettre
const emit = defineEmits(["go-to-character", "close"]);

// Fonction pour fermer le Drawer
const closeDrawer = () => {
    emit("close"); // Émettre l'événement "close"
};

// Fonction pour aller à la page du personnage
const goToCharacterPage = (character) => {
    emit("go-to-character", character); // Émettre l'événement "go-to-character"
};
</script>

<style scoped lang="scss">
.drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: #ffffff;
    box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-out;
    z-index: 9999;
    overflow-y: auto;
}

.drawer-content {
    padding: 20px;
    background-color: #f9f9f9;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.favorites-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-height: calc(100vh - 80px);
    overflow-y: scroll; /* Permet de défiler à l'intérieur de la liste des favoris */
    scrollbar-width: thin;
    scrollbar-color: orange transparent;
}

.mini-card-contain {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.close-btn {
    font-size: 30px;
    border: none;
    background: none;
    color: #333;
    cursor: pointer;
}
.title {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: bolder;
}
.mini-card {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 0.5rem;
    border-radius: 25px;
    gap: 1rem;

    .icon-button {
        border: 1px solid rgb(255, 136, 0);
        color: rgb(255, 136, 0);
        height: 32px;
        border-radius: 25px;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        &:hover {
            color: white;
            background: rgb(255, 136, 0);
        }
    }

    .mini-card-image {
        width: auto;
        height: 90px;
        object-fit: contain;
    }
}
</style>
