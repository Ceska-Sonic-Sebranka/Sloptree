<script lang="ts">
    import { data, profilePicture } from "$lib/configuration";

    import { getIcon } from "$lib/icons";
    import SvgIcon from "@jamescoyle/svelte-icon";

    const title = `${data.nickname} | Sloptree`;
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={data.description} />
    <meta name="author" content={data.nickname} />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content={data.color} />
    <link rel="canonical" href={data.canonicalUrl} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={data.canonicalUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={data.description} />
    <meta property="og:image" content={profilePicture} />
    <meta property="og:site_name" content={data.canonicalUrl} />
    <meta property="og:locale" content={data.locale} />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={data.canonicalUrl} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={data.description} />
    <meta name="twitter:image" content={profilePicture} />
</svelte:head>

{#snippet button(label: string, href: string, icon: string)}
    {@const { path, hex } = getIcon(icon)}
    <a class="link-button" {href} target="_blank">
        <SvgIcon
            {path}
            color="#FFF"
            height="100%"
            width="fit-content"
            type="simple-icons"
            class="icon"
        />
        <span>{label}</span>
    </a>
{/snippet}

<div class="whole-container">
    <div class="profile">
        <img src={profilePicture} alt="{data.nickname}'s profile picture" />
        <h1>{data.nickname}</h1>
        <p>
            {@html data.bio}
        </p>
    </div>

    <div class="buttons-container">
        {#each data.links as {label, href, icon}}
            {@render button(label, href, icon)}
        {/each}
    </div>
</div>
