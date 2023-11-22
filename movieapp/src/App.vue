<script setup>
</script>

<template>
    <header>
      <router-link :to="{name: 'home'}">
        <h1>Movies <span>App</span></h1>
      </router-link>
    </header>

    <main>
      <router-view>
        
      </router-view>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap');
body{
  margin: 0 !important;
  padding: 0 !important;
  background-color: red;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

a {
  text-decoration: none;
}
header{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  background-color: #1e293b;
  box-shadow: opx opx opx 7px rgba(0, 0, 0, alpha(0.1));
}
header h1{
  color: #fff;
  font-size: 21px;
}
header h1 span{
  color: #059669;
}

</style>
