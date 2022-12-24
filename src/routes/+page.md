---
layout: page
title: Home 
description: "Website for EURECOM's Sports association"
image: ./IMG_6891.jpg
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
<a href="https://eurecom.fr/">EURECOM</a> is a french engineering school based in Sophia Antipolis, France.
</p>

<img title="The team minus one" height="350px" src="https://ahmedg.fr/assets/IMG_6891.JPG">

<p> Find out more about the planning on the <a href="/planning">Planning</a> page. </p>

<h3> Partners </h3>
<!-- {#each $paginatedPosts as post}
  <PostItem {post} />
{/each} -->

<!-- <Pagination items={posts} itemsPerPage={2} /> -->
