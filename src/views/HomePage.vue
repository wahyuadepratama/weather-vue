<template>

  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="/" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="">
        <span class="d-none d-lg-block">Weather</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div><!-- End Logo -->

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle " href="#">
            <i class="bi bi-search"></i>
          </a>
        </li><!-- End Search Icon-->

        <li class="nav-item dropdown pe-3">

          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">
            <span class="d-none d-md-block dropdown-toggle ps-2">{{ name }}</span>
          </a><!-- End Profile Iamge Icon -->

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#" @click="logout">
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>

          </ul><!-- End Profile Dropdown Items -->
        </li><!-- End Profile Nav -->

      </ul>
    </nav><!-- End Icons Navigation -->

  </header><!-- End Header -->

  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <router-link to="/" class="nav-link">
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
        </router-link>
      </li><!-- End Dashboard Nav -->

    </ul>

  </aside><!-- End Sidebar-->

  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-8">
          <div class="row">

            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="card-body">
                  <h5 class="card-title">Timezone</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-geo-alt"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{{ weather.timezone }}</h6>
                      <span class="text-success small pt-1 fw-bold">{{ weather.lat }}, {{ weather.lon }}</span>

                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Sales Card -->

            <!-- Revenue Card -->
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card revenue-card">

                <div class="card-body">
                  <h5 class="card-title">Pressure</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-life-preserver"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{{ weather.pressure }}</h6>
                      <span class="text-success small pt-1 fw-bold">milibar</span>

                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Revenue Card -->

            <!-- Customers Card -->
            <div class="col-xxl-4 col-xl-6">

              <div class="card info-card customers-card">

                <div class="card-body">
                  <h5 class="card-title">Wind Speed</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-flag"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{{ weather.wind_speed }}</h6>
                      <span class="text-danger small pt-1 fw-bold">m/s</span>

                    </div>
                  </div>

                </div>
              </div>

            </div><!-- End Customers Card -->

            <div class="col-xxl-4 col-xl-6">

              <div class="card primary-card customers-card">

                <div class="card-body">
                  <h5 class="card-title">Humidity</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-water"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{{ weather.humidity }}</h6>
                      <span class="text-primary small pt-1 fw-bold">g.kg-1</span>

                    </div>
                  </div>

                </div>
              </div>

            </div><!-- End Customers Card -->

          </div>
        </div><!-- End Left side columns -->

        <!-- Right side columns -->
        <div class="col-lg-4">

          <div class="card">

            <div class="card-body">
              <h5 class="card-title">Weather Detail</h5>

              <div class="activity">

                <div class="activity-item d-flex" v-for="item in this.weather.weather">
                  <div class="activite-label">{{ item.id }}</div>
                  <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                  <div class="activity-content">
                    {{ item.main }}, {{ item.description }}
                  </div>
                </div><!-- End activity item-->

              </div>

            </div>
          </div>

          <button type="button" name="button" class="form-control btn btn-danger mb-3" @click="refresh"> <i class="bi bi-cloud-check"></i> Refresh Data </button>
          <small>Last Updated: {{ weather.created_at }}</small>

        </div><!-- End Right side columns -->

      </div>
    </section>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <div class="copyright">
      &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>

<script>

export default {
  name: 'HomePage',
  data(){
    return{
      'weather':'',
      'name': '',
      'email': ''
    }
  },
  mounted(){
    if (!localStorage.getItem('token') || localStorage.getItem('token') == '') {
      this.$router.push({path: '/login'});
    }

    this.email = localStorage.getItem('email');
    this.name = localStorage.getItem('name');

    axios.get('http://localhost:3000/weather/all')
    .then(response => {
      this.weather = response.data.data
    });
  },
  methods:{
    refresh(){
      SlickLoader.enable();
      axios.put('http://localhost:3000/weather/update',{'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhaHl1YWRlcHJhdGFtYUBnbWFpbC5jb20iLCJleHAiOjE2NTI0ODI3NjgsImlzcyI6IndhaHl1YWRlcHJhdGFtYUBnbWFpbC5jb20ifQ.sB2s_Qyl9TqenJ4dOatClv7Ldj1Ex2KKbYnHlXqRvNo'})
      .then(response => {
        axios.get('http://localhost:3000/weather/all')
        .then(response => {
          this.weather = response.data.data
          SlickLoader.disable();
        });
      });
    },
    logout(){
      localStorage.setItem('token', '');
      localStorage.setItem('email', '');
      localStorage.setItem('name', '');

      this.$router.push({path: '/login'});
    }
  }
}
</script>
