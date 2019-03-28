<template>
    <div>
        <span  v-text='msg'></span>
        <span v-text='$route.query.goodsid'></span>
          <span v-text='$route.params.cartId'></span>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            msg:'购物车页面'
        }
    }
}
</script>

