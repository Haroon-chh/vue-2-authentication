<template>
  <div class="login-body">
    <div class="login-card">
      <div class="col-lg-7 form-container d-flex flex-column justify-content-center">
        <div class="card-body p-5">
          <p class="text-center h2 fw-semibold mb-4 mx-1 mx-md-4 mt-2">Login as a User</p>
          <form class="mx-1 mx-md-4" @submit.prevent="login">
            <div class="d-flex flex-row align-items-center mb-4 mt-5 pb-2 form-outline">
              <img src="../assets/email-icon.png" alt="Email Icon" class="icon-size">
              <input type="email" v-model="email" class="form-control" placeholder=" " required />
              <label class="form-label" for="email">Your Email</label>
            </div>
            <div class="d-flex flex-row align-items-center mb-2 mt-0 form-outline">
              <img src="../assets/password-icon.png" alt="Lock Icon" class="icon-size">
              <input type="password" v-model="password" class="form-control" placeholder=" " minlength="8" required />
              <label class="form-label" for="password">Password</label>
            </div>
            <div class="forgot-password mb-5">
              <a href="#" class="text-white">Forgot password?</a>
            </div>
            <div class="d-flex justify-content-center  mb-3 mb-lg-4">
              <button type="submit" class="btn btn-light btn-lg">
                Login <img src="../assets/login-icon.png" alt="">
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-5 image-container">
        <img src="../assets//signup.jpg" class="img" alt="Sample image">
        <div class="text-center text-black bg-white w-100 h-100 p-5 ">
          <p>Not a user? <router-link to="/signup" class="btn btn-primary">Sign Up</router-link></p>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let foundUser = users.find(user => user.email === this.email && user.password === this.password);
  
        if (foundUser) {
          foundUser.lastLogin = new Date().toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
          });
  
          localStorage.setItem("users", JSON.stringify(users));
          localStorage.setItem("authUser", JSON.stringify(foundUser));
          this.$router.push("/dashboard");
        } else {
          alert("Wrong email or password. Please try again.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Move your CSS styles here */
  .login-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-image: url(../assets/bg3.jpg);
    background-size: contain;
} 

.login-card {
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    margin: 20px;
    display: flex;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0);
    color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card-body {
    padding: 2rem;
    background-color: rgba(129, 134, 129, 0.2);
}

.image-container img {
    height: 70%;
    width: 100%;
    object-fit: cover;
}

.form-outline {
    position: relative;
    margin-bottom: 1.5rem;
}

.icon-size {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align:center;
}

.form-control {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    background-color: transparent;
    color: white;
}

.form-control:focus {
    border-color: #306de7;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.form-label {
    position: absolute;
    top: 20%;
    left: 40px;
    background-color: rgba(255, 255, 255, 0);
    padding: 0 5px;
    color: #aaa;
    transition: 0.3s ease all;
    pointer-events: none;
    font-size: 14px;
}

.form-control:focus ~ .form-label,
.form-control:not(:placeholder-shown) ~ .form-label {
    top: -25px;
    left: 25px;
    font-size: 16px;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0);
}

.forgot-password {
    text-align: right;
    font-size: 0.8rem;
}
.not-user{
    display: none;
    top:78%;
    left:35%;
}

@media (max-width: 815px) {
    .image-container {
        display: none;
    }
    .login-card {
        max-width: 100%;
    }
    body {
        background-size: cover;
    }
    .not-user{
        display: block;
    }
    .login-body{
      background-size: cover;

    }
}

  </style>
  