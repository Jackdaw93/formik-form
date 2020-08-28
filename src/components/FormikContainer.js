import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' },
    ];
    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' },
    ];
    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' },
    ];
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null,
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required Email'),
        description: Yup.string().required('Required Description'),
        selectOption: Yup.string().required('Required Options'),
        radioOption: Yup.string().required('Required Radio'),
        checkboxOption: Yup.array().required('Required Checkbox'),
        birthDate: Yup.date().required('Required Date').nullable(),
    });
    const onSubmit = (values) => {
        console.log('Form data', values);
        console.log('Saved data', JSON.parse(JSON.stringify(values)));
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form>
                    <FormikControl
                        control="input"
                        type="email"
                        label="Email"
                        name="email"
                    />
                    <FormikControl
                        control="textarea"
                        label="Description"
                        name="description"
                    />
                    <FormikControl
                        control="select"
                        label="Select a topic"
                        name="selectOption"
                        options={dropdownOptions}
                    />
                    <FormikControl
                        control="radio"
                        label="Radio Topic"
                        name="radioOption"
                        options={radioOptions}
                    />
                    <FormikControl
                        control="checkbox"
                        label="CheckboxOption"
                        name="checkboxOption"
                        options={checkboxOptions}
                    />
                    <FormikControl
                        control="date"
                        label="Pick a date"
                        name="birthDate"
                    />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}

export default FormikContainer;
