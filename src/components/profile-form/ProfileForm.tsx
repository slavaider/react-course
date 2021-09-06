import React, { FormEvent } from 'react';
import './ProfileForm.scss';
import { User, UserForm } from '../../interfaces';
import CountryInput from './country-input/CountryInput';
import ZipInput from './zip-input/ZipInput';
import BirthdayInput from './birthday-input/BirthdayInput';
import AgreeCheck from './agree-check/AgreeCheck';
import MyInput from '../MyInput';
import MySwitch from '../MySwitch';

type FormProps = {
  addUser: (arg0: User) => void;
};

const ProfileForm: React.FC<FormProps> = ({ addUser }: FormProps) => {
  const onFormSubmit = (event: FormEvent) => {
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
        sex: sex.value,
      };
      form.reset();
      form.classList.remove('was-validated');
      addUser(user);
      return;
    }

    form.classList.add('was-validated');
  };

  return (
    <div className="ProfileForm row">
      <form
        className="row bg-white p-2 g-3 needs-validation"
        noValidate
        onSubmit={onFormSubmit}
      >
        <MyInput
          type="text"
          label={'First name'}
          id="firstName"
          name="firstName"
        />
        <MyInput
          type="text"
          label={'Last name'}
          id="lastName"
          name="lastName"
        />
        <CountryInput />
        <ZipInput />
        <BirthdayInput />
        <MySwitch
          name="sex"
          id="switch"
          trueText={'Female'}
          falseText={'Male'}
        />
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
