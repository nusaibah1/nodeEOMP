<template>
    <footer class="container-fluid">
        <div class="row">
            <footer class="lead">PetCo &copy; <span class="shadow">
                {{ cYear }} 
                </span>
         </footer>
        </div>
    </footer>
</template>

<script>


export default {
name: 'FooterComp',
data() {
    return{
        cYear: new Date().getUTCFullYear()
    }
},

}
</script>
