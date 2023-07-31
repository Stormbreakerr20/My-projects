import {proxy} from 'valtio'

export const state = proxy({
    intro:true,
    color:'#EFBD48',
    isLogoicon:true,
    isFullicon:false,
    logoicon:'./threejs.png',
    Fullicon:'./threejs.png',
})