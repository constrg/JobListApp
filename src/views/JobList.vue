<script setup>
import { ref, computed } from 'vue'
import JobCard from '../components/JobCard.vue';
import job_list_data from '../data/job_list_data.json'

const jobs = ref(job_list_data)
const search = ref("")

const filterJobs = computed(() => {
    return jobs.value.filter(job => job.position.toLowerCase().includes(search.value.toLowerCase()))
})

</script>

<template>
    <div class="job-list">
        <div class="container">
            <div class="job-list-content">
                <header class="job-list-header">
                    <h1 class="job-list-header-title">Job List 2024</h1>
                </header>
                <input v-model.trim="search" type="text" class="job-list-search" placeholder="Search job...">
                <div class="job-card-list">
                    <template v-for="job in filterJobs" :key="job.id" v-if="filterJobs.length > 0">
                        <JobCard :job="job" />
                    </template>
                    <template v-else>
                        <h1 class="job-not-found">Job Not Found!</h1>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.job-list .job-list-content {
    padding-block: 30px 80px;
}

.job-list .job-list-content .job-list-header {
    margin-bottom: 20px;
}

.job-list .job-list-content .job-list-header .job-list-header-title {
    font-size: var(--fs-lg);
    color: var(--clr-light);
    font-weight: var(--fw-bold);
    color: var(--clr-light);
}

.job-list .job-list-content .job-list-search {
    padding: 15px;
    border: none;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
    outline: none;
    font-size: var(--fs-base);
}

.job-card-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.job-card-list .job-not-found {
    font-size: var(--fs-md);
    color: var(--clr-light);
}

@media (max-width: 480px) {
    .job-list .job-list-content .job-card-list {
        grid-template-columns: 1fr;
    }
}
</style>
