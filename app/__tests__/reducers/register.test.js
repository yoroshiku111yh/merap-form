import { DATA_FORM_REGISTER, ARRAY_TEXT_ERROR } from '../../initialize';
import reducer from '../../reducers/reducerRegister';
import * as types from '../../actions/actionTypes';
const initialState = DATA_FORM_REGISTER;
describe("Register reducer :", () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    })

    it('should handle type UPDATE_FORM_REGISTER', () => {
        const expectReturnState = Object.assign({}, initialState, {
            "fullname" : "tester",
            "gender" : "male"
        });
        const objSet = {
            "fullname" : "tester",
            "gender" : "male"
        }
        const action = {
            type : types.UPDATE_FORM_REGISTER,
            value : objSet
        }
        expect( reducer(initialState, action) ).toStrictEqual(expectReturnState)
    })

    it('should handle type UPDATE_BIRTHDAY_REGISTER', () => {
        const expectReturnState = Object.assign({}, initialState, {
            "birthday" : {
                "day" : 1,
                "month" : "",
                "year" : ""
            }
        });
        const objSet = {
            "day" : 1
        }
        const action = {
            type : types.UPDATE_BIRTHDAY_REGISTER,
            value : objSet
        }
        expect( reducer(initialState, action) ).toStrictEqual(expectReturnState)
    })

    it('should handle type UPDATE_ERROR_STATUS_REGISTER', () => {
        const action = {
            type : types.UPDATE_ERROR_STATUS_REGISTER,
            value : ARRAY_TEXT_ERROR.fullname
        }
        expect( reducer(initialState, action)).toMatchObject({"error" : ARRAY_TEXT_ERROR.fullname})
    })
})