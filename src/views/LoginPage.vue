<template>

  <div class="container">

    <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

            <div class="d-flex justify-content-center py-4">
              <a href="index.html" class="logo d-flex align-items-center w-auto">
                <img src="assets/img/logo.png" alt="">
                <span class="d-none d-lg-block">Weather</span>
              </a>
            </div><!-- End Logo -->

            <div class="card mb-3">

              <div class="card-body">

                <div class="pt-4 pb-2">
                  <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                  <p class="text-center small">Enter your email & password to login</p>
                </div>

                <div class="row g-3 needs-validation" novalidate>

                  <div class="col-12">
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend"></span>
                      <input type="text" class="form-control" required v-model="email" placeholder="Email">
                      <div class="invalid-feedback">Please enter your email.</div>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend"></span>
                      <input type="password" class="form-control" required v-model="password" placeholder="Password">
                      <div class="invalid-feedback">Please enter your password</div>
                    </div>
                  </div>

                  <div class="col-12">
                    <button class="btn btn-primary w-100" @click="login">Login</button>
                  </div>

                  <center>
                    <small> <p class="text text-danger">{{ error_message }}</p> </small>
                  </center>

                  <div class="col-12">
                    <p class="small mb-0">Don't have account? <router-link to="/register">Create Account</router-link> </p>
                  </div>
                </div>

              </div>
            </div>

            <div class="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>

          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data(){
    return{
      'email' : '',
      'password' : '',

      'error_message' : ''
    }
  },
  mounted(){
    if (localStorage.getItem('token') || localStorage.getItem('token') != '') {
      this.$router.push({path: '/'});
    }
  },
  methods:{
    login(){
      SlickLoader.enable();
      axios.post('http://localhost:3000/user/login', {"email":this.email,"password":this.password}).then(response => {
          if (response.data.status == "200") {

            // save to storage
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('email', response.data.data.email);
            localStorage.setItem('name', response.data.data.name);

            this.$router.push({path: '/'});

          }else {
            console.log(response.data);
            this.error_message = response.data.message
          }
          SlickLoader.disable();
      }).catch(error => {
          console.log(error);
          SlickLoader.disable();
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
