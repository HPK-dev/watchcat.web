<style>
.room {
  height: 40vh;
  width: 40vh;
  visibility: visible;
  display: inline-flex;
  background-color: #2a2a2e;
  border-radius: 3vh;
  margin: 3vh;
}

.description {
  display: inline-flex;
  position: relative;
  flex-direction: column;
}

.submit {
  display: inline-block;
  height: 6vh;
  width: 12vh;
  visibility: visible;
  background-color: #2a2a2e;
  border-radius: 2vh;
  margin: 10px;
}

.word {
  height: 6vh;
  width: 12vh;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.datetime {
  border: none;
  background-color: #2a2a2e;
  border-radius: 1vh;
  margin-bottom: 1vh;
}
</style>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { reactive, onMounted } from "vue";

// Data
const data = reactive(ref([]));
const roomId = reactive(this.$route.query.room);
const message = reactive(ref([]));
const beginDate = reactive(ref([]));
const beginTime = reactive(ref([]));
const endsDate = reactive(ref([]));
const endsTime = reactive(ref([]));

// Methods
const submit = function () {
  console.log("submitted");
};

// Mounted
onMounted(() => {
  axios.get("/test.json").then((response) => {
    console.log(response.data.room);
    data = response.data.room.find((item) => item.id.match(roomId));
  });
});
</script>
<template>
  <div>
    <h1>教室預約</h1>
    <div>
      <h1>教室預約</h1>
      <div>
        <span class="room">image0</span>
        <span class="description">
          <h2>教室名稱：{{ data.roomName }}教室</h2>
          <h3>請輸入申請書內容</h3>
          <textarea
            v-model="message"
            style="
              border: none;
              height: 100px;
              background-color: #2a2a2e;
              border-radius: 3vh;
            "
            placeholder="在此處輸入..."
          />
          <h3>開始時間 :</h3>
          <input type="date" v-model="beginDate" class="datetime" /><input
            type="time"
            v-model="beginTime"
            class="datetime"
          />
          <h3>結束時間 :</h3>
          <input type="date" v-model="endsDate" class="datetime" /><input
            type="time"
            v-model="endsTime"
            class="datetime"
          />
        </span>
        <h3>Preview : {{ message }}</h3>
        <h3>
          開始時間 : {{ beginDate }} {{ beginTime }} 結束時間 : {{ endsDate }}
          {{ endsTime }}
        </h3>
        <a href="javascript:;"
          ><span class="submit" v-on:click="submit()"
            ><span class="word"
              ><md-icon>add</md-icon>
              <h3 style="display: inline">送出</h3></span
            ></span
          ></a
        >
      </div>
    </div>
  </div>
</template>
