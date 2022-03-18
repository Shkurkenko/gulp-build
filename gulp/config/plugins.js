import replace from 'gulp-replace'; // Find and replace src(@img...)
import plumber from 'gulp-plumber'; // Errors handler
import notify from 'gulp-notify';   // Hints
import browsersync from 'browser-sync'; // Local server
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    ifPlugin: ifPlugin
}
