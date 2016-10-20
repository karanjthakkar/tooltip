var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

  component: {
    name: 'Tooltip',
    dependencies: [
      'react',
      'rc-trigger'
    ]
  }

};

initGulpTasks(gulp, taskConfig);
