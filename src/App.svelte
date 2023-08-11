<script>
import Router from 'svelte-spa-router'
import Home from './Home.svelte'
import Description from './Description.svelte';
const routes = {
    // Exact path
    '/': Home,
    '/description': Description,
}
</script>
<main>
<Router {routes}/>
</main>