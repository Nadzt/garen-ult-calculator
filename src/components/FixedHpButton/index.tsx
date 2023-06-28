import React from 'react'

type Props = {
    hp: number,
    setEnemyHp: React.Dispatch<React.SetStateAction<number>>
}

const FixedHpButton = ({ hp, setEnemyHp }: Props) => {
    const handleClick = () => {
        setEnemyHp(hp)
    }

    return (
        <button 
            className='fixed__button display-number'
            onClick={handleClick}
        >
            { hp }
        </button>
    )
}

export default FixedHpButton