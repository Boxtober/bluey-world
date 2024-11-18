<template>
    <nav class="navbar">
        <img src="../assets/logo.svg" alt="Logo" class="logo" />
        <div class="nav-contain">
            <router-link to="/" class="link">HOME</router-link>
            <router-link to="/about" class="link">ABOUT</router-link>
            <button @click="openDrawer">❤</button>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: "Navbar",
    methods: {
        openDrawer() {
            this.$emit("open-drawer");
        },
    },
};
</script>

<style scoped>
.navbar {
    z-index: 2;
    position: fixed;
    top: 1rem;
    display: flex;
    padding: 10px 75px;
    background: #ffffff99;
    box-shadow: 0 4px 40px #493d2f40;
    border-radius: 25px;
    backdrop-filter: blur(10px);
    font-size: 20px;
    width: 67%;
    color: #5a5a87;
    justify-content: space-between;
}

button {
    background: #5a5a87;
    border: none;
    width: 32px;
    color: white;
    height: 32px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
}
.nav-contain {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.logo {
    width: 120px;
    height: auto;
    max-width: 210px;
    padding: 1rem;
}

.link {
    font-family: "Outfit", serif;
    font-weight: 400;
    color: #5a5a87;
    font-size: 20px;
    text-decoration: none;
    margin: 0 10px;
    font-weight: bold;
}

.link:hover {
    text-decoration: underline;
}
</style>
