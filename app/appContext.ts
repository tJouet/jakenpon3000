'use client';
import {createContext, useMemo, useState} from 'react'

export enum Signs {
    ROCK = 'rock',
    PAPER = 'paper',
    SCISSORS = 'scissors'
}

export type RoundType = {
    player1: Signs,
    player2: Signs,
}

type GameContextType = {
    username: string,
    roundsHistory: Array<RoundType>
}

const gameContextDefaultValues: GameContextType = {
    username: "",
    roundsHistory: []
}

export function useGameContext() {
    const [gameContext, setGameContext] = useState<GameContextType>(gameContextDefaultValues)

    const winner = useMemo(() => {
        const player1Wins = gameContext.roundsHistory.filter(round => {
            if (round.player1 === Signs.ROCK && round.player2 === Signs.SCISSORS) {
                return true
            }
            if (round.player1 === Signs.PAPER && round.player2 === Signs.ROCK) {
                return true
            }
            if (round.player1 === Signs.SCISSORS && round.player2 === Signs.PAPER) {
                return true
            }
            return false
        })

        const player2Wins = gameContext.roundsHistory.filter(round => {
            if (round.player2 === Signs.ROCK && round.player1 === Signs.SCISSORS) {
                return true
            }
            if (round.player2 === Signs.PAPER && round.player1 === Signs.ROCK) {
                return true
            }
            if (round.player2 === Signs.SCISSORS && round.player1 === Signs.PAPER) {
                return true
            }
            return false
        })

        if (player1Wins.length === 3) {
            return 'player'
        }
        if (player2Wins.length === 3) {
            return 'bot'
        }
        return null
    }, [gameContext.roundsHistory])

    const playRound = (player1: Signs) => {
        const botResult = Math.floor(Math.random() * 3)
        const player2 = Object.values(Signs)[botResult]
        setGameContext({
            ...gameContext,
            roundsHistory: [...gameContext.roundsHistory, {player1, player2}]
        })
    }

    return {
        username: gameContext.username,
        setUsername: (username: string) => setGameContext({...gameContext, username}),
        lastRound: gameContext.roundsHistory[gameContext.roundsHistory.length - 1],
        playRound,
        winner,
        round: gameContext.roundsHistory.length + 1
    }
}

const GameContext = createContext<ReturnType<typeof useGameContext>>({} as any)

export default GameContext