<script>
    import { format} from 'date-fns'
    export let articles
</script>

<svelte:head>
  <title>L'encre coule à flot; Mes articles — Joshua L.J. Vachon</title>
  <meta name="description" content="La section article me permet d'explorer et partager mes recherches, mes passions, mes découvertes. Embarquez à bord de l'E-Calypso! L'océan numérique nous attends!" />
  <meta name="keywords" content="Joshua, Vachon, Joshua L.J. Vachon, web, dev, cartographie, histoire, humanités numériques, digital humanities, articles, blog, blogue, texte">
  <meta property="og:url"                content="https://www.joshuavachon.dev/blog" />
  <meta property="og:type"               content="website" />
  <meta property="og:title"              content="L'encre coule à flot; Mes articles - Joshua L.J. Vachon" />
  <meta property="og:description"        content="La section article me permet d'explorer et partager mes recherches, mes passions, mes découvertes. Embarquez à bord de l'E-Calypso! L'océan numérique nous attends!" />
  <meta property="og:image"              content="/fb-default.png" />
</svelte:head>

<div class="w-full px-2 md:px-5 lg:px-0 mx-auto">
  <div class="flex-col pt-10 text-center">
    <!--<h2 class="uppercase text-5xl font-black inline mb-10 px-10">L'encre coule à flot</h2>-->
    <p class="lg:mt-28 mb-10 lg:px-40 text-lg text-gray-500 md:text-xl ">La section article me permet d'explorer et partager mes recherches, mes passions, mes découvertes. Embarquez à bord de l'E-Calypso! L'océan numérique nous attend!</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10 w-full lg:w-4/5 mx-auto">

    {#each articles as article}
      <a sveltekit:prefetch class="group scale-95 hover:scale-100 hover:shadow-lg duration-500 card bg-white text-gray-800 shadow-md rounded-md"  href={"/blog/" + article.id}>
        <div class=""><img class="object-cover h-44 w-full" src={article.img} alt="Shoes" /></div>
        <div class="card-body flex flex-col justify-between items-end ">
          <div class="grow p-5">
            <h2 class="text-left text-2xl ">{article.titre}</h2>
            <p class="text-xs text-gray-400">{format(new Date(article.dateCreation), 'dd/MM/yyyy')}</p>
            <p class="py-2">{article.resume}</p>
            <p class="text-right float-right p-3 rounded-md inline w-auto font-medium uppercase hover:bg-gray-200">Lire l'article</p>
          </div>

        </div>
      </a>
    {/each}


  </div>

</div>

