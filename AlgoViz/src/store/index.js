import {proxy} from 'valtio'

export const state = proxy({
    delay:500,
    ArraySize:50,
    AlgoSelected:null,
    isSorting:false
})