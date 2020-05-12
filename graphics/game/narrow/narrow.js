const currentRunData = nodecg.Replicant('runDataActiveRun', 'nodecg-speedcontrol');
const timerData = nodecg.Replicant('timer', 'nodecg-speedcontrol');

function changeRunData(run) {
    console.log(run.id);

    $('#title').text(run.game);
    $('#category').text(run.category);

    $('#runner-name').text(run.teams[0].players[0].name);
    $('#runner-id').text(run.teams[0].players[0].social.twitch);

    let est = run.estimate;
    if (est.startsWith('00')) {
        est = est.substring(3);
    }
    $('#est').text(est);
}

function changeTimer(timer) {
    let time = timer.time;
    if (time.startsWith('00')) {
        time = time.substring(3);
    }

    $('#timer')
        .removeClass('stopped running finished paused')
        .addClass(timer.state).text(time);
}

currentRunData.on('change', changeRunData);
timerData.on('change', changeTimer);
