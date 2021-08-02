<template>
    <div>
        <div class="jumbotron bg-primary text-white text-center">
            <h2 class="lead display-3">#TWCAPP#</h2>
            <p>Next gen communication</p>
        </div>
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col text-center">
                    <button @click ="loginwithgoogle" class="btn btn-outline-danger btn-lg">Login with Google</button>

                </div>
            </div>
            <div class="row mt-5">
                <div class="col text-center">
                    <button class="btn btn-outline-info btn-lg">Login with Twitter</button>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import auth from 'firebase/auth'

    export default {
        name: 'login',
        methods: {
            loginwithgoogle(){
                //has an error
            //firebase.auth().signinwithpopup(new firebase.auth.Googleauthprovider())
            //.then(function(response){
              //  console.log(response.user)
            //})
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(response.user)
            // dispatch setuser function
            this.$store.dispatch('setUser',response.user)

            //redirect to home page

            this.$router.push('/')
            });
        }

    }
        
    }

</script>
<style>
    .btn, .jumbotron {
        border-radius:0px;
    }

</style>