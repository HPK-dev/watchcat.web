<script setup>
import { reactive, ref } from "vue";

// Data
const test = ref("data");
const menu = reactive([
  {
    header: "index",
    hiddenOnCollapse: true,
  },
  {
    href: "/",
    title: "首頁",
    icon: {
      element: "span",
      text: "home",
    },
  },
  {
    href: "/reserve",
    title: "預約教室",
    icon: {
      element: "span",
      text: "domain_add",
    },
  },
  {
    href: "/cards",
    title: "卡片管理",
    icon: {
      element: "span",
      text: "credit_card",
    },
    child: [
      {
        href: "/cards/addCard",
        title: "新增卡片",
      },
      {
        href: "/cards/delCard",
        title: "刪除卡片",
      },
      /*{
              href: '/cards/token',
              title: '訪客代碼',
            },*/
    ],
  },
]);

// Props
const props = defineProps({
  menu: {
    type: Array,
    required: true,
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <sidebar-menu collapsed :menu="menu" />
</template>
