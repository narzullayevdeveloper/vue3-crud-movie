<template>
  <Box class="movie-add-form">
    <h3>Yangi kino qo'shish</h3>
    <form class="add-form d-flex gap-2">
      <Input
        class="new-movie-label"
        placeholder="Qanday kino?"
        v-model="name"
      />
      <Input
        class="new-movie-label"
        placeholder="Necha marotaba ko'rilgan?"
        v-model="viewers"
      />
      <PrimaryButton
        class="btn-outline-dark"
        type="submit"
        @click.prevent="addMovie"
      >
        Qo'shish
      </PrimaryButton>
    </form>
  </Box>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      viewers: "",
    };
  },
  methods: {
    addMovie() {
      if (!this.name || !this.viewers) return;
      const newMovie = {
        id: crypto.randomUUID(),
        name: this.name,
        viewers: this.viewers,
        favorite: false,
        like: false,
      };
      this.$emit("createMovie", newMovie);
      (this.name = ""), (this.viewers = "");
    },
  },
};
</script>
<style scoped>
.movie-add-form {
  margin-top: 2rem;
}
</style>
