<template>
  <div>
    <h1>{{ hotel.name }}</h1>
    <img :src="hotel.imageUrl" :alt="hotel.name" />
    <p>{{ hotel.description }}</p>
    <p>评分: {{ hotel.rating }}/5</p>
    <p>点评: {{ hotel.reviews }}条</p>
    <p>地址: {{ hotel.address }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { hotelData } from "../data/hotels";
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const hotel = ref(hotelData.find((h) => h.id === props.id));
</script>

<style lang="scss" scoped></style>
