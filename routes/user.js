const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usersController = require("../controllers/users.js");

router
  .route("/signup")
  .get(usersController.randerSignupForm)
  .post(wrapAsync(usersController.signup));

// router.get("/signup", usersController.randerSignupForm);

//  router.post("/signup" , wrapAsync(usersController.signup));

router
  .route("/login")
  .get(usersController.randerLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    usersController.login
  );

// router.get("/login" , usersController.randerLoginForm);

// router.post("/login", saveRedirectUrl , passport.authenticate("local" , { failureRedirect : '/login' , failureFlash : true}) , usersController.login );

router.get("/logout", usersController.logout);

module.exports = router;
