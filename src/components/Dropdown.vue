<template>
    <div class="dropdown-container">
        <div class="dropdown">
            <button class="dropdown-button" @click="toggleDropdown">
                {{ selectedBreed || "Select Breed" }}
                <font-awesome-icon :icon="['fas', 'bone']" />
            </button>
            <div v-if="isOpen" class="dropdown-menu">
                <ul>
                    <li class="font-black" @click="selectBreed('')">All</li>
                    <li
                        v-for="breed in breeds"
                        :key="breed"
                        @click="selectBreed(breed)"
                    >
                        {{ breed }}
                    </li>
                </ul>
            </div>
        </div>
        <button class="button-all" @click="selectBreed(breed)">
            All Character
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    name: "Dropdown",
    props: {
        characters: {
            type: Array,
            required: true,
        },
    },
    emits: ["filter-breed"],
    setup(props, { emit }) {
        const isOpen = ref(false);
        const selectedBreed = ref("");
        const breeds = ref<string[]>([]);

        const getBreeds = () => {
            const uniqueBreeds = new Set(
                props.characters.map((char: any) => char.breed)
            );
            breeds.value = Array.from(uniqueBreeds);
            console.log("Breeds: ", breeds.value);
        };

        const selectBreed = (breed: string) => {
            console.log("Breed selected: ", breed);
            selectedBreed.value = breed;
            emit("filter-breed", breed);
            isOpen.value = false;
        };

        const toggleDropdown = () => {
            isOpen.value = !isOpen.value;
            console.log("Dropdown open: ", isOpen.value);
        };

        // Init toutes races
        getBreeds();

        // ICI watch surveille props.characters, et à chaque changement de cette donnée,
        // la fonction getBreeds() est appelée pour mettre à jour la liste des races
        watch(
            () => props.characters,
            () => {
                getBreeds();
            }
        );
        // on utilise watch dans le cas ou une data réactive ou prop change,
        // et qu'il faut ré-éxecuter du code (comme une maj ou un recalcul)

        // si props.characters ne change jamais après l'init,
        // on peux juste appeler getBreeds() une fois avec "onMounted(getBreeds);" et sans utiliser watch

        return {
            isOpen,
            selectedBreed,
            breeds,
            selectBreed,
            toggleDropdown,
        };
    },
});
</script>

<style scoped lang="scss">
.dropdown-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.button-all {
    border: 1px solid rgb(255, 136, 0);
    color: rgb(255, 136, 0);
    height: 32px;
    border-radius: 25px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    padding: 1rem 2rem;
    height: 54px;
    &:hover {
        color: white;
        background: rgb(255, 136, 0);
    }
}
.dropdown {
    position: relative;
    display: inline-block;

    .dropdown-button {
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 1rem 2rem;
        cursor: pointer;
        font-size: 16px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 250px;
        text-align: left;
        transition: all 0.3s ease;

        &:hover {
            background-color: #f7f7f7;
        }

        font-awesome-icon {
            margin-left: 8px;
        }
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 25px;
        width: 100%;
        z-index: 10;
        max-height: 200px;
        overflow-y: auto;
        transition: all 0.3s ease;

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            overflow: hidden;
        }

        li {
            padding: 12px 20px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #e0e0e0;
            }

            &.font-black {
                font-weight: bold;
            }
        }
    }
}
</style>
