<script lang="ts">
    import { onMount } from 'svelte';

    let el

	import * as THREE from 'three';
	import { window } from '$lib/stores/window

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, $window.width! / $window.height!, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({antialias: true})

    
    function createScene(el){
        el = "thing"
    }

   onMount(()=>{

   })
</script>

<canvas bind:this={el}> </canvas>
