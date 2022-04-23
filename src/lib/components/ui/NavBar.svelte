<script>
  import Logo from "./Logo.svelte";

  export let d
  const reseaux = [
      {icone: "fa-brands fa-github", url: "#"},
      {icone: "fa-solid fa-bolt", url: "#"},
      {icone: "fa-brands fa-linkedin", url: "#"}
  ]
</script>

<div class="fixed top-0 w-16 md:w-24 left-0 h-screen bg-gray-800 flex flex-col text-white shadow-md z-50">
<Logo/>
<div class="grow flex flex-col justify-between items-center">
  <div>
    {#each d as item}
      <a sveltekit:prefetch class="w-16 h-16 my-2 md:my-0 md:w-24 md:h-24 block flex flex-col justify-center items-center gap-1 md:gap-2" href={item.lien}>
        <i class="{item.icone} fa-2x text-white"></i>
        <p class="text-xs">{item.texte}</p>
      </a>
    {/each}
  </div>
  <div class="fixed bottom-0 flex flex-col  gap-2 w-16 md:w-24 justify-center items-center py-5">
    {#each reseaux as reseau}
      <a href="{reseau.url}" target="_blank"><i class="{reseau.icone} fa-2xl my-3 text-white"></i></a>
    {/each}

  </div>
</div>
</div>