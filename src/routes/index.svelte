<script>
    import * as THREE from 'three';
    import * as SC from 'svelte-cubed';
    import { onMount } from "svelte";
    import { spring } from "svelte/motion"

    let terre, bump, normal, spec, cloud, cloudTrans, sky
    let rotationPlanete = 0

    onMount(() => {
        terre = new THREE.TextureLoader().load( '/terre3d/mapTexture.jpg' );
        sky =  new THREE.TextureLoader().load( '/terre3d/sky.jpg');
        bump = new THREE.TextureLoader().load( '/terre3d/earthbump1k.jpg' );
    });

    SC.onFrame(() => {
        rotationPlanete += 0.001;
    });

    function handleSC(){
        isActive = !isActive
    }

    let isActive = false
    let xPos = spring(0)
    $: $xPos = isActive ? 10 : 0
</script>

<svelte:head>
  <title>Bienvenue sur mon portfolio — Joshua L.J. Vachon</title>
  <meta name="description" content="Joshua Vachon s'intéresse au développement web, à la cartographie et aux humanités numériques. Découvrez ses intérêts sur son portfolio!" />
  <meta name="keywords" content="Joshua, Vachon, Joshua L.J. Vachon, web, dev, cartographie, histoire, humanités numériques, digital humanities">
  <meta property="og:url"                content="https://www.joshuavachon.dev/" />
  <meta property="og:type"               content="website" />
  <meta property="og:title"              content="Bienvenue sur mon Portfolio - Joshua L.J. Vachon" />
  <meta property="og:description"        content="Joshua Vachon s'intéresse au développement web, à la cartographie et aux humanités numériques. Découvrez ses intérêts sur son portfolio!" />
  <meta property="og:image"              content="/fb-default.png" />
</svelte:head>

<div class="h-screen w-full pl-24" style="background-image: url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'); background-size: cover;">

  <SC.Canvas antialias shadows alpha={true}>
    <SC.Mesh
            geometry={new THREE.SphereGeometry(1, 45, 45)}
            material={new THREE.MeshStandardMaterial({
                    map: terre,
                    displacementMap: bump,
                    displacementScale: 0.05,
                    bumpMap: bump,
                    bumpScale: 0.01,

                })}
            position={[$xPos,0,0]}
            rotation={[0, rotationPlanete, 0]}
    />

    <SC.Mesh
            geometry={new THREE.SphereGeometry(4, 45, 45)}
            material={new THREE.MeshStandardMaterial({
                    side: THREE.DoubleSide,
                    map: sky,
                    transparent: true,
                    opacity: 0.7

                })}
            rotation={[0, -rotationPlanete/3, 0]}
    />

    <SC.PerspectiveCamera position={[1, 1, 3]} rotate={[0, 0, 25]}/>
    <SC.OrbitControls enableZoom={false} />
    <SC.SpotLight position={[5, 0, -10]} color={0xffffff}  lookAt={[0,0]}/>
    <SC.SpotLight position={[0, 10, -10]} color={0xffffff}  lookAt={[0,0]}/>
    <SC.SpotLight position={[20, 1, 20]} color={0xffffff} />
  </SC.Canvas>
  <div class="absolute bottom-20 right-1/2 flex flex-col transform translate-x-1/2 select-none justify-center items-center">
    <h1 class="text-9xl text-white leading-none"><span class="font-bold">JOSHUA</span><br>VACHON</h1>
    <p class="text-2xl text-white">Développement web • Cartographie • Humanités numériques</p>
  </div>


</div>