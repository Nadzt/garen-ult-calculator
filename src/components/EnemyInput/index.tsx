import React, { useRef } from "react"

import targetDummy from "../../images/Enemy_Target_Dummy.png"

type Props = {
    enemyHp: number,
    setEnemyHp: React.Dispatch<React.SetStateAction<number>>
}

const EnemyInput = ({ enemyHp, setEnemyHp }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(inputRef?.current?.valueAsNumber) setEnemyHp(inputRef.current.valueAsNumber)
    }

    return (
        <div className="enemy">
            <img 
                src={targetDummy} 
                alt="target dummy image" 
                className="enemy__image"
            />
            <label 
                htmlFor="enemy-hp" 
                className="enemy__label"
            >
                Enter enemy max HP
            </label>
            <form 
                className="enemy__input-form"
                onSubmit={handleSubmit}
            >
                <input 
                    type="number" 
                    id="enemy-hp" 
                    placeholder="1000" 
                    className="enemy__input"
                    defaultValue={enemyHp}
                    ref={inputRef}
                />
                <button 
                    className="enemy__button"    
                >
                    Calculate
                </button>
            </form>
        </div>
    )
}

export default EnemyInput