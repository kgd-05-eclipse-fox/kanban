<template>
    <section id="register">
        <div class="container">
            <div class="column">
                <div class="row-5 login border rounded">
                    <img 
                        src="../assets/pics/logo.png" 
                        alt="" 
                        width="100px" 
                        class="border rounded-circle"
                    >
                </div>
                <div class="row-7 border rounded">
                    <p>Sign Up</p>
                    <br>
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="username"><h5>Username</h5></label>
                            <input
                                v-model="user.username" 
                                id="input-username" 
                                type="text" 
                                class="form-control" 
                                placeholder="e.g: zuckerberg"
                            >
                        </div>
                        <div class="form-group">
                            <label for="email"><h5>Email</h5></label>
                            <input
                                v-model="user.email" 
                                id="input-email" 
                                type="email" 
                                class="form-control" 
                                placeholder="e.g: example@mail.co.id"
                            >
                        </div>
                        <div class="form-group">
                            <label for="email"><h5>Password</h5></label>
                            <input
                                v-model="user.password"  
                                id="input-password" 
                                type="password" 
                                class="form-control" 
                                placeholder="e.g: ******"
                            >
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn1">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        register() {
            this.$emit('register', this.user);
        }
    },

}
</script>

<style>

</style>