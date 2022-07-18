<template>
    <section>
        <p>Add a new photo</p>
        <fieldset>
            <label for="label">Label</label>
            <input type="text" id="label" placeholder="Suspendisse elit massa">

            <label for="label">Photo URL</label>
            <input type="url" id="url" placeholder="https://images.unsplash.com/photo-1658085965659-cd899f87b010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60">
        </fieldset>
        
        
        <button @click="$emit('close')">Cancel</button>
        <button id="submit">Submit</button>
    </section>
</template>


<script>

</script>