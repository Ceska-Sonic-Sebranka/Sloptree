<script lang="ts">
    // todo: make this easy to change from the outside
    const { nickname, description, bio, color, canonical_url, locale } = {
        nickname: "Rodri_",
        description:
            "Check out rodri_'s links and social media profiles with Sloptree!",
        bio: `18 yo, genderfluid (transfem/demiboy), bisexual, taken but in very
            confusing relationship
            <br /> CZ/ENG
            <br /> Video editor, graphic designer, front-end web and game developer,
            programmer, music producer, beginning artist`,
        color: "#600afe",
        canonical_url: "https://rodrickhmmm.github.io/Sloptree/",
        locale: "cs_CZ",
    };

    import profile_picture from "$lib/assets/profile.png";

    import steam from "$lib/assets/icons/steam-icon.webp";
    import instagram from "$lib/assets/icons/instagram-icon.png";
    import youtube from "$lib/assets/icons/youtube-icon.png";
    import github from "$lib/assets/icons/github-icon.svg";

    const title = `${nickname} | Sloptree`;

    const links = [
        ["GitHub", "https://github.com/rodrickhmmm", github],
        ["YouTube", "https://www.youtube.com/@RodrickPodtrzitko", youtube],
        ["Instagram", "https://www.instagram.com/rodri.0__o/", instagram],
        ["Steam", "https://steamcommunity.com/id/rodri_0_o/", steam],
    ];
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="author" content={nickname} />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content={color} />
    <link rel="canonical" href={canonical_url} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical_url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={profile_picture} />
    <meta property="og:site_name" content={canonical_url} />
    <meta property="og:locale" content={locale} />

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={canonical_url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={profile_picture} />
</svelte:head>

{#snippet button(label: string, href: string, icon: string)}
    <a class="link-button" {href} target="_blank">
        <img src={icon} alt={label} />
        <span>{label}</span>
    </a>
{/snippet}

<div class="whole-container">
    <div class="profile">
        <img src={profile_picture} alt="{nickname}'s profile picture" />
        <h1>{nickname}</h1>
        <p>
            {@html bio}
        </p>
    </div>

    <div class="buttons-container">
        {#each links as [label, href, icon]}
            {@render button(label, href, icon)}
        {/each}
    </div>
</div>
