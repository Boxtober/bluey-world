<template>
    <transition name="drawer-transition">
        <div v-show="isOpen" class="drawer">
            <div class="drawer-content">
                <button class="close-btn" @click="closeDrawer">×</button>
                <h3>Drawer Content</h3>
                <p>Here is some content in the drawer!</p>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
export default {
    name: "Drawer",
    props: {
        isOpen: {
            type: Boolean,
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
            console.log("closeDrawer clicked");
            this.$emit("close");
        },
    },
};
</script>
<style scoped>
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
}

.drawer.show {
    left: 30px;
    position: absolute;
    top: 0;
}

.drawer-content {
    padding: 20px;
    background-color: #f9f9f9;
    height: 100%;
}

.close-btn {
    font-size: 30px;
    border: none;
    background: none;
    color: #333;
    cursor: pointer;
}

.drawer-transition-enter-active,
.drawer-transition-leave-active {
    transition: transform 0.3s ease-out;
}

.drawer-transition-enter,
.drawer-transition-leave-to {
    transform: translateX(100%);
}
</style>
