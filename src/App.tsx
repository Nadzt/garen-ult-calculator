import React, { useState } from "react"

import DamageDisplay from "./components/DamageDisplay"
import EnemyInput from "./components/EnemyInput"

const App = () => {
    const [enemyHp, setEnemyHp] = useState(1000)
    console.log(enemyHp)
    return (
        <div className="app">
            <h3 className="heading-3 app__title">Garen ult calculator</h3>
            <section className="app__content">
                <EnemyInput enemyHp={enemyHp} setEnemyHp={setEnemyHp}/>
                <DamageDisplay enemyHp={enemyHp} />
            </section>
        </div>
    )
}

export default App