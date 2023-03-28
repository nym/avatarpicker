import userReducer, { setUserData, UserState } from "./userSlice";

describe("user reducer", () => {
  const initialState: UserState = {
    data: {
      firstName: "Tom",
      lastName: "Longson"
    }
  };
  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle"
    });
  });

  it("should handle setUserData", () => {
    const actual = userReducer(initialState, setUserData({ firstName: "Todd" }));
    expect(actual.data.firstName).toEqual("Todd");
  });
});
