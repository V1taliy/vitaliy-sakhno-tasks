class Emitter {
  
  /**
   * Создает экземпляр класса Emitter.
   * @memberof Emitter
   */
  constructor() {
    // Ваш код
    this.events = {};
  }

  /**
   * связывает обработчик с событием
   *
   * @param {String} event - событие
   * @param {Function} handler - обработчик
   * @memberof Emitter
   */
  on(event, handler) {
    if( !this.events[event] ) {
      this.events[event] = [];
   }
     
   this.events[event].push(handler);
    // Ваш код
this.events[event] = this.events[event] || [];
this.events[event].push(handler);
}

  /**
   * Генерирует событие -- вызывает все обработчики, связанные с событием и
   *                       передает им аргумент data
   *
   * @param {String} event
   * @param {*} data
   * @memberof Emitter
   */
  emit(event, data) {
    // Ваш код
  if(this.events[event]) {
    if(typeof events[event] == 'array'){
  events[event].forEach(function(handler) {
  handler(data);
});}else{
  if(typeof events[event] == 'function')
  events[event](data);
}
  }
  }
}

export default Emitter;
