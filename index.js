const pm2 = require('pm2');

var newMem = {},
    oldMem = {},
    newPid = {},
    oldPid = {},
    newName = {},
    oldName = {},
    newCpu = {},
    oldCpu = {},
    newStatus = {},
    oldStatus = {},
    newMode = {},
    oldMode = {},
    newId = {},
    oldId = {},
    newRestarts = {},
    oldRestarts = {};

var setlOop = setInterval(function () {

    pm2.list(function (err, list) {
        if (err) {

        } else {
            for (var i = 0; i < list.length; i++) {
                newMem[i] = `mem: ${list[i].monit.memory}`;
                if (newMem[i] !== oldMem[i]) {
                    console.log(`pid: ${list[i].pid} ${newMem[i]}`);
                    oldMem[i] = newMem[i];
                };

                newName[i] = `name: ${list[i].name}`;
                if (newName[i] !== oldName[i]) {
                    console.log(`pid: ${list[i].pid} ${newName[i]}`);
                    oldName[i] = newName[i];
                };

                newCpu[i] = `status: ${list[i].status}`;
                if (newStatus[i] !== oldStatus[i]) {
                    console.log(`pid: ${list[i].pid} ${newStatus[i]}`);
                    oldStatus[i] = newStatus[i];
                };

                newMode[i] = `mode: ${list[i].pm2_env.exec_mode}`;
                if (newMode[i] !== oldMode[i]) {
                    console.log(`pid: ${list[i].pid} ${newMode[i]}`);
                    oldMode[i] = newMode[i];
                };

                newMem[i] = `id: ${list[i].id}`;
                if (newId[i] !== oldId[i]) {
                    console.log(`pid: ${list[i].pid} ${newId[i]}`);
                    oldId[i] = newId[i];
                };

                newRestarts[i] = `mem: ${list[i].pm2_env.restart}`;
                if (newRestarts[i] !== oldRestarts[i]) {
                    console.log(`pid: ${list[i].pid} ${newRestarts[i]}`);
                    oldRestarts[i] = newRestarts[i];
                };
            }
        }
    });
}, 1000);

