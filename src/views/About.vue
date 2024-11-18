<template>
    <div class="about">
        <!-- v-bind : Dynamique de la couleur du titre -->
        <h1 :style="{ color: titleColor }">About Page</h1>

        <!-- v-bind : Lien dynamique vers une image -->
        <p>This is the about page of our application.</p>
        <img :src="imageSrc" alt="About Image" class="about-img" />

        <!-- v-on : Événement click sur le bouton -->
        <button @click="handleClick">Click me</button>

        <!-- Affiche le message lorsque le bouton est cliqué -->
        <p v-if="message">{{ message }}</p>

        <!-- v-model : Liaison bidirectionnelle avec un champ input -->
        <input v-model="inputValue" placeholder="Type something" />
        <p>You typed: {{ inputValue }}</p>

        <div :class="{ active: isActive, 'text-bold': isBold }">
            HEYYY 🌈 this is a dynamic class example.
        </div>
    </div>

    <img src="../assets/footer-play.png" alt="" class="footer" />
</template>

<script lang="ts">
export default {
    name: "About",
    data() {
        return {
            isActive: false,
            isBold: true,
            // v-bind : Couleur dynamique du titre
            titleColor: "#19afc9", // Définir la couleur du titre

            // v-bind : Image dynamique
            imageSrc:
                "https://www.bluey.tv/wp-content/uploads/2023/08/ABTI298K50_FRUIT_BAT_Image_06-scaled.jpg", // Image dynamique liée à une URL

            // v-on : Message à afficher après un clic sur le bouton
            message: "",

            // v-model : Valeur du champ input
            inputValue: "", // Liaison bidirectionnelle avec l'input
        };
    },
    methods: {
        // v-on : Méthode exécutée au clic
        handleClick() {
            this.message = "✨ You clicked the button!  ✨"; // Met à jour le message après clic
        },
    },
};
</script>

<style scoped>
.footer {
    position: relative;
    bottom: 0;
    height: 210px;
    width: auto;
    border-radius: 25px;
}
.active {
    color: red;
}

.text-bold {
    font-weight: bold;
}
.about {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    margin-top: 8rem;
}

h1 {
    font-size: 2.5rem;
    color: #333;
}

p {
    font-size: 1.2rem;
    margin: 20px 0;
    color: #555;
}
button {
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

input {
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.about-img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 25px;
}
</style>
