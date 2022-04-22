<script>
    import {page} from "$app/stores";
    import {format} from "date-fns";
    import MDXViewer from "$lib/components/widget/MDXViewer.svelte";

    export let article
</script>

<svelte:head>
    <title>{article.titre} — Joshua L.J. Vachon</title>
    <meta name="description" content={article.resume} />
    <meta name="keywords" content="Joshua, Vachon, Joshua L.J. Vachon, web, dev, cartographie, histoire, humanités numériques, digital humanities, articles, blog, blogue, texte">
    <meta property="og:url"                content="https://www.joshuavachon.dev/blog/{$page.params.slug}" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="{article.titre} — Joshua L.J. Vachon" />
    <meta property="og:description"        content={article.resume} />
    <meta property="og:image"              content={article.img}/>
</svelte:head>

<div class="flex flex-row">

    <div class="h-screen w-96 fixed shadow-md " style="background-image: url('{article.img}'); background-size: cover;">
        <div class="h-12 flex pl-10 text-white justify-start items-center gap-3">
            <i class="fa-solid fa-arrow-left-from-line "></i>
            <a href="/blog" class="">Retour aux articles</a>
        </div>
        <div class="flex flex-col text-center absolute bottom-40 bg-gray-100 text-gray-700 w-full py-10">
            <h1 class="text-2xl md:text-4xl font-black font-mono">{article.titre}</h1>
            <h6 class="text-lg">{format(new Date(article.dateCreation), 'dd/MM/yyyy')}</h6>
        </div>
    </div>


    <div>
        <div class="prose prose-xl max-w-none mt-10 w-3/5 w-full pl-96 mx-auto text-justify mb-20">
            <p class="font-bold text-zinc-500 mb-10">{article.resume}</p>
            <MDXViewer md={article.content}/>
        </div>
    </div>


</div>
