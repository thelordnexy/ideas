import handleCreateIdea from './__handleCreateIdea.js';
import addDataToDom from './__addDataToDom.js';
import handleDataRetrieval from './__handleDataRetrieval.js';
import handleHostAddress from './__handleHostAddress.js';
import handleModal from './__handleModal.js';
import handleSubmitForm from './__handleSubmitForm.js';

const createIdeaSection = document.getElementById('createIdeaSection');
const createIdeaForm = document.getElementById('createIdeaForm');
const createIdeaButton = document.getElementById('createIdeaButton');
const canceled = document.getElementById('Cancel');

const rootElement = document.getElementById('content-home');

// get host address, send request to get all ideas data and display them
handleHostAddress(handleDataRetrieval, null, addDataToDom, null, rootElement);
//handle modal for new idea form
handleModal(createIdeaButton, canceled, createIdeaSection);
//handle idea creation
handleCreateIdea(createIdeaForm, handleSubmitForm, handleHostAddress);
