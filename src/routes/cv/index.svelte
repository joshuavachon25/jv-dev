<script>
    import {stacks} from '$lib/utils/techIcons'
    import {onMount} from "svelte";
    const formations = [
        {
            titre: "Certificat professionnel - Computer science for Web Programming",
            annee: "En cours",
            institution: "HarvardX University (EdX)",
            detail: "Formation courte en sciences informatiques appliquée au développement web avec Python/Django et Javascript/React"
        },
        {
            titre: "M.A. Histoire - Informatique appliquée",
            annee: "2019 - En cours",
            institution: "Université de Sherbrooke",
            detail: "Mémoire à venir: « Boire et manger à Strasbourg: Cartographie du système alimentaire strasbourgeois durant l'entre-deux-guerres (1919-1939) » "
        },
        {
            titre: "Certificat de complétion - DH101 Introduction to Digital Humanities",
            annee: "2019",
            institution: "HarvardX University (EdX)",
            detail: "Cours d'introduction aux humanités numérique par l'Université de Harvard"
        },
        {
            titre: "B.A. Multidisciplinaire",
            annee: "2016 - 2018",
            institution: "Université de Sherbrooke",
            detail: "Formation multidisciplinaire composé d'un certificat en communication appliquée, d'un certificat en histoire et d'un certificat multidisciplinnaire"
        },
        {
            titre: "DEC Sciences humaines - Culture, environnement et droits humains",
            annee: "2014 - 2016",
            institution: "Cégep Beauce-Appalaches",
            detail: "Formation en sciences humaines orienté autour de la géographie, l'histoire et la sociologie."
        },
        {
            titre: "Technique en informatique de gestion",
            annee: "2012 - 2014",
            institution: "Cégep Beauce-Appalaches",
            detail: "Deux ans de formation en informatique de gestion (développement logiciel). Étude de l'algorithmie et application avec divers langages: VB.net, C, C++, C#, Javascript, Asp.Net..."
        }
    ]
    const experiences = [
        {
            titre: "Directeur technique, développeur web et fondateur",
            annee: "2021 - Aujourd'hui",
            institution: "Studio Cyberfjord S.E.N.C.",
            detail: "Gestion d'une petite société en nom collectif de développement d'application web. Participation à la plannification, le développement, le déploiement et la maintenance des projets."
        },
        {
            titre: "Cartographe",
            annee: "2021 - Aujourd'hui",
            institution: "Studio Cyberfjord S.E.N.C.",
            detail: "Conception de cartes historiques pour des présentations scientifiques ou pour des publication."
        },
        {
            titre: "Auxillaire de recherche et d'enseignement",
            annee: "2018 - Aujourd'hui",
            institution: "Université de Sherbrooke",
            detail: "Divers contrats d'auxiliaire, incluant la préparation de contenus pour le cours, de la correction, le développement d'applications web, conception de cartes, photogrammétrie..."
        },
        {
            titre: "Webmaster et développeur principal",
            annee: "2018 - Aujourd'hui",
            institution: "Historiamati.ca",
            detail: "Gestion et développement de la plateforme de démocratisation des humanités numériques Historiamatica. Développement de son successeur: Humatica (En cours)."
        },
        {
            titre: "Chargé de projet",
            annee: "Été 2016",
            institution: "Domaine Taschereau - Parc nature",
            detail: "Réalisation d'un projet d'une carte écologico-touristique de ce parc en milieu humide"
        },
        {
            titre: "Préposé aux archives",
            annee: "Été 2014",
            institution: "Société historique de Saint-Benoit-Labre",
            detail: "Gestion des archives. Développement d'un système de gestion des photos d'archives et des documents funéraires."
        },
        {
            titre: "Chargé de projet",
            annee: "Été 2013",
            institution: "Domaine Taschereau - Parc nature",
            detail: "Planification et développement du site web de l'organisme"
        }
    ]
    const publications = [
        {
            titre: "Impacts des bouleversements environnementaux et géopolitiques sur la vitiviniculture en alsace allemande (1871-1914)",
            revue: "Revue d'histoire de l'Université de Sherbrooke, Volume 12",
            annee: "2021",
            auteur: "Joshua L. J. Vachon",
            lien: "https://rhus.historiamati.ca/volume12/impacts-des-bouleversements-environnementaux-et-geopolitiques-sur-la-vitiviniculture-en-alsace-allemande-1871-1914/"
        },
        {
            titre: "Espace et humanités numériques : le fort de Chambly et l’héritage de Vauban en Amérique du Nord",
            revue: "Cahiers d'Histoire, Volume 37, Numéro 1",
            annee: "2019",
            auteur: "Hubert Cousineau, Antoine Gauthier-Trépanier, Anthony Trouilhas et Joshua L. J. Vachon",
            lien: "https://www.erudit.org/fr/revues/histoire/2019-v37-n1-histoire05163/1067958ar/"
        }
    ]
    const prix = [
        {
            titre: "Bourse de maîtrise en recherche (FRQSC)",
            montant: "17 500$/an (2 ans)",
            annee:"2020",
            temps: "2",
            organisme: "Fonds de recherche du Québec - Sciences humaines"
        },
        {
            titre: "Bourse d’études supérieures du Canada (CRSH)",
            montant: "17 500$",
            annee:"2020",
            temps: "1",
            organisme: "Conseil de recherches en sciences humaines"
        },
        {
            titre: "Bourse d'excellence du Département d'Histoire (UdS)",
            montant:"7 500$",
            annee:"2019",
            temps: "1",
            organisme: "Université de Sherbrooke"
        },
        {
            titre: "Bourse Méritas en Sciences humaines (CBA)",
            montant:"400$",
            annee:"2016",
            temps: "1",
            organisme: "Cégep Beauce-Appalaches"
        },
    ]
    const langages = [stacks['html'],stacks['css'],stacks['js'],stacks['svelte-kit'],stacks['vue'],stacks['nuxt'],stacks['php'],stacks['python'],stacks['flutter'],stacks['plus']]
    const logiciels = [stacks['webstorm'],stacks['vscode'],stacks['figma'],stacks['qgis'],stacks['affinity'],stacks['godot'],stacks['blender'],stacks['plus']]
    let Y = 0, page1

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".page").forEach((page, i) => {
            gsap.to(page, {
                scrollTrigger: {
                    trigger: page,
                    start: "top 50",
                    scrub: 1
                },
                duration: 1,
                opacity: 0
            })
        })
        gsap.utils.toArray(".panel").forEach((page, i) => {
            gsap.to(page, {
                scrollTrigger: {
                    trigger: page,
                    start: "top 25",
                    end: "bottom",
                    scrub: 1,
                    pin: true
                },
                duration: 6,
                opacity: 0,
                scale: 1,
                background:"#f0f0f0"
            })
        })

    })

</script>

<svelte:head>
  <title>Qui suis-je? — Joshua L.J. Vachon</title>
  <meta name="description" content="J'existe car je suis, mais qui est ce 'je' qui écrit? Pour le découvrir, ces lignes ne suffiront pas, mais au moins vous sortirez du brouillard." />
  <meta name="keywords" content="Joshua, Vachon, Joshua L.J. Vachon, web, dev, cartographie, histoire, humanités numériques, digital humanities, cv, curriculum vitae, à propos, about">
  <meta property="og:url"                content="https://www.joshuavachon.dev/cv" />
  <meta property="og:type"               content="website" />
  <meta property="og:title"              content="Qui suis-je? - Joshua L.J. Vachon" />
  <meta property="og:description"        content="J'existe car je suis, mais qui est ce 'je' qui écrit? Pour le découvrir, ces lignes ne suffiront pas, mais au moins vous sortirez du brouillard." />
  <meta property="og:image"              content="/fb-default.png" />
</svelte:head>

<div id="p1" class="flex flex-col">
  <div class="w-full min-h-screen flex flex-col justify-center items-center page" >
    <img src="/facejoshua.svg" class="w-2/6 md:w-1/6 lg:w-1/12 face">
    <h1 class="text-2xl mt-2 lg:text-4xl lg:mt-0">JOSHUA L.J. VACHON</h1>
    <blockquote class="prose prose-lg px-4 lg:prose-2xl text-center mx-auto">J'existe car je suis, mais qui est ce 'je' qui écrit? Pour le découvrir, ces lignes ne suffiront pas, mais c'est un bon départ.</blockquote>
    <a href="#p2" class="flex flex-col"><i class="fa-solid fa-chevrons-down animate-bounce fa-3x mt-10 text-mauve"></i> <p class="text-xs">Cliquez-ici!</p></a>
  </div>

  <div id="p2" class="page min-h-screen flex flex-col justify-center items-center">

    <p class="prose prose-lg lg:prose-2xl px-5 md:px-0 md:w-3/5 mx-auto text-justify">Joshua L.J. Vachon termine présentement une maîtrise en histoire de type informatique appliquée à l'Université de Sherbrooke. Depuis sa tendre enfance, ce qui caractérise Joshua, c'est sa curiosité pour tout et n'importe quoi! Trop curieux peut-être, il n'a pas pu choisir simplement une discipline, ce qui explique un cheminement académique erratique, mais aussi sa grande polyvalence et sa multidisciplinarité. Il a donc su acquérir des compétences autant en développement web, recherche en sciences humaines et sociales qu'en développement logiciel ou qu'en cartographie. </p>
    <a href="#p1"><i class="fa-solid fa-chevrons-up fa-xl mt-10 text-gray-300"></i></a>
    <a href="#p3"><i class="fa-solid fa-chevrons-down animate-bounce fa-3x mt-10 text-mauve"></i></a>
  </div>

  <div id="p3" class="flex flex-col justify-center items-center mt-10 page w-4/5 lg:w-3/5 min-h-screen">

    <div class="w-2/3">
      <h3 class="mb-4 text-xl md:text-2xl leading-tight font-medium text-center">Langages privilégiés</h3>
      <div class="flex flex-row flex-wrap lg:flex-nowrap my-5 w-full md:w-4/5 mx-auto mb-10 gap-5 justify-center items-center">
        {#each langages as langage}
          <div class="group w-8 h-8 md:w-12 md:h-12 relative text-center mx-auto">
            {@html langage.icone}
            <div class="text-center rounded-md z-50 select-none font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-95 absolute top-1/2 left-1/2 w-auto px-5 block -translate-y-1/2 -translate-x-1/2">
              {langage.nom}
            </div>
          </div>
        {/each}
      </div>
      <h3 class="mb-4 text-xl md:text-2xl leading-tight font-medium text-center">Logiciels privilégiés</h3>
      <div class="flex flex-row flex-wrap lg:flex-nowrap my-5 w-full md:w-4/5 mx-auto mb-10 gap-5 justify-center items-center">
        {#each logiciels as logiciel}
          <div class="group h-8 w-8 md:w-12 md:h-12 relative text-center mx-auto">
            {@html logiciel.icone}
            <div class="text-center rounded-md z-50 select-none font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-95 absolute top-1/2 left-1/2 w-auto px-5 block -translate-y-1/2 -translate-x-1/2">
              {logiciel.nom}
            </div>
          </div>
        {/each}
      </div>
      <h4 class="prose-lg px-2 md:px-0 md:prose-2xl text-center md:mt-20">
        Téléchargez <a href="/cv-joshua-vachon.pdf" target="_blank" class="text-mauve font-bold">mon CV</a> ou continuez à dérouler pour voir mes formations et expériences pertinentes!
      </h4>
      <div class="flex flex-col justify-center items-center">
        <a href="#p2"><i class="fa-solid fa-chevrons-up fa-xl mt-10 text-gray-300"></i></a>
        <a href="#p4"><i class="fa-solid fa-chevrons-down animate-bounce fa-3x mt-10 text-mauve"></i></a>
      </div>

    </div>

  </div>

  <div class="w-3/4" id="p4"></div>
    <h2 class="w-3/5 mx-auto mt-28 text-4xl font-bold uppercase text-gray-700">Formations</h2>
    {#each formations as formation}
      <div class="bg-white box p-4 shadow-md md:w-4/5 lg:w-3/5 mx-auto my-3 panel md:scale-110">
        <div>
          <p  class="text-sm">{formation.institution}</p>
        </div>
        <div class="flex md:flex-row flex-col justify-between md:gap-2">
          <p class="text-lg md:text-xl font-medium">{formation.titre}</p>
          <p  class="text-sm md:text-xl">{formation.annee}</p>
        </div>

        <div>
          <p  class="text-sm md:text-lg italic px-4">{formation.detail}</p>
        </div>
      </div>
    {/each}
    <h2 class="w-3/5 mx-auto mt-28 text-4xl font-bold uppercase text-gray-700">Expériences</h2>
    {#each experiences as experience}
      <div class="bg-white box p-4 shadow-md md:w-4/5 lg:w-3/5 mx-auto my-3 panel md:scale-110">
        <div>
          <p  class="text-sm">{experience.institution}</p>
        </div>
        <div class="flex md:flex-row flex-col justify-between md:gap-2">
          <p class="text-lg md:text-xl font-medium">{experience.titre}</p>
          <p  class="text-sm md:text-xl">{experience.annee}</p>
        </div>

        <div>
          <p  class="text-sm md:text-lg italic px-4">{experience.detail}</p>
        </div>
      </div>
    {/each}
  <h2 class="w-3/5 mx-auto mt-28 text-4xl font-bold uppercase text-gray-700">Publications scientifiques</h2>
  {#each publications as article}
    <div class="bg-white box p-4 shadow-md md:w-4/5 lg:w-3/5 mx-auto my-3 panel md:scale-110">
      <div>
        <p  class="text-sm">{article.revue}</p>
      </div>
      <div class="flex md:flex-row flex-col justify-between md:gap-2">
        <p class="text-lg md:text-xl font-medium">{article.titre} <a href={article.lien} target="_blank" class="text-mauve"><i class="fa-solid fa-up-right-from-square fa-xs"></i></a> </p>
        <p  class="text-sm md:text-xl">{article.annee}</p>
      </div>

      <div>
        <p  class="text-sm md:text-lg italic px-4">Par {article.auteur}</p>
      </div>
    </div>
  {/each}
    <h2 class="w-3/5 mx-auto mt-28 text-4xl font-bold uppercase text-gray-700">Prix et distinctions</h2>
  {#each prix as pri}
    <div class="bg-white box p-4 shadow-md md:w-4/5 lg:w-3/5 mx-auto my-3 panel md:scale-110">
      <div>
        <p  class="text-sm">{pri.montant}</p>
      </div>
      <div class="flex md:flex-row flex-col justify-between md:gap-2">
        <p class="text-lg md:text-xl font-medium">{pri.titre}</p>
        <p  class="text-sm md:text-xl">{pri.annee}</p>
      </div>

      <div>
        <p  class="text-sm md:text-lg italic px-4">{pri.organisme}</p>
      </div>
    </div>
  {/each}
  </div>

  <div class="h-screen flex flex-col justify-center items-center ">
    <img class="lg:w-1/2" src="josh_rikishi.svg">
    <a href="#p1"><i class="fa-solid fa-chevrons-up fa-xl mt-10 text-gray-300"></i></a>
  </div>



<style>
    .page{
        @apply w-full;
    }
</style>