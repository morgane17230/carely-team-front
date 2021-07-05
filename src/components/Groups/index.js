import React, { useState } from 'react';
import MenuProfil from "src/containers/MenuProfil";
import GroupList from 'src/containers/Groups/GroupList';
import Users from "src/containers/Groups/Users";
import Messages from 'src/containers/Groups/Messages';
import ModifyGroup from "src/containers/Groups/ModifyGroup";
import CreateGroup from "src/containers/Groups/CreateGroup";
import PropTypes from 'prop-types';

import 'src/styles/groups.scss';

const Groups = ({ groups }) => {
    const [openMessages, setOpenMessages] = useState(false);
    const [openPersons, setOpenPersons] = useState(false);
    const [openCreateButton, setOpenCreateButton] = useState(true);
    const [openModify, setOpenModify] = useState(false);
    const [openCreate, setOpenCreate] = useState(false);

  return (
      <div className="groups">
          <MenuProfil />
          <div>
              <div className="lists">
                  <div className="lists__table">
                      <div className="lists__titles">
                          <p className="lists__title">Fin</p>
                          <p className="lists__title">Ordre du jour</p>
                          <p className="lists__title">Type</p>
                          <p className="lists__title">Auteur</p>
                          <p className="lists__title">Statut</p>
                          <p className="lists__title">Plus</p>
                      </div>
                      {groups.map((group) => (
                          <div className="group-list" key={group.id}>
                              <GroupList
                                  {...group}
                                  setOpenMessages={setOpenMessages}
                                  setOpenPersons={setOpenPersons}
                                  setOpenCreateButton={setOpenCreateButton}
                                  setOpenModify={setOpenModify}
                                  setOpenCreate={setOpenCreate}
                              />
                          </div>
                      ))} 
                  </div>
                  <div className="lists__table">
                      {openMessages && (
                          <Messages
                              groups={groups}
                              setOpenMessages={setOpenMessages}
                              setOpenPersons={setOpenPersons}
                              setOpenCreateButton={setOpenCreateButton}
                          />
                      )}
                      {openCreate && (
                          <CreateGroup
                              groups={groups}
                              setOpenCreate={setOpenCreate}
                              setOpenCreateButton={setOpenCreateButton}
                          />
                      )}
                      {openPersons && (
                          <Users
                              groups={groups}
                              setOpenPersons={setOpenPersons}
                              setOpenMessages={setOpenMessages}
                              setOpenCreateButton={setOpenCreateButton}
                          />
                      )}
                      {openModify && (
                          <ModifyGroup
                              groups={groups}
                              setOpenCreateButton={setOpenCreateButton}
                              setOpenModify={setOpenModify}
                          />
                      )}
                      {openCreateButton && (
                          <button
                              className="groups__create"
                              onClick={() => {
                                  setOpenCreateButton(false);
                                  setOpenMessages(false);
                                  setOpenPersons(false);
                                  setOpenModify(false);
                                  setOpenCreate(true);
                              }}
                          >
                              <span>Créer un groupe</span>
                          </button>
                      )}
                  </div>
              </div>
          </div>
      </div>
  );
};

Groups.propTypes = {
    company: PropTypes.object.isRequired,
    groupId: PropTypes.number,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      group: PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          type: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          end_time: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
};

Groups.defaultProps = {
    groups: [],
    groupId: 0,
};

export default Groups;
