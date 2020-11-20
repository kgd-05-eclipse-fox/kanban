<template>
    <section id="navbar">
        <nav>
            <div id="logo" class="links">
                <ul>
                    <li>
                        <img
                            src="../assets/pics/logo.png" 
                            alt="" 
                            width="70px" 
                            class="rounded"
                        >
                    </li>
                    <li>
                        <a 
                            v-if="pageName === 'kanbanPage'" 
                            href="#"
                            @click="changePage('addPage')"
                        >
                            <i class="fa fa-plus" style="font-size:18px"></i> Task
                        </a>
                    </li>
                    <li>
                        <a
                            v-if="pageName === 'kanbanPage' || pageName === 'editPage' || pageName === 'addPage'" 
                            @click="changePage('kanbanPage')" 
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
                        <a @click="changePage('loginPage')" href="#">Sign In</a>
                    </li>
                    <li  
                        v-if="pageName === 'homePage' || 
                        pageName === 'loginPage' || 
                        pageName === 'registerPage'"> 
                        <a href="#">
                            <button
                                @click="changePage('registerPage')" 
                                class="btn btn-info btn-md"
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
    methods: {
        changePage(pageName) {
            this.$emit('changePage', pageName)
        },
        clearStorage() {
            this.$emit('clearStorage', 'loginPage')
        }
    },
    props: ['pageName']
}
</script>


<style>

</style>