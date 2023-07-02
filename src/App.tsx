import { useState } from "react"

import DamageDisplay from "./components/DamageDisplay"
import EnemyInput from "./components/EnemyInput"
import FixedHpButton from "./components/FixedHpButton"
import GithubLink from "./components/GithubLink"

const App = () => {
    const [enemyHp, setEnemyHp] = useState(1000)
    console.log(enemyHp)
    return (
        <div className="app">
            <GithubLink />
            <h3 className="heading-3 app__title">Garen ult calculator</h3>
            <section className="app__content">
                <EnemyInput enemyHp={enemyHp} setEnemyHp={setEnemyHp}/>
                <DamageDisplay enemyHp={enemyHp} />
            </section>
            <h5 className="fixed__title">or select from one of the following:</h5>
            <section className="fixed__container">
                <FixedHpButton setEnemyHp={setEnemyHp} hp={1250}/>
                <FixedHpButton setEnemyHp={setEnemyHp} hp={1500}/>
                <FixedHpButton setEnemyHp={setEnemyHp} hp={1750}/>
                <FixedHpButton setEnemyHp={setEnemyHp} hp={2000}/>
                <FixedHpButton setEnemyHp={setEnemyHp} hp={2250}/>
                <FixedHpButton setEnemyHp={setEnemyHp} hp={2500}/>
            </section>
        </div>
    )
}

export default App