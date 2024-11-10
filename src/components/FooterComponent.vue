<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <footer class="footer is-flex is-justify-content-center p-5">
        <nav>
            <RouterLink v-if="route.path !== '/'" to="/" class="has-text-primary">
                <span class="icon has-text-primary">
                    <i class="fa-solid fa-coins"></i>
                </span>
                Some Coins App
            </RouterLink>
            <RouterLink v-if="route.path !== '/about'" to="/about" class="has-text-primary">
                <span class="icon has-text-primary">
                    <i class="fas fa-circle-info"></i>
                </span>
                Sobre
            </RouterLink>
        </nav>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    position: fixed;
    bottom: 0;
    min-width: 100vw;
    color: #FFF;
}
</style>
