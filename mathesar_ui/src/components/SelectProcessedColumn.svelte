<script lang="ts">
  import type { ProcessedColumn } from '@mathesar/stores/table-data';
  import { Select } from '@mathesar-component-library';

  import ProcessedColumnName from './column/ProcessedColumnName.svelte';

  export let columns: ProcessedColumn[];
  export let value: ProcessedColumn | undefined = undefined;
  export let disabled = false;
</script>

<Select
  options={columns}
  labelKey="name"
  valuesAreEqual={(a, b) => a?.id === b?.id}
  bind:value
  {disabled}
  on:change
  let:option
>
  {#if option}
    <ProcessedColumnName processedColumn={option} />
  {/if}
</Select>
