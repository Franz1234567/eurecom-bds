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

<img title="The team minus one" height="350px" src="../../IMG_6891.JPG">

<br>
<p> Planning can be found <a href="/planning">here</a>.</p>

<h3><i class="fa-solid fa-newspaper"></i> News </h3>
<i style="opacity: 50%;">07/05/2023 </i><a href="/sophia-games"> Jeux de Sophia </a> <br>
<i style="opacity: 50%;">06/02/2023 </i><a href="/cartel"> Cartel registration </a>
<br>
<i style="opacity: 50%;">20/01/2023 </i><a href="/refund"> Sports refund </a>



<br>
<div style="padding-bottom: 3em;"></div>