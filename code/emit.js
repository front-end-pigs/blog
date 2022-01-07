class Emit {
  constructor() {
    this.handlersMap = new Map();
  }

  // 每个key可能绑定多个handler
  on(type, fn) {
    const handlers = this.handlersMap.get(type);
    if (!handlers) {
      handlers = [];
    }
    handlers.push(fn);
    this.handlersMap.set(type, handlers);
  }

  emit(type, ...args) {
    const handlers = this.handlersMap.get(type);
    if (!handlers) {
      return false;
    }
    for (let i = 0; i < handlers.length; i++) {
      const handler = handlers[i];
      handler.apply(this, args);
    }
  }

  off(type, fn) {
    const handlers = this.handlersMap.get(type);
    if (handlers) {
      // 如果不传指定handler的话，默认清除该type下所有handler
      if (!fn) {
        handlers.length = 0;
      } else {
        for (let i = 0, len = handlers.length; i < len; i++) {
          if (handlers[i] === fn) {
            handlers.splice(i, 1);
            break;
          }
        }
      }
    }
  }
}
