import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';
import { append } from 'domutils';

export const ftp = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return append.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FTP',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
}