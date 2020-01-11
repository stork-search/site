<template>
  <div class="note">
    <div class="flex">
      <span class="icon">!</span>
      <div>
        <p style="margin: 0;"><strong class="note-text">Note:</strong></p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.note {
  background-color: rgb(179, 185, 243);
  border: 1px solid hsla(0, 0%, 0%, 0.2);
  border-radius: 3px;
  padding: 1em;
  font-size: 0.9em;
}

.flex {
  display: flex;
}

.icon {
  display: block;
  font-size: 3rem;
  color: hsla(0, 0%, 100%, 0.8);
  background: hsla(0, 0%, 0%, 0.2);
  line-height: 1;
  font-weight: bold;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  text-align: center;
  margin-right: 1rem;
  margin-top: 1.5rem;
  border-radius: 50%;
}

.note-text {
  font-size: 0.8em;
  color: hsla(0, 0%, 0%, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.13em;
}
</style>
