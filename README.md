# Lelylan Types Dashboard

Source code for [Lelylan Types Dashboard](http://t.lelylan.com).

![Lelylan Components](http://i.imgur.com/JXdOqSF.png)


## Introduction

### What is Lelylan

[Lelylan](http://lelylan.com) makes it easy for developers to monitor and control all devices
in your house providing a simple and consistent REST API.

### What is a Type

A type describes the structure of a device. In its simplest form every type can be defined as
the combination of three key elements: properties, functions and statuses.
[Learn more about](http://dev.lelylan.com/api/types).
### Why AngularJS

[AngularJS](http://angularjs.org/) lets you write client-side web applications as if you had
a smarter browser. It lets you use good old HTML as your template language and lets you extend
HTML’s syntax to express your application’s components clearly and succinctly.


## Contributing

Fork the repo on github and send a pull requests with topic branches.
Do not forget to provide specs to your contribution.


### Running specs

* Fork and clone the repository
* Install [Yeoman](http://yeoman.io) and [PhantomJS](http://phantomjs.org/)
* Run `grunt server`
* Run `grunt test` to execute all tests

### Creating your own distribution

* Fork and clone the repository
* Install [Yeoman](http://yeoman.io), [PhantomJS](http://phantomjs.org/) and [Foreman](https://github.com/ddollar/foreman)
* Run `grunt`

The new distribution files will be created in 'dist/'.

* Run `foreman start`
* Open [index.html](http://localhost:3100) and see if everything works

### Stubbing

In `test/html` you can find the stubbed versions of Lelylan Types where all HTTP request are
simulated to be able to work in isolation.

* Run `grunt server`

And then open the following pages to live test Lelylan Types.

* [Types Dashboard](http://localhost:3100/html/index.html)
* [Authenticated Types Dashboard](http://localhost:3100/html/index.html#access_token=token&token_type=bearer&expires_in=7200&state=state5c6007a2/mocks/index.html)

### Coding guidelines

Follow [github](https://github.com/styleguide/) guidelines.

### Feedback

Use the [issue tracker](http://github.com/lelylan/types-dashboard-ng/issues) for bugs.
[Mail](mailto:touch@lelylan.com) or [Tweet](http://twitter.com/lelylan) us for any idea that can improve the project.

### Links

* [GIT Repository](http://github.com/lelylan/types-dashboar-ngd)
* [Lelylan Components Website](http://lelylan.github.com/types-dashboard-ng).
* [Lelylan Dev Center](http://dev.lelylan.com)
* [Lelylan Site](http://lelylan.com)


## Authors

[Andrea Reginato](http://twitter.com/andreareginato)


## Contributors

Special thanks to the [all people](https://github.com/lelylan/types-dashboard-ng/contributors) submitting patches.


## Changelog

See [CHANGELOG](https://github.com/lelylan/types-dashboard-ng/blob/master/CHANGELOG.md)


## Copyright

Copyright (c) 2013 [Lelylan](http://lelylan.com).
See [LICENSE](https://github.com/lelylan/types-dashboard-ng/blob/master/LICENSE.md) for details.
