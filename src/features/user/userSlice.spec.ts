import userReducer, {
  UserState,
  setFirstName,
  setLastName,
  setTopic,
} from './userSlice';

describe('user reducer', () => {
  const initialState: UserState = {
    firstName: "Tom",
    lastName: "Longson"
  };
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle setFirstName', () => {
    const actual = userReducer(initialState, setFirstName('Todd'));
    expect(actual.firstName).toEqual('Todd');
  });

  it('should handle setLastName', () => {
    const actual = userReducer(initialState, setLastName('Todd'));
    expect(actual.lastName).toEqual('Todd');
  });

  it('should handle setTopic', () => {
    const actual = userReducer(initialState, setTopic('cars'));
    expect(actual.topic).toEqual('cars');
  });
});
