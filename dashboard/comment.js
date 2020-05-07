var commentForm = $('#comment-form');
var commentRep = nodecg.Replicant("comment");
$('#apply-button').click(() => {
    console.log(commentForm.val());
    commentRep.value = commentForm.val();
});
commentRep.on('change', function(comm) {
    console.log(comm);
    commentForm.val(comm);
})
