<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center"
    :class="[{ like: movie.like }, { favorite: movie.favorite }]"
  >
    <span
      class="list-group-item-label"
      @click="$emit('onToggle', { id: movie.id, prop: 'like' })"
    >
      {{ movie.name }}
    </span>
    <input type="number" class="list-group-item-input" :value="movie.viewers" />
    <div class="d-flex justify-content-center align-items-center">
      <button
        type="button"
        class="btn-cookie btn-sm"
        @click="$emit('onToggle', { id: movie.id, prop: 'favorite' })"
      >
        <i class="fas fa-cookie"></i>
      </button>
      <button
        type="button"
        class="btn-trash btn-sm"
        @click="$emit('onRemove', movie.id)"
      >
        <i class="fas fa-trash"></i>
      </button>
      <i class="fas fa-star"></i>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onLike() {
      this.$emit("onLike", this.movie.id);
    },
  },
};
</script>
<style scoped>
.list-group-item {
  padding: 15px 20px;
  border: none;
  border-bottom: 1px solid #3d5a80;
}
.list-group-item:last-child {
  border-bottom: none;
}
.list-group-item span {
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
  width: 550px;
}
.list-group-item input {
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border: 0;
}
.list-group-item button {
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
.list-group-item .btn-cookie {
  color: #e09f3e;
}
.list-group-item .btn-trash {
  color: #e5383b;
}
.list-group-item .fa-star {
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  color: #ffd700;
  transition: all 0.3s linear;
  transform: translateX(50px);
  opacity: 0;
  cursor: pointer;
}
.list-group-item.like .fa-star {
  transform: translateX(0);
  opacity: 1;
}
.list-group-item.favorite .list-group-item-label,
.list-group-item.favorite .list-group-item-input {
  color: #e09f3e;
}
</style>
