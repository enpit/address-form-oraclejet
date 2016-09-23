# address-form-oraclejet
An address form composite component that you can use in your Oracle JET application.

## Usage

In your HTML:

``` html
<div id="composite-container">
    <address-form fields='["name", "address", "city"]'></address-form>
</div>
```

In your JS:

``` js
require([
        'ojs/ojcore',
        'knockout',
        'jquery',
        'ojs/ojknockout',
        'ojs/ojcomposite',
        // load address-form-oraclejet via requirejs paths, then:
        'address-form-oraclejet/loader'
    ],
    function(oj, ko, $) {
        // do your oraclejet setup stuff here
        // ...
        // to subscribe to the submit event of the address-form component, do:                
        window.addEventListener('address-form:submit', function (event) {
            console.log(event.detail); // logs the form data as an object
        });
    }
);
```
