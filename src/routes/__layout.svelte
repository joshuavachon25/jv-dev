<script>
  import "../app.css";
  import NavBar from "../lib/components/ui/NavBar.svelte";

  const menuArray = [
      {texte: "Blog", lien: "/blog", icone:"fa-solid fa-block-quote"},
      {texte: "Portfolio", lien: "/portfolio", icone:"fa-solid fa-grid-4"},
      {texte: "Labo", lien: "/labo", icone:"fa-solid fa-flask-round-potion"},
      {texte: "CV", lien: "/cv", icone:"fa-solid fa-user-astronaut"},
  ]

</script>

<svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.2/ScrollTrigger.min.js"></script>
</svelte:head>

<NavBar d={menuArray}/>
<div class="min-h-screen w-full pl-24">
  <slot />
</div>
