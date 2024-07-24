<script>
	export let title = null;
	export let links = null;
	export let description = null;
</script>

<section style="padding: 10px; width: 100%; box-sizing: border-box;">
	<div style="display: flex; flex-direction: row; align-items: center">
		<h1>{title}</h1>
		{#each links as link}
			<a href="{link.link}">
				<h5>&lt;{link.service}&gt;</h5>
			</a>
		{/each}
	</div>
	<div style="font-weight: normal; margin: 16px 0 0 0">
		<p>
			{description}
		</p>
	</div>
</section>

<style>
	a {
		margin-left: 4px;
		color: var(--link);
	}
</style>
