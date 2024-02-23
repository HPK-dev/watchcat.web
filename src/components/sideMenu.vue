<script>
  export default {
    props: {
      menu: {
        type: Array,
        required: true
      },
      collapsed: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return{
        test:"data",
        menu: [
          {
            header: 'index',
            hiddenOnCollapse: true,
          },
          {
            href: '/',
            title: '首頁',
            icon: {
              element: 'span',
              text: 'home'
            }
          },
          {
            href: '/cards',
            title: '卡片管理',
            icon: {
              element: 'span',
              text: 'credit_card'
            },
            child: [
              {
                href: '/cards/addCard',
                title: '新增卡片',
              },
              {
                href: '/cards/delCard',
                title: '刪除卡片',
              },
              /*{
                href: '/cards/token',
                title: '訪客代碼',
              },*/
            ],
          },
        ],
      }
    },
  }
</script>
<template>
  <sidebar-menu collapsed :menu="menu" />
</template>