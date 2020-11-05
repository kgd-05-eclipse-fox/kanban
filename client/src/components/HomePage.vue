<template>
    <section id="home">
        <div class="container my-5">
            <div class="row">
                <div class="col-6">
                    <img 
                        class="img-float border rounded" 
                        src="../assets/pics/img1.jpeg" 
                        alt="" 
                        width="100%"
                    >
                </div>
                <div 
                    class="col-6" 
                    style="text-align: left; 
                    font-size: 3em; 
                    display: inline; 
                    font-weight: 
                    bold;;"
                >
                    <p style="color: black;"> Organize your work and plan your task with Qanban</p>
                    <button 
                        @click="changePage('register-page')" 
                        class="btn btn-primary" 
                        style="width: 100%; 
                        height: 20%; 
                        background-color: #00b386; 
                        border-color: #00b386;"
                        >Get Started
                    </button> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomePage'

}
</script>

<style>

</style>