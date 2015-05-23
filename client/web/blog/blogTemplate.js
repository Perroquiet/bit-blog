Template.blogTemplate.onRendered(function () {
    $(function() {
        $('html, body').animate({ scrollTop: 0 }, 400);
        $('#content').hide().fadeIn(1000);
    });
});
