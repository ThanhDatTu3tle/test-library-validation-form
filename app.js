import { Validator } from './node_modules/auto-alidation-form/validator.js';
// var Validator = require('./node_modules/auto-alidation-form/validator.js');

// sử dụng thư viện
// Validator('id của form cần validate', 'options') {} *id của form cần validate được hiểu là formSelector

var form =  new Validator('#register-form', '.form-group', '.form-message'); // nhận lại đối tượng 'form' khi khởi tạo constructor Validator
console.log(form);
form.onSubmit = (formData) => { // đối tượng 'form' dùng để call API
    console.log(formData);
}
