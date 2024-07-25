<script>
	import { page } from "$app/stores";
	import SwayWindow from "$lib/SwayWindow.svelte";
	import ProjectItem from "$lib/ProjectItem.svelte";
	import projects from "./projects.json";
	import { _ } from "svelte-i18n";
</script>

<SwayWindow title="{$_('general.me')}" altTitle="{$_('general.me+')}" mainStyle="max-width: 300px; min-width: 300px" contentStyle="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
	<div>
		<span style="display: flex; align-items: center;">
			<img src="/favicon.png" alt="toralv's profile" style="max-width: 100px;">
			<h1 style="font-size: 30pt; margin: 0 20px 0 20px;">Toralv</h1>
		</span>
		<p style="margin-top: 5px; font-weight: normal;">
			よ, I'm a 21 year old guy from Sweden. Currently studying Computer Science at Karlstad University, and Japanese in my free time. My biggest interests are drifting, programming, Japan and Vtubers ( ^)o(^ )b
		</p>
	</div>
	<div style="display: flex; flex-direction: column;">
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

<SwayWindow title="{$_('general.projects')}" altTitle="{$_('general.projects+')}" contentStyle="overflow-x: unset; overflow-y: unset">
	{#each projects as project, i}
		<ProjectItem title="{project.title}" links="{project.links}" description="{project.description}"/>
		{#if i + 1 != projects.length}
			<div style="height: 1px; background-color: var(--unfocused_border);	margin: 4px 0 4px 0;"/>
		{/if}
	{/each}
</SwayWindow>

<style>
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
