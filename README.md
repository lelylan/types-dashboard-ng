# Types Dashboard for Lelylan

Lelylan Dashboard based on AngularJS to create the type structure. It works on mobile, tablet and desktop (check out the [online version](http://lelylan.github.io/types-dashboard-ng)).


## Contributing

Fork the repo on github and send a pull requests with topic branches.
Do not forget to provide specs to your contribution.


### Setup

* Fork and clone the repository
* Run `npm install && bower install`

### With docker

#### Badges
Docker image: [lelylanlab/types-dashboard-ng](https://hub.docker.com/r/lelylanlab/types-dashboard-ng/)

[![](https://images.microbadger.com/badges/version/lelylanlab/types-dashboard-ng:latest.svg)](http://microbadger.com/images/lelylanlab/types-dashboard-ng:latest "Get your own version badge on microbadger.com")  [![](https://images.microbadger.com/badges/image/lelylanlab/types-dashboard-ng:latest.svg)](http://microbadger.com/images/lelylanlab/types-dashboard-ng:latest "Get your own image badge on microbadger.com")

### Use docker hub image
```bash
$ docker run -d -it --name types-dashboard-ng lelylanlab/types-dashboard-ng
```

### Generate local image
```bash
$ docker build --tag=types-dashboard-ng .
$ docker run -d -it --name types-dashboard-ng types-dashboard-ng
```


### Unit tests (karma)

* `grunt karma:unit`


### Creating your own distribution

* `grunt build`

The new distribution files will be created in the `dist/` folder.


### Coding guidelines

Follow [AngularJS](https://github.com/johnpapa/angular-styleguide) guidelines.


## Feedback

Use the [issue tracker](http://github.com/lelylan/types-dashboard-ng/issues) for bugs or [stack overflow](http://stackoverflow.com/questions/tagged/lelylan) for questions.
[Mail](mailto:dev@lelylan.com) or [Tweet](http://twitter.com/lelylan) us for any idea that can improve the project.


## Links

* [GIT Repository](http://github.com/lelylan/types-dashboard-ng)
* [Lelylan Dev Center](http://dev.lelylan.com)
* [Lelylan Site](http://lelylan.com)


## Authors

[Andrea Reginato](https://www.linkedin.com/in/andreareginato)


## Contributors

Special thanks to all [contributors](https://github.com/lelylan/types-dashboard-ng/contributors)
for submitting patches.

## Changelog

See [CHANGELOG](https://github.com/lelylan/types-dashboard-ng/blob/master/CHANGELOG.md)


## License

Lelylan is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
