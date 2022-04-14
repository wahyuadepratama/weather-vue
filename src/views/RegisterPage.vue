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
                  <h5 class="card-title text-center pb-0 fs-4">Register Account</h5>
                  <p class="text-center small">Fill your Email, Name & Password</p>
                </div>

                <div class="row g-3 needs-validation" novalidate>

                  <div class="col-12">
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend"></span>
                      <input type="email" class="form-control" required v-model="email" placeholder="Email">
                      <div class="invalid-feedback">Please enter your email.</div>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend"></span>
                      <input type="text" class="form-control" required v-model="name" placeholder="Fullname">
                      <div class="invalid-feedback">Please enter your name.</div>
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
                    <button class="btn btn-primary w-100" @click="register">Register</button>
                  </div>

                  <center>
                    <small> <p class="text text-danger">{{ error_message }}</p> </small>
                  </center>

                  <div class="col-12">
                    <p class="small mb-0">Already have account? <router-link to="/login">Login</router-link> </p>
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
  name: "RegisterPage",
  data(){
    return{
      'email' : '',
      'name' : '',
      'password' : '',

      'error_message': ''
    }
  },
  mounted(){
    if (localStorage.getItem('token') || localStorage.getItem('token') != '') {
      this.$router.push({path: '/'});
    }
  },
  methods:{
    register(){
      SlickLoader.enable();
      axios.post('http://localhost:3000/user/register', {"email":this.email, "name":this.name,"password":this.password}).then(response => {

          if (response.data.status == "200") {

            // save to storage
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('email', response.data.data.email);
            localStorage.setItem('name', response.data.data.name);

            this.$router.push({path: '/'});

          }else {
            this.error_message = response.data.message
            console.log(response.data);
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
