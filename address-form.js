define(['knockout', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojinputnumber'], function (ko) {
  return function AddressFormModel (context) {
    var self = this;
    context.props.then(function(properties) {
      try {
        self.fields = {};
        JSON.parse(properties.fields).forEach(function (field) {
          self.fields[field] = { required: false };
        });
      } catch (err) {
        self.fields = [];
      }
    });

    // observables:
    self.name = ko.observable('');
    self.firstName = ko.observable('');
    self.address = ko.observable('');
    self.addressNumber = ko.observable('');
    self.cityCode = ko.observable('');
    self.city = ko.observable('');
    self.phone = ko.observable('');
    self.email = ko.observable('');

    // events:
    self.submit = function () {
      var data;
      data = {
        name: self.name(),
        firstName: self.firstName(),
        address: self.address(),
        addressNumber: self.addressNumber(),
        cityCode: self.cityCode(),
        city: self.city(),
        phone: self.phone(),
        email: self.email()
      };
      window.dispatchEvent(new CustomEvent('address-form:submit', { detail: data }));
    }
    self.isValid = function (element) {
      // TODO: Implement validation
      var valid = true;
      window.dispatchEvent(new CustomEvent('address-form:validation', { detail: valid }));
      return valid;
    }
  }
});
