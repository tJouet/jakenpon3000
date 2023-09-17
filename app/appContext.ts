import {createContext} from 'react'

const GameContext = createContext({username: "", round:1,round1:{userSign:"",botSign:"", winner:''},round2:{userSign:"",botSign:"", winner:''},round3:{userSign:"",botSign:"", winner:''}})

export default GameContext