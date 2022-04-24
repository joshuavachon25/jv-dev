<script>
  import {stacks} from '$lib/utils/techIcons'
  export let projet
</script>

<a sveltekit:prefetch href="/portfolio" class="group h-12 absolute top-5 flex pl-6 lg:pl-24 justify-start items-center gap-3">
  <i class="fa-solid fa-arrow-left-from-line "></i>
  <a  class="transition-all duration-500 group-hover:tracking-widest">Retour au portfolio</a>
</a>
<div class="w-10/12 xl:w-4/5 min-h-screen pt-24 pb-10 lg:pt-0 lg:pb-0 flex lg:flex-row flex-col mx-auto justify-start lg:justify-center items-center gap-10">
  <div class="w-full lg:w-1/2 rounded-md shadow-md">
    <img class="rounded-md shadow-md w-full" src="{projet.cover}">
    {#if projet?.url}
    <a href={projet.url} target="_blank" class="-mt-1 text-center block py-5 uppercase bg-mauve transition-all duration-500 hover:bg-gray-700 text-white text-2xl rounded-b-md">
      {projet.type === "site" ? "Visiter le site" : projet.type === "article" ? "Lire l'article" : "Voir la carte"}
    </a>
    {/if}
  </div>
  <div class="lg:w-1/2 prose prose-xl lg:prose-2xl lg:h-auto">
    <h2 class="mb-0">{projet.titre}</h2>
    <h4 class="text-gray-500">{projet.role === null ? "" : projet.role}</h4>
    <p class="text-justify lg:text-left">{projet.content}</p>
    {#if projet.stack !== null}
      <div class="flex flex-row flex-wrap justify-evenly items-center w-full">
        {#each projet.stack as stack}
           <span class="relative group w-8 md:w-12 select-none">
               <span >
                   {@html stacks[stack]?.icone}
               </span>
               <span class="text-xs hidden md:flex">{stacks[stack]?.nom}</span>
           </span>
        {/each}
      </div>
    {/if}
  </div>
</div>
