const router = require("express").Router();
const authController = require("../controllers/auth");
const validationMiddleware = require("../middleware/validationMiddleware");
const { check } = require("express-validator");

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Must be correctly formatted e-mail")
      .trim()
      .escape(),
    check("password")
      .isLength({ min: 1 })
      .withMessage("Input a password")
      .escape(),
  ],
  validationMiddleware,
  authController.login
);

router.post(
  "/signup",
  [
    check("firstName")
      .trim()
      .escape()
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .withMessage("Must be alphabetic"),
    check("lastName")
      .trim()
      .escape()
      .isLength({ min: 3 })
      .withMessage("Must be at least 3 characters long")
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .withMessage("Must be alphabetic"),
    check("email")
      .isEmail()
      .escape()
      .normalizeEmail()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isStrongPassword({ minLength: 12, minSymbols: 0})
      .withMessage("Must be at least 12 characters long, contain 1 lowercase and 1 uppercase symbol, and at least 1 number")
      .escape(),
  ],
  validationMiddleware,
  authController.signup
);

module.exports = router;

//req.checkBody('password2', 'Passwords do not match.').equals(req.body.password1);