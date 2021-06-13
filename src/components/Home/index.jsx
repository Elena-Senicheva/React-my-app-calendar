import React from 'react'
import cx from 'classnames'
import style from './Home.module.sass'

function Home () {
  return (
    <div className={style.container}>
      <div className={cx(style.words)}>
      <h1>Hello</h1>
      <h1>my</h1>
      <h1>App</h1>
    </div>
    </div>
  )
}
export default Home
