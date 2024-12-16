<template>
  <div class="text">
    <span>酒店</span>
    <span class="highlight">推荐</span>
  </div>
  <el-carousel :interval="4000" type="card" height="300px" arrow="always">
    <el-carousel-item v-for="hotel in hotels" :key="hotel.id">
      <router-link :to="{ name: 'HotelDetail', params: { id: hotel.id } }">
        <div class="custom-card">
          <img :src="hotel.imageUrl" :alt="hotel.name" class="hotel-image" />
          <div class="card-content">
            <p id="name">{{ hotel.name }}</p>
            <span id="rating">{{ hotel.rating }}/5</span>
            <br />
            <span>{{ hotel.reviews }}条点评</span>
          </div>
        </div>
      </router-link>
    </el-carousel-item>
  </el-carousel>
  <div class="text">
    <span>当季</span>
    <span class="highlight">热门</span>
    <span> 出发地 </span>
    <el-select
      v-model="value"
      style="width: 100px; margin-left: 10px"
      placeholder="请选择"
    >
      <el-option :value="dest">{{ dest }}</el-option>
    </el-select>
  </div>
  <div class="location-list" v-if="value">

    <el-card
      v-for="location in locations"
      :key="location.id"
      class="custom-card"
    >
      <router-link
        :to="{ name: 'LocationDetail', params: { id: location.id } }"
      >
        <img
          :src="location.imageUrl"
          :alt="location.name"
          class="location-image"
        />
        <div class="card-content">
          <p id="name">{{ location.name }}</p>
          <span id="rating">{{ location.rating }}分</span>
          <br />
          <span style="font-weight: bold">{{ location.reviews }}人出游</span>
        </div>
      </router-link>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { hotelData } from "../data/hotels";
import { trendLocation } from "../data/trendLocation";

const hotels = ref(hotelData);
const locations = ref(trendLocation);
const dest = "无锡";
const value = ref("");
</script>

<style scoped lang="scss">
$card-bg-color: #fff;
$card-border-radius: 10px;
$card-box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
$card-hover-transform: scale(1.05);
$font-color: #333;

.custom-card {
  background: $card-bg-color;
  border-radius: $card-border-radius;
  box-shadow: $card-box-shadow;
  overflow: hidden;
  transition: transform 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:hover {
    transform: $card-hover-transform;
  }

  .hotel-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .location-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .card-content {
    #name {
      margin-top: 8px;
      font-size: 16px;
      font-weight: bold;
      color: $font-color;
    }
    #rating {
      font-weight: bold;
      text-align: left;
      border-radius: 50%;
      display: inline-block;
      width: 40px;
      height: 40px;
      background-color: #add8e6; /* 浅蓝色 */
      line-height: 40px;
      text-align: center;
    }
  }
}

.location-list {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
}

.text {
  text-align: left;
  font-family: Arial, sans-serif;
  font-size: 20px;

  .highlight {
    font-weight: bold;
    color: orange;
  }
}
</style>
