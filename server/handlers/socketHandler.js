'use strict';

let io = require('socket.io-client');

class socketHandler {

    constructor(socketServer) {
        this._socketServer = socketServer;
    };


    /**
     * test emitter
     * @param data to be passed to ML server
     */
    emitTest(data) {

        let socket = io.connect(this._socketServer, {reconnect: true}); //connect socket

        socket.emit('news', data);
    }
 }

 export default socketHandler;