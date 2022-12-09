/**
 * js限流器
 * 方法add接受一个返回Promise的函数，同时执行的任务数量不超过两个。
 * 这个一道面试题，限流器保证同时最多只有两个任务在执行，如果任务是异步的，会等待异步任务完成之后，才去执行其他未执行任务。
 */
class Scheduler {
  constructor(maxNum) {
    this.taskList = [];
    this.count = 0;
    this.maxNum = maxNum;
  }
  async add(promiseCreator) {
    if (this.count >= this.maxNum) {
      await new Promise((resolve) => {
        this.taskList.push(resolve)
      });
    }
    this.count++;
    const result = await promiseCreator();
    this.count--;
    if (this.taskList.length > 0) {
      this.taskList.shift()();
    }
    return result;
  }
}


const scheduler = new Scheduler(2);

const timeout = (time) => {
  return new Promise(r => setTimeout(r, time));
};
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log(order));
};

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);

// log:2 3 1 4
