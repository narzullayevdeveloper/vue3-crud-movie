<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo
        :moviesCount="movies.length"
        :moviesFavorite="movies.filter((movie) => movie.favorite).length"
      />
      <div class="search-panel">
        <SearchPanel :updateTermHandler="updateTermHandler" />
        <AppFilter
          :updateFilterHandler="updateFilterHandler"
          :filterName="filter"
        />
      </div>
      <MovieList
        :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
        @onToggle="onToggleHandler"
        @onRemove="onRemoveHandler"
      />
      <MovieAddForm @createMovie="createMovie" />
    </div>
  </div>
</template>
<script>
import AppInfo from "../app-info/AppInfo.vue";
import SearchPanel from "../search-panel/SearchPanel.vue";
import AppFilter from "../app-filter/AppFilter.vue";
import MovieList from "../movie-list/MovieList.vue";
import MovieAddForm from "../movie-add-form/MovieAddForm.vue";
export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm,
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          name: "Omar",
          viewers: 889,
          favorite: false,
          like: true,
        },
        {
          id: 2,
          name: "Empire of Osman",
          viewers: 411,
          favorite: false,
          like: false,
        },
        {
          id: 3,
          name: "Ertugrul",
          viewers: 715,
          favorite: true,
          like: false,
        },
      ],
      term: "",
      filter: "all",
    };
  },
  methods: {
    createMovie(item) {
      this.movies = [...this.movies, item];
    },
    onToggleHandler({ id, prop }) {
      this.movies = this.movies.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
    },
    onRemoveHandler(id) {
      this.movies = this.movies.filter((i) => i.id !== id);
    },
    onSearchHandler(arr, term) {
      if (term.length === 0) {
        return arr;
      }

      return arr.filter((i) => i.name.toLowerCase().indexOf(term) > -1);
    },
    updateTermHandler(term) {
      this.term = term;
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case "popular":
          return arr.filter((i) => i.like);
        case "mostViewers":
          return arr.filter((i) => i.viewers > 500);
        default:
          return arr;
      }
    },
    updateFilterHandler(filter) {
      this.filter = filter;
    },
  },
};
</script>
<style>
.app {
  height: 100vh;
  color: #000;
}
.content {
  width: 1000px;
  min-height: 700px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}
.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
