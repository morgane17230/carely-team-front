import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import 'src/styles/delete.scss';

const Delete = ({ setOpenDelete, onDeleteUser }) => {
  const [validation, setValidation] = useState('');
  const history = useHistory();

  const handleDeleteUser = (evt) => {
    evt.preventDefault();
    setValidation('Votre compte a été supprimé');
  };

  useEffect(() => {
    let timeout;
    if (validation) {
      timeout = setTimeout(() => {
        onDeleteUser();
        setValidation('');
        history.push('/');
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [validation, handleDeleteUser]);

  return (
    <div className='delete'>
      <button
        type='button'
        className='delete__modal-close'
        onClick={() => setOpenDelete(false)}
      >
        <Icon path={mdiClose} size={1} color='white' />
      </button>
      {validation ? (
        <div className='delete__modal-text'>{validation}</div>
      ) : (
        <p className='delete__modal-text'>
          La suppression de votre compte entraînera la suppression de
          toutes vos informations, vos groupes et vos messages
        </p>
      )}
      {!validation
        && (
        <button
          type='submit'
          className='delete__modal-button'
          onClick={handleDeleteUser}
        >
          <span>Je supprime mon compte</span>
        </button>
        )}

    </div>
  );
};

Delete.propTypes = {
  setOpenDelete: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default Delete;
