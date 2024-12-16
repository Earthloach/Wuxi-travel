<template>
  <div>
    <h1>{{ location.name }}</h1>
    <img :src="location.imageUrl" :alt="location.name" />
    <p>{{ location.description }}</p>
    <p>地址: {{ location.address }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { trendLocation } from "@/data/trendLocation";
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const location = ref(trendLocation.find((loc) => loc.id == props.id));
</script>

<style lang="scss" scoped></style>
