<template>
    <section id="navbar">
        <nav>
            <div id="logo" class="links">
                <ul>
                    <li>
                        <a @click="changeToHome" href="#">
                            <img
                                src="../assets/pics/logo.png" 
                                alt="" 
                                width="70px" 
                                class="rounded"
                            >
                        </a>
                        
                    </li>
                    <li>
                        <a 
                            v-if="pageName === 'kanbanPage'" 
                            href="#"
                            @click="changeToAddPage"
                        >
                            <i class="fa fa-plus" style="font-size:18px"></i> Task
                        </a>
                    </li>
                    <li>
                        <a
                            v-if="pageName === 'kanbanPage'" 
                            @click="changeToKanban" 
                            href="#"
                            >
                            Board
                        </a>
                    </li>
                </ul>
            </div>
            <div class="links icons">
                <ul>
                    <li 
                        v-if="pageName === 'homePage' || 
                        pageName === 'loginPage' || 
                        pageName === 'registerPage'"
                    > 
                        <a @click.prevent="changeToLogin" href="#">Sign In</a>
                    </li>
                    <li  
                        v-if="pageName === 'homePage' || 
                        pageName === 'loginPage' || 
                        pageName === 'registerPage'"> 
                        <a href="#">
                            <button
                                @click="changeToRegister" 
                                class="btn btn-primary btn-md" 
                                style="background-color: #00b386; 
                                border-color: #00b386;"
                                >
                                Sign Up
                            </button>
                        </a>
                    </li>
                    <li v-if="pageName === 'kanbanPage'"> 
                        <a
                            @click="clearStorage" 
                            href="#"
                            >
                            Sign Out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    name: 'NavbarPage',
    data() {
        return {
         
                
        }
    },
    methods: {
        changeToHome() {
            this.$emit('changePage', 'homePage')
        },
        clearStorage() {
            let clear = localStorage.clear()
            this.$emit('clearStorage', clear)
        },
        changeToRegister() {
            this.$emit('changePage', 'registerPage')
        },
        changeToKanban() {
            this.$emit('changePage', 'kanbanPage')
        },
        changeToAddPage() {
            this.$emit('changePage', 'addPage')
        },
        changeToLogin() {
            this.$emit('changePage', 'loginPage')
        }
    },
    props: ['pageName']
}
</script>


<style>

</style>