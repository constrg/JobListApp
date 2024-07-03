<script setup>
import { ref, watch } from 'vue'
import Button from '../components/Button.vue'
import job_list_data from '../data/job_list_data.json'

const { id } = defineProps(['id'])
const job = ref(job_list_data.find(j => j.id === Number(id)))

watch(() => id, (newId) => {
    job.value = job_list_data.find(j => j.id === Number(newId))
})

</script>

<template>
    <div class="job-details">
        <div class="container">
            <div class="job-details-content">
                <RouterLink :to="{ name: 'JobList' }">
                    <Button btnTitle="Back" class="back-btn" />
                </RouterLink>
                <div class="job-details-card" data-aos="fade-in" data-aos-duration="1000" data-aos-once="true">
                    <img :src="job.img" class="job-details-card-img" alt="developer_img">
                    <div class="job-details-card-text">
                        <h1 class="job-details-card-position">
                            {{ job.position }}
                        </h1>
                        <p class="job-details-card-salary">
                            Salary: {{ job.salary }} PHP
                        </p>
                        <p class="job-details-card-job-details">
                            {{ job.job_details }}
                        </p>
                        <Button btnTitle="Apply" class="apply-btn" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.job-details .job-details-content {
    padding-block: 30px 80px;
}

.job-details .job-details-content .back-btn {
    font-size: var(--fs-base);
    padding: 10px;
    margin-bottom: 30px;
}

.job-details .job-details-content .job-details-card {
    background-color: var(--clr-light);
    width: 100%;
    border-radius: 5px;
    margin: 0 auto;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.job-details .job-details-content .job-details-card .job-details-card-img {
    height: auto;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
}

.job-details .job-details-content .job-details-card .job-details-card-text {
    padding: 20px;
}

.job-details .job-details-content .job-details-card .job-details-card-text .job-details-card-position {
    font-size: var(--fs-md);
    margin-bottom: 5px;
    color: var(--clr-accent);
    font-weight: var(--fw-bold);
}

.job-details .job-details-content .job-details-card .job-details-card-text .job-details-card-salary {
    color: var(--clr-gray);
    font-size: var(--fs-base);
    margin-bottom: 20px;
}

.job-details .job-details-content .job-details-card .job-details-card-text .job-details-card-job-details {
    text-align: justify;
    margin-bottom: 20px;
}

.job-details .job-details-content .job-details-card .job-details-card-text .apply-btn {
    padding: 10px 30px;
    font-size: var(--fs-base);
}

@media (max-width: 640px) {
    .job-details .job-details-content .job-details-card {
        flex-direction: column;
    }

    .job-details .job-details-content .job-details-card .job-details-card-img {
        border-radius: 5px 5px 0 0;
    }
}
</style>