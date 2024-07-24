<script>
	import { page } from "$app/stores";
	import SwayWindow from "$lib/SwayWindow.svelte";
	import ProjectItem from "$lib/ProjectItem.svelte";
	import { _ } from "svelte-i18n";
</script>

<SwayWindow title="{$_('general.me')}" altTitle="{$_('general.me+')}" mainStyle="max-width: 300px; min-width: 300px" contentStyle="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
	<div id="bio">
		<span id="name">
			<img src="/favicon.png" alt="toralv's profile">
			<h1>Toralv</h1>
		</span>
		<p>
			Yo, I'm a 21 year old guy from Sweden. Currently studying Computer Science at Karlstad University, and Japanese in my free time.
			My biggest interests are drifting, programming, Japan and Hololive ( ^)o(^ )b
		</p>
	</div>
	<div id="contact">
		<p>
			If you want to contact me:
		</p>
		<div class="contact-item" id="github">
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/Toraalv">
				<img src="/github-mark-white.svg" alt="github">
				Toraalv
			</a>
		</div>
		<div class="contact-item" id="email">
			<a target="_blank" rel="noopener noreferrer" href="mailto:contact@toralv.dev">
				<img src="/gmail.png" alt="gmail">
				contact@toralv.dev
			</a>
		</div>
		<div class="contact-item" id="mastodon">
			<a target="_blank" rel="noopener noreferrer" href="https://mstdn.jp/@Toralv">
				<img src="/mastodon-logo.svg" alt="mastodon">
				Toralv@mstdn.jp
			</a>
		</div>
		<div class="contact-item" id="myanimelist">
			<a target="_blank" rel="noopener noreferrer" href="https://myanimelist.net/profile/Toralv">
				<img src="/mal-logo.jpeg" alt="myanimelist">
				Toralv
			</a>
		</div>
	</div>
</SwayWindow>

<!-- this ain't it fam-->
<SwayWindow title="{$_('general.projects')}" altTitle="{$_('general.projects+')}" contentStyle="overflow-x: unset; overflow-y: unset">
	<ProjectItem title="RTK1 Jōyō Comparer" links="{[{'link': 'https://github.com/Toraalv/rtk-joyo-comparer', 'service': 'GitHub'}, {'link': 'https://toralv.dev/rtk-joyo-comparer', 'service': 'Website'}]}" description={`RTK1 Jōyō comparer is a website that visualises how much of the Jōyō kanji you know from James Heisig's book "Remembering the Kanji". Pretty useless, but visualises your progress in a nice way.`}/>
	<div style="height: 1px; background-color: var(--unfocused_border);	margin: 4px 0 4px 0;">
	<ProjectItem title="UtaSuki (歌好き)" links="{[{'link': 'https://github.com/Toraalv/UtaSuki', 'service': 'GitHub'}, {'link': 'https://utasuki.toralv.dev', 'service': 'Website'}]}" description={`Currently, this is only a simple list of my favourite songs per month since February 2020. I plan to add user accounts so people can sign up and have their own list, but sites like that already kind of exists, e.g. last.fm. Nonetheless I still feel like this is a neat way of visualising one's favourite songs.`}/>
	<div style="height: 1px; background-color: var(--unfocused_border);	margin: 4px 0 4px 0;">
	<ProjectItem title="toralv-dev" links="{[{'link': 'https://github.com/Toraalv/toralv-dev', 'service': 'GitHub'}]}" description={`The website you're looking at. Heavily inspired by my own swaywm setup.`}/>
</SwayWindow>

<style>
	#bio img {
		max-width: 100px;
	}
	#bio p {
		margin-top: 5px;
		font-weight: normal;
	}
	#name {
		display: flex;
		align-items: center;
	}
	#name h1{
		font-size: 30pt;
		margin: 0 20px 0 20px;
	}
	#contact {
		display: flex;
		flex-direction: column;
	}
	.contact-item:hover {
		background-color: var(--focused-background);
	}
	.contact-item a {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-decoration: none;
		color: inherit;
		font-weight: normal;
	}
	.contact-item img{
		padding: 7px 4px 7px 4px;
		max-width: 20px;
		margin-right: 10px;
	}
</style>
