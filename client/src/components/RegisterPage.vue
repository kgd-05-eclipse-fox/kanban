<template>
    <section id="register">
        <div class="container">
            <div class="row">
                <div class="col-4"></div>
                <div 
                    class="col-4 
                    border 
                    border-10 
                    rounded 
                    align-content-center 
                    text-center 
                    shadow-lg p-3 mb-5 
                    bg-white"
                >
                    <img 
                        src="../assets/pics/logo.png" 
                        alt="" 
                        width="80px" 
                        class="border rounded-circle"
                    >
                    <h6>Sign Up</h6>
                    <br>
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="username"><h6>Username</h6></label>
                            <input
                                v-model="user.username" 
                                id="input-username" 
                                type="text" 
                                class="form-control" 
                                placeholder="e.g: zuckerberg"
                            >
                        </div>
                        <div class="form-group">
                            <label for="email"><h6>Email</h6></label>
                            <input
                                v-model="user.email" 
                                id="input-email" 
                                type="email" 
                                class="form-control" 
                                placeholder="e.g: example@mail.co.id"
                            >
                        </div>
                        <div class="form-group">
                            <label for="email"><h6>Password</h6></label>
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
                <div class="col-4"></div>
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