<template>
    <div class="mini-card">
        <img
            :src="fav.image"
            alt="Favorite Character"
            class="mini-card-image"
        />
        <h4>{{ fav.name }}</h4>
    </div>
</template>

<script lang="ts">
export default {
    name: "CardDrawer",
    props: {
        favorites: {
            type: Array,
            required: true,
        },
    },
};
</script>
<style scoped lang="scss">
.mini-card {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.mini-card-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
}
</style>
