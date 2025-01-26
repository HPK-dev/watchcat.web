<style>
.room {
  height: 40vh;
  width: 40vh;
  visibility: visible;
  display: inline-block;
  background-color: #2a2a2e;
  border-radius: 3vh;
  margin: 3vh;
}

.description {
  display: inline-block;
  position: relative;
  vertical-align: top;
}

.submit {
  display: inline-block;
  height: 6vh;
  width: 12vh;
  visibility: visible;
  background-color: #2a2a2e;
  border-radius: 2vh;
  color: white;
}

.word {
  height: 6vh;
  width: 12vh;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
<script setup>
import axios from "axios";
import { ref, reactive, onMounted } from "vue";

// Data
const data = reactive(ref([]));

// Methods
const getJson = function () {
  try {
    axios.get("/test.json").then((response) => {
      console.log(response);
      data = response.data;
      //console.log("jsonData = "+JSON.stringify(data, null, 2));
      //console.log('jsonData.length='+data.room.length);
      //console.log(data.room)
    });
  } catch (error) {
    console.error("Failed to fetch data", error);
  }
};

// Mounted
onMounted(() => {
  getJson();
});
</script>
<template>
    <div>
        <h1>預約教室</h1>
        <div v-for="(item, index) in data.room" :key="item.id">
            <span class="room">image0</span>
            <span class="description">
                <h2>教室名稱：{{item.roomName}}教室</h2>
                <h3>位置：{{item.bridge}}樓{{item.floor}}樓</h3>
                <h3>可容納人數：{{item.capacity}}</h3>
                <h3>簡介：{{item.description}}</h3>
                <a :href="`/classroomReserve?room=${item.id}`"><span class="submit"><span class="word"><md-icon>add</md-icon><h3 style="display: inline;">預約</h3></span></span></a>
            </span>
        </div>
    </div>
  </div>
</template>
