class SocketBuilder {
  constructor({ socketUrl }) {
    this.socketUrl = socketUrl;
    this.onUserConnected = () => {};
    this.onUserDisconnect = () => {};
  }

  setOnUserConnected(fn) {
    this.onUserConnected = fn;
    return this;
  }

  setOnUserDisconnect(fn) {
    this.onUserDisconnect = fn;
    return this;
  }

  build() {
    const socket = io.connect(this.socketUrl, {
      withCredentials: false,
    });

    socket.on("user-connected", this.onUserConnected);
    socket.on("user-disconnected", this.onUserDisconnect);

    return socket;
  }
}
