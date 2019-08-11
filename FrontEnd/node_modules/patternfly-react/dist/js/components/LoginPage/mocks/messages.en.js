'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pageHeader = {
  alert: 'Patternfly will be updated to 2.13.5 at 00:00 AM, 23th Sep 2018 (UTC). This Update will last for 8-12 hours, please plan in advance for this outage.',
  logo: 'Patternfly',
  caption: 'This is placeholder text, only. Use this area to place any information or\n    introductory message about your application that may be relevant for\n    users.'
};

var footerLinks = [{ children: 'Terms of Use', href: '#' }, { children: 'Help', href: '#' }, { children: 'Privacy Policy', href: '#' }];

var cardHeader = {
  title: 'Log In to Your Account',
  selectedLanguage: 'English',
  availableLanguages: [{ value: 'en', text: 'English' }, { value: 'fr', text: 'French' }]
};

var signUp = {
  label: 'Need an account?',
  link: {
    label: 'Sign up'
  }
};

var rememberMe = 'Keep me logged in for 30 days';

var forgotPassword = 'Forgot password?';

var form = {
  error: 'Your account has been blocked. Contact your administrator to unblock it.',
  submitText: 'Log In'
};

var passwordField = {
  placeholder: 'Password',
  errors: {
    empty: 'Please enter your password.',
    short: 'Password too short, minimum length is 8 characters'
  },
  warnings: {
    capsLock: 'Caps lock is currently on.'
  }
};

var usernameField = {
  placeholder: 'Email address',
  errors: {
    empty: 'Please enter your email.',
    invalid: 'Your email is invalid'
  }
};

var card = {
  header: cardHeader,
  form: form,
  passwordField: passwordField,
  usernameField: usernameField,
  rememberMe: rememberMe,
  forgotPassword: forgotPassword,
  signUp: signUp
};

exports.default = {
  header: pageHeader,
  footerLinks: footerLinks,
  card: card
};