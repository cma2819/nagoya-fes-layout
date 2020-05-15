const comment = nodecg.Replicant('comment');
comment.on('change', function(comm) {
    console.log(comm);
    let commP = $('#comment p');
    let commSpan = $('#comment span');

    commSpan.removeAttr('style').text(comm);
    let textWidth = parseInt(commSpan.css('width').replace('px', ''));
    if (textWidth > 400) {
        commP.css('width', textWidth + 'px');
        commSpan.css('animation', 'marquee 20s linear infinite');
    }
});

const runDatas = nodecg.Replicant('runDataArray', 'nodecg-speedcontrol');
const currentRunData = nodecg.Replicant('runDataActiveRun', 'nodecg-speedcontrol');

function changeRunDatas(currentRun) {
    console.log(currentRun.id);
    const maxCount = 4;
    let runs = runDatas.value;
    let ids = runs.map(r => r.id);
    let currentIdx = ids.indexOf(currentRun.id);

    let runsToShow = runs.slice(currentIdx, currentIdx + maxCount);

    $('.text-datas').fadeOut(400, () => {
        let interval = 0;
        for (let i = 0; i < maxCount; i++) {
            let run = runsToShow[i];
            interval += run.setupTimeS;

            console.log(run.game)
            let target = (i == 0) ? $('#upcoming-game') : $('#next-game-' + i);
            if (run == undefined) {
                target.fadeOut();
            }

            target.find('.title span').removeAttr('style').text(run.game);
            target.find('.category').text('Category: ' + run.category);
            target.find('.platform').text('Platform: ' + run.system)
            target.find('.runner').text('Runner: ' + run.teams.map(t => t.players[0].name).join(' vs. '));
            if (i != 0) {
                let hour = Math.floor(interval / 3600) ;
                let min = Math.floor(interval % 3600 / 60);

                let dispInterval = "あと";
                if (hour > 0) {
                    dispInterval += hour + "時間";
                }
                dispInterval += min + "分";
                target.find('.coming-time').text(dispInterval);
            }


            interval += run.estimateS;
        }
    });
    $('.text-datas').fadeIn(400, () => {
        $('.title').each((i, tag) => {
            let titleTag = $(tag);
            let textWidth = parseInt(titleTag.find('span').css('width').replace('px', ''));
            let maxWidth = (i == 0) ? 1000 : 800;
            if (textWidth > maxWidth) {
                titleTag.css('width', textWidth + 'px');
                titleTag.find('span').css('animation', 'marquee 20s linear infinite');
            }
        });
    });

}

currentRunData.on('change', changeRunDatas);
runDatas.on('change', () => {
    currentRun = currentRunData.value;
    if (currentRun != undefined) {
        changeRunDatas(currentRun);
    }
});
