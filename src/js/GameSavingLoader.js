import read from './reader';
import json from './parser';

class GameSaving {
  constructor(id, created, userInfo){
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
};

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((data) => {
        const obj = JSON.parse(data);
        const { id, created, userInfo } = obj;
        return new GameSaving(id, created, userInfo);
      });
  }
}
