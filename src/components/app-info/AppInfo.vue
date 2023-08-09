<template>
  <Box>
    <p class="fs-3 text-uppercase">Barcha kinolar soni: {{ moviesCount }}</p>
    <p class="fs-4 text-uppercase">
      Ko'rilgan kinolar soni: {{ moviesFavorite }}
    </p>
  </Box>
</template>
<script>
export default {
  props: {
    moviesCount: {
      type: Number,
      required: true,
    },
    moviesFavorite: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style></style>
