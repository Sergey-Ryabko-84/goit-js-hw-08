import throttle from 'lodash.throttle';

const save = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
};
  
const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
};

const LOCAL_STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector('.feedback-form');

function updateForm () {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
        formEl.email.value = load(LOCAL_STORAGE_KEY).email;
        formEl.message.value = load(LOCAL_STORAGE_KEY).message;
        return;
    }
    formEl.email.value = '';
    formEl.message.value = '';
}

function onInptForm () {
    save(LOCAL_STORAGE_KEY, {email: formEl.email.value, message: formEl.message.value});
}

function onSubmitForm (e) {
    e.preventDefault();
    console.log(load(LOCAL_STORAGE_KEY));
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    formEl.email.value = '';
    formEl.message.value = '';
}

updateForm();
formEl.addEventListener('input', throttle(onInptForm, [wait=500]));
formEl.addEventListener('submit', onSubmitForm);