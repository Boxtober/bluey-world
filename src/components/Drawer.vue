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
                        <img
                            :src="fav.image"
                            alt="Favorite Character"
                            class="mini-card-image"
                        />
                        <h4>{{ fav.name }}</h4>
                        <button class="close-btn">×</button>
                    </div>

                    <!-- <CardDrawer
                        v-for="fav in favorites"
                        :key="fav.id"
                        :favorite="fav"
                    /> -->
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import CardDrawer from "./CardDrawer.vue";

export default {
    name: "Drawer",
    components: {
        CardDrawer,
    },
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        favorites: {
            type: Array,
            required: true,
        },
    },
    watch: {
        isOpen(newValue) {
            console.log("isOpen changed:", newValue);
        },
    },
    methods: {
        closeDrawer() {
            this.$emit("close");
        },
    },
};
</script>
<style scoped lang="scss">
.drawer {
    position: absolute;
    top: 0;
    right: 0px;
    width: 300px;
    height: 100%;
    background-color: #ffffff;
    box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-out;
    z-index: 9999;

    .title {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-weight: bolder;
    }
}

.drawer-content {
    padding: 20px;
    background-color: #f9f9f9;
    height: 100%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.close-btn {
    font-size: 30px;
    border: none;
    background: none;
    color: #333;
    cursor: pointer;
}

.favorites-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.mini-card {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: white;
    border-radius: 25px;
    gap: 1rem;
    justify-content: center;
}

.mini-card-image {
    width: auto;
    height: 90px;
    object-fit: contain;
}
</style>
