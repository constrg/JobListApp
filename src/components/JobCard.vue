<script setup>
import { RouterLink } from 'vue-router'
const { job } = defineProps(['job'])
</script>
<template>
    <RouterLink :to="{ name: 'JobDetails', params: { id: job.id } }">
        <div class="job-card" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">
            <div class="job-card-content">
                <h1 class="job-card-position">
                    {{ job.position }}
                </h1>
                <p class="job-card-salary">
                    Salary: {{ job.salary }} PHP
                </p>
                <p class="job-card-more-details">Tap to view more details &#8594;</p>
            </div>
        </div>
    </RouterLink>
</template>
<style scoped>
.job-card {
    background-color: var(--clr-light);
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    transition: all .3s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.job-card::before {
    content: "";
    background-color: var(--clr-accent);
    width: 10px;
    height: 100%;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px 0 0 5px;
}

.job-card:hover {
    transform: translateX(3px);
}

.job-card .job-card-content .job-card-position {
    font-size: var(--fs-md);
    margin-bottom: 5px;
    color: var(--clr-accent);
    font-weight: var(--fw-bold);
}

.job-card .job-card-content .job-card-salary {
    color: var(--clr-gray);
    font-size: var(--fs-base);
    margin-bottom: 20px;
}

.job-card .job-card-content .job-card-more-details {
    font-size: 12px;
    color: var(--clr-gray);
}
</style>