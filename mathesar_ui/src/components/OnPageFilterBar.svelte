<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { _ } from 'svelte-i18n';

  import TextInputWithPrefix from '@mathesar/component-library/text-input/TextInputWithPrefix.svelte';
  import { Button, iconSearch } from '@mathesar-component-library';

  const dispatch = createEventDispatcher();

  export let searchQuery: string;

  // TODO: Make it take all the TextInput props too
  export let placeholder: string;

  function handleClear() {
    dispatch('clear');
  }
</script>

<div class="container">
  <div class="actions-container">
    <div class="search-container">
      <TextInputWithPrefix
        {placeholder}
        bind:value={searchQuery}
        prefixIcon={iconSearch}
      />
    </div>
    <slot name="action" />
  </div>

  {#if searchQuery}
    <div class="search-results-info">
      <slot name="resultInfo" />
      <Button appearance="secondary" on:click={handleClear}>
        {$_('clear')}
      </Button>
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;

    > :global(* + *) {
      margin-top: 0.5rem;
    }
  }

  .actions-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .search-container {
      flex: 1;
    }

    > :global(* + *) {
      margin-left: 1rem;
    }
  }

  .search-results-info {
    display: flex;
    align-items: center;

    > :global(* + *) {
      margin-left: 2rem;
    }
  }
</style>
