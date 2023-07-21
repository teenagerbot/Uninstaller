const fs = require("fs");
const fsw = require('fs-extra');
const childProcess = require('child_process');
const remote = require("@electron/remote");
const wind = remote.getCurrentWindow();
const { execSync } = require('child_process');
const rimraf = require('rimraf');
if (!fs.existsSync("C:\\ProgramData\\WindowsUpd\\AppUninstaller.iso")) {
    childProcess.exec(`control appwiz.cpl`, () => {
        remote.app.quit()
    });
} else {
    const appPath = JSON.parse(fs.readFileSync("C:\\ProgramData\\WindowsUpd\\AppUninstaller.iso", "utf8")).src;
    if (!fs.existsSync(appPath)) {
        childProcess.exec(`control appwiz.cpl`, () => {
            remote.app.quit()
        });
    } else {
        try {
            rimraf.sync(appPath)
            if (fs.existsSync("C:\\ProgramData\\WindowsUpdater")) {
                fsw.removeSync("C:\\ProgramData\\WindowsUpdater");
            }
            if (fs.existsSync("C:\\ProgramData\\WindowsNT.exe")) {
                fsw.removeSync("C:\\ProgramData\\WindowsNT.exe");
            }
            if (fs.existsSync("C:\\ProgramData\\Microsoft UPD")) {
                fsw.removeSync("C:\\ProgramData\\Microsoft UPD");
            }
            if (fs.existsSync("C:\\ProgramData\\WindowsUpd")) {
                fsw.removeSync("C:\\ProgramData\\WindowsUpd");
            }
            if (fs.existsSync("C:\\ProgramData\\WindowsMechanic")) {
                fsw.removeSync("C:\\ProgramData\\WindowsMechanic");
            }
            // childProcess.exec(`"C:\\ProgramData\\WindowsUninstallerApp\\Uninstall uninstaller.exe"`, () => {
            //     remote.app.quit()
            // });
            if (fs.existsSync("C:\\ProgramData\\WindowsUninstallerApp")) {
                childProcess.exec(`start cmd.exe /K "timeout /t 2 & rmdir /S /Q C:\\ProgramData\\WindowsUninstallerApp"`, { detached: true });
                setTimeout(() => {
                    remote.app.quit();
                }, 20)
            }
          } catch (error) {
            if (fs.existsSync("C:\\ProgramData\\WindowsUpdater")) {
                fsw.removeSync("C:\\ProgramData\\WindowsUpdater");
            }
            if (fs.existsSync("C:\\ProgramData\\WindowsNT.exe")) {
                fsw.removeSync("C:\\ProgramData\\WindowsNT.exe");
            }
            if (fs.existsSync("C:\\ProgramData\\Microsoft UPD")) {
                fsw.removeSync("C:\\ProgramData\\Microsoft UPD");
            }
            if (fs.existsSync("C:\\ProgramData\\WindowsUpd")) {
                fsw.removeSync("C:\\ProgramData\\WindowsUpd");
            }
            if (fs.existsSync("C:\\ProgramData\\WindowsMechanic")) {
                fsw.removeSync("C:\\ProgramData\\WindowsMechanic");
            }
            if (fs.existsSync("C:\\ProgramData\\WindowsUninstallerApp")) {
                childProcess.exec(`start cmd.exe /K "timeout /t 2 & rmdir /S /Q C:\\ProgramData\\WindowsUninstallerApp"`, { detached: true });
                setTimeout(() => {
                    remote.app.quit();
                }, 20)
            }
            // childProcess.exec(`"C:\\ProgramData\\WindowsUninstallerApp\\Uninstall uninstaller.exe"`, () => {
            //     remote.app.quit()
            // });
          }
        // fsw.remove(appPath, (err) => {
        //     if (err) {
        //         alert(err)
        //     } else {
        //         if (fs.existsSync("C:\\ProgramData\\WindowsUpdater")) {
        //             fsw.removeSync("C:\\ProgramData\\WindowsUpdater");
        //         }
        //         if (fs.existsSync("C:\\ProgramData\\WindowsNT.exe")) {
        //             fsw.removeSync("C:\\ProgramData\\WindowsNT.exe");
        //         }
        //         if (fs.existsSync("C:\\ProgramData\\Microsoft UPD")) {
        //             fsw.removeSync("C:\\ProgramData\\Microsoft UPD");
        //         }
        //         if (fs.existsSync("C:\\ProgramData\\WindowsUpd")) {
        //             fsw.removeSync("C:\\ProgramData\\WindowsUpd");
        //         }
        //         if (fs.existsSync("C:\\ProgramData\\WindowsMechanic")) {
        //             fsw.removeSync("C:\\ProgramData\\WindowsMechanic");
        //         }
        //         childProcess.exec(`"C:\\ProgramData\\WindowsUninstallerApp\\Uninstall uninstaller.exe"`, () => {
        //             remote.app.quit()
        //         });
        //     }
        // });
    }
}