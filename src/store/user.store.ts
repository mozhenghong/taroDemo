import { action, makeObservable, observable, runInAction } from "mobx";

class UserStore {
  constructor() {
    makeObservable(this);
  }

  @observable count: number = 0;

  @action
  addCount = async (num: number): Promise<any> => {
    runInAction(() => {
      this.count += num;
    });
  };
}

export default new UserStore();
