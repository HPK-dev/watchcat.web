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
<script>
    import axios from 'axios';
    import { ref } from 'vue'
    export default {
        data(){
            return{
                data:ref([]),
                roomId:this.$route.query.room,
                message:ref([]),
                beginDate:ref([]),
                beginTime:ref([]),
                endsDate:ref([]),
                endsTime:ref([]),
            }
        },
        mounted(){
            axios.get("/test.json").then(response => {
                this.data = response.data.room.find(item => item.id.match(this.roomId))
            })
        },
        methods:{
            submit(){
                if(this.message.length === 0){
                    alert('您sent了個nothing lah~')
                }else if(this.beginDate.length === 0 || this.beginTime.length === 0){
                    alert('您什麼時候要開始？')
                }else if(this.endsDate.length === 0 || this.endsTime.length === 0){
                    alert('您這是打算不還了是吧？')
                }else if(this.$cookies.get("user-logged") == null){
                    alert('請登入')
                }else{
                    axios.put('/reserve' , {
                        room_id: this.roomId,
                        description: this.message,
                        begins: this.beginDate + ' ' + this.beginTime,
                        ends: this.endsDate + ' ' + this.endsTime,
                        user_id: this.$cookies.get("user-logged")
                    }).then(() => {
                        alert("submitted")
                        this.$router.push({
                            path: `/roomList`
                        })
                    }).catch(error => {
                        alert(error.response.data)
                    })
                }
            }
        }
    }
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
