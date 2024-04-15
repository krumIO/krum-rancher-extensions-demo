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
            <input :value="searchQuery" :placeholder="$store.getters['i18n/t']('appLauncher.filter')" @input="$emit('update:search-query', $event.target.value)" />
        </div>
        <button class="icon-button" @click="$emit('toggle-sort')" v-if="isGridView">
            <i class="icon icon-sort" />
        </button>
        <div class="select-wrapper">
            <select :value="selectedCluster" class="cluster-select" @change="$emit('update:selected-cluster', $event.target.value)">
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
    position: fixed;
    right: 6.6rem;
    top: 4.2rem;
    z-index: 2;
    padding-bottom: 0.425rem;
    padding-right: 4.4rem;
    background: rgb(27, 28, 33);
    border-bottom: var(--header-border-size) solid var(--header-border);
}

.icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: var(--primary);
    font-size: 1.8rem;
}

.icon-button:hover {
    color: var(--primary-hover);
}

.search-input {
    text-align: right;
    justify-content: flex-end;
    display: flex;

    input {
        width: 190px;
        padding: 11px;
        font-size: 1rem;
        border: 1px solid var(--border);
        border-radius: 4px;
    }
}

.select-wrapper select {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>