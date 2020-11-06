<template>
    <section id="login">
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
                    bg-white "
                >
                    <img 
                        src="../assets/pics/logo.png" 
                        alt="" 
                        width="80px" 
                        class="border rounded-circle px-1 mt-2 mb-4"
                    >
                    <h6>Sign In</h6>
                    <br>
                    <form @submit.prevent="login">
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
                            <label for="password"><h6>Password</h6></label>
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
                    or
                    <br>
                    <button id="customBtn" v-google-signin-button="clientId" class="mt-2 google-signin-button"> 
                        <i class='fab fa-google' style='font-size:18px'></i>
                    </button>
                </div>
                <div class="col-4">
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
            },
            clientId: "1051107630527-o2e9teo1prenbks8hk6if1bgpj6j4atm.apps.googleusercontent.com"  
        }
    },
    methods: {
        login() {                                                                                                                                           
            const user = this.user
            this.$emit('login', user);
        },
        OnGoogleAuthSuccess (idToken) {
            // Receive the idToken and make your magic with the backend
            this.$emit('googleLogin', idToken)
        },
        OnGoogleAuthFail (error) {
            console.log(error)
        },

    }
}
</script>

<style>                                                                                                                     
    #customBtn {
      display: inline-block;
      background: white;
      color: #444;
      width: 190px;
      border-radius: 5px;
      border: thin solid #888;
      box-shadow: 1px 1px 1px grey;
      white-space: nowrap;
    }
    #customBtn:hover {
      cursor: pointer;
    }
    
</style>