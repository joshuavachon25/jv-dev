<script>
    export let projets
</script>

<svelte:head>
  <title>Portfolio — Joshua L.J. Vachon</title>
  <meta name="description" content="Découvrez mes différents projets web, mes oeuvres et mes cartes. " />
  <meta name="keywords" content="Joshua, Vachon, Joshua L.J. Vachon, web, dev, cartographie, histoire, humanités numériques, digital humanities, portfolio">
  <meta property="og:url"                content="https://www.joshuavachon.dev/portfolio" />
  <meta property="og:type"               content="website" />
  <meta property="og:title"              content="Portfolio - Joshua L.J. Vachon" />
  <meta property="og:description"        content="Découvrez les différents projets web, les oeuvres et les cartes de Joshua Vachon. " />
  <meta property="og:image"              content="/fb-default.png" />
</svelte:head>


<div class="grid grid-cols-2 lg:grid-cols-4 w-full mx-auto">

  {#each projets as projet}
                <span class="group overflow-hidden aspect-video transition-all duration-500 card rounded-none text-gray-800 projetCarte shadow-md " style="background-image: url('{projet.cover}'); background-size: cover;">
                <div class="skewElem opacity-0 transition-opacity h-full duration-300 group-hover:opacity-100 flex flex-col justify-center items-center bg-white bg-opacity-95">
                    <div class="hidden md:flex md:flex-col">
                        <h4 class="font-black md:text-2xl ">{projet.titre}</h4>
                    </div>
                    <div class="flex flex-row gap-4 mt-5">
                      <a sveltekit:prefetch href="/portfolio/{projet.id}" class="px-3 w-20 h-20 flex justify-center items-center aspect-square inline w-auto py-2 border-2 border-solid border-gray-200 hover:bg-gray-200 transition-all duration-500 rounded-md hover:shadow-md"><i class="fa-solid fa-info fa-2x"></i></a>
                      {#if projet.url !== null}
                            <a href={projet.url} target="_blank" class="px-3 w-20 h-20 flex justify-center items-center aspect-square inline w-auto py-2 border-2 border-solid border-mauve bg-mauve hover:bg-gray-700 hover:shadow-md text-white transition-all duration-500 rounded-md"><i class="fa-solid fa-eye fa-2x"></i></a>
                        {/if}
                    </div>

                </div>
            </span>
  {/each}
</div>

