
!(function () {
    if (window._flag) {

    } else {
        var websocket = new WebSocket("ws://localhost:8080");
        window._flag = true;

        websocket.onmessage = function (event) {
            var data = event.data;
            var res = b(data);

            websocket.send(res)
        }
    }
}())