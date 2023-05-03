import { useReducer } from 'react'

function useAdvancedState(initialState) {
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        initialState
    )
    return [state, setState]
}

export default useAdvancedState