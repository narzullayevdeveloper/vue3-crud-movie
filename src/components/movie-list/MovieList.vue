<template>
  <Box class="movie-list list-group">
    <MovieListItem
      :key="movie.name"
      v-for="movie in movies"
      :movie="movie"
      @onToggle="$emit('onToggle', $event)"
      @onRemove="$emit('onRemove', $event)"
    />
  </Box>
</template>
<script>
import MovieListItem from "../movie-list-item/MovieListItem.vue";

export default {
  components: { MovieListItem },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.movie-list {
  margin-top: 2rem;
}
</style>
