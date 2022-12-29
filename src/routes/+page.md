---
layout: page
title: Home 
description: "Website for EURECOM's Sports association"
---

<script>
  import PostItem from "$lib/components/PostItem.svelte";
  import Pagination from "$lib/components/Pagination/Pagination.svelte";
  import { paginatedPosts } from "$lib/components/Pagination/paginatedPosts";
  import Seo from "$lib/components/Seo.svelte";
  import { siteTitle, siteDescription } from "$lib/constants";
  
  export let data;

  $: ({ posts } = data)
</script>
<p> Welcome! This is the website of the <b>Bureau des Sports</b> of EURECOM.
<a href="https://eurecom.fr/">EURECOM</a> is an engineering school based in Sophia Antipolis, France.
</p>

<img title="The team minus one" height="350px" src="https://ahmedg.fr/assets/IMG_6891.JPG">

<br>
<p> Planning can be found <a href="/planning">here</a>.</p>

<h3><i class="fa-solid fa-newspaper"></i> News </h3>
<p> More coming soon...</p>
<!-- {#each $paginatedPosts as post}
  <PostItem {post} />
{/each} -->

<!-- <Pagination items={posts} itemsPerPage={2} /> -->
