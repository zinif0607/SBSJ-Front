import {
    REQUEST_COMPLETE_ORDER_LIST_TO_SPRING,
} from "./mutation-types";

export default { 
    [REQUEST_COMPLETE_ORDER_LIST_TO_SPRING](state, passingData) {
        state.completeOrderList = passingData
    },
}