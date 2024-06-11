<style>
    .room{
        height: 40vh;
        width: 40vh;
        visibility: visible;
        display: inline-block;
        background-color: #2a2a2e;
        border-radius: 3vh;
        margin: 3vh;
    }
    .description{
        display: inline-block;
        position: relative;
        vertical-align: top;
    }
    .submit{
        display: inline-block;
        height: 6vh;
        width: 12vh;
        visibility: visible;
        background-color: #2a2a2e;
        border-radius: 2vh;
        margin: 10px;
    }
    .word{
        height: 6vh;
        width: 12vh;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .entered{
        color: #00942a;
    }
</style>
<script>
    import axios from 'axios';
    import { ref } from 'vue'
    export default {
        data(){
            return{
                data:ref([]),
                inRoom:ref([]),
                roomId:this.$route.query.room
            }
        },
        mounted(){
            axios.get("/test.json").then(response => {
                console.log(response.data.room);
                this.data = response.data.room.find(item => item.id.match(this.roomId))
            })
            axios.get('/room_status',{
                params:{
                    room_id: this.roomId
                }
            }).then(response => {
                this.inRoom = response.data
            })
        }
    }
</script>
<template>
    <div>
        <h1>教室管理</h1>
        <div>
            <span class="room">image0</span>
            <span class="description">
                <h2>教室名稱：{{data.roomName}}教室</h2>
                <h3>人數：{{data.capacity}}</h3>
                <h3>已到：{{ inRoom.length }}</h3>
                <h3>未到：{{ data.capacity - inRoom.length }}</h3>
            </span>
            <br>
            <!--span class="submit"><span class="word"><md-icon>face</md-icon><h3 style="display: inline;margin-left: 3px;">test0</h3></span></span  WIP(capacity)  -->

            <span class="submit entered" v-for="(item, index) in this.inRoom" :key="item.at">
                <span class="word"><md-icon>face</md-icon><h3 style="display: inline;margin-left: 3px;">{{ item.username }}</h3></span>
            </span>
        </div>
    </div>
</template>