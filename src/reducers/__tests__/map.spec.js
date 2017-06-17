import map from '../map';

const ACTION_TYPE_1 = 'ACTION_TYPE_1';

const key = 'myId';
const name = 'myName';
const changedName = 'myChangedName';

const item = {
  id: key,
  name: name,
};

const changedItem = {
  id: key,
  name: changedName,
};

const map0 = {
  byId: {},
  allIds: [],
};

const map1 = {
  byId: {
    [key]: {...item},
  },
  allIds: [key],
};

const map1Changed = {
  byId: {
    [key]: {...changedItem},
  },
  allIds: [key],
};

describe('map', () => {
  it('add item', () => {
    expect(
      map({
        addActionTypes: [ACTION_TYPE_1],
      })(undefined, {
        type: ACTION_TYPE_1,
        payload: item,
      })
    ).toEqual(map1);
  });

  it('change item', () => {
    expect(
      map({
        changeActionTypes: [ACTION_TYPE_1],
      })(map1, {
        type: ACTION_TYPE_1,
        payload: changedItem,
      })
    ).toEqual(map1Changed);
  });

  it('remove item', () => {
    expect(
      map({
        removeActionTypes: [ACTION_TYPE_1],
      })(map1, {
        type: ACTION_TYPE_1,
        payload: {id: key}
      })
    ).toEqual(map0);
  });
});