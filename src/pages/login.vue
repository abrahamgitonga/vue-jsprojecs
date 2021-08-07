<template>
    <div>
        <div class="jumbotron bg-primary text-white text-center">
            <h2 class="lead display-3">#TWCAPP#</h2>
            <p>Next gen communication</p>
        </div>
        <!-- show loading status-->
        <div class="alert alert-info" v-if="loading">Processing...</div>
        <!-- show errors-->
        <div class="alert alert-danger" v-if="hasErrors">
            <div v-for="error in errors" :key="error">{{ error }}</div>
        </div>
        <div class="container-fluid">
            <div class="row mt-5">
                <div class="col text-center">
                    <button @click ="loginwithgoogle" class="btn btn-outline-danger btn-lg">Login with Google</button>

                </div>
            </div>
            <div class="row mt-5">
                <div class="col text-center">
                    <button @click ="loginwithtwitter" class="btn btn-outline-info btn-lg">Login with Twitter</button>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import auth from 'firebase/auth'

    export default {
        name: 'login',
        data(){
            return{
                errors:[],
                loading: false

            }
        },

        computed: {
            hasErrors(){
                return this.errors.length > 0
            }

        },
        methods: {
            loginwithgoogle(){
                //set loading true
                this.loading = true
                //clear old errors
                this.errors =[]
            
             
                firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then((response) => {
                    //pass user to save in db
                    //this.saveUserToUsersRef(response.user)
                    
                    this.$store.dispatch('setUser', response.user)
                    //redirect to chat page '/'
                    this.$router.push('/')  
            
            })
            .catch(error => {
                this.errors.push(error.message)
                //set loading state false
                this.loading = false
            })
        },
        loginwithtwitter(){
            //set loading true
            this.loading = true
            //clear old errors
            this.errors = []

            firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
            .then((response) => {
                //pass user to save in db
                //this.saveUserToUserRef(response.user)

                this.$store.dispatch('ssetUser', response.user)
                //redirect to chat page '/'
                this.$router.push('/')

            })
            .catch(error => {
                this.errors.push(error.message)
                //set loading state false
                this.loading = false
            })
        }

    }
        
    }

</script>
<style>
    .btn, .jumbotron {
        border-radius:0px;
    }

</style>