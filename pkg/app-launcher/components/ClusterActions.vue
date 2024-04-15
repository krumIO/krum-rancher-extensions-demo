<script>
export default {
    name: 'ClusterActions',
    props: {
        searchQuery: {
            type: String,
            required: true,
        },
        isGridView: {
            type: Boolean,
            required: true,
        },
        selectedCluster: {
            type: String,
            required: true,
        },
        clusterOptions: {
            type: Array,
            required: true,
        },
    },
    emits: ['update:search-query', 'toggle-sort', 'update:selected-cluster', 'set-view'],
};
</script>

<template>
    <div class="cluster-actions">
    <div class="search-input">
        <input v-model="searchQuery" :placeholder="$store.getters['i18n/t']('appLauncher.filter')" @input="$emit('update:search-query', searchQuery)" />
    </div>
    <button class="icon-button" @click="$emit('toggle-sort')" v-if="isGridView">
        <i class="icon icon-sort" />
    </button>
    <div class="select-wrapper">
        <select v-model="selectedCluster" class="cluster-select" @change="$emit('update:selected-cluster', selectedCluster)">
        <option v-for="option in clusterOptions" :key="option.value" :value="option.value">
            {{ option.label }}
        </option>
        </select>
    </div>
    <button class="icon-button" @click="$emit('set-view', 'grid')">
        <i class="icon icon-apps" />
    </button>
    <button class="icon-button" @click="$emit('set-view', 'list')">
        <i class="icon icon-list-flat" />
    </button>
    </div>
</template>


<style scoped>
.cluster-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #f4f4f5;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.icon-button {
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    font-size: 1.6rem;
}

.search-input input {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.select-wrapper select {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>