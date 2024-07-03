<script setup>
import { RouterLink } from 'vue-router';
import Button from '../components/Button.vue';
</script>
<template>
    <div class="home">
        <div class="container">
            <div class="home-content">
                <h1 class="home-title" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">Browse. Read. Apply.
                </h1>
                <h2 class="home-sub-title">Find your dream job</h2>
                <RouterLink :to="{ name: 'JobList' }">
                    <Button btnTitle="Browse Job" class="browse-job-btn" />
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home .home-content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home .home-content .home-title {
    font-size: var(--fs-lg);
    color: var(--clr-light);
    font-weight: var(--fw-bold);
    text-align: center;
}

.home-sub-title {
    font-size: var(--fs-md);
    color: var(--clr-gray);
    margin-bottom: 30px;
}

.browse-job-btn {
    padding: 15px 30px;
    font-size: var(--fs-base);
}
</style>