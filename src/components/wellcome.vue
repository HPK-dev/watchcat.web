<script setup>
import axios from 'axios';
axios.get('/teapot')
    .catch(function(error){
        if (error.response){
            console.log(error.response.status)
            if(error.response.status == '418'){
                document.getElementById('status').innerHTML = 'done'
            } else {
                document.getElementById('status').innerHTML = 'warning'
            }
        }
    })
    //.then((response) => {
    //    console.log(response.status)
    //})
</script>
<script>

</script>
<template>
    <div>
        <h1>歡迎來到{{ projectName }}</h1>
        <h3 style="display: flex;">伺服器狀態：<md-icon id="status">more_horiz</md-icon></h3>
        <h2>請點擊右上方登入按鈕登入</h2>
    </div>
</template>
