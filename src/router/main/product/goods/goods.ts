const goods = () =>
  import(
    /* webpackChunkName: "product" */ '@/views/main/product/goods/goods.vue'
  )
export default {
  path: '/main/product/goods',
  name: 'goods',
  component: goods,
  children: []
}
