import React, { FormEvent } from 'react';
import './ProfileForm.scss';
import { User, UserForm } from '../../interfaces';
import FirstNameInput from './first-name-input/FirstNameInput';
import LastNameInput from './last-name-input/LastNameInput';
import CountryInput from './country-input/CountryInput';
import ZipInput from './zip-input/ZipInput';
import BirthdayInput from './birthday-input/BirthdayInput';
import SexSwitch from './sex-switch/SexSwitch';
import AgreeCheck from './agree-check/AgreeCheck';

type FormProps = {
  addUserHandler: (arg0: User) => void;
};

const ProfileForm: React.FC<FormProps> = ({ addUserHandler }: FormProps) => {
  function submitUser(event: FormEvent) {
    const form = event.target as HTMLFormElement;
    event.preventDefault();

    if (form.checkValidity()) {
      const { firstName, lastName, country, zip, birthday, sex } =
        form as UserForm;
      const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        country: country.value,
        zip: zip.value,
        birthday: birthday.value,
        sex: sex.value === 'true' ? 'female' : 'male',
      };
      form.reset();
      form.classList.remove('was-validated');
      addUserHandler(user);
      return;
    }

    form.classList.add('was-validated');
  }

  return (
    <div className="ProfileForm row">
      <form
        className="row bg-white p-2 g-3 needs-validation"
        noValidate
        onSubmit={submitUser}
      >
        <FirstNameInput />
        <LastNameInput />
        <CountryInput />
        <ZipInput />
        <BirthdayInput />
        <SexSwitch />
        <AgreeCheck />
        <div className="col-12">
          <button className="btn btn-dark" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
