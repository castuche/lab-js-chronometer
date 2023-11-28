class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;}
 
  start(printTimeCallback) {
  this.intervalId = setInterval(()=>{
    this.currentTime++;
    if (typeof printTimeCallback === "function")
    {printTimeCallback();}} ,1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let stringValue = `${value}`;
    if (stringValue.length<2){
      stringValue="0"+stringValue;
    }
    return stringValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    
    return `${minutes}:${seconds}`; 
  }
}
