type Props = {
    enemyHp: number
}

const calculateDmg = (maxHP: number, baseDmg: number, missingHpPerc: number): number => {
    // formula => threshold = (CHp) - (baseDmg + missingHpPerc * (MaxHp - CHp))
    const threshold = Math.floor((100 * baseDmg + missingHpPerc * maxHP) / (100 + missingHpPerc))
    return Math.min(threshold, maxHP)
}

const DamageDisplay = ({ enemyHp }: Props) => {
    return (
        <div className="damage">
            <p className="damage__text">Demacian Justice will kill it's target with { enemyHp || 0 } max HP, when they reach these thresholds:</p>
            <ul className="damage__list">
                <li className="damage__list-item">
                    <span className="damage__smalltext">Ultimate lvl 1: </span>
                    <span className="display-number damage__number">{calculateDmg(enemyHp, 150, 25).toLocaleString("en-US")}</span>
                </li>
                <li className="damage__list-item">
                    <span className="damage__smalltext">Ultimate lvl 2: </span>
                    <span className="display-number damage__number">{calculateDmg(enemyHp, 300, 30).toLocaleString("en-US")}</span>
                </li>
                <li className="damage__list-item">
                    <span className="damage__smalltext">Ultimate lvl 3: </span> 
                    <span className="display-number damage__number">{calculateDmg(enemyHp, 450, 35).toLocaleString("en-US")}</span>
                </li>
            </ul>
        </div>
    )
}

export default DamageDisplay