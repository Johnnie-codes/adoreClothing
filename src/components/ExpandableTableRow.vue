<script setup>
import { watch, computed, ref } from "vue";

import { genId } from "../pages/utils/utils";

import GenericTableRow from "@/components/GenericTableRow.vue";
import Map from "@/components/Map.vue";
const props = defineProps({
  rowData: {
    type: Array,
  },
  rowKeys: {
    type: Array,
  },
  headKeys: {
    type: Array,
    required: true,
  },
});

const openedRows = ref([]);

function toggleRow(id) {
  const idx = openedRows.value.findIndex((el) => el == id);
  if (idx > -1) {
    openedRows.value.splice(idx, 1);
  } else {
    openedRows.value.push(id);
  }
}

const isOpen = computed(() => (id) => openedRows.value.find((el) => el == id));

const data = computed(() => {
  return props.rowData.map((el) => ({ ...el, id: genId.next().value }));
});
</script>
<template>
  <GenericTableRow :headKeys="headKeys" :rowData="data" :rowKeys="rowKeys">
    <template #actions="{ row }">
      <slot name="actions" :row="row" :toggleRow="() => toggleRow(row.id)">
        <button class="bg-slate-400 rounded-lg w-12 border-2" @click="toggleRow(row.id)">Map
          <!-- <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.952544 0.282428C1.22211 -0.0320665 1.69559 -0.0684876 2.01008 0.201079L8.52199 5.78271L15.0339 0.201079C15.3484 -0.0684876 15.8219 -0.0320665 16.0914 0.282428C16.361 0.596922 16.3246 1.0704 16.0101 1.33996L9.01008 7.33996C8.72921 7.58071 8.31476 7.58071 8.03389 7.33996L1.03389 1.33996C0.719398 1.0704 0.682977 0.596922 0.952544 0.282428ZM0.952544 4.28243C1.22211 3.96793 1.69559 3.93151 2.01008 4.20108L8.52199 9.78271L15.0339 4.20108C15.3484 3.93151 15.8219 3.96793 16.0914 4.28243C16.361 4.59692 16.3246 5.0704 16.0101 5.33996L9.01008 11.34C8.72921 11.5807 8.31476 11.5807 8.03389 11.34L1.03389 5.33996C0.719398 5.0704 0.682977 4.59692 0.952544 4.28243Z"
              fill="#7063EE"
            />
          </svg> -->
        </button>
      </slot>
    </template>
    <template #bottom="{ row }">
      <tr v-if="isOpen(row.id)">
        <td :colspan="rowKeys.length + 2">
      <Map :latitude="row.latitude" :longitude="row.longitude"></Map>
        </td>
      </tr>
    </template>
  </GenericTableRow>
</template>
