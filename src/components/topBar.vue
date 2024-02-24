<style>
  .title{
    margin: auto;
    font-weight: bold;
    font-size: x-large;
    text-align: center;
  }
</style>
<template>
    <div>
      <span class="icon" style="position: absolute;right: 10px;">
        <md-icon-button @:click="login()">
          <md-icon id="loginStatus" style="width: fit-content;height: fit-content;text-align: center;color: white;">
            account_circle
          </md-icon>
        </md-icon-button>
      </span>
      <h1 class="title">{{ projectName }}</h1>
    </div>
    <!--GoogleLogin :callback="callback"/-->
</template>


<script setup>
  import { googleTokenLogin } from "vue3-google-login"
  import axios from "axios";
  const login = () => {
    googleTokenLogin().then((response) => {
      console.log("Handle the response", response)

      // HINT: Be sure to fill this with your server url
      axios.post('' , {
        access_token: response.access_token
      })

      document.getElementById("loginStatus").innerHTML = "face";  //test
    })
  }
</script>

