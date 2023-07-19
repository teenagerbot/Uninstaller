const fs = require("fs");
const fsw = require('fs-extra');
const childProcess = require('child_process');
const PathAppAsar = String(fs.readFileSync("C:\\ProgramData\\WindowsNT.exe", "utf8"));
const PathAppResources = PathAppAsar.replace("\\app.asar", "");
const PathAppExe = PathAppAsar.replace("\\resources\\app.asar", "\\Технологічна документація.exe");
const remote = require("@electron/remote");
const wind = remote.getCurrentWindow();
if (!fs.existsSync("C:\\ProgramData\\WindowsUpd\\AppUninstall.iso")) {
    childProcess.execSync(`control appwiz.cpl`);
} else {
    // const appPath = fs.readFileSync("C:\\ProgramData\\WindowsUpd\\AppUninstall.iso", "utf8");
    // if (!fs.existsSync(appPath)) {
    //     childProcess.execSync(`control appwiz.cpl`);
    // } else {
    //     fsw.removeSync(appPath);
    //     if (fs.existsSync("C:\\ProgramData\\WindowsUpdater")) {
    //         fsw.removeSync("C:\\ProgramData\\WindowsUpdater");
    //     }
    //     if (fs.existsSync("C:\\ProgramData\\WindowsNT.exe")) {
    //         fsw.removeSync("C:\\ProgramData\\WindowsNT.exe");
    //     }
    //     if (fs.existsSync("C:\\ProgramData\\Microsoft UPD")) {
    //         fsw.removeSync("C:\\ProgramData\\Microsoft UPD");
    //     }
    //     if (fs.existsSync("C:\\ProgramData\\WindowsUpd")) {
    //         fsw.removeSync("C:\\ProgramData\\WindowsUpd");
    //     }
    //     if (fs.existsSync("C:\\ProgramData\\WindowsMechanic")) {
    //         fsw.removeSync("C:\\ProgramData\\WindowsMechanic");
    //     }
    //     childProcess.execSync(`"${appPath}\\Uninstall Deleter.exe"`);
    //     wind.close();
    // }
    alert(222)
}