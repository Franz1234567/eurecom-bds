---
layout: page
title: Sports
description: All sports in one place
---

<script>
  import PostItem from "$lib/components/PostItem.svelte";
  export let data;
  const { groupedPosts } = data;
</script>

{#each groupedPosts as [category, posts]}


  <div class="category-container">
    <div class="grid">
      {#each posts as post}
        <PostItem {post} />
      {/each}
    </div>
  </div>
{/each}

<style>
  .category-container {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  h2 {
    text-transform: capitalize;
  }

  @media screen and (max-width: 800px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
