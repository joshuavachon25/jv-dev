<script>
  import Logo from "./Logo.svelte";
  import {page} from "$app/stores";
  export let d

  $: pathNamed = $page.url.pathname

  const reseaux = [
      {icone: "fa-brands fa-github", url: "https://github.com/joshuavachon25"},
      {icone: "fa-brands fa-twitter", url: "https://twitter.com/JoshuaVachon25"},
      {icone: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/joshuavachon25/"}
  ]
</script>

<div class="fixed top-0 w-16 md:w-24 left-0 h-screen bg-gray-800 flex flex-col text-white shadow-md z-50">
<Logo/>
<div class="grow flex flex-col justify-between items-center">
  <div>
    {#each d as item}
      <a sveltekit:prefetch class="w-16 h-16 my-2 lg:my-0 lg:w-24 lg:h-24 block flex flex-col justify-center items-center gap-1 md:gap-2 hover:text-mauve {pathNamed === item.lien ? 'text-mauve': 'text-white '}" href={item.lien}>
        <i class="{item.icone} fa-2x "></i>
        <p class="text-xs">{item.texte}</p>
      </a>
    {/each}
  </div>
  <div class="fixed bottom-0 flex flex-col gap-3 w-16 md:w-24 justify-center items-center py-5">
    {#each reseaux as reseau}
      <a href="{reseau.url}" target="_blank"><i class="{reseau.icone} fa-2xl my-1 text-white hover:text-mauve"></i></a>
    {/each}

  </div>
</div>
</div>