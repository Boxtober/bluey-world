<template>
    <div class="banner">
        <div class="banner-overlay">
            <h1>Welcome to <span class="second-typo">Bluey</span> world</h1>
        </div>
    </div>

    <div class="banner-container"></div>
</template>

<script lang="ts">
export default {
    name: "Banner",
};
</script>
<style scoped lang="scss">
.banner {
    position: relative;
    width: 100%;
    height: 600px;
    background-image: url("https://www.bluey.tv/wp-content/uploads/2023/09/HOME-3-scaled.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 0 0 40px 40px;

    .banner-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(81, 153, 209, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        text-align: center;
        padding: 6rem;
        border-radius: 0 0 40px 40px;

        h1 {
            font-size: 72px;
            font-family: "Outfit", serif;
            margin: 72px auto;
            color: white;
            text-shadow: 0 0 12px rgb(121, 233, 255);

            .second-typo {
                font-family: "Chewy", serif;
                font-size: 84px;
            }
        }
    }
}
</style>
