<template>
    <div class="signup-body">
    <div class="signup-card">
      <div class="col-lg-7 form-container d-flex flex-column justify-content-center">
        <div class="card-body p-4">
          <p class="text-center h2 fw-semibold mb-4 mx-1 mx-md-4 mt-2">Sign Up as new User</p>
          <form class="mx-1 mx-md-4" @submit.prevent="signup">
            <div class="d-flex flex-row align-items-center mt-5 mb-4 pb-2 form-outline">
              <img src="../assets/user-icon.png" alt="User Icon" class="icon-size">
              <div class="flex-fill mb-0">
                <input type="text" id="fname" v-model="firstName" class="form-control" placeholder=" " required />
                <label class="form-label" for="fname">First Name</label>
              </div>
              <div class="flex-fill mb-0 ms-2">
                <input type="text" id="lname" v-model="lastName" class="form-control" placeholder=" " required />
                <label class="form-label start-50 ms-4" for="lname">Last Name</label>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-4 pb-2 form-outline">
              <img src="../assets/email-icon.png" alt="Email Icon" class="icon-size">
              <div class="flex-fill mb-0">
                <input type="email" id="email" v-model="email" class="form-control" placeholder=" " required />
                <label class="form-label" for="email">Email</label>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-4 pb-2 form-outline">
              <img src="../assets/password-icon.png" alt="Password Icon" class="icon-size">
              <div class="flex-fill mb-0">
                <input type="password" id="password1" v-model="password" class="form-control" placeholder=" " minlength="8" required />
                <label class="form-label" for="password1">Password</label>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-3 form-outline">
              <img src="../assets/password-icon.png" alt="Confirm Password Icon" class="icon-size">
              <div class="flex-fill mb-0">
                <input type="password" id="password2" v-model="confirmPassword" class="form-control" placeholder=" " minlength="8" required />
                <label class="form-label" for="password2">Re-enter Password</label>
              </div>
            </div>
            <div class="form-check d-flex justify-content-center my-3">
              <input class="form-check-input me-2" type="checkbox" id="term" v-model="agreedToTerms" required />
              <label class="form-check-label" for="term">
                I agree to all statements in <a href="#">Terms & Conditions</a>
              </label>
            </div>
            <div class="d-flex justify-content-center mx-4 mt-4">
              <button type="submit" class="btn btn-light btn-lg">Sign Up <img src="../assets/signup-icon.png" alt=""></button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-5 image-container">
        <img src="../assets/signup.jpg" class="img" alt="Sample image">
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreedToTerms: false,
      };
    },
    methods: {
      signup() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match.');
          return;
        }
  
        let users = JSON.parse(localStorage.getItem('users')) || [];
  
        let emailExists = users.some(user => user.email === this.email);
        if (emailExists) {
          alert('Email already has an account.');
          return;
        }
  
        let createdAt = new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
  
        let newUser = {
          user: `user-${users.length + 1}`,
          id: users.length + 1,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          createdAt,
          lastLogin: null,
          messages: []
        };
  
        users.forEach(existingUser => {
          existingUser.messages.push({
            id: newUser.id,
            name: `${newUser.firstName} ${newUser.lastName}`,
            chatHistory: [],
          });
          newUser.messages.push({
            id: existingUser.id,
            name: `${existingUser.firstName} ${existingUser.lastName}`,
            chatHistory: [],
          });
        });
  
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
  
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-image: url(../assets/bacground.jpg);
    background-size: contain;
}

.signup-card {
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 30px;
    display: flex;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card-body {
    padding: 2rem;
    background-color: rgba(241, 237, 237, 0.25);
}

.image-container img {
    height: 100%;
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
    vertical-align: middle;
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
.already-user{
    display: block;
    left:60%;
    top:90%;
    color: black;
}

@media (max-width: 768px) {
    .image-container {
        display: none;
    }
    .signup-card {
        max-width: 100%;
    }
    body {
        background-size: cover;
    }
    .already-user{
        display: block;
        top:82%;
        left:40%;
    }
}
  </style>
  