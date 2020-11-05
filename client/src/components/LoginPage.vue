<template>
    <section id="login">
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
                    <p>Sign In</p>
                    <br>
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="email"> <h5>Email</h5></label>
                            <input
                                v-model="user.email"
                                id="input-email" 
                                type="email" 
                                class="form-control" 
                                placeholder="e.g: example@mail.co.id"
                            >
                        </div>
                        <div class="form-group">
                            <label for="password"><h5>Password</h5></label>
                            <input 
                                v-model="user.password"
                                id="input-password" 
                                type="password" 
                                class="form-control" 
                                placeholder="e.g: ******"
                            >
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn1">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            const user = this.user
            this.$emit('login', user);
        }
    }
}
</script>

<style>

</style>