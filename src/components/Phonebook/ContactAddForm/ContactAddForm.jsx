import PropTypes from 'prop-types';
import { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  PhonebookInput,
  InputWrapper,
  AddContactBtn,
  Form,
} from './ContactAddForm.styled';

export class ContactAddForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            number: Yup.string()
              .min(6, 'Must be atleat 6 nubmers')
              .max(11, 'Must be 11 nubmers or less')
              .required('Required'),
          })}
          onSubmit={(values, { resetForm }) => {
            this.props.onSubmit(values);
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <Form onSubmit={handleSubmit}>
              <InputWrapper>
                <PhonebookInput
                  name="name"
                  id="name"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
                <label htmlFor="name">Name</label>
              </InputWrapper>
              <InputWrapper>
                <PhonebookInput
                  name="number"
                  id="number"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.number && touched.number && errors.number}
                <label htmlFor="number">Number</label>
              </InputWrapper>

              <AddContactBtn type="submit" disabled={!(isValid && dirty)}>
                Add Contact
              </AddContactBtn>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

ContactAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};