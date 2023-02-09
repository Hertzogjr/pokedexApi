
import React from 'react'
import Container from '../container/Container'

import PokemonLogo from '../../../assets/pokemon.svg'
import Pokeball from '../../../assets/pokeball.svg'

import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <Container>
      <div className={styles.navbarContainer}>
        <img src={PokemonLogo} alt="" />
        <span><input type="text" /><img src={Pokeball} alt="" /></span>
      </div>
    </Container>
    </div>
  )
}

export default Navbar