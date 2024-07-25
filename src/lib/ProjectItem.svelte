<script>
	export let title = "";
	export let links = [];
	export let description = "";
</script>

<section style="padding: 10px; width: 100%; box-sizing: border-box;">
	<div style="display: flex; flex-direction: row; align-items: center">
		<h1>{title}</h1>
		{#each links as link}
			<a href="{link.link}">
				<h5>&lt;{link.title}&gt;</h5>
			</a>
		{/each}
	</div>
	<div style="font-weight: normal; margin: 16px 0 0 0">
		<p>
			{@html description}
		</p>
	</div>
</section>

<style>
	a {
		margin-left: 4px;
	}
</style>
