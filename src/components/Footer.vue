<template>
    <footer class="container-fluid">
        <div class="row">
            <footer class="lead">PetCo &copy; <span class="shadow">
                {{ currYear }} 
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
        currYear: new Date().getUTCFullYear()
    }
},

}
</script>
