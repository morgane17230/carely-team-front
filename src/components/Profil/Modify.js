/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/ConnectedComponents/Field';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import 'src/styles/modify.scss';

const Modify = ({
  setOpenModify,
  changeField,
  lastname,
  firstname,
  email,
  func,
  onModifyUser,
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onModifyUser();
    setTimeout(() => {
      setOpenModify(false);
    }, 1500);
  };

  return (
    <div className='modify'>
      <button
        type='button'
        className='modify__form-close'
        onClick={() => setOpenModify(false)}
      >
        <Icon path={mdiClose} size={1} color='white' />
      </button>
      <form
        action='post'
        className='modify__form'
        onSubmit={handleSubmit}
      >
        <Field
          name='lastname'
          type='text'
          placeholder='Nom'
          onChange={changeField}
          value={lastname}
        />
        <Field
          name='firstname'
          type='text'
          placeholder='Prénom'
          onChange={changeField}
          value={firstname}
        />
        <Field
          name='email'
          type='email'
          placeholder='Email'
          onChange={changeField}
          value={email}
        />
        <Field
          name='func'
          type='text'
          placeholder='Fonction'
          onChange={changeField}
          value={func}
        />
        <button type='submit' className='modify__form-button'>
          <span>Valider</span>
        </button>
      </form>
    </div>
  );
};

Modify.propTypes = {
  setOpenModify: PropTypes.func.isRequired,
  lastname: PropTypes.string,
  firstname: PropTypes.string,
  func: PropTypes.string,
  email: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  onModifyUser: PropTypes.func.isRequired,
};

Modify.defaultProps = {
  lastname: '',
  firstname: '',
  func: '',
  email: '',
  password: '',
};

export default Modify;
