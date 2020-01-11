<template>
  <div class="modal-sheet" v-on:click="onClose">
    <button v-on:click="onClose" class="close-button">&times;</button>
    <div class="modal"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: { onClose: { type: Function, default: null } }
}
</script>

<style lang="scss" scoped>
.modal-sheet {
  z-index: 25;
  background-color: hsla(0, 0%, 0%, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
}

.close-button {
  background: white;
  border-radius: 50%;
  border: none;
  font-size: 1.4em;
  height: 2em;
  width: 2em;
  text-align: center;
  font-weight: bold;
  position: fixed;
  top: 100px;
  left: 100px;
  z-index: 32;

  &:hover {
    cursor: pointer;
  }
}

.modal {
  z-index: 30;
  //   width: 50vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1em;
  border-radius: 3px;
  border: 1px solid hsla(0, 0%, 0%, 0.3);

  & > pre {
    width: 100%;
    margin: 0;
  }
}
</style>
