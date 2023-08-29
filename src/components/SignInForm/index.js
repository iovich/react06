import React, { Component } from "react";
import styles from "./SignInForm.module.css";
import classNames from "classnames";

const initialState = {
  email: '',
  password: '',
  emailIsValid: true,
  passwordIsValid: true
}

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState }
  }

  createInputClass = (name) => {
    return classNames(
      styles.input,
      { [styles.invalid]: !this.state[`${name}IsValid`] }
    )
  }

  lowerCase = () => {
    this.setState(
      {
        email: this.state.email.toLowerCase(),
        password: this.state.password.toLowerCase()
      }
    )
  }

  handlerInput = ({ target: { name, value } }) => {
    const isValid = !value.includes(' ')
    this.setState(
      {
        [name]: value,
        [`${name}IsValid`]: isValid
      }
    );
  }

  handlerForm = (event) => {
    event.preventDefault();
    // event.target.reset();
    this.setState({ ...initialState })
  }

  handleRegionChange = (event) => {
    this.setState({ selectedRegion: event.target.value });
  };

  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handlerForm}>
          <input
            className={this.createInputClass('email')}
            name="email"
            type="text"
            onChange={this.handlerInput}
            value={this.state.email}
          />
          <input
            className={this.createInputClass('password')}
            name="password"
            type="password"
            onChange={this.handlerInput}
            value={this.state.password}
          />
          <select
            value={this.state.selectedRegion}
            onChange={this.handleRegionChange}
            className={styles.selectRegion}
          >
            <option value="">Виберіть регіон</option>
            <option value="Харків">Харків</option>
            <option value="Вінниця">Вінниця</option>
            <option value="Волинь">Волинь</option>
            <option value="Дніпро">Дніпро</option>
            <option value="Донецьк">Донецьк</option>
            <option value="Житомир">Житомир</option>
            <option value="Закарпаття">Закарпаття</option>
            <option value="Запоріжжя">Запоріжжя</option>
            <option value="Івано-Франківськ">Івано-Франківськ</option>
            <option value="Київ">Київ</option>
            <option value="Кіровоград">Кіровоград</option>
            <option value="Луганськ">Луганськ</option>
            <option value="Львів">Львів</option>
            <option value="Миколаїв">Миколаїв</option>
            <option value="Одеса">Одеса</option>
            <option value="Полтава">Полтава</option>
            <option value="Рівне">Рівне</option>
            <option value="Суми">Суми</option>
            <option value="Тернопіль">Тернопіль</option>
            <option value="Харків">Харків</option>
            <option value="Херсон">Херсон</option>
            <option value="Хмельницьк">Хмельницьк</option>
            <option value="Черкаси">Черкаси</option>
            <option value="Чернівці">Чернівці</option>
            <option value="Чернігів">Чернігів</option>
            <option value="Крим">Крим</option>
          </select>
          <input
            className={styles.input}
            type="submit"
            value="send"
          />
        </form>
        <button onClick={this.lowerCase}>lower</button>
        <div className={styles.selectedRegion}>
          {this.state.selectedRegion && <p>Обраний регіон: {this.state.selectedRegion}</p>}
        </div>
      </>
    );
  }
}

export default SignInForm;
