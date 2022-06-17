//var gun = Gun(['http://localhost:8080/gun']);
var gun = Gun(['http://localhost:8080/gun', 'https://nodegun.herokuapp.com/','https://gunjs.herokuapp.com/gun']);
        var user = gun.user();

        $('#up').on('click', function (e) {
            user.create($('#alias').val(), $('#pass').val());
        });

        $('#sign').on('submit', function (e) {
            e.preventDefault();
            user.auth($('#alias').val(), $('#pass').val());
        });
        /* 1 */
        $('#said').on('submit', function (e) {
            e.preventDefault();
            if (!user.is) { return }
            user.get('said').set($('#say').val());
            $('#say').val("");
        });

        /* 2 */
        function UI(say, id) {
            var li = $('#' + id).get(0) || $('<li>').attr('id', id).appendTo('ul');
            $(li).text(say);
        };

        /* 3 */
        gun.on('auth', function () {
            $('#sign').hide();
            user.get('said').map().once(UI);
        });
